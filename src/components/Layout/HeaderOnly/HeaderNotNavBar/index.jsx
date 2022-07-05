import classNames from 'classnames/bind';

import styles from './HeaderNotNavBar.module.scss';
import { Button } from 'antd/lib/radio';

const cx = classNames.bind(styles);

function HeaderNotNavBar() {
    return (
        <header className={cx('header')}>
            <Button>Gia uy</Button>
        </header>
    );
}

export default HeaderNotNavBar;
