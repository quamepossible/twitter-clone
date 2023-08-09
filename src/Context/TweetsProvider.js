import { createContext, Provider, useReducer } from "react";

const TweetsContext = createContext({});

const appData = {
  all_tweets: [],
  profile_info: {},
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
        all_tweets: [...state.all_tweets, action.data],
      };
    case "PROFILE":
      return {
        ...state,
        profile_info: action.data,
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

  const profileData = (profile) => {
    dispatchData({ type: "PROFILE", data: profile });
  };

  const passAppData = {
    app_data: initAppData,
  };
};

export default TweetsProvider;
