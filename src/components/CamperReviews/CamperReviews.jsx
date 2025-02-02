import { useSelector } from "react-redux";

import { selectCurrentCamper } from "../../redux/campers/selectors";

import css from "./CamperReviews.module.css";

const CamperReviews = () => {
  const camper = useSelector(selectCurrentCamper);

  if (!camper || !camper.reviews || camper.reviews.length === 0) {
    return <p className={css.no_reviews}>No reviews available</p>;
  }

  return (
    <div className={css.reviews_container}>
      {camper.reviews.map(
        ({ reviewer_name, reviewer_rating, comment }, index) => (
          <div key={index} className={css.review_card}>
            <div className={css.review_header}>
              <span className={css.avatar}>{reviewer_name.charAt(0)}</span>
              <div className={css.reviewer_title}>
                <p className={css.reviewer_name}>{reviewer_name}</p>
                <div className={css.rating}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={css.starIcon}>
                      <use
                        xlinkHref={`/icons-sprite.svg#${
                          i < reviewer_rating
                            ? "icon-star-yellow"
                            : "icon-star-white"
                        }`}
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{comment}</p>
          </div>
        )
      )}
    </div>
  );
};

export default CamperReviews;
