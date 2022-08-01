import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import { AuthContext } from '#/auth';
import Error from '#/pages/Error';

const PrivateRoute = () => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);
    if (authLoading) {
        return (
            <div className="example">
                <Spin size="large" />
            </div>
        );
    }
    return isAuthenticated ? <Outlet /> : <Error />;
};

export default PrivateRoute;
