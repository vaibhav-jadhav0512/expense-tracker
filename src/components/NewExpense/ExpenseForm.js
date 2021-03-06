import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // const [enteredTitle, setTitle] = useState("");
  // const [enteredAmount, setAmount] = useState("");
  // const [enteredDate, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    setUserInput((prev) => {
      return { ...prev, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
    setUserInput((prev) => {
      return { ...prev, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
    setUserInput((prev) => {
      return { ...prev, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSave(userInput);
    setUserInput((prev) => {
      return { ...prev, enteredDate: "", enteredAmount: "", enteredTitle: "" };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
