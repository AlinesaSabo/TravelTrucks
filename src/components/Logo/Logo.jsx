import { Link } from "react-router-dom";

import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <img src="/logo.svg" alt="TravelTrucks Logo" />
    </Link>
  );
};

export default Logo;
