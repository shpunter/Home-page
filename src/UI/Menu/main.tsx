import { Props } from "./type.ts";
import css from "./menu.module.css";

const Menu = ({ children }: Props) => {
  return <nav className={css.menu}>{children}</nav>;
};

export default Menu;
