import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
