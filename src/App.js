import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRouter from "./HomeRouter";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

// profile page's sub pages
import Tweets from "./Pages/Profile/Tweets";
import Replies from "./Pages/Profile/Replies";
import Highlights from "./Pages/Profile/Highlights";
import Media from "./Pages/Profile/Media";
import Likes from "./Pages/Profile/Likes";

// single tweet page
import TweetPage from "./Pages/Tweet/TweetPage";

import styles from "./App.module.css";

const tweetPostData = [
  {id: '456', full_name: 'Kwame Opoku - Appiah', username: 'quame_mission', tweet_caption: 'Hello world this is just a dummy text.Hello world this is just a dummy text.Hello world this is just a dummy text.Hello world this is just a dummy text.', comments: '350', retweets: '200', likes: '430', views: '980', datePosted: 'Jul 25', mediaURL: 'austin.jpg', media: false},
  {id: '123', full_name: 'Post Malone', username: 'post_malone', tweet_caption: 'I had a very nice race today.', comments: '350', retweets: '200', likes: '430', views: '980', datePosted: 'Jul 25', timePosted: '2:30 AM', mediaURL: 'austin.jpg', media: true, location: 'Accra, Ghana'},
]

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <HomeRouter />, children: [
      {index: true, element: <Home tweetPostData={tweetPostData} />},
      {path: 'profile', element: <Profile/>, children: [
        {index: true, element: <Tweets tweetPostData={tweetPostData} />},
        {path: 'replies', element: <Replies />},
        {path: 'highlights', element: <Highlights />},
        {path: 'media', element: <Media />},
        {path: 'likes', element: <Likes />},
      ]},
      {path: 'profile/status/:id', children: [
        {
          index: true, 
          element: <TweetPage />, 
          loader: function({_, params}){
            const getTweetById = tweetPostData.filter(tweet => tweet.id === params.id);
            console.log(getTweetById);
            return getTweetById[0];
          }
        },
        {path: 'photo/:num', element: '',},
      ]}
    ]}
  ]);
  return (
    <section className={styles["parent-container"]}>
      <div className={`${styles["hold-page"]} row`}>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </section>
  );
}

export default App;
