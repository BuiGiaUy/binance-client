import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import styles from './Avartar.module.scss';
import AvartarItem from './AvartarItem';
import { faGem, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { LogoutOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { AuthContext } from '#/auth';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
type Props = {
    children: JSX.Element;
    items: {
        leftIcon: JSX.Element;
        title: string;
        to: string;
    }[];
};

function Avartar({ children, items = [] }: Props) {
    // history
    const history = useNavigate();
    const {
        authState: {
            user: { email },
        },
        authLogout,
    } = useContext(AuthContext);

    const logout = () => {
        authLogout();

        history('/');
    };

    const renderItems = () => {
        return items.map((item, index) => <AvartarItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            placement="bottom-start"
            render={({ attrs }: any) => (
                <div className={cx('lists')} tabIndex="-1" {...attrs}>
                    <>
                        <div className={cx('header')}>
                            <div data-bn-type="text" className={cx('header-name')}>
                                {email}
                            </div>
                            <div className={cx('header-content')}>
                                <div className={cx('header-right')}>
                                    <FontAwesomeIcon icon={faGem} />
                                    <div data-bn-type="text" className={cx('')}>
                                        Người dùng thông thường
                                    </div>
                                </div>
                                <div className={cx('header-left')}>
                                    <FontAwesomeIcon icon={faCircleCheck} />

                                    <div data-bn-type="text" className={cx('')}>
                                        Đã xác minh
                                    </div>
                                </div>
                            </div>
                        </div>
                        {renderItems()}
                        <div className={cx('avartarItem')} onClick={logout}>
                            <div className={cx('leftIcon')}>
                                <LogoutOutlined />
                            </div>

                            <div data-bn-type="text" className={cx('avartarItem-title')}>
                                Đăng xuất
                            </div>
                        </div>
                    </>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Avartar;
