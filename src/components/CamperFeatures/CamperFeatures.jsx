import { useSelector } from "react-redux";
import clsx from "clsx";

import { details, features } from "../../constants/constants";

import { selectCurrentCamper } from "../../redux/campers/selectors";

import css from "./CamperFeatures.module.css";

const CamperFeatures = ({ camper: propCamper, detailed: propDetailed }) => {
  const reduxCamper = useSelector(selectCurrentCamper);
  const camper = propCamper || reduxCamper;
  const detailed = propDetailed ?? !propCamper;

  return (
    <div className={clsx(css.features, detailed && css.features_detailed)}>
      <div className={css.main}>
        {features.map(({ key, icon, hasFill }) => {
          let label = features.find((item) => item.key === key)?.label;

          if (key === "transmission" && camper.transmission) {
            label =
              camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.slice(1);
          }
          if (key === "engine" && camper.engine) {
            label =
              camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1);
          }

          return (
            camper[key] && (
              <span key={key} className={css.feature_item}>
                <svg className={`${css.icon} ${hasFill ? css.fill : ""}`}>
                  <use xlinkHref={`/icons-sprite.svg#${icon}`} />
                </svg>
                {label}
              </span>
            )
          );
        })}
      </div>

      {detailed && (
        <div className={css.details}>
          <h3 className={css.details_title}>Vehicle details</h3>
          <hr className={css.details_line} />
          <table className={css.details_table}>
            <tbody className={css.details_tbody}>
              {details.map(({ key, label }) => {
                let value = camper[key] ? camper[key].toString() : "N/A";

                if (key === "length" || key === "width" || key === "height") {
                  value = value.replace(/([0-9]+)([a-zA-Z]+)/, "$1 $2");
                } else if (key === "tank") {
                  value = value.replace(/([0-9]+)([a-zA-Z]+)/, "$1 $2");
                } else if (key === "consumption") {
                  value = value.replace(/(\/100)(km)/, "$1 $2");
                }

                return (
                  <tr key={key} className={css.details_tr}>
                    <td className={css.details_td}>{label}</td>
                    <td className={css.details_td}>{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CamperFeatures;
