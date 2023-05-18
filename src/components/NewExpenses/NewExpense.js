import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [state, setState] = useState(0);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const stateHandler = () => {
    if (state === 0) {
      setState(1);
    } else {
      setState(0);
    }
  };

  return (
    <div className="new-expense">
      {state === 0 ? (
        <button onClick={stateHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onState={stateHandler} onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
}

export default NewExpense;
