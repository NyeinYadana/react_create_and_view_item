import React from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    };
    return (
        <div>
            <Card className="expense-form-wrapper">
                <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
            </Card>
        </div>
    );
}
export default NewExpense;