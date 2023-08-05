

const fetchAllTweets = async () => {
  try {
    const tweetsRes = await fetch(process.env.REACT_APP_FETCH_TWEETS);
    if (!tweetsRes.ok) throw new Error("fetch failed");
    return tweetsRes.json();
  } catch (err) {
    return { status: "failed" };
  }
};


const tweetsLoader = async () => {
    const tweetsRes = await fetchAllTweets();
    return tweetsRes;
}

const singleTweetLoader = async ({_, params}) => {
    const tweetsRes = await fetchAllTweets();
    // fetch and return the tweet data of the tweet with using the slug provided at (:id)
    const getTweetById = tweetsRes.filter((tweet) => tweet.tweet_id === params.id);
    return getTweetById[0];
}

const eachProfileTweetsLoader = async ({_, params}) => {
  try{
    const fetchURL = `${process.env.REACT_APP_PROFILE_TWEETS}?profile=${params.username}`;
    const fetchProfileTweets = await fetch(fetchURL);
    if(!fetchProfileTweets.ok) throw new Error ("Profile tweets fetch failed from Database");
    return fetchProfileTweets.json();
  } catch(err) {
    return { status: err.message };
  }
}

export { tweetsLoader, singleTweetLoader, eachProfileTweetsLoader }