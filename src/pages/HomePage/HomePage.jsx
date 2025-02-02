import { NavLink } from "react-router-dom";

import DocumentTitle from "../../components/DocumentTitle";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle title="Home" />
      <main className={css.main}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <NavLink className={css.button} to="/catalog">
          View Now
        </NavLink>
      </main>
    </>
  );
};

export default HomePage;
