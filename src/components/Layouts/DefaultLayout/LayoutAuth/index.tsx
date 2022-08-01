import styles from './LayoutAuth.module.scss';
import classNames from 'classnames/bind';

import { Layout } from 'antd';
import DefaultFooter from '../Footer';
import DefaultHeader from '../Header';
import DefaultSider from '../Sider';
const cx = classNames.bind(styles);
const { Header, Content, Footer, Sider } = Layout;

const LayoutAuth = ({ children }: any) => (
    <Layout className={cx('wrapper')}>
        <Header className="header">
            <DefaultHeader />
        </Header>
        <Layout>
            <Sider className={cx('sider')}>
                <DefaultSider />
            </Sider>
            <Layout
                style={{
                    padding: '0 40px 24px',
                }}
            >
                <Content>{children}</Content>
            </Layout>
        </Layout>
        <Footer>
            <DefaultFooter />
        </Footer>
    </Layout>
);

export default LayoutAuth;
