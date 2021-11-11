import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="expense-filter-wrapper">
            <label>Filter By Year</label>
            <select value = {props.select} onChange={dropDownChangeHandler}>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2020</option>
                <option>2019</option>
            </select>
        </div>
    )
}
export default ExpenseFilter;