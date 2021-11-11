import ExpenseItem  from './ExpenseItem';
import "./Expense.css";
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
const  Expense = (props) => {
    const [filterYear,setFilterYear] = useState('2021');    
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);        
    }
    const filterExpenses = props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString() === filterYear
    });
    
    return (
        <div>
            <ExpenseFilter selected = {filterYear} onChangeFilter = {filterChangeHandler}/>
            {filterExpenses.length===0 && <ExpenseList items={filterExpenses} />}
            {filterExpenses.length>0 && <ExpenseList items={filterExpenses} /> }        
        </div>
    );
}
export default Expense;