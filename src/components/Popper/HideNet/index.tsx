import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './HideNet.module.scss';
import HideNetItem from './HideNetItem';

const cx = classNames.bind(styles);
type Props = {
    children: JSX.Element;
    items: any[];
};

function HideNet({ children, items = [] }: Props) {
    const renderItems = (): any => {
        return items.map((item, index) => <HideNetItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            placement="bottom-start"
            render={({ attrs }: any) => (
                <div className={cx('lists')} tabIndex="-1" {...attrs}>
                    {renderItems()}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default HideNet;
