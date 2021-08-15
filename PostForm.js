import React, { useState } from "react";
import "./PostForm.css";

const PostForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setenteredDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setenteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      title: enteredTitle,
      description: enteredDescription,
    };
    props.onSavePostData(postData);
    setEnteredTitle("");
    setenteredDescription("");
  };
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();



  return (
    <form onSubmit={submitHandler}>
      <div className="new-post__controls">
        <div className="new-post__control">
          <label>Username</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-post__control__description">
          <label>Description</label>
          <textarea
            name="message"
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
            required
          />
        </div>
        <div className="new-post__control__description">
          <label>Upload a Photo</label>
          <input
            type="file"
          />
          
        </div>
      </div>
      <div className="new-post__actions">
        <button type="submit" onClick={time}>
          Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
