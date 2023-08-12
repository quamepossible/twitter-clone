import ModalProvider from "./Context/ModalProvider";
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

//all tweets provider
import TweetsProvider, { TweetsContext } from "./Context/TweetsProvider";

// profile settings modal
import EditProfile from "./Pages/Settings/EditProfile";

// import utility functions
import {
  tweetsLoader,
  singleTweetLoader,
  eachProfileTweetsLoader,
} from "./util/tweets-fetch";

// single tweet page
import TweetPage, { TweetPageError } from "./Pages/Tweet/TweetPage";

// MEDIA MODAL
import MediaModal from "./Pages/Modal/MediaModal";

// LOGIN MODAL
import Login from "./Components/LoginModal/Login";

// ERROR 404
import Error404 from "./Pages/Error/404";

import styles from "./App.module.css";

const tweetPostData = [
  {
    id: "456",
    full_name: "Kwame Opoku - Appiah",
    username: "quame_mission",
    comments: [
      {
        ref_to: "123",
        id: "234",
        full_name: "Austin Richard Post",
        username: "posty",
        tweet_caption: "Posty's comment",
        comments_total: "2",
        retweets: "10",
        likes: "100",
        views: "1,200",
        datePosted: "Jul 25",
        timePosted: "2:30 AM",
        mediaURL: "austin.jpg",
        media: false,
        location: "Accra, Ghana",
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRouter />,
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: tweetsLoader,
        },
        {
          path: ":username",
          element: <Profile />,
          children: [
            {
              index: true,
              element: <Tweets />,
              loader: eachProfileTweetsLoader,
            },
            { path: "replies", element: <Replies /> },
            { path: "highlights", element: <Highlights /> },
            { path: "media", element: <Media /> },
            { path: "likes", element: <Likes /> },
          ],
        },
        {
          path: ":username/status/:id",
          id: "status",
          children: [
            {
              index: true,
              element: <TweetPage />,
              // errorElement: <TweetPageError />,
              // loader: singleTweetLoader,
            },
            {
              path: "photo/:num",
              element: <MediaModal defaultModalState={true} />,
            },
          ],
        },
      ],
    },
    {
      path: "auth",
      element: <Login />,
    },
  ]);

  console.log("App running");
  return (
    <section className={styles["parent-container"]}>
      <div className={`${styles["hold-page"]} row`}>
        <TweetsProvider>
          <ModalProvider>
            <RouterProvider router={router} />
          </ModalProvider>
        </TweetsProvider>
      </div>
    </section>
  );
}

export default App;
