import React, { useState } from "react";
import "./GoalForm.css";

const GoalForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTime, setEnteredTime] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const GoalData = {
      title: enteredTitle,
      time: enteredTime,
    };
    props.onSaveGoalData(GoalData);
    setEnteredTitle("");
    setEnteredTime("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-goal__controls">
        <div className="new-goal__title">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-goal__control">
          <label>Amount of Time</label>
          <input
            type="text"
            value={enteredTime}
            onChange={timeChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-goal__actions">
        <button type="submit">Add Goal</button>
      </div>
    </form>
  );
};

export default GoalForm;
