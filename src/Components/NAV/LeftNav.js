import React, { useState, useRef, useContext, useCallback } from 'react';
import { NavLink } from "react-router-dom";
import { TweetsContext } from '../../Context/TweetsProvider';
import useAuthorDetailsHook from '../../Hooks/AuthorDetailsHook';
import styles from "./LeftNav.module.css";
import homeIcon from "../../Assets/home.png";
import Boogie from "../../Assets/media/boogie.jpg"

const LeftNav = () => {
  console.log('Left Nav');
  // const { loggedInProfile } = useContext(TweetsContext);
  const userIsAuthenticated = localStorage.getItem('user');
  const profile = localStorage.getItem('profile');

  const activeLink = ({isActive}) => {
    const fullClassName = [styles['nav-link'], styles['active']];
    return isActive ? `${fullClassName.join(' ')} row` : `${styles["nav-link"]} row`
  }

  const navData = [["Home", "cottage", "/"], ["Explore", "search", "/explore"], ["Notifications", "notifications", "/notifications"], ["Messages", "mail", "/messages"], ["Lists", "description", "/lists"], ["Bookmarks", "bookmark", "/bookmarks"], ["Communities", "group", "/communities"], ["Verified", "verified", "/verified-choose"], ["Profile", "person", "/profile"], ["More", "more_horiz", "/more"]];
 
  const authVal = useRef();
  const logoutHandler = useCallback((e) => {
    e.preventDefault();
    const authToken = authVal.current.value;
    const logoutForm = new FormData();
    logoutForm.append('token', authToken);
    fetch('http://localhost:3005/logout', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(logoutForm)),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(res => res.text()).then(res => {
      localStorage.clear();
      console.log(res);
    });

  },[])
 
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
        {userIsAuthenticated && 
          navData.map(([text, icon, url],i) => {
            return (<NavLink className={activeLink} to={text === 'Profile' ? profile : url} key={i}>
              <div className={`${styles["nav-icon"]} icons`}>
                <span className={`${styles['nav-icon-symbols']} material-symbols-outlined center`}>{icon}</span>
              </div>
              <div className={`${styles["nav-desc"]}`}><span>{text}</span></div>
            </NavLink>)
          })
        }
        {userIsAuthenticated && <div className={styles["tweet-now"]}>Tweet</div>}

        {!userIsAuthenticated && <NavLink to="/auth?action=login" className={`${styles['login-field']}`}>
          <p className={`${styles['login-text']} center`}>Login</p>
        </NavLink>}
        {
          userIsAuthenticated && 
          <form onSubmit={logoutHandler}>
            <input type='text' style={{display:'none'}} ref={authVal} defaultValue={userIsAuthenticated} />
            <button type='submit'>Logout</button>
          </form>
        }

        {userIsAuthenticated && <div className={`${styles['login']} row`}>
          <div className={styles['hold-user-pic']}>
            <div className={`${styles['user-pic']} center`} style={{backgroundImage: `url(${Boogie})`}}></div>
          </div>
          <div className={styles['user-details']}>
            {/* <p className={styles['user-fullname']}>{loggedInProfile.full_name}</p>
            <p className={styles['user-name']}>@{loggedInProfile.username}</p> */}
          </div>
          <div className={styles['log-menu']}>
            <ion-icon style={{color: ''}} name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>}
      </div>
      {/* LEFT SECTION */}
    </>
  );
};

export default React.memo(LeftNav);
