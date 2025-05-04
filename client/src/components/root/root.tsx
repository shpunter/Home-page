import { Link } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Menu from "/client/src/UI/menu/menu.tsx";
import css from "./root.module.css";
import RightHandSideBlock from "./rightHandSideBlock/rightHandSideBlock.tsx";

const Root = () => {
  return (
    <div className={css.grid}>
      <div className={css.left}>
        <Menu>
          <Link to="/">Home</Link>
          <Link to="/install">Installation</Link>
          <Link to="/add">Addition</Link>
          <Link to="/sub">Subtraction</Link>
          <Link to="/div">Division</Link>
          <Link to="/mul">Multiplication</Link>
        </Menu>
      </div>
      <main className={css.center}>
        <Outlet />
      </main>
      <RightHandSideBlock className={css.right} />
    </div>
  );
};

export default Root;
