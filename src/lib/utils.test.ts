import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("Utility Functions QA", () => {
  it("should merge tailwind class names correctly", () => {
    const result = cn("px-2 py-2", "px-4", { "bg-red-500": true });
    expect(result).toBe("py-2 px-4 bg-red-500");
  });
});
