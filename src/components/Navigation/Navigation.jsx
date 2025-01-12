import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.header}>
      <ul className={s.header_navigation}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
