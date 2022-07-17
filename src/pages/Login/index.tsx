import { AppleFilled, GoogleOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <>
            <Row className={cx('login')}>
                <Col span={4} className={cx('')}></Col>
                <Col span={20} className={cx('wrapper')}>
                    <div className={cx('title')}>
                        <div></div>
                        <h1>
                            <div>
                                <div>
                                    <div data-bn-type="text">Đăng nhập tài khoản Binance</div>
                                </div>
                            </div>
                        </h1>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-left')}>
                            <div className={cx('content-wrapper')}>
                                <div className={cx('content-title')}>
                                    <div id="tab-email" className={cx('content-title-item')}>
                                        <div className={cx('')}>Email</div>
                                    </div>
                                    <div id="tab-mobile" className={cx('content-title-item')}>
                                        <div className={cx('')}>Số điện thoại</div>
                                    </div>
                                </div>

                                <form>
                                    <div className={cx('input-wrapper')}>
                                        <div className={cx('input-title')}>Email</div>
                                        <div className={cx('input-content')}>
                                            <div className=" css-1br1azt">
                                                <input
                                                    data-bn-type="input"
                                                    type="email"
                                                    name="email"
                                                    className="css-1mizem0"
                                                    value=""
                                                />
                                                <div className="bn-input-suffix css-vurnku">
                                                    <div className="css-1gkkq18"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('input-message')}></div>
                                    </div>

                                    <div className={cx('input-wrapper')}>
                                        <div className={cx('input-title')}>Mật khẩu</div>
                                        <div className={cx('input-content')}>
                                            <div className=" css-1br1azt">
                                                <input
                                                    data-bn-type="input"
                                                    name="password"
                                                    type="password"
                                                    className="css-1mizem0"
                                                    value=""
                                                />
                                                <div className="bn-input-suffix css-vurnku">
                                                    <div className="css-1gkkq18">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            className="css-9vw0cc"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M2.94 5.06l16 16 2.12-2.12-2.446-2.447L23 12l-5.555-5.69a7.566 7.566 0 00-9.883-.87L5.06 2.94 2.939 5.06zm6.747 2.506a5 5 0 016.747 6.747L9.687 7.566z"
                                                                fill="currentColor"
                                                            ></path>
                                                            <path
                                                                d="M1 12l2.29-2.346 10.198 10.198a7.574 7.574 0 01-6.933-2.162L1 12z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('input-message')}></div>
                                    </div>
                                    <Button className={cx('form-btn')}>Đăng Nhập</Button>
                                </form>

                                <div className={cx('btn')}>
                                    <div className={cx('btn-title')}>
                                        <div className={cx('btn-space')}></div>
                                        <div data-bn-type="text" className={cx('btn-title-content')}>
                                            Hoặc
                                        </div>
                                        <div className={cx('btn-space')}></div>
                                    </div>
                                    <div className={cx('btn-wrapper')}>
                                        <div className={cx('btn-lists')}>
                                            <div className={cx('btn-item')}>
                                                <div className={cx('btn-item-img')}>
                                                    <AppleFilled />
                                                </div>
                                                <div className={cx('btn-item-content')}>Tiếp tục với Apple</div>
                                            </div>
                                            <div className={cx('btn-message')}></div>
                                        </div>

                                        <div className={cx('btn-lists-g')}>
                                            <div className={cx('btn-item-g')}>
                                                <div className={cx('btn-item-img')}>
                                                    <GoogleOutlined />
                                                </div>
                                                <div className={cx('btn-item-content')}>Tiếp tục với Google</div>
                                            </div>
                                            <div className={cx('btn-message')}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('text')}>
                                    <div className="css-10bsfyn">
                                        <a href="/" className="css-1015n11">
                                            Quên mật khẩu?
                                        </a>
                                        <a href="/register" className="css-ld3874">
                                            Đăng ký
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className={cx('footer')}>
                <div data-bn-type="text" className={cx('footer-left')}>
                    © 2017 - 2022 Binance.com. All rights reserved
                </div>
                <div data-bn-type="text" data-ot-trigger="true" className={cx('footer-right')}>
                    Tùy chọn Cookie
                </div>
            </div>
        </>
    );
}

export default Login;
