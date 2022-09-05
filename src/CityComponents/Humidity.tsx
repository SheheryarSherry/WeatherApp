export default function Humidity(props:{data?:number}){
    return(<>
    
    <div className="flex flex-row justify-start">
        <div className="flex flex-col w-32">
          <div className="text-base">Humidity: {props.data}%</div>
        </div>
      </div>
    
    </>)
}