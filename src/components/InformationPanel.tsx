import CityPicker from "./CityPicker";

import { WeatherData } from "../utils/typings";
import { BiMoon, BiSun } from "react-icons/bi";


type InformationPanelProps = {
  data: WeatherData;
};

const InformationPanel = ({ data }: InformationPanelProps) => {
  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const unixTimestampToDate = (
    timestamp: number | undefined | null
  ): Date | null => {
    if (timestamp === undefined || timestamp === null) {
      console.error("Invalid timestamp input:", timestamp);
      return null;
    }

    const date = new Date(timestamp * 1000);
    return date;
  };

  const sunriseDate = unixTimestampToDate(data.sys.sunrise ?? 0);
  const sunsetDate = unixTimestampToDate(data.sys.sunset ?? 0);

  return (
    <div className="bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{data.name}</h1>
        <p className="text-xs text-gray-400">
          Long/Lat: {data.coord.lon}, {data.coord.lat}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div className="mt-5 flex items-center justify-between space-x-10">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="flex items-center justify-between">
        <div className="">
          <img
            src={`/icons/${data.weather[0].icon}.png`}
            alt={data.weather[0].description}
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">{`${data.main.temp.toFixed(
              1
            )}°C`}</p>
            <p className="text-right font-extralight text-lg">
              {capitalizeFirstLetter(data.weather[0].description)}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
          <BiSun className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p className="uppercase text-2xl">
              {sunriseDate &&
                sunriseDate.toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                })}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
          <BiMoon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunset</p>
            <p className="uppercase text-2xl">
              {sunsetDate &&
                sunsetDate.toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
