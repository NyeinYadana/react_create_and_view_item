import React, {useState} from 'react';
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [enterTitle,setEnterTitle] = useState("");
    const titleChangeHandler = (event) => {        
        setEnterTitle(event.target.value);
        //setUserInput({...userInput,title: event.target.value});
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }
        // });
    }
    const [enterAmount,subEnterAmount] = useState("");
    const amountChangeHandler = (event) => {        
        subEnterAmount(event.target.value);
        // setUserInput({...userInput,amount: event.target.value});
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }
        // });
    }
    const [enterDate,subEnterDate] = useState("");
    const dateChangeHandler = (event) => {        
        subEnterDate(event.target.value);
        // setUserInput({...userInput,date: event.target.value});
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }
        // });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const inputData = {title: enterTitle, amount: enterAmount, date: new Date(enterDate)};
        props.onSaveExpenseData(inputData);
        console.log(inputData);
        setEnterTitle("");
        subEnterAmount("");
        subEnterDate("");        
    };
    return(        
        <form onSubmit={submitHandler}> 
            <div className="row">           
                <div className="expense-input-group">
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className="expense-input-group">
                    <label>Amount</label>
                    <input type="number" value={enterAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="row">    
                <div className="expense-input-group">
                    <label>Date</label>
                    <input value={enterDate} type="date" min="2019-1-1" max="2022-12-1" onChange={dateChangeHandler} />
                </div>
                <div className="expense-input-group">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;