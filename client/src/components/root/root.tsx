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
          <Link
            to="/"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Home
          </Link>
          <Link
            to="/install"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Installation
          </Link>
          <Link
            to="/add"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Addition
          </Link>
          <Link
            to="/sub"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Subtraction
          </Link>
          <Link
            to="/div"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Division
          </Link>
          <Link
            to="/mul"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Multiplication
          </Link>
          <Link
            to="/round"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Round
          </Link>
          <Link
            to="/pipe"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Pipe
          </Link>
          <Link
            to="/sort"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Sort
          </Link>
          <Link
            to="/quartile"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Quartile
          </Link>
          <Link
            to="/mean"
            activeProps={{ className: css.active }}
            className={css.link}
          >
            Mean
          </Link>
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
