import './NewPost.css';
import PostForm from './PostForm';

const NewPost = (props) => {
  const savePostHandler = (enteredPostData) => {
    const postData = {
      ...enteredPostData,
      id: Math.random().toString(),
    };
    props.onAddPost(postData);
  };
    return <div className="new-post">
      <PostForm onSavePostData={savePostHandler}/>
    </div>
  
}

export default NewPost;