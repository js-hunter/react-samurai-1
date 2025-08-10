import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  // let postsData = [
  //   {id: 0, message: 'Hi, how are you?', likesCount: 50},
  //   {id: 1, message: "It's my first post", likesCount: 20},
  //   {id: 2, message: "Еще один пост для жирка", likesCount: 100},
  //   {id: 3, message: "Ну и четвертый пост, как закрывашечка", likesCount: 15},
  // ];

  let postsElements =
    props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;