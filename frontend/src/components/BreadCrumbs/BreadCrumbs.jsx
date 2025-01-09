import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Đối tượng ánh xạ tên đường dẫn thành tên hiển thị
    const breadcrumbNameMap = {
        about: "Giới thiệu",
        contact: "Liên hệ",
        events: "Sự kiện",
        "event-detail": "Chi tiết sự kiện",
        profile: "Thông tin cá nhân",
        "nha-hat-kich-idecaf-duoi-bong-giai-nhan": "Nhà Hát Kịch Idecaf Dưới Bóng Giai Nhân",
        "hai-phong-le-hieu-vicky-nhung": "[Hải Phòng] Lê Hiếu & Vicky Nhung",
        "mini-concert-nhung-trai-tim-tan-vo": "Mini Concert Những Trái Tim Tan Vỡ",
        "anh-trai-say-hi-ha-noi-concert-3": "Anh Trai 'SAY HI' Hà Nội - Concert 3",
        "tphcm-nhung-thanh-pho-mo-mang-year-end-2024": "TPHCM Những Thành Phố Mơ Màng Year End 2024",
        "ho-chi-minh-family-show-beauty-and-the-beast-the-uk-panto": "Hồ Chí Minh - Family Show: 'Beauty And The Beast' | The UK Panto",
        "concert-thang-12-anh-trai-vuot-ngan-chong-gai": "[ Concert Tháng 12 ] Anh Trai Vượt Ngàn Chông Gai",
        "sai-n-tren-nhung-dam-may-chillies-concert-tour": "[ Sài Gòn ] Trên Những Đám Mây - Chillies Concert Tour",
        "vba-2024-finals-game-1-sain-heat-vs-cantho-catfish": "VBA 2024 - Finals Game 1 - SAIN HEAT vs CANTHO CATFISH",
        "lululola-show-hoang-hai-luong-bich-huu-da-sai-tu-luc-dau": "LULULOLA Show Hoàng Hải - Lương Bích Hữu | Đã Sai Từ Lúc Đầu"
    };

    return (
        <nav style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
            <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                    <Link to="/">Trang chủ</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const displayName = breadcrumbNameMap[value] || value;
                    return (
                        <li key={to} style={{ marginLeft: "10px" }}>
                            <span> / </span>
                            <Link to={to}>{displayName}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
