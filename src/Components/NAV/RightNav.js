import React from "react";
import styles from "./RightNav.module.css";


import Trends from "./Trends/Trends";
import Follow from "./Follow/Follow";

const RightNav = () => {
  const trendsArray = [
    ['Trending in Ghana', 'Snapchat', '9,287'], 
    ['Trending in Ghana', 'Snapchat', '9,287'], 
    ['Trending in Ghana', 'Snapchat', '9,287'],
    ['Trending in Ghana', 'Snapchat', '9,287'],
    ['Trending in Ghana', 'Snapchat', '9,287'],
  ];
  const followArray = [['Omar Sterling', 'pound_sterlin', 'IMG_SRC', 'ACC_ID']]
  return (
    <>
      <div className={`${styles["right-section"]}`}>

        {/* SEARCH FIELD AT TOP RIGHT OF THE PAGE */}
        <div className={styles["right-search"]}>
          <form className={`${styles["right-form"]} center`}>
            <div className={`${styles["hold-search"]} row`}>
              <span className={styles["search-icon"]}><span className="material-symbols-outlined center" style={{ fontSize: "20px" }}>search</span></span>
              <input type="text" className={`${styles["right-input"]}`} placeholder="Search Twitter"/>
            </div>
          </form>
        </div>
        {/* SEARCH FIELD AT TOP RIGHT OF THE PAGE */}


        {/* CLICK TO GET VERIFIED BANNER */}
        <div className={styles["verified-banner"]}>
          <div className={`${styles["verified-info"]} center`}>
            <p className={styles["get-ver"]}>Get Verified</p>
            <p className={styles["subs-ver"]}>
              Subscribe to unlock new features.
            </p>
            <button className={styles["ver-btn"]}>Get Verified</button>
          </div>
        </div>
        {/* CLICK TO GET VERIFIED BANNER */}


        {/* TRENDING BANNER */}
        <div className={styles["trends-banner"]}>
          <p className={styles["trends-title"]}>Trends for you</p>
          <div className={`${styles["banner-content"]}`}>
            {trendsArray.map((trend, i) => <Trends key={i} theTrend={trend} />)}          
          </div>
        </div>
        {/* TRENDING BANNER */}


        {/* SUGGESTED ACCOUNTS TO FOLLOW BANNER */}
        <div className={styles["follow-banner"]}>
          <p className={styles["follow-title"]}>Who to follow</p>
          {followArray.map((account,i) => <Follow key={i} followAccount={account} />)}
        </div>
        {/* SUGGESTED ACCOUNTS TO FOLLOW BANNER */}
        
      </div>
    </>
  );
};

export default React.memo(RightNav);
