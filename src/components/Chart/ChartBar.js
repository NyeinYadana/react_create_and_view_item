import "./ChartBar.css";
const ChartBar = (props) => {
    let barFillHeight = "0%";
    if (props.maxvalue > 0){
        barFillHeight = Math.round((barFillHeight/maxvalue)*100)+"%";
    }
    return(
        <div className="chart-bar">
            <div className="chart-bar-inner">
                <div className="chart-bar-fill"
                style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar-label">{props.label}</div>
        </div>
    )
}
export default ChartBar;