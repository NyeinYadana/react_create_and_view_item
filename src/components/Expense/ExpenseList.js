import { useState } from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
    if (props.items.length===0){
        return (
            <h2 className="expense-list-fallback">Not Match Item!</h2>
        );
    }
    return (
        <ul className="expense-list">
        {props.items.map((expense) => {
            return(
                <ExpenseItem 
                key= {expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                quantity={expense.quantity} 
                date={expense.date} />
            ); 
        })}
    </ul>
    );
}
export default ExpenseList;