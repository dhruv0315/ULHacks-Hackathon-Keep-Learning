import React, { useState } from 'react';

import MainNav from "../components/layout/MainNav";
import './BeInspired.css';
import cookies from "./cookies.jpeg"
import code from "./code.jfif"
import language from "./language.jpeg"
import kickflip from "./skateboard.jpg"
import NewPost from "../components/User Input (Be Inspired)/NewPost";
import RenderedPosts from '../components/Be Inspired/RenderedPosts';

const BeInspired = () => {
  const dummy_posts = [
    {
      id: "e1",
      photo: <img src={cookies}></img>,
      description: "I just learned how to bake cookies!",
      title: "@bethany462",
      time: "10 mins",
    },
    {
      id: "e2",
      photo: <img src={code}></img>,
      description: "I just learned how to code!",
      title: "@jameswalker10",
      time: "12 mins",
    },
    {
      id: "e3",
      photo: <img src={language}></img>,
      description: "I just learned a new language! <3",
      title: "@fredchews",
      time: "17 mins",
    },
    {
      id: "e4",
      photo: <img src={kickflip}></img>,
      description: "I just learned how to kickflip!",
      title: "@anish1234",
      time: "17 mins",
    },
];

const [posts, setPosts] = useState(dummy_posts);

const addPostHandler = (posts) => {
    setPosts((prevPosts) => {
        return [posts, ...prevPosts];
    });
};

  return  (
  <div className="inspired-container">
    <MainNav />
    <NewPost onAddPost={addPostHandler} />
    <RenderedPosts items={posts}/>
    Be Inspired
    </div>
  )
}


export default BeInspired;
