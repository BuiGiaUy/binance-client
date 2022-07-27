import HeaderNotNavBar from './HeaderNotNavBar';
import styles from './HeaderNotNavBar/HeaderNotNavBar.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { AuthContext } from '#/auth';
import { Spin } from 'antd';
import Error from '#/pages/Error';

const cx = classNames.bind(styles);

function DefaultLayout({ children }: any) {
    // Context
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    let body;

    if (authLoading) {
        body = (
            <div className="example">
                <Spin size="large" />
            </div>
        );
    } else if (isAuthenticated) return <Error />;
    else body = children;
    return (
        <>
            <div className={cx('wrap')}>
                <HeaderNotNavBar />
                <>{body}</>
            </div>
        </>
    );
}

export default DefaultLayout;
