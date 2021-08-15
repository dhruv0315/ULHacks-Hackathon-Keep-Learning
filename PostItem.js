import React, { useState } from "react";
import "./PostItem.css";
import Card from "../UI/Card";

const PostItem = (props) => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();

  const [image, setImage] = useState("");
  const imageRef = React.useRef(null);

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  return (
    <Card className="post-item">
      <div
        onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);
        }}
        className="picture"
      >
        {props.photo}
        {result && <img ref={imageRef} src={result} alt="" />}
      </div>
      <div className="description-box">
        <div className="post-item__description">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="post-item__title">
        <h2>{props.title}</h2>
      </div>
      <div className="post-item__item">{time}</div>
    </Card>
  );
};

export default PostItem;
