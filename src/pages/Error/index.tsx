import styles from './Error.module.scss';
import classNames from 'classnames/bind';
import error from '#/assets/images/error.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Error() {
    return (
        <div className={cx('container')}>
            <div className={cx('img')}>
                <img src={error} alt="" />
            </div>
            <div className={cx('content')}>
                <span className={cx('content-title')}>Sorry! The page you’re looking for cannot be found.</span>
                <span className={cx('content-item')}>
                    <Link to="/">Go to Homepage</Link>
                </span>
            </div>
            <div className={cx('container')}></div>
        </div>
    );
}

export default Error;
