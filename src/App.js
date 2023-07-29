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

// single tweet page
import TweetPage from "./Pages/Tweet/TweetPage";

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
    comments: [
      {
        ref_to: "456",
        id: "339",
        full_name: "Baffoe Samuel",
        username: "tender",
        tweet_caption: "Tender's comment",
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
      {
        ref_to: "339",
        id: "228",
        full_name: "Asamoah Joshua",
        username: "fashion",
        tweet_caption:
          "Fashion's comment, which must be under tender's comment",
        comments_total: "1",
        retweets: "23",
        likes: "900",
        views: "5,200",
        datePosted: "Jul 26",
        timePosted: "5:20 AM",
        mediaURL: "austin.jpg",
        media: false,
        location: "Kumasi, Ashanti",
      },
      {
        ref_to: "228",
        id: "440",
        full_name: "Mr Drew",
        username: "drew",
        tweet_caption: "Drew's comment, which must be under fashion's comment",
        comments_total: "3",
        retweets: "9",
        likes: "180",
        views: "150",
        datePosted: "Jul 28",
        timePosted: "8:50 PM",
        mediaURL: "austin.jpg",
        media: false,
        location: "Abuakwa, Ashanti",
      },
      {
        ref_to: "456",
        id: "539",
        full_name: "Kwabena Benedict",
        username: "kobby",
        tweet_caption: "This is a main comment under the main tweet",
        comments_total: "1",
        retweets: "10",
        likes: "32",
        views: "830",
        datePosted: "Jul 27",
        timePosted: "7:18 PM",
        mediaURL: "austin.jpg",
        media: false,
        location: "Sunyani, Brong",
      },
    ],
  },
  {
    id: "123",
    full_name: "Post Malone",
    username: "post_malone",
    tweet_caption:
      "And, oh!... You can't do all the cool stuffs for now. I'm still building the interface and I'm hoping to give you a wonderful UX very soon 😔",
    comments_total: "350",
    comments: [
      {
        ref_to: "123",
        id: "339",
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
      }
    ],
    retweets: "40",
    likes: "110",
    views: "80",
    datePosted: "Jul 20",
    timePosted: "4:15 PM",
    mediaURL: "austin.jpg",
    media: true,
    location: "Sunyani, Ghana",
  },
];

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRouter />,
      errorElement: <Error404 />,
      children: [
        { index: true, element: <Home tweetPostData={tweetPostData} /> },
        {
          path: "profile",
          element: <Profile />,
          children: [
            { index: true, element: <Tweets tweetPostData={tweetPostData} /> },
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
              loader: function ({ _, params }) {
                // fetch and return the tweet data of the tweet with using the slug provided at (:id)
                const getTweetById = tweetPostData.filter((tweet) => tweet.id === params.id);
                return getTweetById[0];
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
