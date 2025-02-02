import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default AppBar;
