import { Link, Outlet } from "@tanstack/react-router";

export function Layout() {
  return (
    <div>
      <h1>@numio/bigmath home page</h1>
      <nav>
        <Link to="/">
          Home
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
