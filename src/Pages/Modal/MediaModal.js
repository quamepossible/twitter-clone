import { useEffect, useContext, useRef } from 'react';
import { createPortal } from 'react-dom';

import TweetPage from '../Tweet/TweetPage';

import styles from './MediaModal.module.css';
import { ModalCtx } from '../../Context/ModalProvider';

const Modal = ({modalActions}) => {
    const { modalDataInfo, onCloseModal } = modalActions;
    const {modalState, activeStatusID, tweetComments, theTweetData} = modalDataInfo;

    useEffect(() => {
        console.log(theTweetData);

        if(modalState){        
            // Store the current scroll position
                // This prevents section of overlay from getting hidden in viewport
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            document.querySelector('#media-modal').style.marginTop = `-${scrollTop}px`;
            document.body.style.overflow = 'hidden'
        }
    }, [modalState, activeStatusID])

    const closeModal = () => {
        onCloseModal();
        window.history.back();
        document.body.style.overflow = '';
        // console.log('close modal');
    }

    return ((
        <>
        <div className={`${styles['hold-modal']} row`}>
            <div className={`${styles['back-drop']}`} onClick={closeModal}></div>
            <div className={`${styles['comment-section']}`}>
                <div className={styles['hold-comments']}>
                    <TweetPage dataFromModal={theTweetData} />
                </div>
            </div>
        </div>
        <div className={styles['modal-media']} style={{backgroundImage: `url(${theTweetData.media_url})`}}></div>
        </>
    ))
}

const MediaModal = ({defaultModalState}) => {
    const ModalActions = useContext(ModalCtx);
    const { modalDataInfo } = ModalActions;
    const {modalState} = modalDataInfo;
    console.log('modal state => ' + modalDataInfo.modalState);
    return(
        <>
        {modalState && createPortal(<Modal modalActions={ModalActions} />, document.getElementById('media-modal'))}
        {!modalState && <p>Page not found</p>}
        </>
    )

}

export default MediaModal;