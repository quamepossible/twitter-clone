import styles from './Trends.module.css';

const Trends = ({ theTrend }) => {
  return (
    <div className={`${styles["banner-hold"]} row`}>
      <div className={styles["trends-data"]}>
        <p className={styles["trend-sub-title"]}>{theTrend[0]}</p>
        <p className={styles["trend-main-title"]}>{theTrend[1]}</p>
        <p className={styles["trend-data"]}>
          <span className={styles["trend-count"]}>{theTrend[2]}</span>
          <span> Tweets</span>
        </p>
      </div>
      <div className={styles["trends-menu"]}>
        <span
          className="material-symbols-outlined center"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#71767b",
          }}
        >
          more_horiz
        </span>
      </div>
    </div>
  );
};

export default Trends;
