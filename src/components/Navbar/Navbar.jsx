import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          to='/profile'
          className={({isActive}) => `${classes.item} ${isActive ? classes.active : ''} `}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/dialogs'
          className={({ isActive }) => `${classes.item} ${isActive ? classes.active : ''}`}
        >
          Mesages
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/news'
          className={({ isActive }) => `${classes.item} ${isActive ? classes.active : ''}`}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/music'
          className={({ isActive }) => `${classes.item} ${isActive ? classes.active : ''}`}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/settings'
          className={({ isActive }) => `${classes.item} ${isActive ? classes.active : ''}`}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;