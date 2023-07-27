import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";


import profilePic from "../../Assets/omar.jpg";
import styles from "./Tweet.module.css";
import defaultMedia from '../../Assets/media/posty.jpg'

const Tweet = ({ tweetData }) => {
  const mediaRef = useRef(null);

  useEffect(() => {
    const imageDimensionSet = () => {
      if(mediaRef.current){
        const image = new Image();
        image.src = defaultMedia;
        image.onload = () => {
          const imageWidth = +image.width;
          const imageHeight = +image.height;

          let desiredWidth = imageWidth;
          let desiredHeight = imageHeight;

          if(imageWidth > 520){
            const excessWidth = imageWidth - 520;
            const excessPerc = Math.round((excessWidth / imageWidth) * 100);

            desiredWidth = 520;
            desiredHeight = Math.round(((100 - excessPerc) / 100) * imageHeight);
          } 
          mediaRef.current.style.width = `${desiredWidth}px`;
          mediaRef.current.style.height = `${desiredHeight}px`;
        }
      }

    }
    imageDimensionSet()
  }, [])
  const {full_name, username, tweet_caption, id, comments, retweets, likes, views, datePosted, media, mediaURL } = tweetData;
  const tweetMedia = media ? mediaURL : '';
  const tweetPath = `/profile/status/${id}`;
  return (
    <NavLink to={tweetPath} className={`${styles["tweets"]} row`}>
      <div className={styles["author-photo"]}>
        <img alt="author-dp" src={profilePic} className={styles["author-dp"]} />
      </div>

      <div className={styles["tweet-content"]}>
        <div className={styles["author-name"]}>
          <span className={styles["profile-name"]}>{full_name}</span>{" "}
          <span className={styles["check-mark"]}></span>{" "}
          <span className={styles["user-name"]}>@{username}</span>{" "}
          <span className={`${styles['dot']}`}><span className="center" style={{display: 'inline-block', height:'30px'}}>.</span></span>
          <span className={styles['date-tweeted']}>{datePosted}</span>
        </div>
        <p className={styles["author-caption"]}>{tweet_caption}</p>
        {media && <div ref={mediaRef} className={styles["tweet-media"]} style={{backgroundImage: `url(${defaultMedia})`}}></div>}
        <div className={`${styles["tweet-insight"]} row`}>
          <div className={`${styles["action-span"]} row`}>
            <span className={styles["action-icon"]}>
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </span>
            <p className={`${styles["action-fig"]}`}>
              <span className="center">{comments}</span>
            </p>
          </div>
          <div className={`${styles["action-span"]} row`}>
            <span className={styles["action-icon"]}>
              <ion-icon name="git-compare-outline"></ion-icon>
            </span>
            <p className={`${styles["action-fig"]}`}>
              <span className="center">{retweets}</span>
            </p>
          </div>
          <div className={`${styles["action-span"]} row`}>
            <span className={styles["action-icon"]}>
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            <p className={`${styles["action-fig"]}`}>
              <span className="center">{likes}</span>
            </p>
          </div>
          <div className={`${styles["action-span"]} row`}>
            <span className={styles["action-icon"]}>
              <ion-icon name="stats-chart"></ion-icon>
            </span>
            <p className={`${styles["action-fig"]}`}>
              <span className="center">{views}</span>
            </p>
          </div>
          <div className={`${styles["action-span"]} row`}>
            <span className={styles["action-icon"]}></span>
            <p className={`${styles["action-fig"]}`}>
              <span className="center">
                <ion-icon name="share-outline"></ion-icon>
              </span>
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Tweet;
