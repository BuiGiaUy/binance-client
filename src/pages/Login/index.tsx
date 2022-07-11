import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Button } from 'antd';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('main')}>
            <div className={cx('space')}></div>
            <form action="" method="POST" className={cx('form')} id="form-1">
                <h1 className={cx('heading')}>Đăng nhập tài khoản Binance</h1>

                <div className={cx('spacer')}></div>

                <div className={cx('content')}>
                    <Button className={cx('from-btn')}>email</Button>
                    <div className={cx('form-group')}>
                        <label className={cx('form-label')}>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="VD: email@domain.com"
                            className={cx('form-control')}
                        />
                        <span className={cx('form-message')}></span>
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('form-label')}>Mật khẩu</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            className={cx('form-control')}
                        />
                        <span className={cx('form-message')}></span>
                    </div>

                    <Button className={cx('form-submit')}>Đăng Nhập</Button>
                </div>
            </form>
        </div>
    );
}

export default Login;
