import { useRef } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Tweet.module.css";
import useImgDimHook from "../../Hooks/ImageDimHook";


const Tweet = ({ tweetData }) => {
  const { comments, tweet_caption, author_id, author_fullName, profile_pic, tweet_id, retweets, likes, views, full_date, media, media_url } = tweetData;

  //  initialize a ref, and adjust the dimenstions (width and height) of the tweet's 
    //     media (photo and video) on the home page
  const mediaRef = useRef(null);
  useImgDimHook(mediaRef, media_url);

  // url to open tweet on a full page
  const tweetPath = `/${author_id}/status/${tweet_id}`;

  // TWEET ACTIONS ARRAY
  const commentsActionArr = [[comments.length, 'chatbubbles-outline'], [retweets, 'git-compare-outline'], [likes, 'heart-outline'], [views, 'stats-chart']];
  
  return (
    <NavLink to={tweetPath} className={`${styles["tweets"]} row`}>
      {/* AUTHOR DP */}
      <div className={styles["author-photo"]}>
        <div style={{backgroundImage: `url(${profile_pic})`}} className={styles["author-dp"]} />
      </div>
      {/* AUTHOR DP */}

      <div className={styles["tweet-content"]}>
        {/* TWEET AUTHOR BIO, DATE TWEETED */}
        <div className={styles["author-name"]}>
          <span className={styles["profile-name"]}>{author_fullName}</span>{" "}
          <span className={styles["check-mark"]}></span>{" "}
          <span className={styles["user-name"]}>@{author_id}</span>{" "}
          <span className={`${styles['dot']}`}><span className="center" style={{display: 'inline-block', height:'30px'}}>.</span></span>
          <span className={styles['date-tweeted']}>Jul 30</span>
        </div>
        {/* TWEET AUTHOR BIO, DATE TWEETED */}

        {/* TWEET CAPTION */}
        <p className={styles["author-caption"]}>{tweet_caption}</p>
        {/* TWEET CAPTION */}

        {/* TWEET MEDIA IF AVAILABLE */}
        {media && <div ref={mediaRef} className={styles["tweet-media"]} style={{backgroundImage: `url(${media_url})`}}></div>}
        {/* TWEET MEDIA IF AVAILABLE */}
        
        {/* TWEET INSIGHT AND ACTIONS */}
        <div className={`${styles["tweet-insight"]} row`}>
          {commentsActionArr.map((action, i) => (
            <div key={i} className={`${styles["action-span"]} row`}>
              <span className={styles["action-icon"]}>
                <ion-icon name={action[1]}></ion-icon>
              </span>
              <p className={`${styles["action-fig"]}`}>
                <span className="center">{action[0]}</span>
              </p>
            </div>
          ))}       

            {/* SHARE TWEET */}
          <div className={`${styles["action-span"]} row`}>
            <span className={styles["action-icon"]}></span>
            <p className={`${styles["action-fig"]}`}>
              <span className="center">
                <ion-icon name="share-outline"></ion-icon>
              </span>
            </p>
          </div>
            {/* SHARE TWEET */}

        </div>
        {/* TWEET INSIGHT AND ACTIONS */}

      </div>
    </NavLink>
  );
};

export default Tweet;
