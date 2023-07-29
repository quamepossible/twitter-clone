import styles from './Comments.module.css';
import Posty from '../../Assets/media/posty.jpg';



const CommentActions = ({action}) => {
    return (
        <div className={`${styles['each-action']} row`}>
        <div className={styles['action-icon']}>
            <ion-icon name={action[1]}></ion-icon>
        </div>
        <div className={styles['action-num']}>
            <span className=''>{action[0]}</span>
        </div>
    </div>
    )
}

const CommentUI = ({eachComment, bottomLine}) => {
    const { ref_to, id, full_name, username, tweet_caption, comments, comments_total, retweets, likes, views, datePosted, timePosted, mediaURL, media, location } = eachComment;
    const commentsActionArr = [[comments_total, 'chatbubbles-outline'], [retweets, 'git-compare-outline'], [likes, 'heart-outline'], [views, 'stats-chart']];
    
    return (
        <>
        {/* COMMENT AUTHOR PIC */}
        <div className={styles['comm-aut-pic']}>
            <div style={{backgroundImage: `url(${Posty}`}} className={styles['comm-pic']} />
        </div>
        {/* COMMENT AUTHOR PIC */}

        <div className={styles['comm-data']}>
            {/* COMMENT AUTHOR INFO */}
            <div className={`${styles['comm-about']} row`}>
                <div className={styles['comm-names']}>
                    <p><span>{full_name}</span> <span className={styles['gray-info']}>@{username}</span> <span  className={styles['gray-info']}>.</span> <span className={styles['gray-info']}>{datePosted}</span></p>
                </div>

                {/* COMMENT MENU ICON */}
                <div className={styles['comm-menu']}>
                    <ion-icon style={{color: '#71767b'}} name="ellipsis-horizontal"></ion-icon>
                </div>
                {/* COMMENT MENU ICON */}
            </div>
            {/* COMMENT AUTHOR INFO */}

            {/* COMMENT TEXT */}
            <div className={styles['comm-caption']}>
                <p>{tweet_caption}</p>
            </div>
            {/* COMMENT TEXT */}


            {/* COMMENT ACTIONS */}
            <div className={`${styles['comm-actions']} row`}>
                {/* COMMENT INSIGHTS */}
                {commentsActionArr.map(action => <CommentActions key={action[1]} action={action} />)}       
                {/* COMMENT INSIGHTS */}

                {/* SHARE COMMENT */}
                <div className={`${styles['share-comm']} row`}>
                    <div className={styles['action-icon']}>
                        <ion-icon name="share-outline"></ion-icon>
                    </div>
                </div>
                {/* SHARE COMMENT */}
            </div>
            {/* COMMENT ACTIONS */}

        </div>
        </>
    )
}

const Comments = ({theComment, allComments}) => {
    // we get all comments of the clicked tweets on this component
    // this is to check if the currently rendered comment under the tweet
        // also has comments under it, so that we can render those sub comments as well
    const subComments = allComments.filter(comment => comment.ref_to === theComment.id)
    return (
        <div className={`${styles['each-comment']} row`}>
            {/* render Individual Comment which is direct to the Tweet's post  */}
            <CommentUI eachComment={theComment} />
            
            {/* render comments which are sub comments of the above rendered comment */}
            {subComments.length > 0 && subComments.map(subComm => <CommentUI key={subComm.id} eachComment={subComm} />)}
        </div>
    )
}

export default Comments;