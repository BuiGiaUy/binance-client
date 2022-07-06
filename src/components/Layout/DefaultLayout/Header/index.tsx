import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightArrowLeft,
    faBook,
    faBookReader,
    faBriefcase,
    faCaretUp,
    faCloud,
    faD,
    faFlaskVial,
    faGift,
    faGun,
    faHandHoldingHeart,
    faMoneyBillTransfer,
    faRocket,
    faShield,
    faSun,
    faUserGraduate,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';

import HideNet from '#/components/Popper/HideNet';
import Buying from '#/components/Popper/Buying';
import Exchange from '#/components/Popper/Exchange';
import Earn from '#/components/Popper/Earn';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button } from 'antd';

const cx = classNames.bind(styles);

const ICON_LISTS = [
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Exchange',
        content: 'Sản giao dịch tài sản và mã hóa Blockchain',
        href: '/exchange',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faUserGraduate} />,
        title: 'Academy',
        content: 'Giáo dục Blockchain và Cryphref',
        href: '/academy',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
        title: 'Môi giới',
        content: 'Giải pháp cổng giao dịch',
        href: '/broker',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faBriefcase} />,
        title: 'Dịch vụ cho tổ chức và VIP',
        content: 'Cách tiếp cận nâng cao đối với các giải pháp giao dịch được thiết kế riêng',
        href: '/vip-institutional-services',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faBook} />,
        title: 'Tìm hiểu kiến thức và kiếm tiền',
        content: 'Vừa học hỏi, vừa kiếm tiền mã hóa miễn phí',
        href: '/learn-and-earn',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
        title: 'Charity',
        content: 'Làm từ thiện với blockchain',
        href: '/charity',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCloud} />,
        title: 'Cloud',
        content: 'Xây dựng sàn giao dịch cho doanh nghiệp',
        href: '/cloud',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faD} />,
        title: 'DEX',
        content: 'Sàn giao dịch tài sản kỹ thuật số phi tập trung nhanh và an hrefàn',
        href: '/dex',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faFlaskVial} />,
        title: 'Lab',
        content: 'Ươm mầm cho các dự án Blockchain hàng đầu',
        href: '/lab',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faRocket} />,
        title: 'Launchpad',
        content: 'Nền tảng phát hành hrefken',
        href: '/launchpad',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faBookReader} />,
        title: 'Research',
        content: 'Những phân tích và báo cáo cấp doanh nghiệp',
        href: '/research',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faShield} />,
        title: 'Trust Wallet',
        content: 'Ví tiền mã hóa chính thức của Binance',
        href: '/trust-wallet',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faGift} />,
        title: 'Thẻ quà tặng Binance',
        content: 'Thẻ quà tặng tiền mã hóa có thể tùy chỉnh',
        href: '/gift-card',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faWifi} />,
        title: 'Binance Live',
        content: 'Phát về blockchain trong buổi phát trực tiếp của bạn',
        href: '/live',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faGun} />,
        title: 'APIs',
        content: 'Vô vàn cơ hội khi dùng 1 khóa',
        href: '/apis',
    },
];

const BUYING_LISTS = [
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Giao dịch P2P',
        content: 'Chuyển khoản ngân hàng và 100+ lựa chọn khác',
        to: '/exchange',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faUserGraduate} />,
        title: 'Thẻ tín dụng/Thẻ ghi nợ',
        content: 'Mua tiền mã hoá bằng thẻ',
        to: '/credit',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
        title: 'Mua tiền mã hoá bằng thẻ',
        content: 'Kênh Simplex',
        to: '/simplex',
    },
];

const EXCHANGE_LISTS = [
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Binance Convert',
        content: 'Cách đơn giản nhất để giao dịch',
        to: '/binance-convert',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faUserGraduate} />,
        title: 'Spot',
        content: 'Giao dịch tiền mã hóa bằng các công cụ nâng cao',
        to: '/spot',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faBriefcase} />,
        title: 'Ký quỹ',
        content: 'Tối đa lợi nhuận bằng đòn bẩy cao',
        to: '/binance-convert',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'P2P',
        content: 'Chuyển khoản ngân hàng và 100+ lựa chọn khác',
        to: '/binance-convert',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
        title: 'Chiến lược Giao dịch',
        content: 'Giao dịch dễ dàng, giao dịch chuyên nghiệp',
        to: '/binance-convert',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Swap Farming',
        content: 'Swap để tích luỹ BNB',
        to: '/binance-convert',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faFlaskVial} />,
        title: 'Fan-token',
        content: 'Nâng cấp trải nghiệm fan của bạn',
        to: '/binance-convert',
    },
];

const DERIVATIVES_LISTS = [
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Tổng quan Binance Futures',
        content: 'Xem toàn bộ các công cụ phái sinh tiền mã hóa của chúng tôi',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Giao dịch có trách nhiệm',
        content: 'Tìm hiểu cách thực hành giao dịch có trách nhiệm với Binance Futures',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Hợp đồng USDⓈ-M',
        content: 'Hợp đồng không kỳ hạn hoặc Hợp đồng theo quý được thanh toán bằng USDT hoặc BUSD',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Hợp đồng COIN-M',
        content: 'Hợp đồng không kỳ hạn hoặc Hợp đồng theo quý được thanh toán bằng Tiền mã hoá.',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Vanilla Options',
        content: 'Mua và bán quyền chọn Vanilla Options kiểu Châu Âu.',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Token đòn bẩy',
        content: 'Sử dụng đòn bẩy được gia tăng mà không lo bị thanh lý',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Chiến đấu',
        content: 'Chiến đấu để Giành chiến thắng, Long vs Short',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Cổng thông tin phái sinh',
        content: 'Dịch vụ cấp doanh nghiệp được thiết kế riêng, độc quyền cho VIP',
        to: '/futures',
    },
];

