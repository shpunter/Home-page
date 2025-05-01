import { Props } from "/src/UI/menu/menu.type.ts";
import css from "/src/UI/menu/menu.module.css";


const Menu = ({ children }: Props) => {
  return <nav className={css.menu}>{children}</nav>;
};

export default Menu;
