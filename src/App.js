import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRouter from "./HomeRouter";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

import styles from "./App.module.css";

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <HomeRouter />, children: [
      {index: true, element: <Home />},
      {path: 'profile', element: <Profile />}
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
