import { IWeekly } from "../Services/APIinterface";
import WeatherIcon from "../CityComponents/WeatherIcon";
export default function WeeklyForecastItem(props: {
  data: IWeekly;
  weekday: string;
  i: number;
}) {
  let date: Date = new Date();
  date.setDate(date.getDate() + props.i);
  return (
    <>
      <div
        className="flex md:flex-col flex-row justify-center items-center gap-1 w-full px-10"
      >
        <div className=" flex flex-col justify-center md:items-center md:item-start  w-1/2 text-left">
          <div className="text-base" >{props.weekday}</div>
        </div>

        <div className="flex justify-center items-center md:-my-1 w-20 h-20">
          <WeatherIcon data={props.data?.weather[0].icon} />
        </div>
        <div className="w-1/4">
          <div className="flex justify-center mb-0 text-[#FF0000] items-center md:text-xs ">
            {props.data ? (props.data?.temp.min - 273.15).toFixed(1) : ""}°C
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex justify-center text-[#00FFFF] items-center md:text-xs ">
            {props.data ? (props.data?.temp.day - 273.15).toFixed(1) : ""}°C
          </div>
        </div>
      </div>
    </>
  );
}
