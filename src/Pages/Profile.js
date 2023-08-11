import React, { useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Outlet, NavLink, Link, useParams } from 'react-router-dom';

import { TweetsContext } from '../Context/TweetsProvider';
import useAuthorDetailsHook from '../Hooks/AuthorDetailsHook';
import EditProfile from './Settings/EditProfile';
import styles from './Profile.module.css';
import coverImg from '../Assets/cover.jpeg';
import dpImg from '../Assets/Logo_of_Twitter.png';

const Profile = () => {
    console.log('profile');
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { profileData } = useContext(TweetsContext);

    const profileUsername = useParams().username;
    useAuthorDetailsHook(profileUsername);

    // check if user is Logged in
    const isLoggedInDetails = localStorage.getItem('profile');

    // if isLoggedInDetails = profileUsername, then user is authenticated
    useEffect(() => {
        if(isLoggedInDetails === profileUsername){
            setIsLoggedIn(true)
        }
        else{
            setIsLoggedIn(false)
        }
    }, [isLoggedInDetails, profileUsername])

    const dp = profileData.profile_pic || dpImg;

    const openEditModal = () => {
        setModalIsOpen(true);
        document.getElementById('root').style.height='100vh';
        document.getElementById('root').style.overflow='hidden';
    }
    return (
        <>
        <div className={styles['profile-section']}>
            <div className={`${styles['header-nav']} row`}>
                <div className={styles['back-icon']}>
                    <span className={`${styles['back-symbol']} material-symbols-outlined center`}>arrow_back</span>
                </div>
                <div className={styles['about']}>
                    <p className={styles['about-name']}>{profileData.full_name}</p>
                    <p className={styles['tweets-num']}><span>{profileData.tweets_total}</span> Tweets</p>
                </div>
            </div>

            <div className={styles['profile-header']}>
                <div className={styles['hold-header-content']}>
                    <div className={styles['cover-photo']} style={{backgroundImage: `url(${coverImg})`}}></div>
                    <div className={styles['profile-photo']}>
                        <div className={`${styles['dp']} center`} style={{backgroundImage: `url(${dp})`}}></div>
                    </div>
                    <div className={styles['profile-data']}>
                        {isLoggedIn && <p className={styles['edit-profile']}><span onClick={openEditModal}>Edit profile</span></p>}
                        <div className={styles['hold-profile-data']}>
                            <p className={styles['profile-name']}>{profileData.full_name}</p>
                            <p className={styles['user-name']}>@{profileData.username}</p>
                            <p style={{margin: '15px 0'}}>{profileData.bio_caption}</p>
                            
                            <div className={`${styles['bio']} row`}>
                                <div className={`${styles['location-div']} row`}>
                                    <div className={styles['location-icon']}>
                                        <span className="material-symbols-outlined center">location_on</span>
                                    </div>
                                    <div className={styles['hold-location']}>
                                        <span className={styles['city']}>{profileData.location}</span>
                                    </div>
                                </div>

                                <div className={`${styles['calendar-div']} row`}>
                                    <div className={styles['calendar-icon']}>
                                        <span className="material-symbols-outlined center">calendar_month</span>
                                    </div>
                                    <div className={styles['date-section']}>
                                        <span>{profileData.date_joined}</span>                          
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles['audience']} row`}>
                                <span className={styles['following']}><span className={styles['fol-num']}>{profileData.following}</span>Following</span>
                                <span className={styles['followers']}><span className={styles['fol-num']}>{profileData.followers}</span>Followers</span>
                            </div>
                        </div>

                        <div className={`${styles['profile-nav']} row`}>
                            <NavLink to="" className={styles['each-nav']}>Tweets</NavLink>
                            <NavLink to="replies" className={styles['each-nav']}>Replies</NavLink>
                            <NavLink to="highlights" className={styles['each-nav']}>Highlights</NavLink>
                            <NavLink to="media" className={styles['each-nav']}>Media</NavLink>
                            <NavLink to="likes" className={styles['each-nav']}>Likes</NavLink>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Outlet />
            {modalIsOpen && createPortal(<EditProfile closeModal={setModalIsOpen} bio={profileData}/>, document.getElementById("edit-profile-modal"))}
        </div>     
        </>
    )
}

export default React.memo(Profile);