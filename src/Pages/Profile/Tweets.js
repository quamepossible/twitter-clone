import Tweet from "../../Components/Tweets/Tweet";
const Tweets = ({tweetPostData}) => {
    return (
        <>
        {tweetPostData.map((tweet, i) => <Tweet key={i} tweetData={tweet} />)}
        </>
    )
}

export default Tweets;