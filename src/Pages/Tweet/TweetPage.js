import { useParams, useLoaderData } from 'react-router-dom';

import Posty from '../../Assets/media/posty.jpg';
import Boogie from '../../Assets/media/boogie.jpg';
import styles from './TweetPage.module.css';

const TweetPage = () => {
    const tweetData = useLoaderData();
    console.log(tweetData);
    const { id, full_name, username, tweet_caption, comments, retweets, likes, views, datePosted, mediaURL, media } = tweetData;
    return(
    <div className={styles['tweet-content']}>
        <div className={`${styles['tweet-nav']} row`}>
            <div className={styles['back-icon']}>
                <span className={`${styles['back-symbol']} material-symbols-outlined center`}>arrow_back</span>
            </div>
            <div className={styles['about']}>
                <p className={`${styles['about-name']} center`}>Tweet</p>
            </div>
        </div>
        <div className={`${styles['author-details']} row`}>
            <div className={styles['author-photo']}>
                <div style={{backgroundImage: `url(${Posty}`}} className={styles['comm-pic']} />
            </div>
            <div className={styles['author-names']}>
                <p>Kwame Opoku Appiah</p>
                <p className={styles['author-username']}>@<span>quame_mission</span></p>
            </div>
            <div className={styles['tweet-menu']}>
                <ion-icon style={{color: '#71767b'}} name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        <div className={styles['tweet-caption']}>
            <p className={styles['tweet-text']}>This is just a dummy tweet caption. This is just a dummy tweet caption.This is just a dummy tweet caption.This is just a dummy tweet caption.This is just a dummy tweet caption</p>
        </div>
        <div className={styles['tweet-media']}>
            <div className={styles['tweet-main-media']}></div>
        </div>
        <div className={styles['tweet-info']}>
            <p className='center'>
                <span>1:30</span> AM
                <span className={styles['hold-dot']}>
                    <span className={`${styles['dot']} center`}></span>
                </span>
                <span>Jul 27, 2023</span> from
                <span> Accra, Ghana</span>
                <span className={styles['hold-dot']}>
                    <span className={`${styles['dot']} center`}></span>
                </span>
                <span style={{color: 'white'}}><b>10,500</b></span> Views
            </p>
        </div>
        <div className={styles['tweet-insight']}>
            <div className={`${styles['hold-insight']} center row`}>
                <div><span><b>48</b></span> Retweets</div>
                <div><span><b>30</b></span> Quote</div>
                <div><span><b>9,499</b></span> Likes</div>
            </div>
        </div>
        <div className={`${styles['tweet-action']} row`}>
            <div className={styles['action-div']}>
              <ion-icon style={{fontSize: '25px'}} name="chatbubbles-outline"></ion-icon>
            </div>
            <div className={styles['action-div']}>
              <ion-icon style={{fontSize: '25px'}} name="git-compare-outline"></ion-icon>
            </div>
            <div className={styles['action-div']}>
              <ion-icon style={{fontSize: '25px'}} name="heart-outline"></ion-icon>
            </div>
            <div className={styles['action-div']}>
                <ion-icon style={{fontSize: '25px'}} className={styles['ico']} name="bookmark-outline"></ion-icon>
            </div>
            <div className={styles['action-div']}>
              <ion-icon style={{fontSize: '25px'}} name="share-outline"></ion-icon>
            </div>
        </div>
        <div className={styles['add-tweet-comment']}></div>
        <div className={styles['comments']}>
            <div className={`${styles['each-comment']} row`}>
                <div className={styles['comm-aut-pic']}>
                    <div style={{backgroundImage: `url(${Posty}`}} className={styles['comm-pic']} />
                </div>
                <div className={styles['comm-data']}>
                    <div className={`${styles['comm-about']} row`}>
                        <div className={styles['comm-names']}>
                            <p><span>Papa Essel Silas</span> <span className={styles['gray-info']}>@P_E_S</span> <span  className={styles['gray-info']}>.</span> <span className={styles['gray-info']}>Jul 27</span></p>
                        </div>
                        <div className={styles['comm-menu']}>
                            <ion-icon style={{color: '#71767b'}} name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div className={styles['comm-caption']}>
                        <p>This is a dummy comment</p>
                    </div>
                    <div className={`${styles['comm-actions']} row`}>
                        <div className={`${styles['each-action']} row`}>
                            <div className={styles['action-icon']}>
                                <ion-icon name="chatbubbles-outline"></ion-icon>
                            </div>
                            <div className={styles['action-num']}>
                                <span className=''>900</span>
                            </div>

                        </div>
                        <div className={`${styles['each-action']} row`}>
                            <div className={styles['action-icon']}>
                                <ion-icon name="git-compare-outline"></ion-icon>
                            </div>
                            <div className={styles['action-num']}>
                                <span className=''>900</span>
                            </div>                        
                        </div>
                        <div className={`${styles['each-action']} row`}>
                            <div className={styles['action-icon']}>
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <div className={styles['action-num']}>
                                <span className=''>900</span>
                            </div>                        
                        </div>
                        <div className={`${styles['each-action']} row`}>
                            <div className={styles['action-icon']}>
                                <ion-icon name="stats-chart"></ion-icon>
                            </div>
                            <div className={styles['action-num']}>
                                <span className=''>900</span>
                            </div>                        
                        </div>
                        <div className={`${styles['share-comm']} row`}>
                            <div className={styles['action-icon']}>
                                <ion-icon name="share-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default TweetPage;

