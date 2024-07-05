import "./Forecast.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";
import { ForecastData } from "../../utils/typings";
import { getForecastDays } from "../../utils/helper-functions/getForecastDays";

type ForecastProps = {
  forecast: ForecastData;
};

const Forecast = ({ forecast }: ForecastProps) => {
  const forecastDays = getForecastDays();

  return (
    <div>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {forecast.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily_item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weatther"
                    className="icon_small"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {`${Math.round(item.main.temp_min)}°C / ${Math.round(item.main.temp_max)}°C`}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details_grid">
                <div className="daily-details_grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details_grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="daily-details_grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className="daily-details_grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details_grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="daily-details_grid-item">
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
        <AccordionItem></AccordionItem>
      </Accordion>
    </div>
  );
};

export default Forecast;