const FINANCE_LISTS = [
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Binance Visa Card',
        content: 'Chuyển đổi và thanh toán bằng tiền mã hóa trên toàn cầu',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Cho vay tiền mã hóa',
        content: 'Nhận khoản vay tức thời bảo đảm bằng tài sản mã hoá',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Gửi và Nhận Crypto',
        content: 'Gửi và sử dụng tiền mã hóa mà không tốn phí',
        to: '/futures',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        title: 'Thẻ quà tặng Binance',
        content: 'Thẻ quà tặng tiền mã hóa có thể tùy chỉnh',
        to: '/futures',
    },
];

//Modal
// const LANGUAGE_LISTS = [
//     {
//         content: 'Tiếng Việt',
//     },
//     {
//         content: 'Tiếng Anh',
//     },
//     {
//         content: 'Tiếng Tàu',
//     },
//     {
//         content: 'Tiếng Cam',
//     },
//     {
//         content: 'Tiếng Tây',
//     },
//     {
//         content: 'Tiếng Nga',
//     },
//     {
//         content: 'Tiếng Mỹ',
//     },
//     {
//         content: 'Tiếng Hàn',
//     },
//     {
//         content: 'Tiếng Nhật',
//     },
// ];

function Header() {
    // const [openModal, setOpenModal] = useState(false);

    return (
        <header className={cx('header')}>
            <a href="/" className={cx('logo')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" className={cx('logo-svg')}>
                    <path
                        d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
                        p-id="2935"
                    ></path>
                </svg>
            </a>
            <div className={cx('content')}>
                <HideNet items={ICON_LISTS}>
                    <div className={cx('content-icon')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={cx('content-icon-net')}
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 4H8V8H4V4ZM4 10H8V14H4V10ZM8 16H4V20H8V16ZM10 4H14V8H10V4ZM14 10H10V14H14V10ZM10 16H14V20H10V16ZM20 4H16V8H20V4ZM16 10H20V14H16V10ZM20 16H16V20H20V16Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <FontAwesomeIcon icon={faCaretUp} className={cx('content-icon-triangle')} />
                    </div>
                </HideNet>

                <Buying items={BUYING_LISTS}>
                    <div className={cx('content-item')}>
                        Mua Crypto
                        <div className={cx('content-item-border')}>VND</div>
                        <FontAwesomeIcon icon={faCaretUp} className={cx('content-icon-triangle')} />
                    </div>
                </Buying>
                <Link className={cx('content-item')} to={'/Thi-truong'}>
                    Thị trường
                </Link>
                <Exchange items={EXCHANGE_LISTS}>
                    <div className={cx('content-item')}>
                        Giao dịch
                        <FontAwesomeIcon icon={faCaretUp} className={cx('content-icon-triangle')} />
                    </div>
                </Exchange>
                <Exchange items={DERIVATIVES_LISTS}>
                    <div className={cx('content-item')}>
                        Phái sinh
                        <FontAwesomeIcon icon={faCaretUp} className={cx('content-icon-triangle')} />
                    </div>
                </Exchange>
                <Earn items={DERIVATIVES_LISTS}>
                    <div className={cx('content-item')}>
                        Earn
                        <FontAwesomeIcon icon={faCaretUp} className={cx('content-icon-triangle')} />
                    </div>
                </Earn>
                <Exchange items={FINANCE_LISTS}>
                    <div className={cx('content-item')}>
                        Tài chính
                        <FontAwesomeIcon icon={faCaretUp} className={cx('content-icon-triangle')} />
                    </div>
                </Exchange>
                <Link className={cx('content-item')} to={'/NFT'}>
                    NFT
                    <div className={cx('content-item-border')}>new</div>
                </Link>
            </div>
            <div className={cx('space')}></div>

            <div className={cx('login')}>
                <Button href="/login" className={cx('login-item')} htmlType="button">
                    Đăng nhập
                </Button>
                <Button href="/register" className={cx('register-item')} htmlType="button">
                    Đăng ký
                </Button>
            </div>

            <div className={cx('tools')}>
                <div className={cx('content-item')}>Tải xuống</div>
                <div className={cx('tools-list')}>
                    <button
                        className={cx('tools-item')}
                        // onClick={() => {
                        //     setOpenModal(true);
                        // }}
                    >
                        Tiếng Việt
                    </button>
                    {/* {openModal && <Language closeModal={setOpenModal} items={LANGUAGE_LISTS} />} */}
                    <div className={cx('tools-item-space')}></div>
                    <div
                        className={cx('tools-item')}
                        // onClick={() => {
                        //     setOpenModal(true);
                        // }}
                    >
                        USD
                    </div>
                    <div className={cx('tools-item-space')}></div>
                </div>
                <FontAwesomeIcon icon={faSun} className={cx('tools-sun')} />
            </div>
        </header>
    );
}

export default Header;
