import { WeatherData } from "../../utils/typings";
import "./Current-weather.css";

type CurrentWeatherProps = {
  currentWeatherData: WeatherData;
}

const CurrentWeather = ({currentWeatherData}: CurrentWeatherProps) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{currentWeatherData.city}</p>
          <p className="weather_description">{currentWeatherData.weather[0].description}</p>
        </div>
        <img src={`icons/${currentWeatherData.weather[0].icon}.png`} alt="weather" className="weather_icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{`${Math.round(currentWeatherData.main.temp)}°C`}</p>
        <div className="details">
          <div className="parameter_row">
            <span className="parameter_label">Details</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Feels like</span>
            <span className="parameter_value">{`${Math.round(currentWeatherData.main.feels_like)}°C`}</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Wind</span>
            <span className="parameter_value">{`${currentWeatherData.wind.speed} m/s`}</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Humidity</span>
            <span className="parameter_value">{`${currentWeatherData.main.humidity} %`}</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Pressure</span>
            <span className="parameter_value">{`${currentWeatherData.main.pressure} hPa`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
