import classNames from 'classnames/bind';

import styles from './Buying.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function BuyingItem({ data }: any) {
    return (
        <Link className={cx('buyingItem')} to={data.to}>
            <div className={cx('leftIcon')}>{data.leftIcon}</div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('buyingItem-title')}>{data.title}</div>
                </div>
                <div className={cx('buyingItem-content')}>{data.content}</div>
            </div>
            <FontAwesomeIcon icon={faArrowRightLong} className={cx('icon-arrow')} />
        </Link>
    );
}

export default BuyingItem;
