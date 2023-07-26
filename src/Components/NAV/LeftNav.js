import { useState } from 'react';
import { NavLink } from "react-router-dom";
import styles from "./LeftNav.module.css";
import homeIcon from "../../Assets/home.png";

const LeftNav = () => {
  const activeLink = ({isActive}) => {
    const fullClassName = [styles['nav-link'], styles['active']];
    return isActive ? `${fullClassName.join(' ')} row` : `${styles["nav-link"]} row`
  }

  const navData = [["Home", "cottage", "/"], ["Explore", "search", "/explore"], ["Notifications", "notifications", "/notifications"], ["Messages", "mail", "/messages"], ["Lists", "description", "/lists"], ["Bookmarks", "bookmark", "/bookmarks"], ["Communities", "group", "/communities"], ["Verified", "verified", "/verified-choose"], ["Profile", "person", "/profile"], ["More", "more_horiz", "/more"]];
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
          navData.map((link,i) => {
            return (<NavLink className={activeLink} to={link[2]} key={i}>
              <div className={`${styles["nav-icon"]} icons`}>
                <span className={`${styles['nav-icon-symbols']} material-symbols-outlined center`}>{link[1]}</span>
              </div>
              <div className={`${styles["nav-desc"]}`}><span>{link[0]}</span></div>
            </NavLink>)
          })
        }
        <div className={styles["tweet-now"]}>Tweet</div>
      </div>
      {/* LEFT SECTION */}
    </>
  );
};

export default LeftNav;
