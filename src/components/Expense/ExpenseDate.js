import "./ExpenseDate.css";
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US",{month: "long"});
    const day = props.date.toLocaleString("en-US",{day: "2-digit"});
    const year = props.date.getFullYear();
    return(
        
        <div className="date-wrap">
            <span className="month">{month}</span>
            <span>{day}</span>
            <span className="year">{year}</span>
        </div>  
       
    )
}
export default ExpenseDate;