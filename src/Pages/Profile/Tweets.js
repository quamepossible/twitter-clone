import { useLoaderData } from 'react-router';
import Tweet from "../../Components/Tweets/Tweet";
const Tweets = () => {
  const getAllTweets = useLoaderData();
    return (
        <>
        {getAllTweets.map((tweet, i) => <Tweet key={i} tweetData={tweet} />)}
        </>
    )
}

export default Tweets;