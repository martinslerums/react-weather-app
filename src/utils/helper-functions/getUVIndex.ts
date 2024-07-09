import { getHemisphere } from "./getHemisphere";
import { getSeason, Season } from "./getSeason";
import { getSkyCondition } from "./getSkyCondition";

import { UVIndexData } from "../typings";
interface BaseUVIndexObject {
  Summer: number;
  SpringOrFall: number;
  Winter: number;
}

const baseUVIndexObject: BaseUVIndexObject = {
  Summer: 9,
  SpringOrFall: 6,
  Winter: 2,
};

export const getUVIndex = (weather: UVIndexData): number => {
  let baseUVIndex = 0;

  const date = weather.timestamp;
  const month = date.getMonth();
  const hour = date.getHours();

  const hemisphere = getHemisphere(weather.latitude);
  const season = getSeason(month, hemisphere);

  switch (season) {
    case Season.Summer:
      baseUVIndex = baseUVIndexObject.Summer;
      break;
    case Season.Spring:
    case Season.Fall:
      baseUVIndex = baseUVIndexObject.SpringOrFall;
      break;
    case Season.Winter:
      baseUVIndex = baseUVIndexObject.Winter;
      break;
    default:
      throw new Error("Invalid season");
  }

  if (hour < 10 || hour > 14) {
    baseUVIndex *= 0.5;
  }

  const adjustedUVIndex = getSkyCondition(
    weather.weather_description,
    weather.cloud_intensity,
    baseUVIndex
  );

  return adjustedUVIndex;
};
