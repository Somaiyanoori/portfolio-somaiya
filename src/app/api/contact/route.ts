import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "RESEND_API_KEY is missing on server." },
        { status: 500 }
      );
    }

    if (!toEmail) {
      return NextResponse.json(
        { success: false, message: "CONTACT_EMAIL is missing on server." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: data.email,
      subject: `New portfolio message from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    // Resend may return an error object instead of throwing
    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        {
          success: false,
          message: result.error.message || "Resend failed to send email.",
          details: result.error,
        },
        { status: 500 }
      );
    }

    console.log("Resend success:", result.data);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        id: result.data?.id,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to send message. Please try again.",
      },
      { status: 500 }
    );
  }
}
