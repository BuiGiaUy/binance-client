import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
    children: JSX.Element;
};

function Wrapper({ children }: Props) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
