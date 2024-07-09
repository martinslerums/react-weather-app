import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { WEATHER_API_URL, WEATHER_API_KEY } from "../utils/api";
import { WeatherData, ForecastData, City } from "../utils/typings";

import InformationPanel from "../components/InformationPanel";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/forecast/Forecast";

const Location = () => {
  const { name, latitude, longitude } = useParams<City>();

  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!latitude || !longitude) {
        setError("Invalid search data");
        return;
      }

      setLoading(true);

      try {
        const currentWeatherResponse = await fetch(
          `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastResponse = await fetch(
          `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );

        if (!currentWeatherResponse.ok || !forecastResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const currentWeatherData: WeatherData =
          await currentWeatherResponse.json();
        const forecastData: ForecastData = await forecastResponse.json();

        setCurrentWeather({
          ...currentWeatherData,
          city: name ?? "Unknown city",
        });
        setForecast({ ...forecastData });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude, name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {currentWeather && <InformationPanel data={currentWeather} />}

      <div className="flex-1 p-5 lg:p-10">
        {currentWeather && (
          <CurrentWeather currentWeatherData={currentWeather} />
        )}
        {forecast && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
};

export default Location;
