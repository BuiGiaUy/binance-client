import { Col, Row, Button } from 'antd';
import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import content from '#/assets/images/content.png';
import BTC from '#/assets/images/BTC.png';
import iphone from '#/assets/images/iphone.png';
import nft from '#/assets/images/nft.png';
import pay from '#/assets/images/pay.png';
import earn from '#/assets/images/earn.png';
import { RightOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

const Home: React.FC = () => (
    <>
        <div className={cx('header')}>
            <div className={cx('header-content')}>
                <Row gutter={16} className={cx('header-content-over')}>
                    <Col className={cx('header-content-over-left')} xl={9.7}>
                        <h1 className={cx('header-content-over-left-title')}>
                            <div className={cx('header-content-over-left-title-content')}>
                                Mua, giao dịch và nắm giữ hơn 600 đồng tiền mã hóa trên Binance
                            </div>
                        </h1>
                        <div className={cx('header-content-over-left-list')}>
                            <div className={cx('header-content-over-left-items')}>
                                <div className={cx('header-content-over-left-item')}>
                                    <input
                                        className={cx('header-content-over-left-item-input')}
                                        placeholder="Email/Số điện thoại"
                                    />
                                </div>
                                <Button className={cx('header-content-over-left-item-btn')} href={'/register'}>
                                    Hãy bắt đầu
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col className={cx('header-content-over-right')} xl={12}>
                        <div className={cx('header-content-over-right-item')}>
                            <img src={content} alt="" />
                        </div>
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={cx('header-content-under')}>
                    <Col className={cx('header-content-under-items')} span={6}>
                        <div className={cx('header-content-under-item')}>
                            <div className={cx('header-content-under-title')}>76 tỷ đô la</div>
                            <div className={cx('header-content-under-content')}>
                                Khối lượng giao dịch trong vòng 24 giờ trên sàn giao dịch Binance
                            </div>
                        </div>
                    </Col>
                    <Col className={cx('header-content-under-items')} span={6}>
                        <div className={cx('header-content-under-item')}>
                            <div className={cx('header-content-under-title')}>Hơn 600</div>
                            <div className={cx('header-content-under-content')}>Đồng tiền mã hóa được niêm yết</div>
                        </div>
                    </Col>
                    <Col className={cx('header-content-under-items')} span={6}>
                        <div className={cx('header-content-under-item')}>
                            <div className={cx('header-content-under-title')}>90 triệu</div>
                            <div className={cx('header-content-under-content')}>
                                Người dùng đăng ký tin tưởng vào Binance
                            </div>
                        </div>
                    </Col>
                    <Col className={cx('header-content-under-items')} span={6}>
                        <div className={cx('header-content-under-item')}>
                            <div className={cx('header-content-under-title')}> Lớn hơn 0,10% </div>
                            <div className={cx('header-content-under-content')}>Phí giao dịch thấp nhất</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div className={cx('exchange')}>
            <div className={cx('exchange-content')}>
                <Row className={cx('exchange-content-lists')} gutter={[16, 24]}>
                    <Col className={cx('exchange-content-items')} span={12}>
                        <div className={cx('exchange-content-item')}>
                            <h3>Giao dịch Bitcoin mà không mất phí</h3>
                            <div>Phí 0 đồng khi giao dịch Spot một số cặp Bitcoin (BTC) ngay</div>
                        </div>
                        <Button
                            className={cx('exchange-content-item-btn')}
                            href={'https://www.binance.com/vi/support/announcement/10435147c55d4a40b64fcbf43cb46329'}
                        >
                            Tìm hiểu thêm
                        </Button>
                    </Col>
                    <Col className={cx('exchange-content-items')} span={12}>
                        <img src={BTC} alt="" className={cx('exchange-content-item-img')} />
                    </Col>
                </Row>
            </div>
        </div>

        <div className={cx('guide')}>
            <div className={cx('guide-lists')}>
                <Row gutter={16}>
                    <Col className={cx('guide-container')} span={12}>
                        <div className={cx('guide-content-title')}>
                            <div className={cx('guide-title')}>Tạo danh mục đầu tư tiền mã hóa của bạn</div>
                            <div className={cx('guide-content')}>
                                Bắt đầu giao dịch đầu tiên chỉ với vài bước đơn giản bên dưới.
                            </div>
                        </div>
                        <div className={cx('guide-content-items')}>
                            <div className={cx('guide-content-item')}>
                                <div className={cx('guide-content-item-title')}>Nạp tiền vào tài khoản của bạn</div>
                                <div className={cx('guide-content-item-content')}>
                                    <div>
                                        Nạp tiền vào tài khoản tiền mã hóa để bắt đầu giao dịch tiền mã hóa. Bạn có thể
                                        nạp tiền bằng nhiều phương thức thanh toán khác nhau.
                                    </div>
                                </div>
                            </div>

                            <div className={cx('guide-content-item')}>
                                <div className={cx('guide-content-item-title')}>Xác minh danh tính</div>
                                <div className={cx('guide-content-item-content')}>
                                    <div>
                                        Hoàn tất quy trình xác minh danh tính để bảo vệ tài khoản và giao dịch của bạn.
                                    </div>
                                </div>
                            </div>

                            <div className={cx('guide-content-item')}>
                                <div className={cx('guide-content-item-title')}>Bắt đầu giao dịch</div>
                                <div className={cx('guide-content-item-content')}>
                                    <div>
                                        Bắt đầu ngay thôi! Mua/bán tiền mã hóa, thiết lập tính năng mua tiền mã hóa định
                                        kỳ và khám phá các sản phẩm của Binance.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button className={cx('guide-content-item-btn')} href={'/register'}>
                            Hãy bắt đầu
                        </Button>
                    </Col>
                    <Col className={cx('guide-img')} span={12}>
                        <img src={iphone} alt="" />
                    </Col>
                </Row>
            </div>
        </div>
        <div className={cx('findOut')}>
            <div className={cx('findOut-lists')}>
                <div className={cx('findOut-title')}>
                    <div>Khám phá vô vàn cơ hội trên Binance</div>
                </div>
                <Row gutter={16} className={cx('findOut-table')}>
                    <Col className={cx('findOut-item')} span={8}>
                        <Button className={cx('findOut-wrapper')} href={'/register'}>
                            <img src={nft} alt="" />
                            <div className={cx('findOut-content')}>
                                <h4 className={cx('findOut-content-title')}>Khám phá thế giới NFT</h4>

                                <Button className={cx('findOut-content-btn')}>
                                    <div>Tìm hiểu thêm</div>
                                    <RightOutlined />
                                </Button>
                            </div>
                        </Button>
                    </Col>
                    <Col className={cx('findOut-item')} span={8}>
                        <Button className={cx('findOut-wrapper')} href={'/register'}>
                            <div className={cx('findOut-content')}>
                                <h4 className={cx('findOut-content-title')}>Phát triển doanh nghiệp </h4>

                                <Button className={cx('findOut-content-btn')}>
                                    <div>Tìm hiểu thêm</div>
                                    <RightOutlined />
                                </Button>
                            </div>
                            <img src={pay} alt="" />
                        </Button>
                    </Col>
                    <Col className={cx('findOut-item')} span={8}>
                        <Button className={cx('findOut-wrapper')} href={'/register'}>
                            <img src={earn} alt="" />
                            <div className={cx('findOut-content')}>
                                <h4 className={cx('findOut-content-title')}>Binance Earn</h4>

                                <Button className={cx('findOut-content-btn')}>
                                    <div>Tìm hiểu thêm</div>
                                    <RightOutlined />
                                </Button>
                            </div>
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    </>
);

export default Home;
