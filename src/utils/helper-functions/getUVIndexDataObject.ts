import { WeatherData, UVIndexData } from "../typings";


export const UVIndexObject = (currentWeatherData: WeatherData): UVIndexData => {
  return {
    timestamp: new Date(currentWeatherData.dt * 1000),
    weather_description: currentWeatherData.weather[0].description,
    cloud_intensity: currentWeatherData.clouds.all,
    latitude: currentWeatherData.coord.lat,
  };
};
