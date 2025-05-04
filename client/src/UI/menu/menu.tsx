import { classname } from "/client/src/utils/classname.ts";
import { Props } from "/client/src/UI/menu/menu.type.ts";
import css from "./menu.module.css";

const Menu = ({ children, className = "" }: Props) => {
  const cn = classname({}, [css.menu, className]);

  return <nav className={cn}>{children}</nav>;
};

export default Menu;
