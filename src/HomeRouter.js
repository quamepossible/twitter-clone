import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "./Components/NAV/LeftNav";
import RightNav from "./Components/NAV/RightNav";

import styles from "./HomeRouter.module.css";

import { TweetsContext } from "./Context/TweetsProvider";

const HomeRouter = () => {
  console.log("Main Page");
  const [tweetState, setTweetState] = useState({loadingTweets: true, tweetFetchError: false});
  const {loadingTweets, tweetFetchError} = tweetState;

  const [loggedInState, setLoggedInState] = useState(false)

  const loggedUser = localStorage.getItem("profile");

  const fetchTweetsCtx = useContext(TweetsContext);
  const { fetchTweets, loggin } = fetchTweetsCtx;

  useEffect(() => {
    console.log("Fetching all tweets in Main Page");

    fetch(`${process.env.REACT_APP_ENDPOINT}/all-tweets`)
      .then((res) => {
        if (!res.ok) {
          console.log("hello");
          setTweetState({loadingTweets: false, tweetFetchError: true})
          throw new Error("Couldn't fetch tweets");
        }
        setTweetState({loadingTweets: false, tweetFetchError: false})

        return res.json();
      })
      .then((res) => {
        fetchTweets(res);
      })
      .catch((err) => {
        setTweetState({loadingTweets: false, tweetFetchError: true})
        console.log(err.message);
      });

    fetch(`${process.env.REACT_APP_ENDPOINT}/author-details/${loggedUser}`)
      .then((res) => {
        if (!res.ok) {
          setLoggedInState(false);
          throw new Error("Couldn't user profile");
        }
        setLoggedInState(true);
        return res.json();
      })
      .then((res) => {
        loggin(res);
      })
      .catch((err) => {
        setLoggedInState(false);
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <LeftNav  loadLog={loggedInState}/>
      <div className={styles["centered"]}>
        {!tweetFetchError && !loadingTweets && <Outlet />}
        {loadingTweets && !tweetFetchError && (
          <p className={styles['error-fetch']}>Loading page, please wait... ⚙️</p>
        )}
        {!loadingTweets && tweetFetchError && <p className={styles['error-fetch']}>Error loading page ❌</p>}
      </div>
      <RightNav />
    </>
  );
};

export default React.memo(HomeRouter);
