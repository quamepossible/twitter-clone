import styles from "./Follow.module.css";
import verifiedIcon from "../../../Assets/verified.png";
import profilePic from "../../../Assets/omar.jpg";

const Follow = ({followAccount}) => {
  return (
    <>
      <div className={`${styles["follow-account"]} row`}>
        <div className={styles["account-img"]}>
          <img
            src={profilePic}
            alt="follow-img"
            className={`${styles["follow-img"]} center`}
          />
        </div>
        <div className={styles["account-info"]}>
          <div className={`${styles["hold-info"]} center`}>
            <p>
              <span className={styles["account-name"]}>{followAccount[0]}</span>{" "}
              <span className={styles["account-verified"]}>
                <img
                  src={verifiedIcon}
                  alt="verified_icon"
                  className={styles["verified-icon"]}
                />
              </span>
            </p>
            <p className={styles["account-username"]}>{followAccount[1]}</p>
          </div>
        </div>
        <div className={styles["follow-btn"]}>
          <button className="center">Follow</button>
        </div>
      </div>
    </>
  );
};

export default Follow;
