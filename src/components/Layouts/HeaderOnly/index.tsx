import HeaderNotNavBar from './HeaderNotNavBar';

function DefaultLayout({ children }: any) {
    return (
        <div>
            <HeaderNotNavBar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
