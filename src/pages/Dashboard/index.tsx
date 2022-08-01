import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import BTC from '#/assets/images/BTC.png';

const cx = classNames.bind(styles);

function Dashboard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <div className={cx('title-logo')}>
                        <img
                            src="https://public.bnbstatic.com/image/common_notification/20211230/f6305dee-e00e-4bfe-9d13-3073ad8eb565.png"
                            className={cx('')}
                            alt=""
                        />
                        <div className={cx('')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={cx('')}>
                                <path
                                    d="M17.879 3.293l2.828 2.828-2.12 2.121-2.83-2.828 2.122-2.121zm-3.183 3.182l2.829 2.829-4.667 4.666H10.03v-2.828l4.666-4.667zM7 4h4v3H7v10h10v-4h3v7H4V4h3z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </div>

                    <div className={cx('title-content')}>
                        <div className={cx('title-title')}>
                            <div
                                data-bn-type="text"
                                title="Anonymous-User-6575c"
                                className={cx('title-name')}
                                // style="overflow: hidden; -webkit-line-clamp: 2;"
                            >
                                Anonymous-User-6575c
                            </div>
                            <div className={cx('personal-information')}>Thông tin cá nhân</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={cx('')}>
                                <path
                                    d="M15.336 4.776l3.89 3.889-1.768 1.767-3.89-3.889 1.768-1.767zm-3.181 3.181l3.889 3.89-5.129 5.128H20v3H7.915l-.004.003H4.022V16.09l8.133-8.132z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>

                        <div className={cx('title-content-items')}>
                            <div className={cx('title-content-item')}>
                                <div className={cx('title-content-item-title')}>
                                    <div data-bn-type="text" className={cx('')}>
                                        ID người dùng
                                    </div>
                                </div>
                                <div data-bn-type="text" className={cx('title-content-item-content')}>
                                    414975211
                                </div>
                            </div>
                            <div className={cx('title-content-item')}>
                                <a href="https://www.binance.com/vi/fee/vip" className={cx('title-content-item-title')}>
                                    <div data-bn-type="text" className={cx('')}>
                                        Loại người dùng
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('title-svg')}
                                    >
                                        <path
                                            d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <div className={cx('')}>
                                    <div data-bn-type="text" className={cx('title-content-item-content')}>
                                        Người dùng thông thường
                                    </div>
                                </div>
                            </div>
                            <div className={cx('title-content-item')}>
                                <div className={cx('title-content-item-title')}>
                                    <div data-bn-type="text" className={cx('')}>
                                        Twitter
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('title-svg')}
                                    >
                                        <path
                                            d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <div className={cx('')}>
                                    <div data-bn-type="text" className={cx('title-content-item-content')}>
                                        chưa liên kết
                                    </div>
                                </div>
                            </div>
                            <div className={cx('')}>
                                <a
                                    href="https://www.binance.com/vi/my/security/account-activity"
                                    className={cx('title-content-item-title')}
                                >
                                    <div data-bn-type="text" className={cx('')}>
                                        Đăng nhập lần cuối
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('title-svg')}
                                    >
                                        <path
                                            d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <div className={cx('')}>
                                    <div className={cx('')}>
                                        <div data-bn-type="text" className={cx('title-content-item-content')}>
                                            2022-07-30 13:17:28(14.234.3.60)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-left')}>
                        <div className={cx('recharge-wrap')}>
                            <div className={cx('recharge')}>
                                <div className={cx('recharge-title')}>
                                    <div className={cx('recharge-title-text')}>
                                        <div className={cx('')}>
                                            <div data-bn-type="text" className={cx('recharge-title-text-title')}>
                                                Nạp tiền vào tài khoản
                                            </div>
                                            <div data-bn-type="text" className={cx('recharge-title-text-text')}>
                                                Binance hỗ trợ nhiều tùy chọn để nạp tiền vào tài khoản. Tìm phương thức
                                                phù hợp với bạn nhất.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('recharge-title-video')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className={cx('')}
                                        >
                                            <path
                                                d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm8.934 3.5H10v-7h1.934L16 12l-4.066 3.5z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <div data-bn-type="text" className={cx('')}>
                                            Video hướng dẫn
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('recharge-content')}>
                                    <div className={cx('recharge-item')}>
                                        <div className={cx('')}>
                                            <div className={cx('recharge-item-svg')}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 96 96"
                                                    fill="none"
                                                    className={cx('')}
                                                >
                                                    <path fill="#E6E8EA" d="M12 84h72V42H12z"></path>
                                                    <path
                                                        d="M26 57h44L48 79 26 57z"
                                                        fill="url(#deposit-light_svg__paint0_linear)"
                                                    ></path>
                                                    <circle
                                                        r="22"
                                                        transform="matrix(1 0 0 -1 48 30)"
                                                        fill="#F8D33A"
                                                    ></circle>
                                                    <circle
                                                        r="15.053"
                                                        transform="matrix(1 0 0 -1 48 30)"
                                                        fill="url(#deposit-light_svg__paint1_linear)"
                                                    ></circle>
                                                    <path
                                                        d="M39.895 30L48 38.105 56.105 30 48 21.895 39.895 30z"
                                                        fill="#F0B90B"
                                                    ></path>
                                                    <path d="M80 30l2-2 2 2-2 2-2-2z" fill="#E6E8EA"></path>
                                                    <path
                                                        d="M19 49l3-3 3 3-3 3-3-3zM65 75.5l1.5-1.5 1.5 1.5-1.5 1.5-1.5-1.5z"
                                                        fill="#fff"
                                                    ></path>
                                                    <defs>
                                                        <linearGradient
                                                            id="deposit-light_svg__paint0_linear"
                                                            x1="48"
                                                            y1="57"
                                                            x2="48"
                                                            y2="79"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#929AA5"></stop>
                                                            <stop offset="1" stopColor="#76808F"></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="deposit-light_svg__paint1_linear"
                                                            x1="15.053"
                                                            y1="0"
                                                            x2="15.053"
                                                            y2="30.105"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#F0B90B"></stop>
                                                            <stop offset="1" stopColor="#F8D33A"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className={cx('recharge-item-div')}>
                                                <div data-bn-type="text" className={cx('recharge-item-div-title')}>
                                                    Mua Tiền mã hóa
                                                </div>
                                                <div data-bn-type="text" className={cx('recharge-item-div-content')}>
                                                    Nếu bạn muốn mua tiền mã hóa trực tiếp bằng tiền mặt, đây sẽ là
                                                    phương thức tốt nhất dành cho bạn.
                                                </div>
                                            </div>
                                        </div>
                                        <button data-bn-type="button" className={cx('')}>
                                            Mua
                                        </button>
                                    </div>
                                    <div className={cx('recharge-item')}>
                                        <div className={cx('')}>
                                            <div className={cx('recharge-item-svg')}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 96 96"
                                                    fill="none"
                                                    className={cx('')}
                                                >
                                                    <path
                                                        d="M88 21H8v54h80V21zM14 63h44v6H14v-6zm68 0H71v6h11v-6z"
                                                        fill="#E6E8EA"
                                                    ></path>
                                                    <path
                                                        d="M63 81.5l2.5-2.5 2.5 2.5-2.5 2.5-2.5-2.5zM14 13l3-3 3 3-3 3-3-3z"
                                                        fill="#E6E8EA"
                                                    ></path>
                                                    <path
                                                        fill="url(#fiat-light_svg__paint0_linear)"
                                                        d="M8 32h80v11H8z"
                                                    ></path>
                                                    <circle
                                                        r="15"
                                                        transform="matrix(1 0 0 -1 50 23)"
                                                        fill="#F8D33A"
                                                    ></circle>
                                                    <circle
                                                        r="10.862"
                                                        transform="matrix(1 0 0 -1 50 23)"
                                                        fill="url(#fiat-light_svg__paint1_linear)"
                                                    ></circle>
                                                    <path
                                                        d="M44.31 23L50 28.69 55.69 23 50 17.31 44.31 23z"
                                                        fill="#F0B90B"
                                                    ></path>
                                                    <circle
                                                        r="10"
                                                        transform="matrix(1 0 0 -1 70 56)"
                                                        fill="#F8D33A"
                                                    ></circle>
                                                    <circle
                                                        r="7.273"
                                                        transform="matrix(1 0 0 -1 70 56)"
                                                        fill="url(#fiat-light_svg__paint2_linear)"
                                                    ></circle>
                                                    <path
                                                        d="M66.364 56L70 59.636 73.636 56 70 52.363 66.364 56z"
                                                        fill="#F0B90B"
                                                    ></path>
                                                    <circle
                                                        r="12"
                                                        transform="matrix(1 0 0 -1 28 76)"
                                                        fill="#F8D33A"
                                                    ></circle>
                                                    <circle
                                                        r="8.727"
                                                        transform="matrix(1 0 0 -1 28 76)"
                                                        fill="url(#fiat-light_svg__paint3_linear)"
                                                    ></circle>
                                                    <path
                                                        d="M23.636 76L28 80.364 32.364 76 28 71.636 23.636 76z"
                                                        fill="#F0B90B"
                                                    ></path>
                                                    <defs>
                                                        <linearGradient
                                                            id="fiat-light_svg__paint0_linear"
                                                            x1="88"
                                                            y1="32"
                                                            x2="8"
                                                            y2="32"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#929AA5"></stop>
                                                            <stop offset="1" stopColor="#76808F"></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="fiat-light_svg__paint1_linear"
                                                            x1="10.862"
                                                            y1="0"
                                                            x2="10.862"
                                                            y2="21.724"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#F0B90B"></stop>
                                                            <stop offset="1" stopColor="#F8D33A"></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="fiat-light_svg__paint2_linear"
                                                            x1="7.273"
                                                            y1="0"
                                                            x2="7.273"
                                                            y2="14.546"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#F0B90B"></stop>
                                                            <stop offset="1" stopColor="#F8D33A"></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="fiat-light_svg__paint3_linear"
                                                            x1="8.727"
                                                            y1="0"
                                                            x2="8.727"
                                                            y2="17.454"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#F0B90B"></stop>
                                                            <stop offset="1" stopColor="#F8D33A"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className={cx('recharge-item-div')}>
                                                <div data-bn-type="text" className={cx('recharge-item-div-title')}>
                                                    Nạp tiền mã hoá
                                                </div>
                                                <div data-bn-type="text" className={cx('recharge-item-div-content')}>
                                                    Nếu bạn đã có tiền mã hóa, bạn có thể sử dụng chức năng nạp để
                                                    chuyển chúng từ các nền tảng giao dịch hoặc ví khác sang tài khoản
                                                    Binance của mình.
                                                </div>
                                            </div>
                                        </div>
                                        <button data-bn-type="button" className={cx('')}>
                                            Nạp
                                        </button>
                                    </div>
                                    <div className={cx('recharge-item')}>
                                        <div className={cx('')}>
                                            <div className={cx('recharge-item-svg')}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 64 64"
                                                    fill="none"
                                                    className={cx('')}
                                                >
                                                    <path
                                                        d="M51.333 15L49 17.334 46.667 15 49 12.667 51.333 15zM30.667 60.666l-2 2-2-2 2-2 2 2zM5.333 32h-2v-2h2v2z"
                                                        fill="#E6E8EA"
                                                    ></path>
                                                    <path
                                                        d="M17.333 5.333h29.334L32 20 17.333 5.334z"
                                                        fill="#76808F"
                                                    ></path>
                                                    <path
                                                        d="M22.667 24H8v14h11.838l-5.252-5.253 2.828-2.828 5.253 5.252V24z"
                                                        fill="url(#gift-card-receive-light_svg__paint0_linear_1951_51822)"
                                                    ></path>
                                                    <path
                                                        d="M26.667 24H56v14H29.495l5.253-5.253-2.829-2.828-5.252 5.253V24z"
                                                        fill="url(#gift-card-receive-light_svg__paint1_linear_1951_51822)"
                                                    ></path>
                                                    <path
                                                        d="M56 42v14H8V38v4h11.838l-5.252 5.252 2.828 2.829 5.253-5.253V56h4V44.828l5.252 5.253 2.829-2.829L29.495 42H56z"
                                                        fill="url(#gift-card-receive-light_svg__paint2_linear_1951_51822)"
                                                    ></path>
                                                    <path d="M20.667 40l4-4 4 4-4 4-4-4z" fill="#76808F"></path>
                                                    <defs>
                                                        <linearGradient
                                                            id="gift-card-receive-light_svg__paint0_linear_1951_51822"
                                                            x1="32"
                                                            y1="56"
                                                            x2="32"
                                                            y2="24"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#F0B90B"></stop>
                                                            <stop offset="1" stopColor="#F8D33A"></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="gift-card-receive-light_svg__paint1_linear_1951_51822"
                                                            x1="32"
                                                            y1="56"
                                                            x2="32"
                                                            y2="24"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#F0B90B"></stop>
                                                            <stop offset="1" stopColor="#F8D33A"></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="gift-card-receive-light_svg__paint2_linear_1951_51822"
                                                            x1="32"
                                                            y1="56"
                                                            x2="32"
                                                            y2="24"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#F0B90B"></stop>
                                                            <stop offset="1" stopColor="#F8D33A"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className={cx('recharge-item-div')}>
                                                <div data-bn-type="text" className={cx('recharge-item-div-title')}>
                                                    Nhận tiền mã hóa
                                                </div>
                                                <div data-bn-type="text" className={cx('recharge-item-div-content')}>
                                                    Nếu đã sẵn sàng nhận một khoản tiền mã hóa từ các tài khoản Binance
                                                    khác, bạn có thể dùng chức năng nhận.
                                                </div>
                                            </div>
                                        </div>
                                        <button data-bn-type="button" className={cx('')}>
                                            Nhận
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* money */}
                            <div className={cx('money')}>
                                <div className={cx('')}>
                                    <div className={cx('money-title')}>
                                        <div className={cx('')}>
                                            <div data-bn-type="text" className={cx('')}>
                                                Số dư ước tính
                                            </div>
                                            <button data-bn-type="button" className={cx('')}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    className={cx('')}
                                                >
                                                    <path
                                                        d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                                        fill="currentColor"
                                                    ></path>
                                                    <path
                                                        d="M6.555 6.31L1 12l5.555 5.69a7.572 7.572 0 0010.89 0L23 12l-5.555-5.69a7.572 7.572 0 00-10.89 0zM17 12a5 5 0 11-10 0 5 5 0 0110 0z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('money-content')}>
                                        <div data-bn-type="text" className={cx('money-content-top')}>
                                            0.00&nbsp;BTC &nbsp;≈&nbsp;$0.000000
                                        </div>

                                        <div data-bn-type="text" className={cx('money-content-bot')}>
                                            Hiện trong tài khoản của bạn không có bất kỳ tài sản nào, hãy hoàn tất xác
                                            minh danh tính để nạp tiền vào tài khoản.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-right')}>
                        <div className={cx('content-right-header')}>
                            <a
                                data-bn-type="link"
                                href="/vi/support/announcement/10435147c55d4a40b64fcbf43cb46329"
                                rel="noopener noreferrer"
                                className={cx('')}
                            >
                                <div className={cx('')}>
                                    <div data-bn-type="text" className={cx('')}>
                                        Mới: Không thu phí khi giao dịch Bitcoin
                                    </div>
                                    <img src={BTC} alt="" className={cx('')} />
                                </div>
                            </a>
                        </div>
                        <div className={cx('content-right-center')}>
                            <div className={cx('content-right-center-item')}>
                                <div data-bn-type="text" className={cx('')}>
                                    Thông báo
                                </div>
                                <a
                                    data-bn-type="button"
                                    href="/vi/support/announcement"
                                    target="_blank"
                                    className={cx('')}
                                >
                                    Xem tất cả
                                </a>
                            </div>
                            <a
                                href="/vi/support/announcement/ddd19a7b79ca4d0f8e6104307d7ed3df"
                                target="_blank"
                                className={cx('content-right-center-a')}
                            >
                                <div className={cx('')}>
                                    <div data-bn-type="text" className={cx('content-right-center-a-title')}>
                                        Ra mắt các sản phẩm Dual Investment mới (27/07/2022)
                                    </div>
                                    <div data-bn-type="text" className={cx('content-right-center-a-content')}>
                                        2022-07-29
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={cx('')}
                                >
                                    <path
                                        d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="/vi/support/announcement/855f7fddd50d4fe4a31bea24043d5b6c"
                                target="_blank"
                                className={cx('content-right-center-a')}
                            >
                                <div className={cx('')}>
                                    <div data-bn-type="text" className={cx('content-right-center-a-title')}>
                                        Binance ra mắt Đầu tư tự động 2.0: Nhận voucher lên đến 10 BUSD!
                                    </div>
                                    <div data-bn-type="text" className={cx('content-right-center-a-content')}>
                                        2022-07-29
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={cx('')}
                                >
                                    <path
                                        d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div className={cx('content-right-footer')}>
                            <div className={cx('content-right-footer-title')}>Dịch vụ khác</div>
                            <a
                                href="https://academy.binance.com/vi/learn-and-earn?ref=LIMIT_ERNEVENT&amp;utm_source=user_dashboard"
                                target="_self"
                                className={cx('content-right-footer-a')}
                            >
                                <div className={cx('')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            d="M7 14.002L3.248 10.25l9.75 4.25 9.75-4.25L19 13.998V17.5l-6 6-6-6v-3.498z"
                                            fill="#76808F"
                                        ></path>
                                        <path
                                            d="M13.293 12.207l-6-6L3.25 10.25 13 20l9.75-9.75L13 .5 8.707 4.793l6 6-1.414 1.414z"
                                            fill="url(#academy-g_svg__paint0_linear)"
                                        ></path>
                                        <path d="M2.75 14L.5 16.25l2.25 2.25L5 16.25 2.75 14z" fill="#76808F"></path>
                                        <defs>
                                            <linearGradient
                                                id="academy-g_svg__paint0_linear"
                                                x1="13"
                                                y1="20"
                                                x2="13"
                                                y2="0.5"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#F0B90B"></stop>
                                                <stop offset="1" stopColor="#F8D33A"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className={cx('')}>
                                        <div data-bn-type="text" className={cx('content-right-footer-a-title')}>
                                            Tìm hiểu và kiếm tiền
                                        </div>
                                        <div data-bn-type="text" className={cx('content-right-footer-a-content')}>
                                            Vừa học hỏi, vừa kiếm tiền mã hóa MIỄN PHÍ với Binance
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={cx('')}
                                >
                                    <path
                                        d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <a href="/vi/activity/referral" target="_self" className={cx('content-right-footer-a')}>
                                <div className={cx('')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            d="M17 13v3h2v-3h3v-2h-3V8h-2v3h-3v2h3zM3 18a4 4 0 014-4h4a4 4 0 014 4v3H3v-3z"
                                            fill="#76808F"
                                        ></path>
                                        <path
                                            d="M13.5 7.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
                                            fill="url(#referral-g_svg__paint0_linear)"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="referral-g_svg__paint0_linear"
                                                x1="9"
                                                y1="12"
                                                x2="9"
                                                y2="3"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#F0B90B"></stop>
                                                <stop offset="1" stopColor="#F8D33A"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className={cx('')}>
                                        <div data-bn-type="text" className={cx('content-right-footer-a-title')}>
                                            Giới thiệu
                                        </div>
                                        <div data-bn-type="text" className={cx('content-right-footer-a-content')}>
                                            Nhận hoa hồng lên đến 40%
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={cx('')}
                                >
                                    <path
                                        d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="/vi/my/orders/exchange/openorder"
                                target="_self"
                                className={cx('content-right-footer-a')}
                            >
                                <div className={cx('')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            d="M4 2h16v21l-4-4-4 4-4-4-4 4V2z"
                                            fill="url(#orders-g_svg__paint0_linear)"
                                        ></path>
                                        <path
                                            d="M14 6H6v2h8V6zM18 6h-2v2h2V6zM6 10h8v2H6v-2zM18 10h-2v2h2v-2zM6 14h8v2H6v-2zM18 14h-2v2h2v-2z"
                                            fill="#76808F"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="orders-g_svg__paint0_linear"
                                                x1="12"
                                                y1="23"
                                                x2="12"
                                                y2="2"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#F0B90B"></stop>
                                                <stop offset="1" stopColor="#F8D33A"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className={cx('')}>
                                        <div data-bn-type="text" className={cx('content-right-footer-a-title')}>
                                            Giao dịch đang chờ khớp lệnh
                                        </div>
                                        <div data-bn-type="text" className={cx('content-right-footer-a-content')}>
                                            Giới thiệu bạn bè. Cùng nhau kiếm tiền mã hóa.
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={cx('')}
                                >
                                    <path
                                        d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <a href="/vi/wallet-direct" target="_self" className={cx('content-right-footer-a')}>
                                <div className={cx('')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={cx('')}
                                    >
                                        <path
                                            d="M14.987 4.391l2.066 1.195 2.672-.16 1.818 3.149-1.474 2.232v2.386l1.474 2.232-1.818 3.15-2.672-.16-2.066 1.194L13.792 22h-3.636L8.96 19.609l-2.066-1.195-2.672.16-1.818-3.149 1.474-2.232v-2.386L2.404 8.575l1.818-3.15 2.672.16L8.96 4.392 10.155 2h3.637l1.195 2.391zm-2.99 2.155a5.454 5.454 0 110 10.909 5.454 5.454 0 010-10.91z"
                                            fill="url(#settings-cog-g_svg__paint0_linear)"
                                        ></path>
                                        <path
                                            d="M9.27 12l2.727-2.727L14.725 12l-2.728 2.727L9.27 12z"
                                            fill="#76808F"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="settings-cog-g_svg__paint0_linear"
                                                x1="11.974"
                                                y1="22"
                                                x2="11.974"
                                                y2="2"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#F0B90B"></stop>
                                                <stop offset="1" stopColor="#F8D33A"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className={cx('')}>
                                        <div data-bn-type="text" className={cx('content-right-footer-a-title')}>
                                            Ví Direct
                                        </div>
                                        <div data-bn-type="text" className={cx('content-right-footer-a-content')}>
                                            Chuyển coin hoặc token giữa tài khoản Binance.com và Ví Binance Chain.
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={cx('')}
                                >
                                    <path
                                        d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
