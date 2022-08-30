import React,{useState}from "react";
import './SavingForm.css'

export default function SavingForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
  
  
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
      // event.target.value  is defult way to retrive value from form ❤😊💕
    };
  
    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
    };
  
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };
  
    const submitHandler = (event) => {
      // Clicking on a "Submit" button, prevent it from submitting a form ❤😊💕
      event.preventDefault();
  
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
  
    // communicting with child to parent component this file is parent component ❤😊💕
    //   props.onSaveSavingData(expenseData); 
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-Saving__controls">
          <div className="new-Saving__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle} // tow way binding ❤😊💕
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-Saving__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-Saving__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-Saving__actions">
          <button type="submit">Add Saving</button>
        </div>
      </form>
    </>
  );
}
