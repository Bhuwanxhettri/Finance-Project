import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
function NewExpenses(props) {
  const [isEditing,setIsEditing] = useState(false);
  // communicting with child (ExpenseForm) to parent component this file is parent(NewExpenses) component ❤😊💕
  const saveExpensesDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // communicting child component to parent component ❤😊💕
    props.onAddExpense(expenseData);

    setIsEditing(false);

  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <>
      <h1>Add your Expenses</h1>
      <div className="new-expense">

        {!isEditing && (<button onClick={startEditingHandler}>Add New Expenses</button>)}

        {isEditing && ( <ExpenseForm onSaveExpenseData={saveExpensesDataHandler} onCancel={stopEditingHandler} />)}

               
      </div>
    </>
  );
}

export default NewExpenses;
