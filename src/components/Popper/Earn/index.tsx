import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Earn.module.scss';
import EarnItem from './EarnItem';

const cx = classNames.bind(styles);
type Props = {
    children: JSX.Element;
    items: any[];
};

function Earn({ children, items = [] }: Props) {
    const renderItems = (): any => {
        return items.map((item, index) => <EarnItem key={index} data={item} />);
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

export default Earn;
