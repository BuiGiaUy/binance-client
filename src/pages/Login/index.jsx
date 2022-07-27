import { AppleFilled, GoogleOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import styles from './Login.module.scss';
import { AuthContext } from '#/auth';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    // Context
    const { loginUser } = useContext(AuthContext);

    // Router
    const history = useNavigate();
    // loginForm
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });

    const { username, password } = loginForm;

    const onChangeLoginForm = (event) => setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

    const login = async (event) => {
        event.preventDefault();

        try {
            const loginData = await loginUser(loginForm);
            if (loginData.success) {
                history('/dashboard');
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    let body;

    body = (
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

                    <form onSubmit={login}>
                        <div className={cx('input-wrapper')}>
                            <div className={cx('input-title')}>Email</div>
                            <div className={cx('input-content')}>
                                <div className=" css-1br1azt">
                                    <input
                                        data-bn-type="input"
                                        name="username"
                                        value={username}
                                        onChange={onChangeLoginForm}
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
                                    <Input.Password
                                        className={cx('input-password')}
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={onChangeLoginForm}
                                    />
                                </div>
                            </div>
                            <div className={cx('input-message')}></div>
                        </div>
                        <Button className={cx('form-btn')} htmlType="submit">
                            Đăng Nhập
                        </Button>
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
    );

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
                    {body}
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
