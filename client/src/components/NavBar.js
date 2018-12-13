import React from 'react';
import { NavLink, } from 'react-router-dom';
import { StyledNav } from '../styles/appstyle';

const NavBar = () => (
  <StyledNav>
    <NavLink exact to = "/" activeStyle={styles.active} style = {{color: "white"}}>Home</NavLink>
    { " | " }
    <NavLink exact to = "/departments" activeStyle={styles.active} style = {{color: "white"}}>Departments</NavLink>
    { " | " }
    <NavLink exact to = "/contact" activeStyle={styles.active} style = {{color: "white"}}>Contact</NavLink>
  </StyledNav>
)

const styles = {
  active: {
    color: "orange",
    fontWeight: "bold",
  }
};

export default NavBar;