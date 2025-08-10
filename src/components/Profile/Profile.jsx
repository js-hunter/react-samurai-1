import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {

  // let postsData = [
  //   {id: 0, message: 'Hi, how are you?', likesCount: 50},
  //   {id: 1, message: "It's my first post", likesCount: 20},
  //   {id: 2, message: "Еще один пост для жирка", likesCount: 100},
  //   {id: 3, message: "ЕНу и четвертый пост, как закрывашечка", likesCount: 15},
  // ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  )
}

  export default Profile;