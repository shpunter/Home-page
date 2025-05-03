import { Link } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import RightHandSideBlock from "/client/src/components/rightHandSideBlock/rightHandSideBlock.tsx";
import Menu from "/client/src/UI/menu/menu.tsx";
import css from "/src/components/rootComponent/rootComponent.module.css";

const RootComponent = () => {
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

export default RootComponent;
