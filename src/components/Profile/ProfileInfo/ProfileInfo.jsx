import React from 'react';
import classes from './ProfileInfo.module.css'
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://c4.wallpaperflare.com/wallpaper/215/860/1018/lake-tekapo-south-island-new-zealand-wallpaper-preview.jpg'/>
      </div>
      <div className={classes.descriptionBlock}>
        Ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;