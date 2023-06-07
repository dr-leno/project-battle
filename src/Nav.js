import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle"];

const Nav = () => {
return (
    <>
      <menu className="nav">
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <NavLink to={navLink === "Home" ? "/" : navLink.toLowerCase()}>
                {navLink}
              </NavLink>
            </li>
          );
        })}
      </menu>
      <Outlet />
    </>
  );
}

export default Nav;