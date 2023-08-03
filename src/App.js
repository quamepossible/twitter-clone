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

// import utility functions
import { tweetsLoader } from "./util/tweets-fetch";

// single tweet page
import TweetPage, {TweetPageError} from "./Pages/Tweet/TweetPage";

// MEDIA MODAL
import MediaModal from "./Pages/Modal/MediaModal";

// ERROR 404
import Error404 from "./Pages/Error/404";

import styles from "./App.module.css";



const tweetPostData = [
  {
    id: "456",
    full_name: "Kwame Opoku - Appiah",
    username: "quame_mission",
    tweet_caption:
      "Hello world, welcome to my Twitter clone. It doesn't look great, but I'm trying to work that out.",
    comments_total: "350",
    retweets: "200",
    likes: "430",
    views: "980",
    datePosted: "Jul 25",
    timePosted: "2:30 AM",
    mediaURL: "austin.jpg",
    media: false,
    location: "Accra, Ghana",
    comments: [{
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
    }],
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
          loader: tweetsLoader
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            { index: true, element: <Tweets tweetPostData={[]} /> },
            { path: "replies", element: <Replies /> },
            { path: "highlights", element: <Highlights /> },
            { path: "media", element: <Media /> },
            { path: "likes", element: <Likes /> },
          ],
        },
        {
          path: "profile/status/:id",
          id: 'status',
          children: [
            {
              index: true,
              element: <TweetPage />,
              errorElement: <TweetPageError />,
              loader: function ({ _, params }) {
                // fetch and return the tweet data of the tweet with using the slug provided at (:id)
                // const getTweetById = allTweets.filter((tweet) => tweet.author_id === params.id);
                // console.log(getTweetById);

                // return getTweetById[0];
              },
            },
            { path: "photo/:num", element: <MediaModal defaultModalState={true} /> },
          ],
        },
      ],
    },
  ]);

  console.log('App running');
  return (
    <section className={styles["parent-container"]}>
      <div className={`${styles["hold-page"]} row`}>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </div>
    </section>
  );
}

export default App;
