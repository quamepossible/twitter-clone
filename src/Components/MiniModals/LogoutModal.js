import { useRef } from "react";
import styles from "./LogoutModal.module.css";

const LogoutModal = ({ user }) => {
  const userIsAuthenticated = localStorage.getItem("user");

  const authVal = useRef();

  const logoutHandler = (e) => {
    e.preventDefault();

    const authToken = authVal.current.value;
    const logoutForm = new FormData();

    logoutForm.append("token", authToken);
    fetch(`${process.env.REACT_APP_ENDPOINT}/logout`, {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(logoutForm)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.clear();
        const { status } = res;
        if (status === "signed out") {
          window.location.reload();
        }
        if (status === "failed") {
          console.log("sign out failed");
        }
        console.log(res);
      });
  };
  return (
    <>
      {/* <div className={`${styles['log-modal']}`}></div> */}
      <div className={styles["hold-log"]}>
        <div className={styles["pop-up"]}>
          <form
            className={`${styles["out-form"]} center`}
            onSubmit={logoutHandler}
          >
            <input
              type="text"
              style={{ display: "none" }}
              ref={authVal}
              defaultValue={userIsAuthenticated}
            />
            <button type="submit" className={styles["logout-btn"]}>
              Log out @{user}
            </button>
          </form>
        </div>
        <span className={`${styles["icon"]} material-symbols-sharp center`}>
          arrow_drop_down
        </span>
      </div>
    </>
  );
};

export default LogoutModal;
