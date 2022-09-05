export default function Uvi(props:{data?:number}){

  let pop = props.data
    return(<>
     <div className="flex flex-row justify-start">
        <div className="flex flex-col w-32">
          <div className="text-base">UVI: {pop}</div>
        </div>
      </div>
    </>)
}