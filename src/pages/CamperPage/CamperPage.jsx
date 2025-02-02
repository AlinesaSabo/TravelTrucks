import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../../redux/campers/operations";
import { selectError, selectIsLoading } from "../../redux/campers/selectors";

import DocumentTitle from "../../components/DocumentTitle";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import CamperList from "../../components/CamperList/CamperList";

import css from "./CamperPage.module.css";

const CamperPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main className={css.camper_page}>
      <DocumentTitle title="Catalog" />
      <SearchBar />
      {isLoading && <Loader />}
      {error ? (
        <div className={css.error_message}>⚠️ {error}</div>
      ) : (
        <CamperList />
      )}
    </main>
  );
};

export default CamperPage;
