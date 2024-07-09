import { getRandomNumber } from "./getRandomNumber";

describe("getRandomNumber", () => {
  it("should return a number between 0 and the provided max value", () => {
    const max = 10;
    const result = getRandomNumber(max);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(max);
  });

  it("should return an integer", () => {
    const max = 10;
    const result = getRandomNumber(max);

    expect(Number.isInteger(result)).toBe(true);
  });

  it("should produce different values on multiple calls", () => {
    const max = 10;
    const results = new Set();

    for (let i = 0; i < 100; i++) {
      results.add(getRandomNumber(max));
    }

    expect(results.size).toBeGreaterThan(1);
  });
});
