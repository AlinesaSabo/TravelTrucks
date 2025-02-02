import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperGallery from "../CamperGallery/CamperGallery";
import CamperInfo from "../CamperInfo/CamperInfo";
import Description from "../Description/Description";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  return (
    <div className={css.card}>
      <CamperGallery images={camper.gallery} isPreview={true} />
      <div className={css.card_content}>
        <CamperInfo camper={camper} detailed={false} />
        <Description description={camper.description} isTruncated={true} />
        <CamperFeatures camper={camper} />
        <ShowMoreButton camperId={camper.id} />
      </div>
    </div>
  );
};

export default CamperCard;
