import profilePic from "../../Assets/omar.jpg";
import styles from "./Tweet.module.css";

const Tweet = ({ tweetData }) => {
  const [fullName, username, caption, insight] = tweetData;
  const { comments, retweets, likes, views, datePosted } = insight;
  return (
    <div className={`${styles["tweets"]} row`}>
      <div className={styles["author-photo"]}>
        <img alt="author-dp" src={profilePic} className={styles["author-dp"]} />
      </div>

      <div className={styles["tweet-content"]}>
        <div className={styles["author-name"]}>
          <span className={styles["profile-name"]}>{fullName}</span>{" "}
          <span className={styles["check-mark"]}></span>{" "}
          <span className={styles["user-name"]}>@{username}</span>{" "}
          <span className={`${styles['dot']}`}><span className="center" style={{display: 'inline-block', height:'30px'}}>.</span></span>
          <span className={styles['date-tweeted']}>{datePosted}</span>
        </div>
        <p className={styles["author-caption"]}>{caption}</p>
        <div className={styles["tweet-media"]}></div>
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
    </div>
  );
};

export default Tweet;
