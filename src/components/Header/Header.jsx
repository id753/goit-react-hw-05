import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.header_navigation}>
        <NavLink to="/">HOME </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};

export default Header;
