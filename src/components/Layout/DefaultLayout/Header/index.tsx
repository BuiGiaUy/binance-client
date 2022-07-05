import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button } from 'antd';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <Button className={cx('inner')} type="primary">
                gia uy
            </Button>
        </header>
    );
}

export default Header;
