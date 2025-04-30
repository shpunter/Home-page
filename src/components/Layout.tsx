import { Link, Outlet } from "@tanstack/react-router";

export function Layout() {
  return (
    <div>
      <h1>@numio/bigmath home page</h1>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/add">Addition</Link>
        <Link to="/sub">Subtraction</Link>
        <Link to="/mul">Multiplication</Link>
        <Link to="/div">Division</Link>
      </nav>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </div>
  );
}
