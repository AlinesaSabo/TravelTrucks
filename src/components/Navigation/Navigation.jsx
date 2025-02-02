import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  return (
    <nav className={css.navigation}>
      <NavLink className={buildLinkClass} to="/" end>
        Home
      </NavLink>

      <NavLink className={buildLinkClass} to="/catalog" end>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
