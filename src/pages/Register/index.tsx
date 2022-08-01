import { AppleFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';
import register from '#/assets/images/register.png';
import google from '#/assets/images/google.png';

const cx = classNames.bind(styles);

function Register() {
    return (
        <>
            <Row className={cx('container')}>
                <Col span={12} className={cx('content-left')}>
                    <div>
                        <div data-bn-type="text" className={cx('title')}>
                            Chào mừng đến với Binance!
                        </div>
                        <Link className={cx('form-btn')} to="/register-person">
                            Đăng ký tài khoản bằng email
                        </Link>
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
                                            <img src={google} alt="" />
                                        </div>
                                        <div className={cx('btn-item-content')}>Tiếp tục với Google</div>
                                    </div>
                                    <div className={cx('btn-message')}></div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            Đã đăng ký rồi?&nbsp;
                            <Link data-bn-type="text" to={'/login'} className={cx('')}>
                                Đăng nhập
                            </Link>
                        </div>
                        <Link data-bn-type="text" to={'/'} className={cx('register')}>
                            Đăng ký tài khoản pháp nhân
                        </Link>
                    </div>
                </Col>
                <Col span={12} className={cx('content-right')}>
                    <div>
                        <img src={register} alt="" className={cx('img')} />
                        <div className={cx('content-bot')}>
                            <div data-bn-type="text" className={cx('content-item')}>
                                Mua tiền mã hóa chỉ trong vài phút
                            </div>
                            <div data-bn-type="text" className={cx('content-item-bot')}>
                                Tận hưởng sàn giao dịch tiền mã hóa lớn nhất thế giới trong tầm tay của bạn.
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className={cx('footer')}>
                <div data-bn-type="text" data-ot-trigger="true" className="css-ommr9c">
                    Tùy chọn Cookie
                </div>
            </div>
        </>
    );
}

export default Register;
