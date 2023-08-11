import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "./Components/NAV/LeftNav";
import RightNav from "./Components/NAV/RightNav";

import styles from "./HomeRouter.module.css";

import { TweetsContext } from "./Context/TweetsProvider";

const HomeRouter = () => {
  console.log("Main Page");
  const fetchTweetsCtx = useContext(TweetsContext);
  const { fetchTweets } = fetchTweetsCtx;

  useState(() => {
    console.log('Fetching all tweets in Main Page');
    fetch(`${process.env.REACT_APP_ENDPOINT}/all-tweets`).then(res=>res.json()).then(res => {
      fetchTweets(res);
    })
  }, []);

  return (
    <>
      <LeftNav />
      <div className={styles["centered"]}>
        <Outlet />
      </div>
      <RightNav />
    </>
  );
};

export default React.memo(HomeRouter);
