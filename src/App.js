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

import styles from "./App.module.css";

const tweetPostData = [
  ['Kwame Opoku - Appiah', 'quame_mission', 'Hello world this is just a dummy text.', {comments: '350', retweets: '200', likes: '430', views: '980', datePosted: 'Jul 25'}],
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
      ]}
    ]}
  ])
  return (
    <section className={styles["parent-container"]}>
      <div className={`${styles["hold-page"]} row`}>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </section>
  );
}

export default App;
