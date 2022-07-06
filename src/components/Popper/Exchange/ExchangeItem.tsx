import classNames from 'classnames/bind';
import styles from './Exchange.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ExchangeItem({ data }: any) {
    return (
        <Link className={cx('exchangeItem')} to={data.to}>
            <div className={cx('leftIcon')}>{data.leftIcon}</div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('exchangeItem-title')}>{data.title}</div>
                </div>
                <div className={cx('exchangeItem-content')}>{data.content}</div>
            </div>
            <FontAwesomeIcon icon={faArrowRightLong} className={cx('icon-arrow')} />
        </Link>
    );
}

export default ExchangeItem;
