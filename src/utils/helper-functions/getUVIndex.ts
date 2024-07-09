import { WeatherData } from "../typings";

export const getUVIndex = (weather: WeatherData): number => {
  const baseUVIndexSummer = 9;
  const baseUVIndexSpringFall = 6;
  const baseUVIndexWinter = 2;
  let baseUVIndex = 0;

  const date = new Date(weather.dt * 1000);
  const month = date.getMonth();
  const hour = date.getHours();
  
  // Determine the season
  if (month >= 5 && month <= 8) {
      baseUVIndex = baseUVIndexSummer;  // June to September
  } else if (month >= 2 && month <= 4 || month === 9) {
      baseUVIndex = baseUVIndexSpringFall;  // March to May and October
  } else {
      baseUVIndex = baseUVIndexWinter;  // November to February
  }
  
  // Adjust for time of day
  if (hour < 10 || hour > 14) {
      baseUVIndex *= 0.5;  // Early morning or late afternoon
  }
  
  // Adjust for sky conditions
  const skyCondition = weather.weather[0].main.toLowerCase();
  if (skyCondition === 'clear') {
      // No adjustment needed for clear sky
  } else if (skyCondition === 'clouds' && weather.clouds.all < 50) {
      baseUVIndex *= 0.8;  // Partly cloudy
  } else if (skyCondition === 'clouds' && weather.clouds.all >= 50) {
      baseUVIndex *= 0.5;  // Mostly cloudy
  } else {
      baseUVIndex *= 0.3;  // Overcast
  }
  
  return baseUVIndex;
}
