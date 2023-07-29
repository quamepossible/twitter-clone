import { useRef, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { ModalCtx } from '../../Context/ModalProvider';
import useImgDimHook from '../../Hooks/ImageDimHook';
import Comments from './Comments';

import Posty from '../../Assets/media/posty.jpg';
import Boogie from '../../Assets/media/malone.jpg';

import styles from './TweetPage.module.css';

const TweetPage = () => {
    const ModalActions = useContext(ModalCtx);
    const { modalDataInfo, onOpenModal, onCloseModal } = ModalActions;
    // const {modalState, activeStatusID, comments: tweetComments} = modalDataInfo;

    // get the data of the clicked tweet from the loader function on path '/profile/status/:id'
    const tweetData = useLoaderData();
    const { id, full_name, username, tweet_caption, comments, comments_total, retweets, likes, views, datePosted, timePosted, mediaURL, media, location } = tweetData;
    
    //  initialize a ref, and adjust the dimenstions (width and height) of the clicked tweet's 
    //     media (photo and video)
    const mediaRef = useRef(null)
    useImgDimHook(mediaRef, Boogie);

    // check if the clicked tweet has comments
        // if no comments found, set loadComments = [];

        // if comments found, 
            // 1. get all comments which has a ref_to == tweet's id
            // this enables the page to identify comments which are direct comments to the tweet
                // but not a comment of a comment.
            // 2. Get <Comments /> component (which renders each comment) and assign it to loadComments;
        const loadComments = comments.length > 0 ? comments.filter(comment => comment.ref_to === id).map(comment => <Comments key={comment.id} theComment={comment} allComments={comments} />) : [];

    // when the media (photo / video) of a tweet is clicked
        // a modal will open with the tweet's data
    const openModal = () => {
        // pass the opened tweet's data (including comments) to the Modal Context
            // this ensures the tweet's modal get's access to the opened tweet's data
        onOpenModal({modalState: true, activeStatusID: id, tweetComments: comments});
    }

    // URL to tweet's modal component
    const modalURL = `/profile/status/${id}/photo/1`;

    // TWEET'S ACTIONS SECTION
    const actionIcons = [["chatbubbles-outline"], ["git-compare-outline"],["heart-outline"],["bookmark-outline"],["share-outline"],];


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

        {/* TWEET AUTHOR INFO AND CAPTION */}
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
        {/* TWEET AUTHOR INFO AND CAPTION */}


        {/* TWEET MEDIA IF AVAILABLE */}
        {media && 
            // this is the media section of the visited tweet
                // when clicked, we send tweet data to the modal context
                // then, the tweet modal opens
            <Link onClick={openModal} to={modalURL}>
                <div className={styles['tweet-media']}>
                    <div ref={mediaRef} className={styles['tweet-main-media']} style={{backgroundImage: `url(${Boogie})`}}></div>
                </div>
            </Link>
        }
        {/* TWEET MEDIA IF AVAILABLE */}

        {/* TWEET AUTHOR LOCATION AND DATE */}
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
        {/* TWEET AUTHOR LOCATION AND DATE */}


        {/* TWEET INSIGHT */}
        <div className={styles['tweet-insight']}>
            <div className={`${styles['hold-insight']} center row`}>
                <div><span><b>{retweets}</b></span> Retweets</div>
                <div><span><b>0</b></span> Quote</div>
                <div><span><b>{likes}</b></span> Likes</div>
            </div>
        </div>
        {/* TWEET INSIGHT */}


        {/* TWEET ACTION SECTION */}
        <div className={`${styles['tweet-action']} row`}>
            {actionIcons.map((action, i) => (
                <div className={styles['action-div']} key={i}>
                    <ion-icon style={{fontSize: '25px'}} name={action[0]}></ion-icon>
                </div>
            ))}
        </div>
        {/* TWEET ACTION SECTION */} 

        {/* ADD COMMENT TO TWEET */}
        <div className={`${styles['add-tweet-comment']} row`}>
            <div className={styles['composer-pic']}>
                <div className={`${styles['add-com-pic']} center`} style={{backgroundImage: `url(${Boogie})`}}></div>
            </div>
            <div className={styles['composer-form']}>
                <form className='center'>
                    <input type='text' className={styles['comm-input']} placeholder='Tweet your reply!' />
                </form>
            </div>
            <div className={styles['reply-btn']}>
                <button type='button' className={`${styles['submit-btn']} center pending-button`}>Reply</button>
            </div>
        </div>
        {/* ADD COMMENT TO TWEET */}


        {/* LOAD COMMENTS */}
        <div className={styles['comments']}>
            {/* if clicked tweet doesn't contain any comments, output 'No comments' */}
            {!(loadComments.length) && <p style={{textAlign: 'center', fontSize: '24px', marginTop: '50px'}}>No comments</p>}
            
            {/* Clicked Media has comments, so render all comments from loadComments */}
            {loadComments}
        </div>
        {/* LOAD COMMENTS */}

    </div>
    )
}

export default TweetPage;

