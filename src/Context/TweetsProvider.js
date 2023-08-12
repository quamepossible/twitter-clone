import React, { createContext, useReducer, useCallback } from "react";

const TweetsContext = createContext({
  all_tweets: [],
  loggedInProfile: {},
  postTweet: () => {},
  fetchTweets: () => {},
  updateProfile: () => {},
  eachProfile: () => {},
  loggin: () => {},
});

const appData = {
  all_tweets: [],
  profile_info: {},
  loggedInProfile: {},
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH-TWEETS":
      return {
        ...state,
        all_tweets: action.data,
      };
    case "NEW-TWEET":
      return {
        ...state,
        all_tweets: [action.data, ...state.all_tweets],
      };
    case "UPDATE-ALL-TWEETS":
      const applyUpdate = state.all_tweets.map((tweet) => {
        if (tweet.author_id === action.data.author) {
          return { ...tweet, ...action.data.update };
        }
        return tweet;
      });
      return {
        ...state,
        all_tweets: applyUpdate,
      };
    case "PROFILE":
      return {
        ...state,
        profile_info: action.data,
      };
    case "UPDATE-AUTHOR":
      return {
        ...state,
        profile_info: action.data,
      };
    case "LOGGED-IN":
      return {
        ...state,
        loggedInProfile: action.data,
      };
    default:
      return state;
  }
};

const TweetsProvider = (props) => {
  const [initAppData, dispatchData] = useReducer(dataReducer, appData);

  const postNewTweet = (tweet) => {
    dispatchData({ type: "NEW-TWEET", data: tweet });
  };

  const fetchAllTweets = (tweets) => {
    dispatchData({ type: "FETCH-TWEETS", data: tweets });
  };

  const updateAuthorDetails = useCallback((author) => {
    dispatchData({ type: "UPDATE-AUTHOR", data: author });
  }, []);

  const updateAllTweets = useCallback((profileObj) => {
    dispatchData({ type: "UPDATE-ALL-TWEETS", data: profileObj})

  },[])

  const profileData = useCallback((profile) => {
    dispatchData({ type: "PROFILE", data: profile });
  }, []);

  const loggedIn = useCallback((profile) => {
    dispatchData({ type: "LOGGED-IN", data: profile });
  }, []);

  const passAppData = {
    all_tweets: initAppData.all_tweets,
    profileData: initAppData.profile_info,
    loggedInProfile: initAppData.loggedInProfile,
    postTweet: postNewTweet,
    fetchTweets: fetchAllTweets,
    updateProfile: updateAuthorDetails,
    updateAllTweets,
    eachProfile: profileData,
    loggin: loggedIn,
  };

  return (
    <TweetsContext.Provider value={passAppData}>
      {props.children}
    </TweetsContext.Provider>
  );
};

export default TweetsProvider;
export { TweetsContext };
