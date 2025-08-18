import React from "react";
import classes from './SidebarItem.module.css';

const SidebarItem = (props) => {

  return(
    <div>
      <img className={classes.friendImage} src={props.image}></img>
      <div className={classes.friendName}>{props.name}</div>
    </div>


    // <div className={classes.friendsList}>
    //   <div className={classes.friendItem}>
    //     <img className={classes.friendImage} src='https://cojo.ru/wp-content/uploads/2022/12/krutoi-kot-4-1.webp'></img>
    //     <div className={classes.friendName}>Andrew</div>
    //   </div>
    //   <div className={classes.friendItem}>
    //     <img className={classes.friendImage} src='https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'></img>
    //     <div className={classes.friendName}>Sasha</div>
    //   </div>
    //   <div className={classes.friendItem}>
    //     <img className={classes.friendImage} src='https://vincent.enthub.it/stories/images/73fe876a-5e26-4265-8edb-17e708416afe.webp'></img>
    //     <div className={classes.friendName}>Sveta</div>
    //   </div>
    // </div>
  );
}

export default SidebarItem;