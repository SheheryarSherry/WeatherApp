import { getDirection } from "../Services/Services";
export default function WindSpeed(props: { data?: any }) {
  return (
    <>
      {" "}
      <div className="flex flex-row justify-start">
        <div className="flex flex-col w-50">
          <div className="text-base">Wind: {`${getDirection(props.data.wind_deg)} ${props.data.wind_speed}`}kmh</div>
        </div>
      </div>
    </>
  );
}
