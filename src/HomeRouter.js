import { Outlet } from "react-router-dom";
import LeftNav from "./Components/NAV/LeftNav";
import RightNav from "./Components/NAV/RightNav";

import styles from "./HomeRouter.module.css";

const HomeRouter = () => {
  return (
    <>
      <LeftNav />
      <div className={styles['centered']}>
        <Outlet />
      </div>
      <RightNav />
    </>
  );
};

export default HomeRouter;
