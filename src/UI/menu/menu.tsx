import { classname } from "/src/utils/classname.ts";
import styles from "./menu.module.css";
import { JSX } from "react/jsx-runtime";

const Menu = ({ children, className = "" }: Props) => {
  const cn = classname({}, [styles.menu, className]);

  return <nav className={cn}>{children}</nav>;
};

export default Menu;

export type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};
