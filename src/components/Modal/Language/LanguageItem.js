import classNames from 'classnames/bind';

import styles from './Language.module.scss';

const cx = classNames.bind(styles);

function LanguageItem({ data }) {
    return (
        <button className={cx('languageItem')}>
            <div className={cx('content')}>{data.content}</div>
        </button>
    );
}

export default LanguageItem;
