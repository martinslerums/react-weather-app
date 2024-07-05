import { getForecastDays } from "./getForecastDays";

afterEach(() => {
  jest.useRealTimers();
});

describe("getForecastDays", () => {
  it("returns correct days starting from today", () => {
    expect(getForecastDays()).toEqual([
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ]);
  });

  it("returns correct days if fake timer used", () => {
    jest.useFakeTimers();
    const customTime = new Date("2024-07-01").getTime();
    jest.setSystemTime(customTime);

    expect(getForecastDays()).toEqual([
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
    ]);
  });
});
