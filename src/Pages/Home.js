import styles from './Home.module.css';
import dp from "../Assets/dp.jpg";
import profilePic from "../Assets/omar.jpg";


const Home = () => {
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

          <div className={`${styles["tweets"]} row`}>
            <div className={styles["author-photo"]}>
              <img
                alt="author-dp"
                src={profilePic}
                className={styles["author-dp"]}
              />
            </div>

            <div className={styles["tweet-content"]}>
              <div className={styles["author-name"]}>
                <span className={styles["profile-name"]}>
                  Kwame Opoku - Appiah
                </span>{" "}
                <span className={styles["check-mark"]}></span>{" "}
                <span className={styles["user-name"]}>@quame_mission</span>{" "}
                <span>Jul 22</span>
              </div>
              <p className={styles["author-caption"]}>
                Hello world this is just a full fucking dummy text, I want to
                get more texts.
                <br />
                Okay, I think we are almost heading to enough texts of the page.
              </p>
              <div className={styles["tweet-media"]}></div>
              <div className={`${styles["tweet-insight"]} row`}>
                <div className={`${styles["action-span"]} row`}>
                  <span className={styles["action-icon"]}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                  </span>
                  <p className={`${styles["action-fig"]}`}>
                    <span className="center">350</span>
                  </p>
                </div>
                <div className={`${styles["action-span"]} row`}>
                  <span className={styles["action-icon"]}>
                    <ion-icon name="git-compare-outline"></ion-icon>
                  </span>
                  <p className={`${styles["action-fig"]}`}>
                    <span className="center">350</span>
                  </p>
                </div>
                <div className={`${styles["action-span"]} row`}>
                  <span className={styles["action-icon"]}>
                    <ion-icon name="heart-outline"></ion-icon>
                  </span>
                  <p className={`${styles["action-fig"]}`}>
                    <span className="center">350</span>
                  </p>
                </div>
                <div className={`${styles["action-span"]} row`}>
                  <span className={styles["action-icon"]}>
                    <ion-icon name="stats-chart"></ion-icon>
                  </span>
                  <p className={`${styles["action-fig"]}`}>
                    <span className="center">350</span>
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
        </div>
        {/* CENTER CONTENT */}
        </>
    )
}

export default Home;