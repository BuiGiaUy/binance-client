import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Command.module.scss';
import CommandItem from './CommandItem';

const cx = classNames.bind(styles);
type Props = {
    children: JSX.Element;
    items: {
        leftIcon: JSX.Element;
        title: string;
        to: string;
    }[];
};

function Command({ children, items = [] }: Props) {
    const renderItems = () => {
        return items.map((item, index) => <CommandItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            placement="bottom"
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

export default Command;
