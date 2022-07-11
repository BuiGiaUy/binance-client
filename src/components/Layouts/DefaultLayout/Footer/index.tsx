import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Button } from 'antd';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <Button className={cx('inner')} type="primary">
                gia uy
            </Button>
        </footer>
    );
}

export default Footer;
