import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//import { useState } from "react";
const ExpenseItem = (props) => {   
    // const [title,subtitle] = useState(props.title);
    // const clickResult = () => {
    //     subtitle("You Change Title !");
    // }
    return (        
        <div className="expense-item">                
            <Card className="expense-item-description">
                <ExpenseDate date={props.date} />
                <h2>{props.title}</h2>
                <div className="expense-item-price">{props.amount}</div>                
            </Card>
        </div>       
    );
}
export default ExpenseItem