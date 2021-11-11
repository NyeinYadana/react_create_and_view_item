import "./Chart.css";
import ChartBar  from "./ChartBar";
const Chart = (props) => {
    return (
        <div>
            { props.dataPoints.map((dataPoint)=>{
                <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxvalue={null}
                label={dataPoint.label} />
            })            
        }
        </div>
    )
}
export default Chart;