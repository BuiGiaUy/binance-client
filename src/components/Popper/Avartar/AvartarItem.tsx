import classNames from 'classnames/bind';
import styles from './Avartar.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AvartarItem({ data }: any) {
    return (
        <>
            <Link className={cx('avartarItem')} to={data.to}>
                <div className={cx('leftIcon')}>{data.leftIcon}</div>
                <div className={cx('avartarItem-title')}>{data.title}</div>
            </Link>
        </>
    );
}

export default AvartarItem;
