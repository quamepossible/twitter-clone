import { useRef, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { ModalCtx } from '../../Context/ModalProvider';
import useImgDimHook from '../../Hooks/ImageDimHook';
import Comments from './Comments';

import Posty from '../../Assets/media/posty.jpg';
import Boogie from '../../Assets/media/posty.jpg';

import styles from './TweetPage.module.css';
import mediaStyle from '../Modal/ModalLayout.module.css';

const TweetPage = ({dataFromModal}) => {
    const ModalActions = useContext(ModalCtx);
    const { onOpenModal } = ModalActions;
    // const {modalState, activeStatusID, comments: tweetComments} = modalDataInfo;

    let  id, full_name, username, tweet_caption, comments, retweets, likes, views, datePosted, timePosted, media_url, media, location;
    if(dataFromModal){
        id = dataFromModal.author_id;
        full_name = "Kwame Appiah";
        username = "_mission";
        tweet_caption = dataFromModal.tweet_caption;
        comments = dataFromModal.comments;
        retweets = dataFromModal.retweets;
        likes = dataFromModal.likes;
        views = dataFromModal.views;
        datePosted = "Jul 27";
        timePosted = "10:45 AM";
        media = false;
        media_url = dataFromModal.media_url
        location = "Kumasi, Ghana";
    }
    // get the data of the clicked tweet from the loader function on path '/profile/status/:id'
    const tweetData = useLoaderData();
    if(tweetData){
        // { id, full_name, username, tweet_caption, comments, retweets, likes, views, datePosted, timePosted, mediaURL, media, location } = tweetData;
        id = tweetData.author_id;
        full_name = "Kwame Appiah";
        username = "_mission";
        tweet_caption = tweetData.tweet_caption;
        comments = tweetData.comments;
        retweets = tweetData.retweets;
        likes = tweetData.likes;
        views = tweetData.views;
        datePosted = "Jul 27";
        timePosted = "10:45 AM";
        media = tweetData.media;
        media_url = tweetData.media_url
        location = "Kumasi, Ghana";
    }

    const isModalCall = !tweetData;
    
    //  initialize a ref, and adjust the dimensions (width and height) of the clicked tweet's 
    //     media (photo and video)
    const mediaRef = useRef(null)
    useImgDimHook(mediaRef, media_url);

    // check if the clicked tweet has comments
        // if no comments found, set loadComments = [];

        // if comments found, 
            // 1. get all comments which has a ref_to == tweet's id
            // this enables the page to identify comments which are direct comments to the tweet
                // but not a comment of a comment.
            // 2. Get <Comments /> component (which renders each comment) and assign it to loadComments;
        const loadComments = comments.length > 0 ? comments.filter(comment => comment.ref_to === id).map(comment => <Comments key={comment.id} isModal={isModalCall} theComment={comment} allComments={comments} />) : [];

    // when the media (photo / video) of a tweet is clicked
        // a modal will open with the tweet's data
    const openModal = () => {
        // pass the opened tweet's data (including comments) to the Modal Context
            // this ensures the tweet's modal get's access to the opened tweet's data
        onOpenModal({modalState: true, activeStatusID: id, tweetComments: comments, theTweetData: tweetData});
    }

    // URL to tweet's modal component
    const modalURL = `/profile/status/${id}/photo/1`;

    // TWEET'S ACTIONS SECTION
    const actionIcons = [["chatbubbles-outline"], ["git-compare-outline"],["heart-outline"],["bookmark-outline"],["share-outline"],];


    // const whatClass = tweetData ? 
    return(
    <div className={styles['tweet-content']}>
        {tweetData && <div className={`${styles['tweet-nav']} row`}>
            <div className={styles['back-icon']}>
                <span className={`${styles['back-symbol']} material-symbols-outlined center`}>arrow_back</span>
            </div>
            <div className={styles['about']}>
                <p className={`${styles['about-name']} center`}>Tweet</p>
            </div>
        </div>}

        {/* TWEET AUTHOR INFO AND CAPTION */}
        <div className={`${tweetData ? styles['author-details'] : mediaStyle['author-details']} row`}>
            <div className={tweetData ? styles['author-photo'] : mediaStyle['author-photo']}>
                <div style={{backgroundImage: `url(${Posty}`}} className={tweetData ? styles['comm-pic'] : mediaStyle['comm-pic']} />
            </div>
            <div className={tweetData ? styles['author-names'] : mediaStyle['author-names']}>
                <p>{full_name}</p>
                <p className={tweetData ? styles['author-username'] : mediaStyle['author-username']}>@<span>{username}</span></p>
            </div>
            <div className={tweetData ? styles['tweet-menu'] : mediaStyle['tweet-menu']}>
                <ion-icon style={{color: '#71767b'}} name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        <div className={tweetData ? styles['tweet-caption'] : mediaStyle['tweet-caption']}>
            <p className={tweetData ? styles['tweet-text'] : mediaStyle['tweet-text']}>{tweet_caption}</p>
        </div>
        {/* TWEET AUTHOR INFO AND CAPTION */}


        {/* TWEET MEDIA IF AVAILABLE */}
        {media && tweetData &&
            // this is the media section of the visited tweet
                // when clicked, we send tweet data to the modal context
                // then, the tweet modal opens
            <Link onClick={openModal} to={modalURL}>
                <div className={styles['tweet-media']}>
                    <div ref={mediaRef} className={styles['tweet-main-media']} style={{backgroundImage: `url(${media_url})`}}></div>
                </div>
            </Link>
        }
        {/* TWEET MEDIA IF AVAILABLE */}

        {/* TWEET AUTHOR LOCATION AND DATE */}
        <div className={tweetData ? styles['tweet-info'] : mediaStyle['tweet-info']}>
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
            <div className={tweetData ? styles['composer-pic'] : mediaStyle['composer-pic']}>
                <div className={`${tweetData? styles['add-com-pic'] : mediaStyle['add-com-pic']} center`} style={{backgroundImage: `url(${Boogie})`}}></div>
            </div>
            <div className={tweetData ? styles['composer-form'] : mediaStyle['composer-form']}>
                <form className='center'>
                    <input type='text' className={styles['comm-input']} placeholder='Tweet your reply!' />
                </form>
            </div>
            <div className={tweetData ? styles['reply-btn'] : mediaStyle['reply-btn']}>
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

