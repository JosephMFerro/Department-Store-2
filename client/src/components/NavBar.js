import React from 'react';
import { NavLink, } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink exact to = "/" >Home</NavLink>
    { " " }
    <NavLink exact to = "/departments">Departments</NavLink>
    { " " }
    <NavLink exact to = "/contact">Contact</NavLink>
  </nav>
)

// const styles = {
//   active: {
//     fontFamily: "none",
//     fontWeight: "bold",
//     color: "black"
//   }
// };

export default NavBar;