import mediaStyle from '../Modal/ModalLayout.module.css';
import styles from './Comments.module.css';
import Posty from '../../Assets/media/posty.jpg';


const CommentActions = ({action, onModalOpen}) => {
    return (
        <div className={`${onModalOpen ? mediaStyle['each-action'] : styles['each-action']} row`}>
        <div className={onModalOpen ? mediaStyle['action-icon'] : styles['action-icon']}>
            <ion-icon name={action[1]}></ion-icon>
        </div>
        <div className={onModalOpen ? mediaStyle['action-num'] : styles['action-num']}>
            <span className=''>{action[0]}</span>
        </div>
    </div>
    )
}

const CommentUI = ({eachComment, modalOpen, bottomLine}) => {
    const { ref_to, id, full_name, username, tweet_caption, comments, comments_total, retweets, likes, views, datePosted, timePosted, mediaURL, media, location } = eachComment;
    const commentsActionArr = [[comments_total, 'chatbubbles-outline'], [retweets, 'git-compare-outline'], [likes, 'heart-outline'], [views, 'stats-chart']];
    
    return (
        <>
        {/* COMMENT AUTHOR PIC */}
        <div className={modalOpen ? mediaStyle['comm-aut-pic'] : styles['comm-aut-pic']}>
            <div style={{backgroundImage: `url(${Posty}`}} className={modalOpen ? mediaStyle['comm-pic'] : styles['comm-pic']} />
        </div>
        {/* COMMENT AUTHOR PIC */}

        <div className={modalOpen ? mediaStyle['comm-data'] : styles['comm-data']}>
            {/* COMMENT AUTHOR INFO */}
            <div className={`${modalOpen ? mediaStyle['comm-about'] : styles['comm-about']} row`}>
                <div className={modalOpen ? mediaStyle['comm-names'] : styles['comm-names']}>
                    <p><span className={modalOpen && mediaStyle['comm-aut-pic']}>{full_name}</span> <span className={modalOpen ? mediaStyle['gray-info'] : styles['gray-info']}>@{username}</span> <span  className={styles['gray-info']}>.</span> <span className={styles['gray-info']}>{datePosted}</span></p>
                </div>

                {/* COMMENT MENU ICON */}
                <div className={styles['comm-menu']}>
                    <ion-icon style={{color: '#71767b'}} name="ellipsis-horizontal"></ion-icon>
                </div>
                {/* COMMENT MENU ICON */}
            </div>
            {/* COMMENT AUTHOR INFO */}

            {/* COMMENT TEXT */}
            <div className={modalOpen ? mediaStyle['comm-caption'] : styles['comm-caption']}>
                <p>{tweet_caption}</p>
            </div>
            {/* COMMENT TEXT */}


            {/* COMMENT ACTIONS */}
            <div className={`${modalOpen ? mediaStyle['comm-actions'] : styles['comm-actions']} row`}>
                {/* COMMENT INSIGHTS */}
                {commentsActionArr.map(action => <CommentActions key={action[1]} action={action} onModalOpen={modalOpen} />)}       
                {/* COMMENT INSIGHTS */}

                {/* SHARE COMMENT */}
                <div className={`${modalOpen ? mediaStyle['share-comm'] : styles['share-comm']} row`}>
                    <div className={modalOpen ? mediaStyle['action-icon'] : styles['action-icon']}>
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

const Comments = ({theComment, allComments, isModal}) => {
    // we get all comments of the clicked tweets on this component
    // this is to check if the currently rendered comment under the tweet
        // also has comments under it, so that we can render those sub comments as well
    const subComments = allComments.filter(comment => comment.ref_to === theComment.id)
    return (
        <div className={`${styles['each-comment']} row`}>
            {/* render Individual Comment which is direct to the Tweet's post  */}
            <CommentUI eachComment={theComment} modalOpen={isModal} />
            
            {/* render comments which are sub comments of the above rendered comment */}
            {subComments.length > 0 && subComments.map(subComm => <CommentUI key={subComm.id} eachComment={subComm}  modalOpen={isModal} />)}
        </div>
    )
}

export default Comments;