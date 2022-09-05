export default function FeelsLike(props: { data?: number }) {
  return (
    <>
      <div className="flex flex-row justify-start">
        <div className="flex flex-col w-32">
          <div className="text-xl">
            {props.data ? (props.data - 273.15).toFixed(1)+"°" : ""}
          </div>
        </div>
      </div>
    </>
  );
}
