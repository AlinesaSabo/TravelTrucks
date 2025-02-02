import { useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { selectCurrentCamper } from "../../redux/campers/selectors";
import { fetchCamperById } from "../../redux/campers/operations";

import Loader from "../../components/Loader/Loader";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import Description from "../../components/Description/Description";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import BookingForm from "../../components/BookingForm/BookingForm";

import css from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);

  useEffect(() => {
    if (camperId) {
      dispatch(fetchCamperById(camperId));
    }
  }, [dispatch, camperId]);

  if (!camper) {
    return <Loader />;
  }

  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <main className={css.details_page}>
      <div className={css.details_main}>
        <CamperInfo camper={camper} isDetailed={true} />
        <CamperGallery images={camper.gallery} />
        <Description description={camper.description} />
      </div>

      <nav className={css.navigation}>
        <NavLink to="features" className={buildLinkClass}>
          Features
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </nav>

      <hr className={css.details_line} />

      <div className={css.details_footer}>
        <div className={css.outlet}>
          <Outlet />
        </div>
        <BookingForm />
      </div>
    </main>
  );
};

export default CamperDetailsPage;
