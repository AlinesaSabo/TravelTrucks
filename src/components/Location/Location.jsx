import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectLocation } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";

import css from "./Location.module.css";

const Location = () => {
  const dispatch = useDispatch();
  const reduxLocation = useSelector(selectLocation);
  const [inputValue, setInputValue] = useState(reduxLocation || "");

  const handleInputChange = (e) => {
    const city = e.target.value.split(/[,\s]+/)[0];
    setInputValue(e.target.value);
    dispatch(setFilters({ location: city }));
  };

  return (
    <div className={css.location_wrapper}>
      <label htmlFor="location" className={css.location_label}>
        Location
      </label>
      <div className={css.input_container}>
        <svg className={`${css.icon} ${location ? css.icon_active : ""}`}>
          <use xlinkHref="/icons-sprite.svg#icon-map"></use>
        </svg>
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          value={inputValue}
          onChange={handleInputChange}
          className={css.location_input}
        />
      </div>
    </div>
  );
};

export default Location;
