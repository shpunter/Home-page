import { Link } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Menu from "/client/src/UI/menu/menu.tsx";
import css from "./root.module.css";
import RightHandSideBlock from "./rightHandSideBlock/rightHandSideBlock.tsx";

const Root = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/install", label: "Install" },
    { path: "/add", label: "add" },
    { path: "/sub", label: "sub" },
    { path: "/div", label: "div" },
    { path: "/mul", label: "mul" },
    { path: "/round", label: "round" },
    { path: "/pipe", label: "pipe" },
    { path: "/sort", label: "sort" },
    { path: "/quartile", label: "quartile" },
    { path: "/mean", label: "mean" },
    { path: "/max", label: "max" },
    { path: "/min", label: "min" },
    { path: "/isEqual", label: "isEqual" },
    { path: "/isLeftGreater", label: "isLeftGreater" },
    { path: "/isLeftGreaterOrEqual", label: "isLeftGreaterOrEqual" },
    { path: "/mad", label: "MAD" },
    { path: "/iqr", label: "IQR" },
    { path: "/sqrt", label: "sqrt" },
    { path: "/cbrt", label: "cbrt" },
    { path: "/abs", label: "abs" },
    { path: "/toBase", label: "toBase" },
    { path: "/isHex", label: "isHex" }, 
    { path: "/isBinary", label: "isBinary" },        
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
