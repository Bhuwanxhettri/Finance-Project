import React ,{ useState } from "react";
import NewExpenses from './NewExpenses/NewExpenses';
import Expenses from './Expenses/Expenses';

const Dummy_Data = [];

function Expenditure() {
    const [expenses, setExpenses] = useState(Dummy_Data);

    const addExpenseHandler = (expense) => {
      //  console.log(expense); // this is latest expenses ❤😊💕
      setExpenses((prevExpenses) => {
        //  console.log(prevExpenses) // this is previous expenses ❤😊💕
        return [expense, ...prevExpenses];
      });
    };
  return (
    <>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  )
}

export default Expenditure