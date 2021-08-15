import React from "react";
import Card from "../UI/Card";
import PostItem from "./PostItem";
import "./RenderedPosts.css";

const RenderedPosts = (props) => {
  return (
    <Card className="posts">
      <PostItem
        title={props.items[0].title}
        time={props.items[0].time}
        description ={props.items[0].description}
        photo={props.items[0].photo}
      />
      <PostItem
        title={props.items[1].title}
        time={props.items[1].time}
        description ={props.items[1].description}
        photo={props.items[1].photo}
      />
      <PostItem
        title={props.items[2].title}
        time={props.items[2].time}
        description ={props.items[2].description}
        photo={props.items[2].photo}
      />
      <PostItem
        title={props.items[3].title}
        time={props.items[3].time}
        description ={props.items[3].description}
        photo={props.items[3].photo}
      />
    </Card>
  );
};

export default RenderedPosts;
