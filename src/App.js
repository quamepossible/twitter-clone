

import LeftNav from "./Components/NAV/LeftNav";
import Home from "./Pages/Home";
import RightNav from "./Components/NAV/RightNav";


import styles from "./App.module.css";

function App() {
  return (
    <section className={styles["parent-container"]}>
      <div className={`${styles["hold-page"]} row`}>
        <LeftNav />
        <Home />
        <RightNav />   
      </div>
    </section>
  );
}

export default App;
