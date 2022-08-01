import classNames from 'classnames/bind';
import styles from './Command.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CommandItem({ data }: any) {
    return (
        <Link className={cx('commandItem')} to={data.to}>
            <div className={cx('leftIcon')}>{data.leftIcon}</div>
            <div className={cx('commandItem-title')}>{data.title}</div>
            <div className={cx('space')}></div>
        </Link>
    );
}

export default CommandItem;
