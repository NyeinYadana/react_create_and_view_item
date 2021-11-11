//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {  
  const DUMMY_EXPENSES = [
    {title: "Facial Foam",amount: "$10", quantity: "1", date: new Date(2021,9,28) },
    {title: "Pizza",amount: "$5", quantity: "1", date: new Date(2020,10,2) },
    {title: "Cola",amount: "$0.25", quantity: "1", date: new Date(2022,10,2) },
    {title: "Fried Chicken",amount: "$7.5", quantity: "1", date: new Date(2023,10,3) },
    {title: "Mala Xing Gou",amount: "$5", quantity: "1", date: new Date(2019,10,4) },
  ]
  const [expense,subExpense]=useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("You are in App.js ");
    console.log(expense);
    subExpense((preventExpense)=>{
      return [expense,...preventExpense];
    })
  };
  return (
    <div className="container">
      <NewExpense onAddExpense = {addExpenseHandler} />      
      <Expense expenses={expense} />
    </div>
  );
}

export default App;
