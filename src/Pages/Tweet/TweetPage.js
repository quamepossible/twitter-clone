import { useRef } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

import useImgDimHook from '../../Hooks/ImageDimHook';

import Posty from '../../Assets/media/posty.jpg';
import Boogie from '../../Assets/media/malone.jpg';
import styles from './TweetPage.module.css';

const TweetPage = () => {
    const tweetData = useLoaderData();
    const { id, full_name, username, tweet_caption, comments, retweets, likes, views, datePosted, timePosted, mediaURL, media, location } = tweetData;
    
    const mediaRef = useRef(null)
    useImgDimHook(mediaRef, Boogie);

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
                <p>{full_name}</p>
                <p className={styles['author-username']}>@<span>{username}</span></p>
            </div>
            <div className={styles['tweet-menu']}>
                <ion-icon style={{color: '#71767b'}} name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        <div className={styles['tweet-caption']}>
            <p className={styles['tweet-text']}>{tweet_caption}</p>
        </div>
        {media && <div className={styles['tweet-media']}>
            <div ref={mediaRef} className={styles['tweet-main-media']} style={{backgroundImage: `url(${Boogie})`}}></div>
        </div>}
        <div className={styles['tweet-info']}>
            <p className='center'>
                <span>{timePosted}</span>
                <span className={styles['hold-dot']}>
                    <span className={`${styles['dot']} center`}></span>
                </span>
                <span>{datePosted}</span> from
                <span> {location} </span>
                <span className={styles['hold-dot']}>
                    <span className={`${styles['dot']} center`}></span>
                </span>
                <span style={{color: 'white'}}><b>{views}</b></span> Views
            </p>
        </div>
        <div className={styles['tweet-insight']}>
            <div className={`${styles['hold-insight']} center row`}>
                <div><span><b>{retweets}</b></span> Retweets</div>
                <div><span><b>0</b></span> Quote</div>
                <div><span><b>{likes}</b></span> Likes</div>
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

