import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Form, Input, Checkbox } from 'antd';
import { useContext, useState } from 'react';
import styles from './Person.module.scss';
import { AuthContext } from '#/auth';

const cx = classNames.bind(styles);

const Person = () => {
    // Context
    const { registerUser } = useContext(AuthContext);

    // Router
    const history = useNavigate();
    // RegisterForm
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
    });
    const { email, password } = registerForm;

    const onChangeRegisterForm = (event) =>
        setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });

    const register = async () => {
        try {
            const registerData = await registerUser(registerForm);
            if (registerData.success) {
                history('/dashboard');
            } else {
                // setIsModalVisible(true);
            }
        } catch (error) {
            console.log(error);
        }
    };
    // Checked
    const [checked, setChecked] = useState(false);

    const onCheckboxChange = async (e) => {
        await setChecked(e.target.checked);
    };

    const validation = (rule, value, message) => {
        if (checked) {
            return message();
        }
        return message('Tôi đã trên 18 tuổi, và đồng ý với các Điều khoản của Binance');
    };

    return (
        <>
            <Row className={cx('container')}>
                <Col span={14} className={cx('content-left')}>
                    <div>
                        <div data-bn-type="text" className={cx('title')}>
                            Tạo tài khoản cá nhân
                        </div>
                        <div className={cx('content-title')}>
                            <div id="tab-email" className={cx('content-title-item')}>
                                <div className={cx('')}>Email</div>
                            </div>
                            <div id="tab-mobile" className={cx('content-title-item')}>
                                <div className={cx('')}>Số điện thoại</div>
                            </div>
                        </div>

                        <Form onFinish={register}>
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
                                <Input
                                    className={cx('input')}
                                    name="email"
                                    value={email}
                                    onChange={onChangeRegisterForm}
                                />
                            </Form.Item>

                            <div className={cx('title-input')}>Password</div>

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
                                    onChange={onChangeRegisterForm}
                                />
                            </Form.Item>

                            <div className={cx('title-input')}>Password</div>

                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy nhập mật khẩu của bạn',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Hai mật khẩu bạn đã nhập không khớp!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password className={cx('input')} />
                            </Form.Item>

                            <Form.Item name="checkbox" rules={[{ validator: validation }]}>
                                <Checkbox className={cx('checkbox')} checked={checked} onChange={onCheckboxChange}>
                                    Tôi đã đọc và đồng ý với{' '}
                                    <a
                                        data-bn-type="link"
                                        href="https://www.binance.com/vi/terms"
                                        id="RegisterForm-a-termsOfUse"
                                    >
                                        Điều khoản dịch vụ
                                    </a>{' '}
                                    cũng như{' '}
                                    <a
                                        data-bn-type="link"
                                        href="https://www.binance.com/vi/privacy"
                                        id="RegisterForm-a-termsOfUse2"
                                    >
                                        Chính sách Quyền riêng tư
                                    </a>{' '}
                                    của Binance.
                                </Checkbox>
                            </Form.Item>
                            <button className={cx('form-btn')} type="submit">
                                Đăng ký tài khoản bằng email
                            </button>
                        </Form>

                        <div className={cx('content')}>
                            Đã đăng ký rồi?&nbsp;
                            <Link data-bn-type="text" to={'/login'} className={cx('')}>
                                Đăng nhập
                            </Link>
                        </div>

                        <Link data-bn-type="text" to={'/'} className={cx('register')}>
                            Tạo tài khoản cá nhân
                        </Link>
                    </div>
                </Col>
                <Col span={10} className={cx('content-right')}></Col>
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
};

export default Person;
