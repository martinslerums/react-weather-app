import StatCard from "./StatCard";
import CalloutCard from "./CalloutCard";

import { WeatherData } from "../utils/typings";
import { getUVIndex } from "../utils/helper-functions/getUVIndex";
import { getRandomNumber } from "../utils/helper-functions/getRandomNumber";
import { getWindDirection } from "../utils/helper-functions/getWindDirection";
import { UVIndexObject } from "../utils/helper-functions/getUVIndexDataObject";

type CurrentWeatherProps = {
  currentWeatherData: WeatherData;
};

const CurrentWeather = ({ currentWeatherData }: CurrentWeatherProps) => {
  const number = getRandomNumber(3);
  const windDirectionNamed = getWindDirection(currentWeatherData.wind.deg);

  const UVIndexData = UVIndexObject(currentWeatherData)
  const UV_Index = getUVIndex(UVIndexData);

  if (!currentWeatherData) {
    return <></>;
  }

  return (
    <div>
      <div>
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last updated at:{" "}
              {new Date().toLocaleString("en-US", { hour12: false })} UTC +
              {currentWeatherData.timezone / 3600}
            </p>
          </div>
          <div className="m-2 mb-10">
            <CalloutCard message="This is where GPT-4 Summary will go" />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Feels like"
              metric={`${currentWeatherData.main.feels_like.toFixed(1)} °C`}
              color="yellow"
            />
            <div className="flex space-x-3">
              <StatCard
                title="Maximum Temperature"
                metric={`${(currentWeatherData.main.temp_max + number).toFixed(
                  1
                )} °C`}
                color="red"
              />
              <StatCard
                title="Minimum Temperature"
                metric={`${(currentWeatherData.main.temp_min - number).toFixed(
                  1
                )} °C`}
                color="blue"
              />
            </div>

            <div>
              <StatCard
                title="UV Index"
                metric={UV_Index.toFixed(1)}
                color={Number(UV_Index.toFixed(1)) > 5 ? "rose" : "green"}
              />
              {Number(UV_Index.toFixed(1)) > 5 && (
                <CalloutCard
                  message="The UV is high today, be sure to use SPF!"
                  warning
                />
              )}
            </div>

            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${currentWeatherData.wind.speed.toFixed(1)}m/s`}
                color="cyan"
              />
              <StatCard
                title="Wind Direction"
                metric={`${windDirectionNamed} ${currentWeatherData.wind.deg}° `}
                color="violet"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        {/* Charts if API is upgraded */}
      </div>
    </div>
  );
};

export default CurrentWeather;
