import React from 'react';
import { NavLink, } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle = {styles.active} to = "/" >Home</NavLink>
    { " " }
    <NavLink exact activeStyle = {styles.active} to = "/departments">Departments</NavLink>
    { " " }
    <NavLink exact activeStyle = {styles.active} to = "/contact">Contact</NavLink>
  </nav>
)

const styles = {
  active: {
    fontFamily: "none",
    fontWeight: "bold",
    color: "black"
  }
};

export default NavBar;