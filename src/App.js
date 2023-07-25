import verifiedIcon from "./Assets/verified.png";
import homeIcon from "./Assets/home.png";
import dp from "./Assets/dp.jpg";
import profilePic from "./Assets/omar.jpg";
import styles from "./App.module.css";

function App() {
  return (
    <section className={styles["parent-container"]}>
      <div className={`${styles["hold-page"]} row`}>
        {/* LEFT SECTION */}
        <div className={styles["left-section"]}>
          <div className={styles["home-nav"]}>
            <img
              src={homeIcon}
              alt="twitter-home"
              className={styles["home-icon"]}
            />
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                cottage
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Home</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                search
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Explore</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                notifications
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Notifications</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                mail
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Messages</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                description
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Lists</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                bookmark
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Bookmarks</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                group
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Communities</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                verified
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Verified</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                person
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>Profile</span>
            </div>
          </div>
          <div className={`${styles["nav-link"]} row`}>
            <div className={styles["nav-icon"]}>
              <span
                className="material-symbols-outlined center"
                style={{ fontSize: "30px" }}
              >
                more_horiz
              </span>
            </div>
            <div className={`${styles["nav-desc"]}`}>
              <span>More</span>
            </div>
          </div>

          <div className={styles["tweet-now"]}>Tweet</div>
        </div>
        {/* LEFT SECTION */}

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

        {/* RIGHT SECTION */}
        <div className={`${styles["right-section"]}`}>
          <div className={styles["right-search"]}>
            <form className={`${styles["right-form"]} center`}>
              <div className={`${styles["hold-search"]} row`}>
                <span className={styles["search-icon"]}>
                  <span
                    className="material-symbols-outlined center"
                    style={{ fontSize: "20px" }}
                  >
                    search
                  </span>
                </span>
                <input
                  type="text"
                  className={`${styles["right-input"]}`}
                  placeholder="Search Twitter"
                />
              </div>
            </form>
          </div>

          <div className={styles["verified-banner"]}>
            <div className={`${styles["verified-info"]} center`}>
              <p className={styles["get-ver"]}>Get Verified</p>
              <p className={styles["subs-ver"]}>
                Subscribe to unlock new features.
              </p>
              <button className={styles["ver-btn"]}>Get Verified</button>
            </div>
          </div>

          <div className={styles["trends-banner"]}>
            <p className={styles["trends-title"]}>Trends for you</p>
            <div className={`${styles["banner-content"]}`}>
              <div className={`${styles["banner-hold"]} row`}>
                <div className={styles["trends-data"]}>
                  <p className={styles["trend-sub-title"]}>Trending in Ghana</p>
                  <p className={styles["trend-main-title"]}>Snapchat</p>
                  <p className={styles["trend-data"]}>
                    <span className={styles["trend-count"]}>9,287</span>
                    <span> Tweets</span>
                  </p>
                </div>
                <div className={styles["trends-menu"]}>
                  <span
                    className="material-symbols-outlined center"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#71767b",
                    }}
                  >
                    more_horiz
                  </span>
                </div>
              </div>
              <div className={`${styles["banner-hold"]} row`}>
                <div className={styles["trends-data"]}>
                  <p className={styles["trend-sub-title"]}>Trending in Ghana</p>
                  <p className={styles["trend-main-title"]}>Snapchat</p>
                  <p className={styles["trend-data"]}>
                    <span className={styles["trend-count"]}>9,287</span>
                    <span> Tweets</span>
                  </p>
                </div>
                <div className={styles["trends-menu"]}>
                  <span
                    className="material-symbols-outlined center"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#71767b",
                    }}
                  >
                    more_horiz
                  </span>
                </div>
              </div>
              <div className={`${styles["banner-hold"]} row`}>
                <div className={styles["trends-data"]}>
                  <p className={styles["trend-sub-title"]}>Trending in Ghana</p>
                  <p className={styles["trend-main-title"]}>Snapchat</p>
                  <p className={styles["trend-data"]}>
                    <span className={styles["trend-count"]}>9,287</span>
                    <span> Tweets</span>
                  </p>
                </div>
                <div className={styles["trends-menu"]}>
                  <span
                    className="material-symbols-outlined center"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#71767b",
                    }}
                  >
                    more_horiz
                  </span>
                </div>
              </div>
              <div className={`${styles["banner-hold"]} row`}>
                <div className={styles["trends-data"]}>
                  <p className={styles["trend-sub-title"]}>Trending in Ghana</p>
                  <p className={styles["trend-main-title"]}>Snapchat</p>
                  <p className={styles["trend-data"]}>
                    <span className={styles["trend-count"]}>9,287</span>
                    <span> Tweets</span>
                  </p>
                </div>
                <div className={styles["trends-menu"]}>
                  <span
                    className="material-symbols-outlined center"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#71767b",
                    }}
                  >
                    more_horiz
                  </span>
                </div>
              </div>
              <div className={`${styles["banner-hold"]} row`}>
                <div className={styles["trends-data"]}>
                  <p className={styles["trend-sub-title"]}>Trending in Ghana</p>
                  <p className={styles["trend-main-title"]}>Snapchat</p>
                  <p className={styles["trend-data"]}>
                    <span className={styles["trend-count"]}>9,287</span>
                    <span> Tweets</span>
                  </p>
                </div>
                <div className={styles["trends-menu"]}>
                  <span
                    className="material-symbols-outlined center"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#71767b",
                    }}
                  >
                    more_horiz
                  </span>
                </div>
              </div>
              <div className={`${styles["banner-hold"]} row`}>
                <div className={styles["trends-data"]}>
                  <p className={styles["trend-sub-title"]}>Trending in Ghana</p>
                  <p className={styles["trend-main-title"]}>Instagram</p>
                  <p className={styles["trend-data"]}>
                    <span className={styles["trend-count"]}>9,287</span>
                    <span> Tweets</span>
                  </p>
                </div>
                <div className={styles["trends-menu"]}>
                  <span
                    className="material-symbols-outlined center"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#71767b",
                    }}
                  >
                    more_horiz
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["follow-banner"]}>
            <p className={styles["follow-title"]}>Who to follow</p>
            <div className={`${styles["follow-account"]} row`}>
              <div className={styles["account-img"]}>
                <img
                  src={profilePic}
                  alt="follow-img"
                  className={`${styles["follow-img"]} center`}
                />
              </div>
              <div className={styles["account-info"]}>
                <div className={`${styles["hold-info"]} center`}>
                  <p>
                    <span className={styles["account-name"]}>
                      Omar Sterling
                    </span>{" "}
                    <span className={styles["account-verified"]}>
                      <img
                        src={verifiedIcon}
                        alt="verified_icon"
                        className={styles["verified-icon"]}
                      />
                    </span>
                  </p>
                  <p className={styles["account-username"]}>@pound_sterlin</p>
                </div>
              </div>
              <div className={styles["follow-btn"]}>
                <button className="center">Follow</button>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SECTION */}
      </div>
    </section>
  );
}

export default App;
