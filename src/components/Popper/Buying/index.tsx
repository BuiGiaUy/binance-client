import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Buying.module.scss';
import BuyingItem from './BuyingItem';

const cx = classNames.bind(styles);
type Props = {
    children: JSX.Element;
    items: {
        leftIcon: JSX.Element;
        title: string;
        content: string;
        to: string;
    }[];
};

function Buying({ children, items = [] }: Props) {
    const renderItems = () => {
        return items.map((item, index) => <BuyingItem key={index} data={item} />);
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

export default Buying;
