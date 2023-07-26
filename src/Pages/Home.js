import styles from './Home.module.css';
import dp from "../Assets/dp.jpg";
import Tweet from '../Components/Tweets/Tweet';


const Home = ({tweetPostData}) => {
 
    return (
        <>
        {/* CENTER CONTENT */}
        <div className={styles["content-section"]}>
          <div className={styles["top-home"]}></div>
          <div className={`${styles["post-tweet"]} row`}>
            <div className={styles["tweeter-dp"]}>
              <div
                className={styles["tweet-pic"]}
                style={{ backgroundImage: `url(${dp})` }}
              ></div>
            </div>
            <div className={styles["tweet-section"]}>
              <div className={styles["tweet-input-field"]}>
                <form className="center">
                  <input
                    className={styles["tweet-input"]}
                    type="text"
                    placeholder="What is happening?!"
                  />
                </form>
              </div>
              <div className={`${styles["tweet-actions"]} row`}>
                <div className={styles["tweets-btns"]}>
                  <div className={`${styles["hold-tweet-btns"]} center row`}>
                    <span className={styles["tweet-ico"]}>
                      <ion-icon name="image-outline"></ion-icon>
                    </span>
                    <span className={styles["tweet-ico"]}>
                      <span className="material-symbols-outlined center">gif_box</span>
                    </span>
                    <span className={styles["tweet-ico"]}>
                      <ion-icon name="list-outline"></ion-icon>
                    </span>
                    <span className={styles["tweet-ico"]}>
                      <ion-icon name="happy-outline"></ion-icon>
                    </span>
                    <span className={styles["tweet-ico"]}>
                      <span className="material-symbols-outlined center">
                        pending_actions
                      </span>
                    </span>
                    <span className={styles["tweet-ico"]}>
                      <ion-icon name="location-outline"></ion-icon>
                    </span>
                  </div>
                </div>
                <div className={styles["centered-space"]}></div>
                <div className={styles["post-tweet-btn"]}>
                  <button className="center">Tweet</button>
                </div>
              </div>
            </div>
          </div>

        {tweetPostData.map((tweet, i) => <Tweet key={i} tweetData={tweet} />)}

          


        </div>
        {/* CENTER CONTENT */}
        </>
    )
}

export default Home;