import css from "./Description.module.css";

const Description = ({ description, isTruncated = false }) => {
  return (
    <p className={isTruncated ? css.truncated : css.full}>{description}</p>
  );
};

export default Description;
