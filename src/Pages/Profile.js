import styles from './Profile.module.css';
import coverImg from '../Assets/cover.jpeg';
import dpImg from '../Assets/profilepic.jpg';

const Profile = () => {
    return (
        <>
        <div className={styles['profile-section']}>
            <div className={`${styles['header-nav']} row`}>
                <div className={styles['back-icon']}>
                <span className={`${styles['back-symbol']} material-symbols-outlined center`}>arrow_back</span>
                </div>
                <div className={styles['about']}>
                    <p className={styles['about-name']}>Young - K</p>
                    <p className={styles['tweets-num']}><span>20</span> Tweets</p>
                </div>
            </div>

            <div className={styles['profile-header']}>
                <div className={styles['hold-header-content']}>
                    <div className={styles['cover-photo']} style={{backgroundImage: `url(${coverImg})`}}></div>
                    <div className={styles['profile-photo']} style={{backgroundImage: `url(${dpImg})`}}></div>
                    <div className={styles['profile-data']}>
                        <p className={styles['edit-profile']}><span>Edit profile</span></p>
                        <div className={styles['hold-profile-data']}>
                            <p className={styles['profile-name']}>Young - K</p>
                            <p className={styles['user-name']}>@mission_quame</p>
                            
                            <div className={`${styles['bio']} row`}>
                                <div className={`${styles['location-div']} row`}>
                                    <div className={styles['location-icon']}>
                                        <span class="material-symbols-outlined center">location_on</span>
                                    </div>
                                    <div className={styles['hold-location']}>
                                        <span className={styles['city']}>Kumasi</span>,
                                        <span className={styles['country']}> Ghana</span>
                                    </div>
                                </div>

                                <div className={`${styles['calendar-div']} row`}>
                                    <div className={styles['calendar-icon']}>
                                        <span class="material-symbols-outlined center">calendar_month</span>
                                    </div>
                                    <div className={styles['date-section']}>
                                        <span>April 2014</span>                          
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles['audience']} row`}>
                                <span className={styles['following']}><span className={styles['fol-num']}>143</span>Following</span>
                                <span className={styles['followers']}><span className={styles['fol-num']}>42</span>Followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default  Profile;