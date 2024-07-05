export type CityOption = {
  value: string;
  label: string;
};

export type City = {
  latitude: string;
  longitude: string;
  name: string;
  countryCode: string;
};

type Coord = {
  lon: number;
  lat: number;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust?: number;
};

type Clouds = {
  all: number;
};

type Sys = {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
};

//====================CURRENT WEATHER DATA TYPES====================

export type WeatherData = {
  city: string;
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

//====================FORECAST DATA TYPES====================

type ForecastCity = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type ForecastItem = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
};

export type ForecastData = {
  city: ForecastCity;
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
};
