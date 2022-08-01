import { AppleFilled, GoogleOutlined } from '@ant-design/icons';
import { Button, Col, Input, Modal, Row, Form } from 'antd';
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
        email: '',
        password: '',
    });
    const { email, password } = loginForm;

    const onChangeLoginForm = (event: any) => setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    // handleFormSubmit
    const handleFormSubmit = async () => {
        try {
            const loginData = await loginUser(loginForm);

            if (loginData.success) {
                history('/dashboard');
            } else {
                setIsModalVisible(true);
            }
        } catch (error) {
            console.log(error);
        }
    };
    // onSubmit
    // const login = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const loginData = await loginUser(loginForm);
    //         if (loginData.success) {
    //             history('/dashboard');
    //         } else {
    //             setIsModalVisible(true);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
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

                    <Form onFinish={handleFormSubmit}>
                        <div className={cx('title-input')}>Email</div>

                        <Form.Item
                            className={cx('input-email')}
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Hãy nhập một địa chỉ email chính xác',
                                },
                                {
                                    required: true,
                                    message: 'Hãy nhập email của bạn',
                                },
                            ]}
                        >
                            <Input className={cx('input')} name="email" value={email} onChange={onChangeLoginForm} />
                        </Form.Item>

                        <div className={cx('input-title')}>Mật khẩu</div>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy nhập mật khẩu của bạn',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                className={cx('input')}
                                name="password"
                                value={password}
                                onChange={onChangeLoginForm}
                            />
                        </Form.Item>

                        <Button className={cx('form-btn')} htmlType="submit">
                            Đăng Nhập
                        </Button>
                    </Form>
                    <Modal
                        closable={false}
                        width="360px"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}
                        wrapClassName={cx('modal-wrapper')}
                    >
                        <div className={cx('modal-svg')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M48 88c22.091 0 40-17.909 40-40S70.091 8 48 8 8 25.909 8 48s17.909 40 40 40zM33 37.198l10.607 10.497L33 58.19l4.243 4.198 10.606-10.496 10.607 10.496 4.242-4.198-10.606-10.496 10.607-10.497L58.456 33 47.849 43.496 37.243 33 33 37.198z"
                                    fill="url(#general-error_svg__paint0)"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M48 19c-16.016 0-29 12.984-29 29s12.984 29 29 29 29-12.984 29-29-12.984-29-29-29zm-4.393 28.695L33 37.199 37.243 33l10.606 10.496L58.456 33l4.242 4.199-10.606 10.496L62.699 58.19l-4.243 4.198-10.607-10.496-10.606 10.496L33 58.191l10.607-10.496z"
                                    fill="url(#general-error_svg__paint1)"
                                ></path>
                                <defs>
                                    <linearGradient
                                        id="general-error_svg__paint0"
                                        x1="8"
                                        y1="48"
                                        x2="88"
                                        y2="48"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#F84960" stop-opacity="0"></stop>
                                        <stop offset="1" stop-color="#F84960"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="general-error_svg__paint1"
                                        x1="77"
                                        y1="48"
                                        x2="19"
                                        y2="48"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#F84960"></stop>
                                        <stop offset="1" stop-color="#D9304E"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div data-bn-type="text" className={cx('modal-content')}>
                            <div data-bn-type="text">Bạn đã nhập sai mật khẩu. Bạn còn 4 lần nữa.</div>
                        </div>

                        <Button onClick={handleOk} className={cx('modal-btn')}>
                            OK
                        </Button>
                    </Modal>

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
