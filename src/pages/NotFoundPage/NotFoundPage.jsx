import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <img className={css.image} src="/public/notFound.png" />
    </div>
  );
};
export default NotFoundPage;
