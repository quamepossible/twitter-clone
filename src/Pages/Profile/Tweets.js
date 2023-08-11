import { useContext } from 'react';
import { useParams } from 'react-router';

import { TweetsContext } from '../../Context/TweetsProvider';
import Tweet from "../../Components/Tweets/Tweet";
const Tweets = () => {
  const { all_tweets } = useContext(TweetsContext);
  const profileTweets = useParams().username;

    return (
        <>
        {all_tweets.filter(tweet => tweet.author_id === profileTweets).map((tweet, i) => <Tweet key={i} tweetData={tweet} />)}
        </>
    )
}

export default Tweets;