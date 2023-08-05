import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useSearchParams, Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./Login.module.css";
import logo from "../../Assets/home.png";

const LoginModal = () => {
  const [searchParams] = useSearchParams();
  const currentAction = searchParams.get("action");
  const signIn = currentAction === "login";
  if (currentAction !== "login" && currentAction !== "signup")
    window.location.href = "/";
  const nextActionLink = signIn ? "signup" : "login";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 character")
        .max(20, "Must be at most 20 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(JSON.stringify(values));
      const requestRes = await fetch(`http://localhost:3005/${currentAction}`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const theResponse = await requestRes.json();
      if(theResponse?.userToken) { // sign-up / log-in authenticated successfully
        const { userToken, profile } = theResponse;
        console.log(userToken);
        // set up localstorage for token
        localStorage.setItem('user', userToken);
        localStorage.setItem('profile', profile);
        console.log(profile);
      }
      if(theResponse?.status){ // failed sign-up / log-in
        const { status } = theResponse;
        console.log(status);
      }
    },
  });
  return (
    <>
      <div className={styles["login-modal"]}>
        <div className={`${styles["modal-content"]} center`}>
          <div className={styles["login-logo"]}>
            <span className={styles["close-login"]}>
              <ion-icon
                className={styles["close-icon"]}
                style={{ fontSize: "25px" }}
                name="close-outline"
              ></ion-icon>
            </span>
            <img src={logo} alt="logo" className={styles["logo"]} />
          </div>
          <div className={styles["login-sec"]}>
            <p className={styles["sign-text"]}>
              {signIn ? "Sign in to Twitter" : "Create account"}
            </p>
            <div className={styles["google-sign"]}>Google Sign in</div>
            <div className={styles["alt"]}>
              <div className={`${styles["line"]} center`}></div>
              <div className={`${styles["or"]} center`}>
                <span className="center">or</span>
              </div>
            </div>
            <form
              className={styles["login-form"]}
              onSubmit={formik.handleSubmit}
            >
              <input
                type="email"
                name="email"
                className={styles["username"]}
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              <input
                type="password"
                name="password"
                className={styles["password"]}
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              <button type="submit" className={styles["sign-btn"]}>
                {signIn ? 'Sign In' : 'Create account'}
              </button>
              {signIn && <button type="button" className={styles["forgot-btn"]}>
                Forgot password?
              </button>}
            </form>
            <div className={styles["sign-up"]}>
              <p>
                {!signIn ? "Already" : "Don't"} have an account?{" "}
                <Link to={`?action=${nextActionLink}`}>
                  {signIn ? "Sign up" : "Login"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Login = () => {
  return (
    <>{createPortal(<LoginModal />, document.getElementById("login-modal"))}</>
  );
};

export default Login;
