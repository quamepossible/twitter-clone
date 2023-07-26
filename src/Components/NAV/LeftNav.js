import {useState} from 'react';

import styles from "./LeftNav.module.css";
import homeIcon from "../../Assets/home.png";

const LeftNav = () => {

  const navData = [["Home", "cottage", "/"], ["Explore", "search", "/"], ["Notifications", "notifications", "/"], ["Messages", "mail", "/"], ["Lists", "description", "/"], ["Bookmarks", "bookmark", "/"], ["Communities", "group", "/"], ["Verified", "verified", "/"], ["Profile", "person", "/"], ["More", "more_horiz", "/"]];
  return (
    <>
      {/* LEFT SECTION */}
      <div className={styles["left-section"]}>
        <div className={styles["home-nav"]}>
          <img
            src={homeIcon}
            alt="twitter-home"
            className={styles["home-icon"]}
          />
        </div>
        {
          navData.map((link,i) => (
            <div id='nav-row' className={`${styles["nav-link"]} row`} key={i}>
              <div className={`${styles["nav-icon"]} icons`}>
                <span className={`${styles['nav-icon-symbols']} material-symbols-outlined center`}>{link[1]}</span>
              </div>
              <div className={`${styles["nav-desc"]}`}><span>{link[0]}</span></div>
            </div>
          ))
        }
        <div className={styles["tweet-now"]}>Tweet</div>
      </div>
      {/* LEFT SECTION */}
    </>
  );
};

export default LeftNav;
