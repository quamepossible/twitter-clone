import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "./Components/NAV/LeftNav";
import RightNav from "./Components/NAV/RightNav";

import styles from "./HomeRouter.module.css";

import { TweetsContext } from "./Context/TweetsProvider";

const HomeRouter = () => {
  console.log("Main Page");
  const loggedUser = localStorage.getItem('profile');


  const fetchTweetsCtx = useContext(TweetsContext);
  const { fetchTweets, loggin } = fetchTweetsCtx;

  useEffect(() => {
    console.log('Fetching all tweets in Main Page');
    fetch(`${process.env.REACT_APP_ENDPOINT}/all-tweets`).then(res=>res.json()).then(res => {
      fetchTweets(res);
      fetch(`${process.env.REACT_APP_ENDPOINT}/author-details/${loggedUser}`)
      .then((res) => res.json())
      .then((res) => {
        loggin(res)
      });
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
