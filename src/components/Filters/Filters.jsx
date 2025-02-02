import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { selectFilters } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";

import { equipment, vehicleType } from "../../constants/constants";

import css from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleVehicleTypeChange = (type) => {
    dispatch(
      setFilters({
        ...filters,
        vehicleType: filters.vehicleType === type ? null : type,
      })
    );
  };

  const handleEquipmentChange = (key) => {
    if (key === "transmission") {
      dispatch(
        setFilters({
          ...filters,
          transmission: filters.transmission === "automatic" ? "" : "automatic",
        })
      );
    } else {
      dispatch(
        setFilters({
          ...filters,
          equipment: filters.equipment.includes(key)
            ? filters.equipment.filter((item) => item !== key)
            : [...filters.equipment, key],
        })
      );
    }
  };

  return (
    <div className={css.filters}>
      <p className={css.filters_text}>Filters</p>
      <div className={css.filters_box}>
        <h3 className={css.filters_subtitle}>Vehicle Equipment</h3>
        <hr className={css.filters_line} />
        <div className={css.filters_elements}>
          {equipment.map(({ key, label, icon, hasFill }) => (
            <button
              key={key}
              className={clsx(
                css.filter_button,
                key === "transmission"
                  ? filters.transmission === "automatic" && css.active
                  : filters.equipment.includes(key) && css.active
              )}
              onClick={() => handleEquipmentChange(key)}
            >
              <span className={css.filter_span}>
                <svg className={`${css.icon} ${hasFill ? css.fill : ""}`}>
                  <use xlinkHref={`/icons-sprite.svg#${icon}`} />
                </svg>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={css.filters_box}>
        <h3 className={css.filters_subtitle}>Vehicle Type</h3>
        <hr className={css.filters_line} />
        <div className={css.filters_elements}>
          {vehicleType.map(({ key, label, icon }) => (
            <button
              key={key}
              className={clsx(
                css.filter_button,
                filters.vehicleType === key && css.active
              )}
              onClick={() => handleVehicleTypeChange(key)}
            >
              <span key={key} className={css.filter_span}>
                <svg className={css.icon}>
                  <use xlinkHref={`/icons-sprite.svg#${icon}`} />
                </svg>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
