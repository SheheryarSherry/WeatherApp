import { ReactComponent as _01d } from "../img/clearDay.svg";
import { ReactComponent as _01n } from "../img/clearNight.svg";
import { ReactComponent as _02d } from "../img/cloudyDay.svg";
import { ReactComponent as _02n } from "../img/cloudyNight.svg";
import { ReactComponent as _03d } from "../img/clouds.svg";
import { ReactComponent as _03n } from "../img/clouds.svg";
import { ReactComponent as _04d } from "../img/clouds.svg";
import { ReactComponent as _04n } from "../img/clouds.svg";
import { ReactComponent as _09d } from "../img/showerRain.svg";
import { ReactComponent as _09n } from "../img/showerRain.svg";
import { ReactComponent as _10d } from "../img/rainDay.svg";
import { ReactComponent as _10n } from "../img/rainNight.svg";
import { ReactComponent as _11d } from "../img/thunderStorm.svg";
import { ReactComponent as _11n } from "../img/thunderStorm.svg";
import { ReactComponent as _13d } from "../img/snow.svg";
import { ReactComponent as _13n } from "../img/snow.svg";
import { ReactComponent as _50d } from "../img/mist.svg";
import { ReactComponent as _50n } from "../img/mist.svg";


const iconTypes = {
  "01d": _01d,
  "01n": _01n,
  "02d": _02d,
  "02n": _02n,
  "03d": _03d,
  "03n": _03n,
  "04d": _04d,
  "04n": _04n,
  "09d": _09d,
  "09n": _09n,
  "10d": _10d,
  "10n": _10n,
  "11d": _11d,
  "11n": _11n,
  "13d": _13d,
  "13n": _13n,
  "50d": _50d,
  "50n": _50n,
};

const IconComponent = ({ width, height, name, ...props }) => {
  let Icon = iconTypes[name];
console.log("ICON IS",name)
  return <Icon style={{width:width, height:height}} {...props} />;
};

export default IconComponent;