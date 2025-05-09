import css from "./docSkeleton.module.css";

const DocSkeleton = () => {
  return (
    <main className={css["loading-skeleton"]}>
      <h2>
        <div className={css.w200px} />
      </h2>
      <p>
        <div className={css.w100} />
        <div className={css.w100} />
        <div className={css.w75} />
      </p>
      <h3>
        <div className={css.w300px} />
      </h3>
      <div className={`${css.w100} ${css.h100px}`} />
      <h3>
        <div className={css.w200px} />
      </h3>
      <ul>
        <li>
          <div className={css.w200px} />
        </li>
        <li>
          <div className={css.w250px} />
        </li>
        <li>
          <div className={css.w100px} />
        </li>
      </ul>
      <h3>
        <div className={css.w250px} />
      </h3>
      <p>
        <div className={css.w100} />
        <div className={css.w100} />
        <div className={css.w30} />
      </p>
      <div className={`${css.w100} ${css.h150px}`} />
      <h3>
        <div className={css.w300px} />
      </h3>
      <ul>
        <li>
          <div className={css.w250px} />
        </li>
        <li>
          <div className={css.w200px} />
        </li>
        <li>
          <div className={css.w100px} />
        </li>
        <li>
          <div className={css.w250px} />
        </li>
      </ul>
    </main>
  );
};

export default DocSkeleton;
