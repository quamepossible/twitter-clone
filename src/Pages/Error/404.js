import { Link } from 'react-router-dom';
import styles from './404.module.css';

const Error404 = () => {

    return(
        <div className={styles['error-container']}>
            <div className={`${styles['hold-error-text']} center`}>
                <p className={styles['const-text']}>Page Under Construction 👷‍♂️</p>

                <p className={styles['check-text']}>Checkout out these pages</p>
                <ul>
                    <Link to='/'>
                    <li className='row'>
                            <span className={styles['hold-icon']}>
                                <span className={`${styles['nav-icon-symbols']} material-symbols-outlined center`}>cottage</span>
                            </span>
                            <span className={styles['icon-text']}>Home</span>
                        </li>
                    </Link>

                    <Link to='/profile'>
                    <li className='row'>
                        <span className={styles['hold-icon']}>
                            <span className={`${styles['nav-icon-symbols']} material-symbols-outlined center`}>person</span>
                        </span>
                        <span className={styles['icon-text']}>Profile</span>                    
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Error404;