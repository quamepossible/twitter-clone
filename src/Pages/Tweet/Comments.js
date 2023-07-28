import styles from './Comments.module.css';
import Posty from '../../Assets/media/posty.jpg';


const Comments = ({theComment}) => {
    const { ref_to, id, full_name, username, tweet_caption, comments, comments_total, retweets, likes, views, datePosted, timePosted, mediaURL, media, location } = theComment;
    return (
        <>
        <div className={`${styles['each-comment']} row`}>
            <div className={styles['comm-aut-pic']}>
                <div style={{backgroundImage: `url(${Posty}`}} className={styles['comm-pic']} />
            </div>
            <div className={styles['comm-data']}>
                <div className={`${styles['comm-about']} row`}>
                    <div className={styles['comm-names']}>
                        <p><span>{full_name}</span> <span className={styles['gray-info']}>@{username}</span> <span  className={styles['gray-info']}>.</span> <span className={styles['gray-info']}>{datePosted}</span></p>
                    </div>
                    <div className={styles['comm-menu']}>
                        <ion-icon style={{color: '#71767b'}} name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div className={styles['comm-caption']}>
                    <p>{tweet_caption}</p>
                </div>
                <div className={`${styles['comm-actions']} row`}>
                    <div className={`${styles['each-action']} row`}>
                        <div className={styles['action-icon']}>
                            <ion-icon name="chatbubbles-outline"></ion-icon>
                        </div>
                        <div className={styles['action-num']}>
                            <span className=''>{comments_total}</span>
                        </div>

                    </div>
                    <div className={`${styles['each-action']} row`}>
                        <div className={styles['action-icon']}>
                            <ion-icon name="git-compare-outline"></ion-icon>
                        </div>
                        <div className={styles['action-num']}>
                            <span className=''>{retweets}</span>
                        </div>                        
                    </div>
                    <div className={`${styles['each-action']} row`}>
                        <div className={styles['action-icon']}>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div className={styles['action-num']}>
                            <span className=''>{likes}</span>
                        </div>                        
                    </div>
                    <div className={`${styles['each-action']} row`}>
                        <div className={styles['action-icon']}>
                            <ion-icon name="stats-chart"></ion-icon>
                        </div>
                        <div className={styles['action-num']}>
                            <span className=''>{views}</span>
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
        </>
    )
}

export default Comments;