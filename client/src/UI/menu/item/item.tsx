import { JSX } from "react";
import { Link } from "@tanstack/react-router";
import css from "./item.module.css";

const Item = ({ path, children }: Props) => {
  return (
    <Link
      key={path}
      to={path}
      activeProps={{ className: css.active }}
      className={css.link}
    >
      {children}
    </Link>
  );
};

export default Item;

type Props = {
  path: string;
  children: JSX.Element;
};
