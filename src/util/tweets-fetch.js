

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

export {fetchAllTweets, tweetsLoader}