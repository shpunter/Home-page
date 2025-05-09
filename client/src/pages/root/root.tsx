import { Outlet } from "@tanstack/react-router";
import LeftHandSideBlock from "/client/src/pages/root/leftHandSideBlock/leftHandSideBlock.tsx";
import css from "./root.module.css";

const Root = () => {


  return (
    <div className={css.grid}>
      <LeftHandSideBlock className={css.left} />
      <main className={css.center}>
        <Outlet />
      </main>
      {/* <RightHandSideBlock className={css.right} /> */}
    </div>
  );
};

export default Root;
