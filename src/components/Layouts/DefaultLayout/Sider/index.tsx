import { Button, Menu } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import React from 'react';
import styles from './Sider.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));
console.log(items);
const Sider = () => {
    return (
        <>
            <div className={cx('logo')} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M16 8a4 4 0 11-8 0 4 4 0 018 0zm-8 6a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4H8z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Tổng quan
                    </Button>
                </li>
                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M4 16V4h16v12l-8 5-8-5zm10-6.24a2 2 0 01-1 1.732v2.506h-2v-2.506a2 2 0 113-1.732z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Bảo mật
                    </Button>
                </li>
                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 5h18v14H3V5zm7 5a2 2 0 11-4 0 2 2 0 014 0zm3-1h6v2.5h-6V9zm6 4.5h-6V16h6v-2.5zm-8 0V16H5v-2.5h6z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Xác minh
                    </Button>
                </li>
                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.336 8.577c-.769.15-1.1.558-1.1 1.146 0 .573.331.874 1.1 1.086V8.577zM12.678 15.393c.71-.196 1.041-.663 1.041-1.236 0-.438-.18-.89-1.04-1.147v2.383z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M12 21a9 9 0 100-18 9 9 0 000 18zm.86-3.948V18.5h-1.72v-1.387c-1.523-.136-2.533-.755-3.287-1.584l1.357-1.237c.573.604 1.282 1.01 2.126 1.131V12.71c-2.262-.468-3.182-1.463-3.182-2.926 0-1.583 1.04-2.64 2.986-2.865V5.5h1.72v1.418c1.206.135 2.096.603 2.76 1.357l-1.373 1.237c-.362-.408-.845-.74-1.569-.905v2.503c2.112.483 3.122 1.342 3.122 2.88 0 1.479-.935 2.73-2.94 3.062z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Thanh toán
                    </Button>
                </li>
                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11 8.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM2 17a3 3 0 013-3h5a3 3 0 013 3v3H2v-3zm14.5-1v-3h-3v-3h3V7h3v3h3v3h-3v3h-3z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Giới thiệu
                    </Button>
                </li>
                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 5h18v4a3 3 0 100 6v4H3v-4a3 3 0 100-6V5zm12.5 2.5H13v9h2.5v-9z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Trung Tâm Phần Thưởng
                    </Button>
                </li>
                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15 2H9v2H5v17h14V4h-4V2zm1 7H8v2.5h8V9zm0 5.5H8V17h8v-2.5z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Trung tâm Nhiệm vụ
                    </Button>
                </li>

                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M10 5a7 7 0 000 14h3v-3h3v-3h-3v-2h3V8h-3V5h-3zm11 0h-3v14h3V5z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Quản lí API
                    </Button>
                </li>
                <li className={cx('li')}>
                    <Button className={cx('btn')} href="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 6h-7.79a4.001 4.001 0 00-7.42 0H3v3h2.79a4.001 4.001 0 007.42 0H21V6zm-10.21 9H3v3h7.79a4.001 4.001 0 007.42 0H21v-3h-2.79a4.001 4.001 0 00-7.42 0z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Cài đặt
                    </Button>
                </li>
            </Menu>
        </>
    );
};

export default Sider;
