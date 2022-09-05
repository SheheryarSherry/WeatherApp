import { useState } from "react";
import { GetData, GetGeolocation } from "../Services/Services";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import CityData from "../CityComponents/CityData";
import WeeklyForecast from "../WeeklyForecastComponents/WeeklyForecast";
import Spinner from "../Services/Spinner";

export default function Main() {
  const [data, setWeatherData] = useState<OpenWeatherMapAPIdata>();
  const [search, setSearch] = useState<string | undefined>("barcelona");
  const [geolocate] = useState<boolean>(false);

    GetData(search, setWeatherData);
    GetGeolocation(setSearch, geolocate);
  return (
    <>
    <div className="grid justify-items-center max-h-max">
      <div className="flex flex-col h-900 rounded-[20px] bg-cover mt-10 p-4 text-white select-none fadeInAnimation bg-gradient-to-t bg-gradient-to-b from-[#0668C2] to-[#1C0168] max-w-[900]" >
        {!data && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fadeInAnimation">
            <Spinner />
          </div>
        )}
        {data && (
          <>
            <div >
              <CityData data={data} />
              <div className="flex justify-center items-center">
              </div>
              <div className="pb-5">
                <WeeklyForecast data={data} />
              </div>
            </div>
          </>
        )}
      </div>
      </div>
    </>
  );
}
