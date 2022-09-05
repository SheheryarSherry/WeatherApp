import { OpenWeatherMapAPIdata } from "../Services/APIinterface";
import WeeklyForecastItem from "./WeeklyForecastItem";
import { DAYS } from "../Services/Services";

export default function WeeklyForecast(props: {
  data?: OpenWeatherMapAPIdata;
}) {

  let weekday: number = new Date().getDay();
  let result = props.data?.weather.daily.map((data, i) => {
    if (weekday > 6) {
      weekday = 0;
    }
    weekday++;
    if (i >= 0 && i < 5) {
      return (
        <WeeklyForecastItem data={data} key={i} weekday={i === 0 ? "Today" : DAYS[weekday - 1]} i={i} />
      );
    } else {
      weekday--
    }
  });
  return (
    <>
      <div
        className={
          " flex flex-col justify-evenly md:flex-row md:px-5 slideInAnimation"
        }
      >
        {result}
      </div>
    </>
  );
}
