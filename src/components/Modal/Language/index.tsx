import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Language.module.scss';
import Wrapper from '../Wrapper';

const cx = classNames.bind(styles);

type IProps = {
    closeModal: any;
};

function Language({ closeModal }: IProps) {
    return (
        <Wrapper>
            <div className={cx('modal')}>
                <button onClick={() => closeModal(false)} className={cx('close')}>
                    <FontAwesomeIcon icon={faCircleXmark} className={cx('close-svg')} />
                </button>
                <div className={cx('header')}>
                    <div className={cx('header-item-a')}>Ngôn ngữ và vị trí</div>
                    <div className={cx('header-item-b')}>Đồng tiền</div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-header')}>Chọn ngôn ngữ và vị trí</div>
                    <div className={cx('content-lists')}>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                        <Link to={'/tien'} className={cx('content-item')}>
                            Tiếng Việt
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Language;
