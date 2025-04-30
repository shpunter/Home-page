import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Menu from "../UI/Menu/main.tsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
    <Menu>
        <Link to="/">Home</Link>
        <Link to="/add">Addition</Link>
        <Link to="/sub">Subtraction</Link>
        <Link to="/div">Division</Link>
        <Link to="/mul">Multiplication</Link>
    </Menu>
      <Outlet />
    </>
  );
}
