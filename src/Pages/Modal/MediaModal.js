import { useEffect, useContext, useRef } from 'react';
import { useNavigation } from 'react-router';
import { createPortal } from 'react-dom';

import TweetPage from '../Tweet/TweetPage';

import styles from './MediaModal.module.css';
import { ModalCtx } from '../../Context/ModalProvider';

const Modal = ({modalActions}) => {
    const { modalDataInfo, onCloseModal } = modalActions;
    const {modalState, activeStatusID, tweetComments, theTweetData} = modalDataInfo;

    useEffect(() => {
        // console.log(theTweetData);

        if(modalState){        
            document.getElementById('root').style.height='100vh';
            document.getElementById('root').style.overflow='hidden';
        }
    }, [modalState, activeStatusID])

    const closeModal = () => {
        onCloseModal();
        window.history.back();
        document.getElementById('root').style.height='auto';
        document.getElementById('root').style.overflow='auto';
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
    const nav = useNavigation();
    const tweetModalLoading = nav.state === 'loading';

    const ModalActions = useContext(ModalCtx);
    const { modalDataInfo } = ModalActions;
    const {modalState} = modalDataInfo;
    console.log('modal state => ' + modalDataInfo.modalState);
    return(
        <>
        {tweetModalLoading && <p>Modal Loading</p>}
        {modalState && createPortal(<Modal modalActions={ModalActions} />, document.getElementById('media-modal'))}
        {/* {!modalState && <p>Page not found</p>} */}
        </>
    )

}

export default MediaModal;