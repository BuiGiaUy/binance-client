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
import computer from '#/assets/images/computer.png';
import h1 from '#/assets/images/h1.png';
import h2 from '#/assets/images/h2.png';
import h3 from '#/assets/images/h3.png';
import rain from '#/assets/images/rain.png';
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
        <div className={cx('app')}>
            <div className={cx('app-lists')}>
                <div className={cx('app-title')}>
                    <div className={cx('app-title-content')}>
                        <h1>Giao dịch cả khi đang di chuyển. Mọi lúc, mọi nơi.</h1>
                        <div>Luôn cập nhật thông tin với ứng dụng trên app và desktop của chúng tôi.</div>
                    </div>
                    <Button className={cx('app-title-btn')}>
                        <div>thêm lựa chọn tải xuống </div>
                        <RightOutlined />
                    </Button>
                </div>
                <Row gutter={16}>
                    <Col span={12}>
                        <img src={computer} alt="computer" className={cx('app-content-right')} />
                    </Col>
                    <Col span={12}>
                        <div className={cx('app-content-over')}>
                            <div className={cx('')}>
                                <div className={cx('app-content-over-img')}>
                                    <svg shape-rendering="crispEdges" height="86" width="86" viewBox="0 0 29 29">
                                        <path fill="#FFFFFF" d="M0,0 h29v29H0z"></path>
                                        <path
                                            fill="#000000"
                                            d="M0 0h7v1H0zM8 0h1v1H8zM11 0h5v1H11zM18 0h1v1H18zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM11 1h5v1H11zM19 1h1v1H19zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h2v1H8zM12 2h3v1H12zM20 2h1v1H20zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM12 3h1v1H12zM14 3h7v1H14zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h6v1H8zM15 4h1v1H15zM18 4h2v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM9 5h3v1H9zM13 5h2v1H13zM16 5h1v1H16zM20 5h1v1H20zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM9 7h1v1H9zM12 7h1v1H12zM14 7h1v1H14zM16 7h1v1H16zM20 7h1v1H20zM0 8h1v1H0zM3 8h6v1H3zM13 8h5v1H13zM19 8h1v1H19zM21 8h1v1H21zM24 8h1v1H24zM26,8 h3v1H26zM0 9h2v1H0zM3 9h1v1H3zM5 9h1v1H5zM7 9h3v1H7zM12 9h1v1H12zM14 9h2v1H14zM19 9h1v1H19zM23 9h2v1H23zM26 9h2v1H26zM0 10h3v1H0zM5 10h2v1H5zM8 10h5v1H8zM14 10h3v1H14zM20 10h2v1H20zM23 10h1v1H23zM26 10h1v1H26zM2 11h2v1H2zM5 11h1v1H5zM7 11h1v1H7zM9 11h2v1H9zM12 11h1v1H12zM14 11h1v1H14zM16 11h5v1H16zM25 11h1v1H25zM28,11 h1v1H28zM2 12h1v1H2zM4 12h1v1H4zM6 12h1v1H6zM9 12h3v1H9zM13 12h4v1H13zM20 12h1v1H20zM22 12h2v1H22zM28,12 h1v1H28zM0 13h1v1H0zM3 13h3v1H3zM7 13h2v1H7zM10 13h1v1H10zM15 13h4v1H15zM20 13h1v1H20zM22 13h1v1H22zM24,13 h5v1H24zM0 14h1v1H0zM2 14h1v1H2zM4 14h1v1H4zM6 14h2v1H6zM9 14h1v1H9zM11 14h1v1H11zM14 14h2v1H14zM18 14h4v1H18zM23 14h1v1H23zM26 14h1v1H26zM28,14 h1v1H28zM3 15h1v1H3zM5 15h1v1H5zM13 15h3v1H13zM21 15h4v1H21zM26 15h1v1H26zM28,15 h1v1H28zM1 16h4v1H1zM6 16h3v1H6zM10 16h2v1H10zM18 16h1v1H18zM20 16h1v1H20zM25 16h1v1H25zM0 17h2v1H0zM8 17h4v1H8zM15 17h1v1H15zM18 17h3v1H18zM24 17h1v1H24zM26 17h2v1H26zM0 18h3v1H0zM5 18h3v1H5zM13 18h4v1H13zM19 18h1v1H19zM25 18h1v1H25zM28,18 h1v1H28zM0 19h5v1H0zM7 19h3v1H7zM11 19h3v1H11zM16 19h1v1H16zM20 19h1v1H20zM22 19h5v1H22zM0 20h5v1H0zM6 20h1v1H6zM8 20h1v1H8zM11 20h1v1H11zM13 20h1v1H13zM16 20h2v1H16zM19 20h9v1H19zM8 21h1v1H8zM12 21h2v1H12zM15 21h1v1H15zM18 21h1v1H18zM20 21h1v1H20zM24 21h2v1H24zM0 22h7v1H0zM8 22h1v1H8zM10 22h1v1H10zM13 22h1v1H13zM15 22h1v1H15zM17 22h1v1H17zM19 22h2v1H19zM22 22h1v1H22zM24 22h2v1H24zM0 23h1v1H0zM6 23h1v1H6zM8 23h1v1H8zM11 23h3v1H11zM15 23h1v1H15zM17 23h4v1H17zM24 23h1v1H24zM27 23h1v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h1v1H8zM10 24h1v1H10zM12 24h2v1H12zM16 24h1v1H16zM19 24h7v1H19zM27,24 h2v1H27zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h4v1H8zM13 25h7v1H13zM21 25h1v1H21zM23 25h1v1H23zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM9 26h1v1H9zM12 26h2v1H12zM15 26h1v1H15zM17 26h1v1H17zM20 26h2v1H20zM23 26h2v1H23zM26,26 h3v1H26zM0 27h1v1H0zM6 27h1v1H6zM11 27h1v1H11zM13 27h1v1H13zM15 27h1v1H15zM22 27h2v1H22zM25 27h2v1H25zM28,27 h1v1H28zM0 28h7v1H0zM8 28h1v1H8zM12 28h1v1H12zM14 28h3v1H14zM19 28h2v1H19zM24 28h2v1H24z"
                                        ></path>
                                    </svg>
                                    <div className={cx('')}></div>
                                </div>
                                <div className={cx('app-content-under')}>
                                    <p data-bn-type="text" className={cx('')}>
                                        Quét để Tải xuống
                                    </p>
                                    <div data-bn-type="text" className={cx('')}>
                                        iOS &amp; Android
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('icon')}>
                            <div className={cx('app-store')}>
                                <a
                                    id="download_mobile_app_store"
                                    className={cx('')}
                                    href="https://apps.apple.com/hk/app/binance/id1436799971?l=en"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M15.894 2c.14 1.212-.365 2.405-1.104 3.283-.77.864-2.004 1.524-3.204 1.439-.157-1.165.451-2.405 1.132-3.161.77-.86 2.107-1.517 3.176-1.561zm3.839 6.509c-.142.08-2.354 1.34-2.33 3.902.028 3.102 2.857 4.127 2.89 4.138-.016.072-.443 1.48-1.502 2.908-.886 1.258-1.815 2.488-3.288 2.51-.7.016-1.174-.176-1.667-.375-.514-.208-1.05-.425-1.889-.425-.888 0-1.448.224-1.988.44-.467.186-.918.367-1.555.392-1.403.05-2.476-1.343-3.394-2.59-1.833-2.544-3.261-7.173-1.347-10.322.928-1.545 2.62-2.54 4.428-2.566.796-.016 1.56.276 2.23.531.512.196.969.37 1.343.37.329 0 .773-.167 1.291-.362.816-.308 1.813-.684 2.83-.583.695.02 2.675.26 3.951 2.03l-.003.002z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div data-bn-type="text" className={cx('')}>
                                        App Store
                                    </div>
                                </a>
                            </div>

                            <div className={cx('app-store')}>
                                <a
                                    id="download_mobile_android_apk"
                                    className={cx('')}
                                    href="https://ftp.binance.com/pack/Binance.apk"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            d="M17.543 14.1a1 1 0 01-.997-.997 1 1 0 01.997-.997 1 1 0 01.997.997 1 1 0 01-.997.997zm-11.05 0a1 1 0 01-.996-.997 1 1 0 01.997-.997 1 1 0 01.997.997.993.993 0 01-.997.997zM17.9 8.082l1.994-3.458a.409.409 0 00-.155-.567.409.409 0 00-.567.156l-2.022 3.503a12.354 12.354 0 00-5.14-1.098c-1.857 0-3.594.394-5.14 1.098L4.848 4.213a.419.419 0 00-.568-.156.419.419 0 00-.155.567l1.994 3.458C2.689 9.948.348 13.423 0 17.52h24c-.32-4.107-2.67-7.583-6.1-9.44z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div data-bn-type="text" className={cx('')}>
                                        Android APK
                                    </div>
                                </a>
                            </div>

                            <div className={cx('app-store')}>
                                <a
                                    id="download_mobile_google_play"
                                    className={cx('')}
                                    href="https://play.google.com/store/apps/details?id=com.binance.dev"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.196 20.822l8.743-8.727-8.743-8.743c-.215.347-.364.91-.364 1.722V19.1c0 .811.149 1.374.364 1.722zM15.63 15.787l-2.864-2.88-8.51 8.527h.083c.728 0 1.357-.265 2.367-.811l8.925-4.836zM16.704 8.965l-3.113 3.13 3.113 3.113 1.888-1.027c.695-.38 1.755-1.076 1.755-2.086 0-1.027-1.06-1.723-1.755-2.104l-1.888-1.026zM4.256 2.738l8.51 8.528 2.865-2.88L6.706 3.55c-1.01-.547-1.639-.812-2.367-.812h-.083z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div data-bn-type="text" className={cx('')}>
                                        Google Play
                                    </div>
                                </a>
                            </div>

                            <div className={cx('app-store')}>
                                <a
                                    id="download_desktop_mac"
                                    className={cx('')}
                                    href="https://ftp.binance.com/electron-desktop/mac/production/binance.dmg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.57 16.156h-.617l-3.945-5.718h-.04l-3.945 5.718h-.609l4.258-6.14L7.39 5.844h.617l3.96 5.742h.04l3.969-5.742h.609l-4.29 6.172 4.274 6.14z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div data-bn-type="text" className={cx('')}>
                                        MacOS
                                    </div>
                                </a>
                            </div>

                            <div className={cx('app-store')}>
                                <a
                                    id="download_desktop_windows"
                                    className={cx('')}
                                    href="https://ftp.binance.com/electron-desktop/windows/production/binance-setup.exe"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            d="M0 3.75v7.5h10.5V2.437L0 3.75zM12 2.25v9h12V.75l-12 1.5zM12 12.75v9l12 1.5v-10.5H12zM0 12.75v7.5l10.5 1.313V12.75H0z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div data-bn-type="text" className={cx('')}>
                                        Windows
                                    </div>
                                </a>
                            </div>

                            <div className={cx('app-store')}>
                                <a
                                    id="download_desktop_linux"
                                    className={cx('')}
                                    href="https://www.binance.com/vi/download"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <g clip-path="url(#downloadable-linux-s24_svg__clip0)">
                                            <path
                                                d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057a2.924 2.924 0 01-1.155.835c-1.652.72-.441 1.925-.898 2.78a1.57 1.57 0 00-.192.74c0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zM11.434 8.584c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73zm1.665-5.215c.882.141.981 1.691.559 2.454l-.355-.145c.184-.543.181-1.437-.435-1.494-.391-.036-.643.48-.697.922a1.686 1.686 0 00-.523-.127c.062-.923.658-1.737 1.451-1.61zM9.696 3.7c.676-.168 1.075.618 1.078 1.435l-.31.19c-.042-.343-.195-.897-.579-.779-.411.128-.344 1.083-.115 1.279l-.306.17c-.42-.707-.419-2.133.232-2.295zM7.581 22.943c-1.963-.893-2.63-.69-3.005-.69-.777 0-1.031-.579-.739-1.127.248-.465.171-.952.11-1.343-.094-.599-.111-.794.478-1.052.815-.346 1.177-.791 1.447-1.124.758-.937 1.523.537 2.15 1.85.407.851 1.208 1.282 1.455 2.225.227.871-.71 1.801-1.896 1.261zm6.987-1.874c-1.384.673-3.147.982-4.466.299-.195-.563-.507-.927-.843-1.293.539-.142.939-.814.46-1.489-.511-.721-1.555-1.224-2.61-2.04-.987-.763-1.299-2.644.045-4.746-.655 1.862-.272 3.578.057 4.069.068-.988.146-2.638 1.496-4.615.681-.998.691-2.316.706-3.14l.62.424c.456.337.838.708 1.386.708.81 0 1.258-.466 1.882-.853.244-.15.613-.302.923-.513.52 2.476 2.674 5.454 2.795 7.15.501-1.032-.142-3.514-.142-3.514.842 1.285.909 2.356.946 3.67.589.241 1.221.869 1.279 1.696l-.245-.028c-.126-.919-2.607-2.269-2.83-.539-1.19.181-.757 2.066-.997 3.288-.11.559-.314 1.001-.462 1.466zm4.846-.041c-.985.38-1.65 1.187-2.107 1.688-.88.966-2.044.503-2.168-.401-.131-.966.36-1.493.572-2.574.193-.987-.023-2.506.431-2.668.295 1.753 2.066 1.016 2.47.538.657 0 .712.222.859.837.092.385.219.709.578 1.09.418.447.29 1.133-.635 1.49zm-8-13.006c-.651 0-1.138-.433-1.534-.769-.203-.171.05-.487.253-.315.387.328.777.675 1.281.675.607 0 1.142-.519 1.867-.805.247-.097.388.285.143.382-.704.277-1.269.832-2.01.832z"
                                                fill="currentColor"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="downloadable-linux-s24_svg__clip0">
                                                <path fill="#fff" d="M0 0h24v24H0z"></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div data-bn-type="text" className={cx('')}>
                                        Linux
                                    </div>
                                </a>
                            </div>

                            <div className={cx('app-store')}>
                                <a
                                    id="download_api"
                                    className={cx('')}
                                    href="https://binance-docs.github.io/apidocs/spot/en"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            d="M12 22c5.522 0 10-4.477 10-10S17.522 2 12 2c-5.186 0-9.45 3.947-9.951 9h4.528c.43-2.77 2.62-5 5.422-5h3.5v2.5H19v2h-3.5v3H19v2h-3.5V18H12c-2.803 0-4.992-2.23-5.422-5H2.049c.502 5.053 4.765 9 9.95 9z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M12 8c-1.837 0-3.5 1.69-3.5 4s1.663 4 3.5 4h1.5V8H12z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <div data-bn-type="text" className={cx('')}>
                                        API
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div className={cx('reliable')}>
            <div className={cx('reliable-title')}>
                <div className={cx('reliable-title-wrapper')}>
                    <div>
                        <div className={cx('reliable-title-wrapper-title')}>
                            Sàn giao dịch tiền mã hóa đáng tin cậy của bạn
                        </div>
                        <div className={cx('reliable-title-wrapper-content')}>
                            Tại Binance, chúng tôi cam kết bảo vệ người dùng bằng các quy trình nghiêm ngặt và các biện
                            pháp kỹ thuật hàng đầu trong ngành.
                        </div>
                    </div>
                    <Button className={cx('app-title-btn')}>
                        <div>Tìm hiểu thêm</div>
                        <RightOutlined />
                    </Button>
                </div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <div>
                            <div className={cx('reliable-right-item')}>
                                <img alt="" src={h1} className={cx('reliable-right-item-img')} />
                                <div className={cx('reliable-right-item-wrapper')}>
                                    <h4 data-bn-type="text">Quỹ tài sản an toàn cho người dùng (SAFU)</h4>
                                    <div>
                                        <div>
                                            Binance trích 10% phí giao dịch trong một quỹ tài sản đảm bảo để bảo vệ một
                                            phần tiền của người dùng.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('reliable-right-item')}>
                                <img alt="" src={h2} className={cx('reliable-right-item-img')} />
                                <div className={cx('reliable-right-item-wrapper')}>
                                    <h4 data-bn-type="text">Kiểm soát quyền truy cập theo ý muốn riêng</h4>
                                    <div>
                                        <div>
                                            Tính năng kiểm soát quyền truy cập nâng cao cho phép bạn hạn chế các thiết
                                            bị và địa chỉ có thể truy cập vào tài khoản của bạn, giúp bạn yên tâm hơn.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('reliable-right-item')}>
                                <img alt="" src={h3} className={cx('reliable-right-item-img')} />
                                <div className={cx('reliable-right-item-wrapper')}>
                                    <h4 data-bn-type="text">Công nghệ mã hóa dữ liệu nâng cao</h4>
                                    <div>
                                        <div>
                                            Dữ liệu giao dịch của bạn được bảo mật thông qua công nghệ mã hóa đầu cuối,
                                            đảm bảo chỉ bạn mới có quyền truy cập thông tin cá nhân của mình.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img alt="" className={cx('reliable-left-item')} src={rain} />
                    </Col>
                </Row>
            </div>
        </div>
        <div className={cx('help')}>
            <div className={cx('help-lists')}>
                <div className={cx('help-title')}>
                    <div>Cần sự giúp đỡ?</div>
                </div>
                <Row gutter={16}>
                    <Col className={cx('help-content')} span={8}>
                        <div>
                            <div className={cx('help-content-img-h4')}></div>
                            <div className={cx('help-content-wrapper')}>
                                <div className={cx('')}>
                                    <h4 data-bn-type="text" className={cx('')}>
                                        Chat hỗ trợ 24/7
                                    </h4>
                                    <div className={cx('')}>
                                        <div className={cx('')}>
                                            Nhận sự hỗ trợ 24/7 thông qua hình thức chat với các nhân viên hỗ trợ khách
                                            hàng thân thiện của chúng tôi.
                                        </div>
                                    </div>
                                </div>
                                <a className={cx('help-content-btn')} href="https://accounts.binance.com/vi/register">
                                    <div data-bn-type="text" className={cx('')}>
                                        Trò chuyện ngay
                                    </div>
                                    <RightOutlined />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className={cx('help-content')} span={8}>
                        <div>
                            <div className={cx('help-content-img-h5')}></div>
                            <div className={cx('help-content-wrapper')}>
                                <div className={cx('')}>
                                    <h4 data-bn-type="text" className={cx('')}>
                                        Câu hỏi thường gặp
                                    </h4>
                                    <div className={cx('')}>
                                        <div className={cx('')}>
                                            Xem mục Câu hỏi thường gặp để biết hướng dẫn chi tiết về từng tính năng.
                                        </div>
                                    </div>
                                </div>
                                <a className={cx('help-content-btn')} href="https://accounts.binance.com/vi/register">
                                    <div data-bn-type="text" className={cx('')}>
                                        tìm hiểu thêm
                                    </div>
                                    <RightOutlined />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className={cx('help-content')} span={8}>
                        <div>
                            <div className={cx('help-content-img-h6')}></div>
                            <div className={cx('help-content-wrapper')}>
                                <div className={cx('')}>
                                    <h4 data-bn-type="text" className={cx('')}>
                                        Blog
                                    </h4>
                                    <div className={cx('')}>
                                        <div className={cx('')}>
                                            Luôn cập nhật những câu chuyện và bình luận mới nhất.
                                        </div>
                                    </div>
                                </div>
                                <a className={cx('help-content-btn')} href="https://accounts.binance.com/vi/register">
                                    <div data-bn-type="text" className={cx('')}>
                                        tìm hiểu thêm
                                    </div>
                                    <RightOutlined />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div className={cx('register')}>
            <div className={cx('register-lists')}>
                <div className={cx('register-wrapper')}>
                    <h5 data-bn-type="text" className={cx('')}>
                        Bắt đầu tăng thu nhập ngay hôm nay
                    </h5>
                    <div className={cx('')}>
                        <a className={cx('')} href="https://accounts.binance.com/vi/register">
                            Đăng ký ngay
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Home;
