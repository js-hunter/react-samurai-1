import React from "react";
import classes from './Sidebar.module.css';
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {

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