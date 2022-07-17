import HeaderNotNavBar from './HeaderNotNavBar';
import styles from './HeaderNotNavBar/HeaderNotNavBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }: any) {
    return (
        <>
            <div className={cx('wrap')}>
                <HeaderNotNavBar />
                {children}
            </div>
        </>
    );
}

export default DefaultLayout;
