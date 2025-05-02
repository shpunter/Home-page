import { Link } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Menu from "/src/UI/menu/menu.tsx";
import css from "/src/components/rootComponent/rootComponent.module.css";

const RootComponent = () => {
  return (
    <div className={css.main}>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/install">Installation</Link>
        <Link to="/add">Addition</Link>
        <Link to="/sub">Subtraction</Link>
        <Link to="/div">Division</Link>
        <Link to="/mul">Multiplication</Link>
      </Menu>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootComponent;
