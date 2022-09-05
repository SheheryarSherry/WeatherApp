import { Dispatch, SetStateAction, useEffect } from "react";

const openweathermapAPIKEY: string = "2470d479f938a6a7e08e53111fb6d3b9";

export async function GetGeolocation(setSearch: Dispatch<SetStateAction<any>>, geolocate: boolean) {
  useEffect(() => {
    async function geolocation() {
      try {
        const promise: any = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        let lat: string = promise.coords.latitude;
        let lon: string = promise.coords.longitude;
        const data = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${openweathermapAPIKEY}`,
          { mode: "cors" }
        );
        const geoData = await data.json();
        setSearch(geoData[0].name);
      } catch (error) {
        console.log(error, "ERROR: failed fetching geolocation API");
      }
    }
    geolocation();
  }, [geolocate]);
}

export async function GetData(
  inputValue: string | undefined,
  setWeatherData: Dispatch<SetStateAction<any>>
) {
  useEffect(() => {
    async function FetchData() {
      try {
        const response1 = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue ? inputValue : "london"}&limit=5&appid=${openweathermapAPIKEY}`,
          { mode: "cors" }
        );
        const geoData = await response1.json();
        const lat: number = geoData[0].lat;
        const lon: number = geoData[0].lon;

        const response2 = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=standard&exclude=minutely&appid=${openweathermapAPIKEY}`,
          { mode: "cors" }
        );
        const weatherData = await response2.json();
        setWeatherData({ geo: geoData, weather: weatherData });
      } catch (error) {
        console.log(error, "ERROR: failed fetching geolocation/onecall API");
      }
    }
    FetchData();
  }, [inputValue]);
}

export function Ordinal(calendarDay: number) {
  //gets a calendar day, then perform module 10 on it to get the last digit. switch case return right notation for the date
  const temp: number = calendarDay % 10
  switch (temp) {
    case 1:
      return <span className="text-[0.5rem]">st</span>
    case 2:
      return <span className="text-[0.5rem]">nd</span>
    case 3:
      return <span className="text-[0.5rem]">rd</span>
    default:
      return <span className="text-[0.5rem]">th</span>
  }
}
export function getDirection (windDeg: number){
  if (windDeg < 90 && windDeg > 0) {
    return "NE"
  } else if (windDeg === 90) {
    return "N"
  } else if (windDeg > 90 && windDeg < 180) {
    return "NW"
  } else if (windDeg === 180) {
    return "W"
  } else if (windDeg > 180 && windDeg < 270) {
    return "SW"
  } else if (windDeg === 270) {
    return "S"
  } else if (windDeg > 270 && windDeg < 360) {
    return "SE"
  } else if (windDeg === 360) {
    return "E"
  }
}

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
