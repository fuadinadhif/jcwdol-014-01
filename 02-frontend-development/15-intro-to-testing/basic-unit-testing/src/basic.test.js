import { describe, it, expect } from "vitest";
import { sumPlus10, max, factorial } from "./basic";

describe("sumPlus10", () => {
  it("should return the sum of a + b + 10 when a, b is integer", () => {
    // AAA Pattern
    // Arrange - set up the test
    const a = 5;
    const b = 10;

    // Act - execute the test
    const result = sumPlus10(a, b);

    // Assert - check the result
    expect(result).toBe(25);
  });

  it("should return NaN when any of the paramater is not provided", () => {
    expect(sumPlus10(1)).toBeNaN;
  });
});

describe("max", () => {
  it("should return the first argument if it is greater than the second", () => {
    expect(max(5, 3)).toBe(5);
  });

  it("should return the second argument when it is greater", () => {
    expect(max(3, 5)).toBe(5);
  });

  it("should return the first argument when both arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

// Buat test suite untuk suatu factorial function
describe("factorial", () => {
  it("should return 1 when the input is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 when the input is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("shoudl return 2 when the input is 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 24 when the input is 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if given negative number", () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
