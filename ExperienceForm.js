import React, { useState } from "react";
import "./ExperienceForm.css";

const ExperienceForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const experienceData = {
      title: enteredTitle,
      time: enteredTime,
      date: new Date(enteredDate),
    };
    props.onSaveExperienceData(experienceData);
    setEnteredTitle("");
    setEnteredTime("");
    setEnteredDate("");
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-experience__controls">
        <div className="new-experience__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-experience__control">
          <label>Amount of Time</label>
          <input
            type="text"
            value={enteredTime}
            onChange={timeChangeHandler}
            required
          />
        </div>
        <div className="new-experience__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-experience__actions">
        <button type="submit">Add Experience</button>
      </div>
    </form>
  );
};

export default ExperienceForm;
