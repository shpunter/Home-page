import css from "./docSkeleton.module.css";

const DocSkeleton = () => {
  return (
    <main className={css["loading-skeleton"]}>
      <h2>
        <span className={css.w200px} />
      </h2>
      <p>
        <span className={css.w100} />
        <span className={css.w100} />
        <span className={css.w75} />
      </p>
      <h3>
        <span className={css.w300px} />
      </h3>
      <span className={`${css.w100} ${css.h100px}`} />
      <h3>
        <span className={css.w200px} />
      </h3>
      <ul>
        <li>
          <span className={css.w200px} />
        </li>
        <li>
          <span className={css.w250px} />
        </li>
        <li>
          <span className={css.w100px} />
        </li>
      </ul>
      <h3>
        <span className={css.w250px} />
      </h3>
      <p>
        <span className={css.w100} />
        <span className={css.w100} />
        <span className={css.w30} />
      </p>
      <span className={`${css.w100} ${css.h150px}`} />
      <h3>
        <span className={css.w300px} />
      </h3>
      <ul>
        <li>
          <span className={css.w250px} />
        </li>
        <li>
          <span className={css.w200px} />
        </li>
        <li>
          <span className={css.w100px} />
        </li>
        <li>
          <span className={css.w250px} />
        </li>
      </ul>
    </main>
  );
};

export default DocSkeleton;
