import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCampers } from "../../redux/campers/selectors";

import CamperCard from "../CamperCard/CamperCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import css from "./CamperList.module.css";

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className={css.camper_section}>
      <div className={css.camper_list}>
        {campers.slice(0, visibleCount).map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>

      {visibleCount < campers.length && <LoadMoreBtn onClick={loadMore} />}
    </section>
  );
};

export default CamperList;
