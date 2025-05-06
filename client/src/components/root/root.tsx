import { Link } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Menu from "/client/src/UI/menu/menu.tsx";
import css from "./root.module.css";
import RightHandSideBlock from "./rightHandSideBlock/rightHandSideBlock.tsx";

const Root = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/install", label: "Installation" },
    { path: "/add", label: "Addition" },
    { path: "/sub", label: "Subtraction" },
    { path: "/div", label: "Division" },
    { path: "/mul", label: "Multiplication" },
    { path: "/round", label: "Round" },
    { path: "/pipe", label: "Pipe" },
    { path: "/sort", label: "Sort" },
    { path: "/quartile", label: "Quartile" },
    { path: "/mean", label: "Mean" },
    { path: "/max", label: "Max" },
    { path: "/min", label: "Min" },
    { path: "/isEqual", label: "IsEqual" },
    { path: "/isLeftGreater", label: "IsLeftGreater" },
    { path: "/isLeftGreaterOrEqual", label: "IsLeftGreaterOrEqual" },
    { path: "/mad", label: "MAD" },
  ];

  return (
    <div className={css.grid}>
      <div className={css.left}>
        <Menu>
          {links.map((link) => {
            return (
              <Link
                key={link.path}
                to={link.path}
                activeProps={{ className: css.active }}
                className={css.link}
              >
                {link.label}
              </Link>
            );
          })}
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
