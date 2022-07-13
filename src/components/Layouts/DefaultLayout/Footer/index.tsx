import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Button } from 'antd';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('lists')}>
                <div className={cx('list')}>
                    <div className={cx('items')}>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Về chúng tôi </div>
                            <Button className={cx('content')} href={'/content'}>
                                Thông tin thêm
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Cơ hội nghề nghiệp
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Hợp tác kính doanh
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Cộng đồng
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Binance Blog
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Điều khoản
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Riêng tư
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Cảnh báo rủi ro
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Thông báo
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Tin tức
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Notices
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Tùy chọn Cookie
                            </Button>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Sản phẩm </div>

                            <Button className={cx('content')} href={'/content'}>
                                Exchange
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Academy
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Binance Live
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Charity
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Card
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Lab
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Lauchpad
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Research
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Trust Wallet
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                NFT
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Gửi và Nhận Crypto
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Thẻ quà tặng Binance
                            </Button>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Dịch vụ</div>
                            <Button className={cx('content')} href={'/content'}>
                                Tải xuống
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Ứng dụng dành cho máy tính
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Hợp tác kinh doanh
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua tiền mã hóa
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Dịch vụ cho tổ chức và VIP
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Giới thiệu
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Execution Solutions
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Affiliate
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                BNB
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Giao dịch OTC
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Đăng ký niêm yết coin
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Đăng ký Thương nhân P2P
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Dữ liệu lịch sử thị trường
                            </Button>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Hỗ trợ</div>
                            <Button className={cx('content')} href={'/content'}>
                                Phản hồi
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                trung tâm trợ giúp
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Gửi yếu cầu hỗ trợ
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                phí giao dịch
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Quy tắc giao dịch
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Xác minh
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Yêu cầu Thục thi Pháp luật
                            </Button>
                        </div>
                    </div>
                    <div className={cx('items')}>
                        <div className={cx('item')}>
                            <div className={cx('title')}>Học hỏi </div>
                            <Button className={cx('content')} href={'/content'}>
                                Tìm hiểu nhiều kiến thức và kiếm tiền
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                xem giá tiền mã hóa
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua BNB
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua BUSD
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua Bitcoin
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua Ethereum
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua Litecoin
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua Ripple
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua Bitcoin Cash
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua Dogecoin
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua DeFi
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua SHIB
                            </Button>
                            <Button className={cx('content')} href={'/content'}>
                                Mua altcoin có thể giao dịch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('year')}>
                <div className={cx('year-content')}>Binance © 2022</div>
            </div>
        </footer>
    );
}

export default Footer;
