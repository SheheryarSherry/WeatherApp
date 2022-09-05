import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import Uvi from "./UVI";
import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import WindSpeed from "./WindSpeed";
import IconComponent from "../SvgIcons/Icons";

export default function CityData(props: { data?: OpenWeatherMapAPIdata }) {
  console.log("Data from props", props.data?.weather.current)
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/2 md:w-1/4 duration-300">
          <div className="md:px-5 ">
            <IconComponent  width={150} height={150} name={props.data?.weather.current.weather[0].icon} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-2xl">
            {props.data?.geo[0].name}, {props.data?.geo[0].country}
          </div>
          <FeelsLike data={props.data?.weather.current.feels_like} />
          <Humidity data={props.data?.weather.current.humidity} />
          <Uvi data={props.data?.weather.current.uvi} />
          <WindSpeed data={props.data?.weather.current} />
        </div>
      </div>
    </>
  );
}
