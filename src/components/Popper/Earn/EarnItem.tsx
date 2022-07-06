import classNames from 'classnames/bind';

import styles from './Earn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function EarnItem({ data }: any) {
    return (
        <Link className={cx('earnItem')} to={data.to}>
            <div className={cx('leftIcon')}>{data.leftIcon}</div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('earnItem-title')}>{data.title}</div>
                </div>
                <div className={cx('earnItem-content')}>{data.content}</div>
            </div>
            <FontAwesomeIcon icon={faArrowRightLong} className={cx('icon-arrow')} />
        </Link>
    );
}

export default EarnItem;
