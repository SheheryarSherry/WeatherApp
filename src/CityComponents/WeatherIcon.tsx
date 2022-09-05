import IconComponent from "../SvgIcons/Icons";
export default function WeatherIcon(props: { data?: string, }) {
  console.log('DATA FROM ICON', props.data)
  return (
    <>
      <div >
        <IconComponent width={50} height={50} name={props.data} />
      </div>
    </>
  );
}
