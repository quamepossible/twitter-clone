import { useState, useContext } from "react";
import { TweetsContext } from "../../Context/TweetsProvider";

import coverImg from "../../Assets/cover.jpeg";
import styles from "./EditProfile.module.css";

import { useFormik } from "formik";
import * as Yup from "yup";

const EditProfile = ({ closeModal, bio }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [virtualForm, setVirtualForm] = useState(null);
  const [savingData, setSavingData] = useState(false);
  const { updateProfile, updateAllTweets } = useContext(TweetsContext)

  // get username from local storage
  const loggedUser = localStorage.getItem("profile");

  const handleCloseModal = () => {
    document.getElementById("root").style.height = "100%";
    document.getElementById("root").style.overflow = "";
    closeModal(false);
  };

  const readDPURL = (input) => {
    if (input.target.files && input.target.files[0]) {
      const dbPhotoForm = new FormData();
      dbPhotoForm.append("dbphoto", input.target.files[0]);
      setVirtualForm(dbPhotoForm);
      setSelectedImg(input.target.files[0]);
    } else {
      // this block only runs, when a user selects an image from device,
      // and later opens the upload file dialog, and cancels the upload dialog without uploading anything
      // this implies that the user doesn't want to select a new image, so I clear the previously selected image
      console.log("hey");
      setVirtualForm(null);
      setSelectedImg(null);
    }
  };
  const selectedURL = selectedImg ? URL.createObjectURL(selectedImg) : null;

  const formik = useFormik({
    initialValues: {
      name: bio.full_name,
      bio: bio.bio_caption,
      location: bio.location,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Name must be at least 5 characters")
        .required("Please enter a Name"),
      bio: Yup.string().max(160, "Bio must be at most 160 characters"),
      location: Yup.string().max(60, "Location must be at most 60 characters"),
    }),
    onSubmit: async (values) => {
      console.log(JSON.stringify(values));
    },
  });

  const submitForms = () => {
    const nameError = formik.touched.name && formik.errors.name;
    const bioError = formik.touched.bio && formik.errors.bio;
    const locationError = formik.touched.location && formik.errors.location;

    const allErrors = nameError || bioError || locationError;
    if (allErrors) {
      // there are errors on the form
      return;
    }

    if(savingData) {
      return;
    }
    setSavingData(true);
    console.log("saving won't run");

    const bioForm = document.getElementById("profile-edit-form");
    const bioData = new FormData(bioForm);
    const fullForm = new FormData();
    for (const [key, value] of bioData.entries()) {
      fullForm.append(key, value);
    }
    if (virtualForm) {
      for (const [key, value] of virtualForm.entries()) {
        fullForm.append(key, value);
      }
    }
    fullForm.append('username', loggedUser);
    console.log(Object.fromEntries(fullForm));
    // send fullForm to backend
    fetch(`${process.env.REACT_APP_ENDPOINT}/edit-profile`, {
      method: "POST",
      body: fullForm,
    })
      .then((res) => res.json())
      .then((res) => {
        const { status, response } = res;
        console.log(status);
        if(status === 'updated'){
          setSavingData(false);
          const { username, full_name, profile_pic } = response;
          const profileObj = {
            author: username,
            update: {
              author_fullName: full_name,
              profile_pic
            }
          }
          updateProfile(response);
          updateAllTweets(profileObj);
          handleCloseModal();
        }
      });
  };

  return (
    <div className={`${styles["edit-modal"]} center`}>
      <div className={styles["back-drop"]} onClick={handleCloseModal}></div>
      <div className={`${styles["modal"]} center`}>
        <div className={`${styles["edit-header"]} row`}>
          <div className={styles["close-modal"]}>
            <span className="center" onClick={handleCloseModal}>
              <ion-icon
                name="close-outline"
                style={{ fontSize: "30px", cursor:'pointer'}}
              ></ion-icon>
            </span>
          </div>
          <div className={styles["header-text"]}>
            <p className="center">Edit profile</p>
          </div>
          <div className={styles["save-modal"]}>
            <button className="center" style={savingData ? {backgroundColor: 'red', cursor: 'not-allowed'} : {}} type="button" onClick={submitForms}>
              {savingData ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
        <div className={styles["profile-media"]}>
          <div
            className={styles["cover-photo"]}
            style={{ backgroundImage: `url(${coverImg})` }}
          ></div>
          <div
            className={styles["profile-photo"]}
            style={{ backgroundImage: `url(${selectedURL || bio.profile_pic})` }}
          >
            <div className={styles["photo-overlay"]}></div>
            <label
              htmlFor="photo-file"
              className={`${styles["photo-icon"]} center`}
            >
              <input
                type="file"
                id="photo-file"
                style={{ display: "none" }}
                accept="image/x-png,image/gif,image/jpeg, image/jpg"
                onChange={readDPURL}
              />
              <span>
                <ion-icon
                  name="camera-outline"
                  className="center"
                  style={{ fontSize: "25px" }}
                ></ion-icon>
              </span>
            </label>
          </div>
        </div>
        <div className={styles["bio-form"]}>
          <form id="profile-edit-form" className={styles["profile-form"]}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              {...formik.getFieldProps("name")}
              style={{
                border:
                  formik.touched.name && formik.errors.name && "1px solid red",
              }}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles["error-sec"]}>{formik.errors.name}</div>
            ) : null}
            <input
              name="bio"
              type="text"
              placeholder="Bio"
              {...formik.getFieldProps("bio")}
              style={{
                border:
                  formik.touched.bio && formik.errors.bio && "1px solid red",
              }}
            />
            {formik.touched.bio && formik.errors.bio ? (
              <div className={styles["error-sec"]}>{formik.errors.bio}</div>
            ) : null}
            <input
              name="location"
              type="text"
              placeholder="Location"
              {...formik.getFieldProps("location")}
              style={{
                border:
                  formik.touched.location &&
                  formik.errors.location &&
                  "1px solid red",
              }}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className={styles["error-sec"]}>
                {formik.errors.location}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
