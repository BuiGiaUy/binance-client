import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

interface IProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }: IProps) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Fragment>
                <div className={cx('container')}>{children}</div>
            </Fragment>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
