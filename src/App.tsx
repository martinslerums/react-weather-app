import "./App.css";

import { useState } from "react";

import { WEATHER_API_URL, WEATHER_API_KEY } from "./utils/api";
import { CityOption, ForecastData, WeatherData } from "./utils/typings";

import Search from "./components/search/Search";
import Forecast from "./components/forecast/Forecast";
import CurrentWeather from "./components/current-weather/Current-weather";

function App() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastData | null>(null);

  const handleOnSearchChange = (searchData: CityOption) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather currentWeatherData={currentWeather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
