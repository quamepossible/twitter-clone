import React, { useState, useRef, useContext } from "react";
import { useNavigation } from "react-router";
import styles from "./Home.module.css";
import dp from "../Assets/dp.jpg";
import Tweet from "../Components/Tweets/Tweet";

import { TweetsContext } from "../Context/TweetsProvider";

const Home = () => {
  console.log('Home page');
  const userIsAuthenticated = localStorage.getItem('user');

  const fetchTweetsCtx = useContext(TweetsContext);
  const { all_tweets, postTweet:newTweet, loggedInProfile } = fetchTweetsCtx;
  const { profile_pic } = loggedInProfile;

  const [validPost, setValidPost] = useState(false);
  const [tweetMedia, setTweetMedia] = useState(null);
  const [posting, setPosting] = useState(false);
  const tweetText = useRef();

  const theNav = useNavigation();
  const loading = theNav.state === "loading";

  const validClass = validPost ? "valid-button" : "pending-button";

  const validateTweet = (e) => {
    if(!e.target.value.length){
      setValidPost(false);
      return;
    }
    setValidPost(true);
  }

  const mediaTriggered = (mediaInput) => {
    if(mediaInput.target.files && mediaInput.target.files[0]){
      const mediaForm = new FormData();
      mediaForm.append('tweetmedia', mediaInput.target.files[0]);
      setTweetMedia(mediaForm);
    }
    else{
      console.log('hey');
      setTweetMedia(null);
    }
  }

  const postTweet = async () => {
    if(!validPost) return;
    if(posting) return;
    setPosting(true);
    // get author id
    const authorID = localStorage.getItem('profile');

    const tweetValidForm = new FormData();
    // check if tweet contains media
    if(tweetMedia) {
      for (const [key, value] of tweetMedia.entries()) {
        tweetValidForm.append(key, value);
      }
    }
    const tweetInput = tweetText.current.value;
    tweetValidForm.append('tweet', tweetInput);

    // append date, and author ID
    tweetValidForm.append('date', new Date().toISOString());
    tweetValidForm.append('authID', authorID);
    console.log(Object.fromEntries(tweetValidForm));

   fetch(`${process.env.REACT_APP_ENDPOINT}/post-tweet`, {
      method: 'POST',
      body: tweetValidForm
    }).then(res => res.json()).then(res =>  {
      console.log(res);
      const { addedTweet } = res;
      newTweet(addedTweet);
      setValidPost(false);
      setTweetMedia(null);
      tweetText.current.value = '';
      setPosting(false);
    })
  }
  return (
    <>
      {/* CENTER CONTENT */}
      {loading && <p>Loading Home Page</p>}
      {!loading && (
        <div className={styles["content-section"]}>
          <div className={styles["top-home"]}></div>
          {!userIsAuthenticated && <div className={styles["log-tweet"]}>
            <button className={`${styles['unauth-btn']} center`}>Login to post tweets</button>
          </div>}

          {userIsAuthenticated && <div className={`${styles["post-tweet"]} row`}>
            <div className={styles["tweeter-dp"]}>
              <div
                className={styles["tweet-pic"]}
                style={{ backgroundImage: `url(${profile_pic})` }}
              ></div>
            </div>
            <div className={styles["tweet-section"]}>
              <div className={styles["tweet-input-field"]}>
                <form className="center" onSubmit={(e)=>e.preventDefault()}>
                  <input
                    onChange={validateTweet}
                    ref={tweetText}
                    className={styles["tweet-input"]}
                    type="text"
                    name="tweet"
                    placeholder="What is happening?!"
                  />
                </form>
              </div>
              <div className={`${styles["tweet-actions"]} row`}>
                <div className={`${styles["tweets-btns"]} row`}>
                  <div className={`${styles["hold-tweet-btns"]}`}>
                    <label htmlFor="tweet-media" className={`${styles["upl-btn"]} center`}>
                      <input
                        type="file"
                        name="tweet-media"
                        id="tweet-media"
                        style={{ display: "none" }}
                        onChange={mediaTriggered}
                      />
                      <span className={styles["media-text"]}>
                        {" "}
                        <span className={styles["tweet-ico"]}>
                          <ion-icon name="image-outline"></ion-icon>
                        </span>
                        upload media
                      </span>
                    </label>                    
                  </div>  
                  {tweetMedia && <div className={styles['img-selected']}>
                    <div className={`${styles['hold-sel']} center row`}>
                      <span className={styles['sel-ico']}><ion-icon name="checkmark-done-circle-outline"></ion-icon></span>
                      <span className={styles['sel-text']}>media selected</span>
                    </div>
                  </div>}             
                </div>
                <div className={styles["centered-space"]}></div>
                <div className={styles["post-tweet-btn"]}>
                  <button type="button" style={posting ? {width: '120px', cursor: 'not-allowed'} : {}} onClick={postTweet} className={`${validClass} center`}>
                    {posting ? 'Tweeting 📱' : 'Tweet'}
                  </button>
                </div>
              </div>
            </div>
          </div>}

          {/* render all tweets */}
          {all_tweets && all_tweets.map((tweet, i) => (
            <Tweet key={i} tweetData={tweet} />
          ))}
          {/* render all tweets */}
        </div>
      )}
      {/* CENTER CONTENT */}
    </>
  );
};

export default React.memo(Home);
