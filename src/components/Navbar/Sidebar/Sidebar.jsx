import React from "react";
import classes from './Sidebar.module.css';
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {

  // let sidebarData = [
  //   {id: 0, name: 'Andrew', image: 'https://cojo.ru/wp-content/uploads/2022/12/krutoi-kot-4-1.webp'},
  //   {id: 1, name: 'Sasha', image: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'},
  //   {id: 2, name: 'Sveta', image: 'https://vincent.enthub.it/stories/images/73fe876a-5e26-4265-8edb-17e708416afe.webp'},
  // ];

  let sidebarElements = props.sidebar.map((friend) => <SidebarItem id={friend.id} name={friend.name} image={friend.image} />)

  return(
    <div className={classes.sidebarWrapper}>
      <h3>Friends</h3>
      <div className={classes.friendsList}>
        {sidebarElements}
      </div>
    </div>
  );
}

export default Sidebar;