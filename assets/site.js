/* ============ CẤU HÌNH – CHỈNH THÔNG TIN CÔNG TY Ở ĐÂY ============ */
const SITE = {
  "name": "CÔNG TY TNHH AN TOÀN VÀ CÔNG NGHỆ STC",
  "short": "STC",
  "english": "STC SAFETY AND TECHNOLOGY CO., LTD",
  "slogan": "An toàn là giá trị cốt lõi – Công nghệ là giải pháp",
  "mst": "0109400831",
  "rep": "MAI THANH SƠN",
  "address": "Tầng 4, Tòa nhà Times Tower, số 35 Lê Văn Lương, P. Nhân Chính, Q. Thanh Xuân, Hà Nội",
  "hotline": "0886 628 362",
  "email": "info@stcsafety.vn",
  "website": "stcsafety.vn",
  "hours": "Thứ 2 – Thứ 7: 8:00 – 17:30",
  "mapQuery": "Times Tower 35 Lê Văn Lương Hà Nội"
};

const CATEGORIES = [
  {
    "id": "chua-chay",
    "imgs": [
      "assets/img/products/stc-binh-abc-co2-nen-trang.webp",
      "chua-chay-0"
    ],
    "icon": "🧯",
    "name": "Thiết bị chữa cháy",
    "desc": "Bình chữa cháy, lăng phun, vòi, bọt chữa cháy, bơm chữa cháy xách tay.",
    "items": [
      {
        "name": "Bình chữa cháy bột ABC, CO₂",
        "img": "assets/img/products/stc-binh-abc-co2-nen-trang.webp"
      },
      {
        "name": "Lăng phun chữa cháy",
        "img": "assets/img/products/stc-lang-phun.webp"
      },
      {
        "name": "Lăng giá chữa cháy",
        "img": "assets/img/products/stc-lang-gia-nen-trang.webp"
      },
      {
        "name": "Vòi chữa cháy",
        "img": "assets/img/products/stc-voi-chua-chay.webp"
      },
      {
        "name": "Bọt chữa cháy",
        "img": "assets/img/products/stc-bot-chua-chay.webp"
      },
      {
        "name": "Bơm chữa cháy xách tay",
        "img": "assets/img/products/stc-bom-xach-tay.webp"
      }
    ]
  },
  {
    "id": "bao-chay",
    "imgs": [
      "assets/img/products/stc-tu-bao-chay.webp",
      "bao-chay-1",
      "bao-chay-0",
      "panel-1"
    ],
    "icon": "🚨",
    "name": "Hệ thống báo cháy",
    "desc": "Tủ báo cháy trung tâm, đầu báo khói – nhiệt – lửa, báo cháy không dây.",
    "items": [
      {
        "name": "Tủ báo cháy trung tâm",
        "img": "assets/img/products/stc-tu-bao-chay.webp"
      },
      {
        "name": "Đầu báo khói, báo nhiệt",
        "img": "assets/img/products/stc-dau-bao-khoi-nhiet-nen-trang.webp"
      },
      {
        "name": "Đầu báo lửa (UV/IR)",
        "img": "assets/img/products/stc-dau-bao-lua-uv-ir-nen-trang.webp"
      },
      {
        "name": "Chuông, đèn, nút nhấn khẩn",
        "img": "assets/img/products/stc-chuong-den-nut-nhan-nen-trang.webp"
      },
      {
        "name": "Báo cháy không dây",
        "img": "assets/img/products/stc-bao-chay-khong-day-nen-trang.webp"
      },
      {
        "name": "Module giám sát, điều khiển",
        "img": "assets/img/products/stc-module-giam-sat-dieu-khien-nen-trang.webp"
      }
    ]
  },
  {
    "id": "chua-chay-khi",
    "imgs": [
      "assets/img/products/stc-he-thong-fm200-nen-trang.webp",
      "datacenter-1"
    ],
    "icon": "💨",
    "name": "Hệ thống chữa cháy bằng khí",
    "desc": "Giải pháp bảo vệ phòng server, tủ điện, phòng điều khiển: FM-200, Novec 1230, CO₂, N₂.",
    "items": [
      {
        "name": "Hệ thống FM-200 (HFC-227ea)",
        "img": "assets/img/products/stc-he-thong-fm200-nen-trang.webp"
      },
      {
        "name": "Hệ thống Novec 1230",
        "img": "assets/img/products/stc-he-thong-novec-1230-nen-trang.webp"
      },
      {
        "name": "Hệ thống CO₂",
        "img": "assets/img/products/stc-he-thong-co2-nen-trang.webp"
      },
      {
        "name": "Hệ thống khí N₂/IG-541",
        "img": "assets/img/products/stc-he-thong-ig541-nen-trang.webp"
      },
      {
        "name": "Tủ chữa cháy tự động",
        "img": "assets/img/products/stc-tu-chua-chay-tu-dong-nen-trang.webp"
      },
      {
        "name": "Bình chứa & van xả",
        "img": "assets/img/products/stc-binh-chua-van-xa-nen-trang.webp"
      }
    ]
  },
  {
    "id": "do-luong",
    "imgs": [
      "assets/img/products/stc-may-do-khi-da-chi-tieu-nen-trang.webp",
      "do-luong-1",
      "thermal-0",
      "thermal-1"
    ],
    "icon": "📟",
    "name": "Thiết bị đo lường & phát hiện khí",
    "desc": "Máy đo khí độc, khí cháy nổ, cảm biến, thiết bị đo & điều khiển tự động hóa.",
    "items": [
      {
        "name": "Máy đo khí đa chỉ tiêu",
        "img": "assets/img/products/stc-may-do-khi-da-chi-tieu-nen-trang.webp"
      },
      {
        "name": "Đầu dò khí cháy / khí độc",
        "img": "assets/img/products/stc-dau-do-khi-co-dinh.webp"
      },
      {
        "name": "Máy đo nồng độ O₂, CO, H₂S",
        "img": "assets/img/products/stc-may-do-o2-co-h2s.webp"
      },
      {
        "name": "Camera nhiệt",
        "img": "assets/img/products/stc-camera-nhiet-cam-tay-nen-trang.webp"
      },
      {
        "name": "Cảm biến & thiết bị tự động hóa",
        "img": "assets/img/products/stc-cam-bien-tu-dong-hoa.webp"
      },
      {
        "name": "Hiệu chuẩn thiết bị đo",
        "img": "assets/img/products/stc-hieu-chuan-thiet-bi-do-nen-trang.webp"
      }
    ]
  },
  {
    "id": "bao-ho",
    "imgs": [
      "assets/img/products/stc-quan-ao-chua-chay.webp",
      "bao-ho-1",
      "scba-0"
    ],
    "icon": "🦺",
    "name": "Thiết bị bảo hộ an toàn",
    "desc": "Quần áo chống cháy, chịu nhiệt, chống hóa chất, mặt nạ phòng độc, thiết bị thở.",
    "items": [
      {
        "name": "Quần áo chữa cháy",
        "img": "assets/img/products/stc-quan-ao-chua-chay.webp"
      },
      {
        "name": "Quần áo chịu nhiệt độ cao",
        "img": "assets/img/products/stc-quan-ao-chiu-nhiet.webp"
      },
      {
        "name": "Quần áo chống hóa chất",
        "img": "assets/img/products/stc-quan-ao-chong-hoa-chat.webp"
      },
      {
        "name": "Mặt nạ kèm bình khí thở",
        "img": "assets/img/products/stc-mat-na-binh-khi-tho-nen-trang.webp"
      },
      {
        "name": "Mặt nạ phòng độc",
        "img": "assets/img/products/stc-mat-na-phong-doc-nen-trang.webp"
      },
      {
        "name": "Găng tay, ủng, mũ bảo hộ",
        "img": "assets/img/products/stc-gang-ung-mu-bao-ho-nen-trang.webp"
      }
    ]
  },
  {
    "id": "cuu-ho",
    "imgs": [
      "assets/img/products/stc-thiet-bi-pha-do-nen-trang.webp",
      "cuu-ho-1",
      "training-0"
    ],
    "icon": "⛑️",
    "name": "Thiết bị cứu nạn – cứu hộ",
    "desc": "Thiết bị phá dỡ, dò tìm nạn nhân, cứu hộ trên cao, không gian hạn chế.",
    "items": [
      {
        "name": "Thiết bị phá dỡ đa năng",
        "img": "assets/img/products/stc-thiet-bi-pha-do-nen-trang.webp"
      },
      {
        "name": "Thiết bị dò tìm nạn nhân",
        "img": "assets/img/products/stc-thiet-bi-do-tim-nan-nhan.webp"
      },
      {
        "name": "Thiết bị cứu nạn trên cao",
        "img": "assets/img/products/stc-cuu-nan-tren-cao-nen-trang.webp"
      },
      {
        "name": "Thiết bị cứu hộ không gian hạn chế",
        "img": "assets/img/products/stc-bo-cuu-ho-khong-gian-han-che.webp"
      },
      {
        "name": "Đệm khí, nâng hạ",
        "img": "assets/img/products/stc-dem-khi-nang-ha-nen-trang.webp"
      },
      {
        "name": "Thiết bị lặn, cứu nạn dưới nước",
        "img": "assets/img/products/stc-thiet-bi-lan-cuu-nan-nen-trang.webp"
      }
    ]
  },
  {
    "id": "cong-nghiep",
    "imgs": [
      "assets/img/products/stc-thiet-bi-xu-ly-dau-tran-nen-trang.webp",
      "cong-nghiep-1",
      "substation-1"
    ],
    "icon": "🏭",
    "name": "Thiết bị công nghiệp & dầu khí",
    "desc": "Vật tư kỹ thuật, thiết bị xử lý sự cố tràn dầu, thiết bị an toàn công nghiệp.",
    "items": [
      {
        "name": "Thiết bị xử lý dầu tràn",
        "img": "assets/img/products/stc-thiet-bi-xu-ly-dau-tran-nen-trang.webp"
      },
      {
        "name": "Vật tư thấm hút hóa chất",
        "img": "assets/img/products/stc-vat-tu-tham-hut-hoa-chat-nen-trang.webp"
      },
      {
        "name": "Thiết bị an toàn khu vực nguy hiểm",
        "img": "assets/img/products/stc-den-an-toan-atex.webp"
      },
      {
        "name": "Van, đường ống kỹ thuật",
        "img": "assets/img/products/stc-van-duong-ong-ky-thuat.webp"
      },
      {
        "name": "Vật tư công nghiệp",
        "img": "assets/img/products/stc-vat-tu-cong-nghiep-nen-trang.webp"
      },
      {
        "name": "Thiết bị & phụ kiện phòng nổ (ATEX / IECEx)",
        "img": "assets/img/products/stc-hop-noi-cap-phong-no.webp"
      }
    ]
  },
  {
    "id": "cctv",
    "imgs": [
      "assets/img/products/stc-camera-ip-dome-bullet-ptz.webp",
      "thermal-1",
      "intrusion-0",
      "access-control-0",
      "panel-0",
      "intrusion-1"
    ],
    "icon": "📹",
    "name": "Hệ thống CCTV & Phát hiện xâm nhập",
    "desc": "Camera giám sát an ninh, camera nhiệt phát hiện cháy sớm, đầu ghi NVR/DVR, hệ thống báo động chống đột nhập.",
    "items": [
      {
        "name": "Camera IP / Dome / Bullet / PTZ 360 độ",
        "img": "assets/img/products/stc-camera-ip-dome-bullet-ptz.webp"
      },
      {
        "name": "Camera ảnh nhiệt phát hiện điểm cháy",
        "img": "assets/img/products/stc-camera-nhiet-phat-hien-chay-nen-trang.webp"
      },
      {
        "name": "Hệ thống phát hiện xâm nhập & báo động đột nhập",
        "img": "assets/img/products/stc-bo-bao-dong-chong-dot-nhap.webp"
      },
      {
        "name": "Hệ thống kiểm soát ra vào (Access Control)",
        "img": "assets/img/products/stc-thiet-bi-kiem-soat-ra-vao-nen-trang.webp"
      },
      {
        "name": "Đầu ghi hình mạng chuyên dụng (NVR / DVR)",
        "img": "assets/img/products/stc-dau-ghi-nvr-dvr-nen-trang.webp"
      },
      {
        "name": "Hàng rào hồng ngoại & cảm biến chống leo rào",
        "img": "assets/img/products/stc-hang-rao-hong-ngoai-nen-trang.webp"
      }
    ]
  }
];

const SERVICES = [
  {
    "icon": "📐",
    "name": "Tư vấn thiết kế PCCC",
    "desc": "Khảo sát, tư vấn giải pháp và lập hồ sơ thiết kế phòng cháy chữa cháy phù hợp quy chuẩn QCVN, TCVN.",
    "img": "assets/img/services/thiet-ke-pccc.webp"
  },
  {
    "icon": "🔧",
    "name": "Thi công, lắp đặt hệ thống",
    "desc": "Thi công hệ thống báo cháy, chữa cháy tự động, chữa cháy bằng khí, sprinkler, vách tường – đúng tiến độ, nghiệm thu đạt.",
    "img": "assets/img/services/thi-cong-he-thong.webp"
  },
  {
    "icon": "📹",
    "name": "Tư vấn, lắp đặt CCTV & Hệ thống phát hiện xâm nhập",
    "desc": "Khảo sát, thiết kế và thi công hệ thống camera giám sát, camera nhiệt cảnh báo cháy sớm và hệ thống cảm biến báo động phát hiện xâm nhập cho nhà máy, tòa nhà, kho bãi.",
    "img": "assets/img/services/cctv-chong-xam-nhap.webp"
  },
  {
    "icon": "🛠️",
    "name": "Bảo trì, bảo dưỡng",
    "desc": "Kiểm tra định kỳ, bảo dưỡng hệ thống PCCC, nạp sạc bình chữa cháy, thay thế vật tư.",
    "img": "assets/img/services/bao-tri-bao-duong.webp"
  },
  {
    "icon": "🎯",
    "name": "Hiệu chuẩn, kiểm định thiết bị",
    "desc": "Hiệu chuẩn máy đo khí, thiết bị đo lường điều khiển, đảm bảo độ chính xác & an toàn vận hành.",
    "img": "assets/img/services/hieu-chuan-kiem-dinh.webp"
  },
  {
    "icon": "📦",
    "name": "Cung cấp thiết bị chính hãng",
    "desc": "Phân phối thiết bị PCCC, cứu hộ, đo lường từ các hãng uy tín, đầy đủ CO – CQ, bảo hành.",
    "img": "assets/img/services/cung-cap-thiet-bi.webp"
  }
];

const PROJECTS = [
  {
    "id": "nsrp-cctv-2026",
    "title": "Cung cấp hệ thống Camera CCTV phòng nổ chuyên dụng",
    "client": "Nhà máy Lọc hóa dầu Nghi Sơn (NSRP)",
    "year": "2026",
    "place": "KKT Nghi Sơn, Thanh Hóa",
    "cat": "CCTV & Phòng nổ",
    "img": "assets/img/projects/stc-nsrp-cctv-2026.webp",
    "desc": "Cung cấp và tích hợp hệ thống camera giám sát an ninh chuẩn phòng nổ ATEX/IECEx cho khu vực công nghệ bồn bể và chế biến dầu khí.",
    "imgKind": "location",
    "title_en": "Supply of a Hazardous-Area CCTV System",
    "client_en": "Nghi Son Refinery and Petrochemical (NSRP)",
    "place_en": "Nghi Son Economic Zone, Thanh Hoa",
    "cat_en": "Hazardous-Area CCTV",
    "desc_en": "Supplied and integrated an ATEX/IECEx-certified security camera system for tank farms and oil and gas processing areas."
  },
  {
    "id": "nsrp-fire-hose-2026",
    "title": "Cung cấp cuộn vòi chữa cháy & bột chữa cháy chuyên dụng",
    "client": "Nhà máy Lọc hóa dầu Nghi Sơn (NSRP)",
    "year": "2026",
    "place": "KKT Nghi Sơn, Thanh Hóa",
    "cat": "Chữa cháy dầu khí",
    "img": "assets/img/projects/stc-nsrp-fire-hose-2026.webp",
    "desc": "Cung cấp thiết bị cứu hỏa chuyên dụng, vòi chữa cháy chịu áp suất cao và bột chữa cháy khô công suất lớn cho cụm bồn bể lọc dầu.",
    "imgKind": "activity",
    "title_en": "Supply of Fire Hoses and Specialized Dry Chemical Agent",
    "client_en": "Nghi Son Refinery and Petrochemical (NSRP)",
    "place_en": "Nghi Son Economic Zone, Thanh Hoa",
    "cat_en": "Oil and Gas Fire Protection",
    "desc_en": "Supplied specialized firefighting equipment, high-pressure fire hoses and bulk dry chemical extinguishing agent for the refinery tank farm."
  },
  {
    "id": "ns1-thermal-power-2026",
    "title": "Cung cấp vật tư thiết bị điện & đo lường điều khiển (E&I)",
    "client": "Nhà máy Nhiệt điện Nghi Sơn 1",
    "year": "2026",
    "place": "Tĩnh Gia, Thanh Hóa",
    "cat": "Điện & Đo lường",
    "img": "assets/img/projects/stc-ns1-thermal-power-2026.webp",
    "desc": "Cung cấp linh kiện điện công nghiệp, cảm biến và thiết bị đo lường tự động hóa cho các tổ máy phát điện và trạm phân phối.",
    "imgKind": "location",
    "title_en": "Supply of Electrical and Instrumentation (E&I) Equipment and Materials",
    "client_en": "Nghi Son 1 Thermal Power Plant",
    "place_en": "Tinh Gia, Thanh Hoa",
    "cat_en": "Electrical and Instrumentation",
    "desc_en": "Supplied industrial electrical components, sensors and automation instrumentation for generating units and power distribution stations."
  },
  {
    "id": "acecook-ei-2025",
    "title": "Cung cấp vật tư thiết bị điện & đo lường điều khiển nhà máy",
    "client": "Công ty Cổ phần ACECOOK Việt Nam",
    "year": "2025",
    "place": "Hưng Yên / Hà Nội",
    "cat": "Đo lường & Tự động hóa",
    "img": "assets/img/projects/stc-acecook-ei-2025.webp",
    "desc": "Cung cấp thiết bị điện công nghiệp, cảm biến nhiệt độ - áp suất và linh kiện điều khiển cho dây chuyền sản xuất thực phẩm quy mô lớn.",
    "imgKind": "equipment",
    "title_en": "Supply of Plant Electrical and Instrumentation Equipment",
    "client_en": "Acecook Vietnam Joint Stock Company",
    "place_en": "Hung Yen / Hanoi",
    "cat_en": "Instrumentation and Automation",
    "desc_en": "Supplied industrial electrical equipment, temperature and pressure sensors, and control components for large-scale food production lines."
  },
  {
    "id": "tan-thang-cctv-2025",
    "title": "Cung cấp và lắp đặt hệ thống Camera giám sát an ninh CCTV",
    "client": "Nhà máy Xi măng Tân Thắng",
    "year": "2025",
    "place": "Quỳnh Lưu, Nghệ An",
    "cat": "CCTV & Giám sát",
    "img": "assets/img/projects/stc-tan-thang-cctv-2025.webp",
    "desc": "Khảo sát, thiết kế và thi công mạng lưới camera giám sát độ phân giải cao cho toàn bộ dây chuyền sản xuất và kho bãi clinker.",
    "imgKind": "location",
    "title_en": "Supply and Installation of a Security CCTV System",
    "client_en": "Tan Thang Cement Plant",
    "place_en": "Quynh Luu, Nghe An",
    "cat_en": "CCTV and Surveillance",
    "desc_en": "Surveyed, designed and installed a high-resolution camera network covering the production line and clinker storage yards."
  },
  {
    "id": "viet-an-gas-calibration-2025",
    "title": "Cung cấp & dịch vụ hiệu chuẩn thiết bị đo dò khí độc",
    "client": "Công ty Cổ phần Công nghệ Việt An",
    "year": "2025",
    "place": "Hà Nội",
    "cat": "Đo lường & Hiệu chuẩn",
    "img": "assets/img/projects/stc-viet-an-gas-calibration-2025.webp",
    "desc": "Cung cấp máy đo khí đa chỉ tiêu chính hãng và thực hiện kiểm tra, hiệu chuẩn định kỳ cảm biến khí độc, khí cháy nổ.",
    "imgKind": "activity",
    "title_en": "Supply and Calibration of Toxic Gas Detection Equipment",
    "client_en": "Viet An Technology Joint Stock Company",
    "place_en": "Hanoi",
    "cat_en": "Measurement and Calibration",
    "desc_en": "Supplied genuine multi-gas detectors and performed periodic testing and calibration of toxic and combustible gas sensors."
  },
  {
    "id": "defense-z115-2022",
    "title": "Cung cấp & lắp đặt hệ thống báo cháy, chữa cháy tự động",
    "client": "Nhà máy Quốc phòng Z115 / Công ty Hoàng Gia",
    "year": "2022",
    "place": "Thái Nguyên",
    "cat": "Hệ thống PCCC",
    "img": "assets/img/projects/stc-defense-z115-2022.webp",
    "desc": "Thi công lắp đặt tủ báo cháy trung tâm, mạng lưới đầu báo và hệ thống chữa cháy vách tường cho phân xưởng quốc phòng Z115.",
    "imgKind": "activity",
    "title_en": "Supply and Installation of Fire Alarm and Automatic Fire Suppression Systems",
    "client_en": "Z115 Defense Factory / Hoang Gia Company",
    "place_en": "Thai Nguyen",
    "cat_en": "Fire Protection Systems",
    "desc_en": "Installed a central fire alarm panel, a network of detectors and a wall-mounted fire hose system for the Z115 defense workshop."
  },
  {
    "id": "hoang-mai-cement-maintenance-2023",
    "title": "Dịch vụ bảo trì, bảo dưỡng hệ thống thiết bị PCCC định kỳ",
    "client": "Nhà máy Xi măng Hoàng Mai",
    "year": "2023",
    "place": "Thị xã Hoàng Mai, Nghệ An",
    "cat": "Bảo trì PCCC",
    "img": "assets/img/projects/stc-hoang-mai-cement-maintenance-2023.webp",
    "desc": "Bảo trì định kỳ máy bơm chữa cháy, hệ thống sprinkler, kiểm định van xả và nạp sạc toàn bộ bình chữa cháy tại nhà máy.",
    "imgKind": "location",
    "title_en": "Scheduled Maintenance of Fire Protection Equipment and Systems",
    "client_en": "Hoang Mai Cement Plant",
    "place_en": "Hoang Mai, Nghe An",
    "cat_en": "Fire Protection Maintenance",
    "desc_en": "Performed scheduled maintenance on fire pumps and sprinklers, inspected discharge valves and recharged the plant's fire extinguishers."
  },
  {
    "id": "hathanh-fire-system-2026",
    "title": "Cung cấp & thi công lắp đặt hệ thống báo cháy, chữa cháy",
    "client": "Công ty TNHH XD & TM Hà Thành",
    "year": "2026",
    "place": "Hà Nội",
    "cat": "Thi công PCCC",
    "img": "assets/img/projects/stc-hathanh-fire-system-2026.webp",
    "desc": "Thi công trọn gói hệ thống báo cháy thông minh và chữa cháy tự động cho cụm nhà xưởng và kho logistics.",
    "imgKind": "activity",
    "title_en": "Supply and Installation of Fire Alarm and Suppression Systems",
    "client_en": "Ha Thanh Construction and Trading Co., Ltd.",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Installation",
    "desc_en": "Delivered a turnkey installation of intelligent fire alarm and automatic fire suppression systems for a complex of industrial buildings and logistics warehouses."
  },
  {
    "id": "hathanh-maint-2025",
    "title": "Cung cấp và thi công lắp đặt hệ thống phòng cháy chữa cháy",
    "client": "Công ty TNHH XD & TM Hà Thành",
    "year": "2025",
    "place": "Hà Nội",
    "cat": "Hệ thống PCCC",
    "img": "assets/img/projects/stc-hathanh-maint-2025.webp",
    "desc": "Lắp đặt tủ trung tâm báo cháy địa chỉ, chuông còi báo cháy và mạng lưới sprinkler cho công trình công nghiệp.",
    "imgKind": "activity",
    "title_en": "Supply and Installation of Fire Protection Systems",
    "client_en": "Ha Thanh Construction and Trading Co., Ltd.",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Systems",
    "desc_en": "Installed an addressable fire alarm control panel, audible alarms and a sprinkler network for an industrial facility."
  },
  {
    "id": "viet-an-maint-2025",
    "title": "Dịch vụ bảo trì, bảo dưỡng hệ thống thiết bị PCCC",
    "client": "Công ty CP Công nghệ Việt An",
    "year": "2025",
    "place": "Hà Nội",
    "cat": "Bảo trì PCCC",
    "img": "assets/img/projects/stc-viet-an-maint-2025.webp",
    "desc": "Kiểm tra hệ thống báo động sớm, bảo trì thiết bị chữa cháy tự động văn phòng và trung tâm nghiên cứu công nghệ.",
    "imgKind": "activity",
    "title_en": "Maintenance of Fire Protection Systems and Equipment",
    "client_en": "Viet An Technology Joint Stock Company",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Maintenance",
    "desc_en": "Inspected early warning systems and serviced automatic fire suppression equipment at the office and technology research center."
  },
  {
    "id": "nghison-industry-fire-2024",
    "title": "Cung cấp thiết bị báo cháy tự động cho nhà máy công nghiệp",
    "client": "Công ty TNHH MTV Công nghiệp Nghi Sơn",
    "year": "2024",
    "place": "KKT Nghi Sơn, Thanh Hóa",
    "cat": "Báo cháy tự động",
    "img": "assets/img/projects/stc-nghison-industry-fire-2024.webp",
    "desc": "Cung cấp tủ trung tâm, đầu báo khói nhiệt độ nhạy cao và thiết bị cảnh báo khẩn cấp cho cơ sở sản xuất cơ khí.",
    "imgKind": "equipment",
    "title_en": "Supply of Automatic Fire Alarm Equipment for an Industrial Plant",
    "client_en": "Nghi Son Industry One Member Co., Ltd.",
    "place_en": "Nghi Son Economic Zone, Thanh Hoa",
    "cat_en": "Automatic Fire Alarms",
    "desc_en": "Supplied a central fire alarm panel, high-sensitivity smoke and heat detectors, and emergency notification devices for a mechanical manufacturing facility."
  },
  {
    "id": "acecook-parts-2024",
    "title": "Cung cấp vật tư thiết bị điện công nghiệp nhà máy",
    "client": "Công ty Cổ phần ACECOOK Việt Nam",
    "year": "2024",
    "place": "Hưng Yên",
    "cat": "Thiết bị điện",
    "img": "assets/img/projects/stc-acecook-parts-2024.webp",
    "desc": "Cung cấp linh kiện tủ điện, aptomat, biến tần và thiết bị đóng cắt bảo vệ hệ thống điện nhà máy sản xuất mì.",
    "imgKind": "equipment",
    "title_en": "Supply of Industrial Electrical Equipment and Materials for the Plant",
    "client_en": "Acecook Vietnam Joint Stock Company",
    "place_en": "Hung Yen",
    "cat_en": "Electrical Equipment",
    "desc_en": "Supplied electrical panel components, circuit breakers, variable-frequency drives and switchgear to protect the noodle plant's electrical system."
  },
  {
    "id": "hathanh-dry-powder-2024",
    "title": "Dịch vụ nạp sạc bình chữa cháy & hệ thống chữa cháy bột khô",
    "client": "Công ty TNHH XD & TM Hà Thành",
    "year": "2024",
    "place": "Hà Nội",
    "cat": "Chữa cháy bột",
    "img": "assets/img/projects/stc-hathanh-dry-powder-2024.webp",
    "desc": "Nạp sạc, kiểm tra áp suất bình chữa cháy bột ABC, CO2 và bảo dưỡng hệ thống chữa cháy bột tự động.",
    "imgKind": "activity",
    "title_en": "Fire Extinguisher Recharging and Dry Chemical System Servicing",
    "client_en": "Ha Thanh Construction and Trading Co., Ltd.",
    "place_en": "Hanoi",
    "cat_en": "Dry Chemical Fire Suppression",
    "desc_en": "Recharged and checked the pressure of ABC dry powder and CO₂ extinguishers and serviced automatic dry chemical fire suppression systems."
  },
  {
    "id": "hungmanh-fire-2024",
    "title": "Cung cấp thiết bị báo cháy & chữa cháy cơ sở",
    "client": "Công ty TNHH ĐT TM & XD Hùng Mạnh",
    "year": "2024",
    "place": "Bắc Ninh",
    "cat": "Thiết bị PCCC",
    "img": "assets/img/projects/stc-hungmanh-fire-2024.webp",
    "desc": "Cung cấp thiết bị cứu hỏa, cuộn vòi chữa cháy, lăng phun và đầu báo cháy cho các dự án xây lắp.",
    "imgKind": "equipment",
    "title_en": "Supply of Fire Detection and Firefighting Equipment",
    "client_en": "Hung Manh Trading Investment and Construction Co., Ltd.",
    "place_en": "Bac Ninh",
    "cat_en": "Fire Protection Equipment",
    "desc_en": "Supplied firefighting equipment, fire hoses, nozzles and fire detectors for construction and installation projects."
  },
  {
    "id": "tan-thang-ppe-2023",
    "title": "Cung cấp trang thiết bị bảo hộ an toàn (PPE) & chất chữa cháy",
    "client": "Nhà máy Xi măng Tân Thắng",
    "year": "2023",
    "place": "Nghệ An",
    "cat": "Bảo hộ & Cứu nạn",
    "img": "assets/img/projects/stc-tan-thang-ppe-2023.webp",
    "desc": "Trang bị quần áo chịu nhiệt, mặt nạ phòng độc, bình khí thở cách ly SCBA và bọt/bột chữa cháy chuyên dụng.",
    "imgKind": "equipment",
    "title_en": "Supply of Personal Protective Equipment and Fire Extinguishing Agents",
    "client_en": "Tan Thang Cement Plant",
    "place_en": "Nghe An",
    "cat_en": "Personal Protection and Rescue",
    "desc_en": "Supplied heat-resistant clothing, respirators, self-contained breathing apparatus (SCBA), and specialized firefighting foam and powder."
  },
  {
    "id": "acecook-electric-2023",
    "title": "Cung cấp linh kiện thiết bị điện dây chuyền sản xuất",
    "client": "Công ty Cổ phần ACECOOK Việt Nam",
    "year": "2023",
    "place": "Hà Nội",
    "cat": "Thiết bị điện",
    "img": "assets/img/projects/stc-acecook-electric-2023.webp",
    "desc": "Cung cấp thiết bị điều khiển, rơ le bảo vệ, khởi động từ và linh kiện điện cho hệ thống sản xuất thực phẩm.",
    "imgKind": "equipment",
    "title_en": "Supply of Electrical Components for Production Lines",
    "client_en": "Acecook Vietnam Joint Stock Company",
    "place_en": "Hanoi",
    "cat_en": "Electrical Equipment",
    "desc_en": "Supplied control devices, protective relays, motor starters and electrical components for food production systems."
  },
  {
    "id": "hathanh-maint-2024",
    "title": "Dịch vụ bảo trì hệ thống thiết bị PCCC định kỳ",
    "client": "Công ty TNHH XD & TM Hà Thành",
    "year": "2024",
    "place": "Hà Nội",
    "cat": "Bảo trì PCCC",
    "img": "assets/img/projects/stc-hathanh-maint-2024.webp",
    "desc": "Bảo dưỡng định kỳ hệ thống báo cháy trung tâm, bơm cứu hỏa và mạng đường ống chữa cháy tự động.",
    "imgKind": "activity",
    "title_en": "Scheduled Maintenance of Fire Protection Systems and Equipment",
    "client_en": "Ha Thanh Construction and Trading Co., Ltd.",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Maintenance",
    "desc_en": "Performed scheduled servicing of central fire alarm systems, fire pumps and automatic fire suppression piping."
  },
  {
    "id": "hathanh-supply-2023",
    "title": "Cung cấp thiết bị báo cháy & chữa cháy công trình",
    "client": "Công ty TNHH XD & TM Hà Thành",
    "year": "2023",
    "place": "Hà Nội",
    "cat": "Thiết bị PCCC",
    "img": "assets/img/projects/stc-hathanh-supply-2023.webp",
    "desc": "Cung cấp tủ báo cháy, chuông đèn báo động và thiết bị chữa cháy cầm tay cho các công trình xây dựng.",
    "imgKind": "equipment",
    "title_en": "Supply of Fire Alarm and Firefighting Equipment for Buildings",
    "client_en": "Ha Thanh Construction and Trading Co., Ltd.",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Equipment",
    "desc_en": "Supplied fire alarm control panels, audible and visual notification devices, and portable firefighting equipment for construction projects."
  },
  {
    "id": "vietan-supply-2022",
    "title": "Cung cấp thiết bị báo cháy và chữa cháy chính hãng",
    "client": "Công ty CP Công nghệ Việt An",
    "year": "2022",
    "place": "Hà Nội",
    "cat": "Thiết bị PCCC",
    "img": "assets/img/projects/stc-vietan-supply-2022.webp",
    "desc": "Cung cấp thiết bị báo cháy tự động chất lượng cao đáp ứng tiêu chuẩn an toàn cho trụ sở và trung tâm kỹ thuật.",
    "imgKind": "equipment",
    "title_en": "Supply of Genuine Fire Alarm and Firefighting Equipment",
    "client_en": "Viet An Technology Joint Stock Company",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Equipment",
    "desc_en": "Supplied automatic fire alarm equipment meeting safety standards for the headquarters and technical center."
  },
  {
    "id": "hathanh-supply-2022",
    "title": "Cung cấp thiết bị báo cháy & chữa cháy tòa nhà",
    "client": "Công ty TNHH XD & TM Hà Thành",
    "year": "2022",
    "place": "Hà Nội",
    "cat": "Thiết bị PCCC",
    "img": "assets/img/projects/stc-hathanh-supply-2022.webp",
    "desc": "Cung cấp thiết bị báo cháy Hochiki/Notifier và phụ kiện chữa cháy phục vụ công trình dự án.",
    "imgKind": "equipment",
    "title_en": "Supply of Building Fire Alarm and Firefighting Equipment",
    "client_en": "Ha Thanh Construction and Trading Co., Ltd.",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Equipment",
    "desc_en": "Supplied Hochiki and Notifier fire alarm equipment and firefighting accessories for construction projects."
  },
  {
    "id": "tanthang-install-2021",
    "title": "Cung cấp và thi công lắp đặt hệ thống báo cháy & chữa cháy",
    "client": "Nhà máy Xi măng Tân Thắng",
    "year": "2021",
    "place": "Nghệ An",
    "cat": "Thi công PCCC",
    "img": "assets/img/projects/stc-tanthang-install-2021.webp",
    "desc": "Thi công lắp đặt toàn diện hệ thống báo cháy, chữa cháy vách tường và mạng bơm cứu hỏa cho nhà máy xi măng.",
    "imgKind": "activity",
    "title_en": "Supply and Installation of Fire Alarm and Fire Suppression Systems",
    "client_en": "Tan Thang Cement Plant",
    "place_en": "Nghe An",
    "cat_en": "Fire Protection Installation",
    "desc_en": "Installed a complete fire alarm system, wall-mounted firefighting equipment and a fire pump network for the cement plant."
  },
  {
    "id": "hungmanh-recharge-2021",
    "title": "Dịch vụ nạp bình & bảo dưỡng hệ thống chữa cháy bột khô",
    "client": "Công ty TNHH ĐT TM & XD Hùng Mạnh",
    "year": "2021",
    "place": "Hà Nội",
    "cat": "Bảo dưỡng PCCC",
    "img": "assets/img/projects/stc-hungmanh-recharge-2021.webp",
    "desc": "Kiểm tra định kỳ bình chữa cháy, thay thế bột chữa cháy đạt chuẩn và bảo dưỡng van xả áp suất.",
    "imgKind": "activity",
    "title_en": "Extinguisher Recharging and Dry Chemical System Maintenance",
    "client_en": "Hung Manh Trading Investment and Construction Co., Ltd.",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Servicing",
    "desc_en": "Inspected fire extinguishers periodically, replaced extinguishing powder with material meeting applicable standards and serviced pressure discharge valves."
  },
  {
    "id": "hungmanh-elec-2021",
    "title": "Cung cấp vật tư linh kiện điện công nghiệp",
    "client": "Công ty TNHH ĐT TM & XD Hùng Mạnh",
    "year": "2021",
    "place": "Bắc Ninh",
    "cat": "Thiết bị điện",
    "img": "assets/img/projects/stc-hungmanh-elec-2021.webp",
    "desc": "Cung cấp thiết bị phân phối điện, cáp chống cháy và linh kiện đóng cắt cho dự án nhà xưởng.",
    "imgKind": "equipment",
    "title_en": "Supply of Industrial Electrical Parts and Materials",
    "client_en": "Hung Manh Trading Investment and Construction Co., Ltd.",
    "place_en": "Bac Ninh",
    "cat_en": "Electrical Equipment",
    "desc_en": "Supplied power distribution equipment, fire-resistant cables and switchgear components for an industrial building project."
  },
  {
    "id": "acecook-install-2020",
    "title": "Cung cấp và lắp đặt hệ thống báo cháy, chữa cháy nhà máy",
    "client": "Công ty Cổ phần ACECOOK Việt Nam",
    "year": "2020",
    "place": "Hà Nội",
    "cat": "Hệ thống PCCC",
    "img": "assets/img/projects/stc-acecook-install-2020.webp",
    "desc": "Lắp đặt hệ thống báo cháy tự động và chữa cháy vách tường đạt chuẩn quy chuẩn QCVN cho nhà máy sản xuất thực phẩm.",
    "imgKind": "activity",
    "title_en": "Supply and Installation of Plant Fire Alarm and Suppression Systems",
    "client_en": "Acecook Vietnam Joint Stock Company",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Systems",
    "desc_en": "Installed an automatic fire alarm system and wall-mounted firefighting equipment meeting applicable Vietnamese technical regulations (QCVN) for a food manufacturing plant."
  },
  {
    "id": "hungmanh-supply-2020",
    "title": "Cung cấp thiết bị báo cháy & thiết bị chữa cháy",
    "client": "Công ty TNHH ĐT TM & XD Hùng Mạnh",
    "year": "2020",
    "place": "Hà Nội",
    "cat": "Thiết bị PCCC",
    "img": "assets/img/projects/stc-hungmanh-supply-2020.webp",
    "desc": "Cung cấp bình chữa cháy, van góc, cuộn vòi cứu hỏa và các thiết bị báo cháy cơ sở.",
    "imgKind": "equipment",
    "title_en": "Supply of Fire Alarm and Firefighting Equipment",
    "client_en": "Hung Manh Trading Investment and Construction Co., Ltd.",
    "place_en": "Hanoi",
    "cat_en": "Fire Protection Equipment",
    "desc_en": "Supplied fire extinguishers, angle valves, fire hoses and basic fire alarm equipment."
  }
];

// Dữ liệu NEWS được nạp từ assets/news-data.js (hoặc định nghĩa sẵn dưới đây nếu chạy độc lập)
if (typeof NEWS === "undefined") {
  window.NEWS = [
    { id: "quy-dinh-dau-bao-khoi-tcvn-7568-14-2025", title: "Những quy định cần lưu ý khi lắp đặt đầu báo khói trên trần phẳng theo TCVN 7568-14:2025", date: "15/10/2026", tag: "Quy chuẩn", img: "assets/img/news/news-1.jpg", sum: "Tiêu chuẩn quốc gia TCVN 7568-14:2025 (thay thế TCVN 5738:2021) quy định chi tiết bán kính bảo vệ 7,2m, khoảng cách tối đa 10,2m giữa hai đầu báo và các khoảng cách an toàn với miệng gió, trần nhà." },
    { id: "nghi-dinh-moi-muc-phat-vi-pham-pccc", title: "Nghị định mới: nâng mức phạt vi phạm quy định về phòng cháy chữa cháy", date: "02/10/2026", tag: "Pháp luật", img: "assets/img/news/news-2.jpg", sum: "Cập nhật các chế tài xử phạt hành chính mới nhất theo Nghị định số 106/2025/NĐ-CP và Nghị định số 69/2026/NĐ-CP: nâng khung xử phạt hành vi cản trở lối thoát nạn, không nghiệm thu PCCC và thẩm quyền xử phạt tại cơ sở." },
    { id: "huong-dan-kiem-tra-bao-quan-mat-na-phong-doc-scba", title: "Hướng dẫn kiểm tra, bảo quản và sử dụng mặt nạ phòng độc cách ly", date: "21/09/2026", tag: "Kỹ thuật", img: "assets/img/news/news-3.jpg", sum: "Quy trình kiểm tra độ kín áp suất, bảo dưỡng van thở, bình khí thở độc lập SCBA (Self-Contained Breathing Apparatus) và bảo quản phin lọc chuyên dụng theo tiêu chuẩn EN 137 / TCVN an toàn lao động." },
    { id: "khi-nao-nen-chon-he-thong-chua-chay-khi-thay-sprinkler", title: "Khi nào nên chọn hệ thống chữa cháy bằng khí thay cho sprinkler?", date: "08/09/2026", tag: "Giải pháp", img: "assets/img/news/news-4.jpg", sum: "Phân tích kỹ thuật so sánh giữa hệ thống chữa cháy bằng nước Sprinkler tự động và các hệ thống chữa cháy khí sạch (FM-200, Novec 1230, IG-541, CO₂) đối với phòng Server, trung tâm dữ liệu, tủ điện cao thế và kho lưu trữ di sản." },
    { id: "checklist-bao-tri-he-thong-pccc-dinh-ky-nha-xuong", title: "Checklist bảo trì hệ thống PCCC định kỳ cho nhà xưởng", date: "25/08/2026", tag: "Bảo trì", img: "assets/img/news/news-5.jpg", sum: "Quy trình kiểm tra bảo trì định kỳ hệ thống báo cháy, mạng lưới chữa cháy vách tường, máy bơm chữa cháy diesel - điện và nạp sạc bình chữa cháy theo TCVN 3890:2023 và thông tư Bộ Công An." },
    { id: "vi-sao-can-hieu-chuan-may-do-khi-dinh-ky", title: "Vì sao cần hiệu chuẩn máy đo khí định kỳ?", date: "10/08/2026", tag: "Đo lường", img: "assets/img/news/news-6.jpg", sum: "Hiện tượng trôi điểm zero (Zero Drift), ngộ độc cảm biến (Sensor Poisoning) và tiêu chuẩn thực hiện Bump Test / Span Calibration đối với các máy đo nồng độ khí cháy nổ LEL, O₂, CO, H₂S trong môi trường công nghiệp." }
  ];
}

/* ============ HEADER / FOOTER / NHÃN GIAO DIỆN CHUNG ============ */
const PAGES = [
  [
    "index.html",
    "Trang chủ"
  ],
  [
    "san-pham.html",
    "Sản phẩm"
  ],
  [
    "dich-vu.html",
    "Dịch vụ"
  ],
  [
    "du-an.html",
    "Dự án"
  ],
  [
    "gioi-thieu.html",
    "Giới thiệu"
  ],
  [
    "tin-tuc.html",
    "Tin tức"
  ],
  [
    "lien-he.html",
    "Liên hệ"
  ]
];

const UI = {
  "logoImage": "assets/icons/stc-logo.svg",
  "logoAlt": "STC Safety Technology",
  "searchButton": "Tìm",
  "searchPlaceholder": "Tìm sản phẩm",
  "footerCol2Title": "Sản phẩm & Giải pháp",
  "footerCol3Title": "Chính sách & Quy định",
  "footerCol4Title": "Bản đồ vị trí",
  "mstNote": "(Do Sở KH&ĐT TP. Hà Nội cấp)",
  "repLabel": "Đại diện pháp luật:",
  "copyright": "Bảo lưu mọi quyền.",
  "policyLinks": [
    {
      "href": "chinh-sach-bao-mat.html",
      "text": "Bảo vệ dữ liệu cá nhân"
    },
    {
      "href": "dieu-khoan-dich-vu.html",
      "text": "Điều khoản & Quy chế hoạt động"
    },
    {
      "href": "chinh-sach-thanh-toan.html",
      "text": "Chính sách thanh toán"
    },
    {
      "href": "chinh-sach-giao-nhan.html",
      "text": "Chính sách vận chuyển & kiểm hàng"
    },
    {
      "href": "chinh-sach-doi-tra.html",
      "text": "Chính sách đổi trả & hoàn tiền"
    },
    {
      "href": "chinh-sach-bao-hanh.html",
      "text": "Chính sách bảo hành sản phẩm"
    }
  ],
  "btnMoreCat": "Xem chi tiết →",
  "btnMoreNews": "Đọc tiếp →",
  "btnConsult": "Yêu cầu tư vấn",
  "lblClient": "Khách hàng:",
  "lblYear": "Năm:",
  "btnPrev": "« Trước",
  "btnNext": "Sau »"
};

const cur = location.pathname.split("/").pop() || "index.html";
const tel = SITE.hotline.replace(/\s/g, "");

function renderHeader() {
  const mega = CATEGORIES.map(c => {
    const itemNames = c.items.slice(0,5).map(i => typeof i === "object" ? i.name : i);
    return `<div class="mega-col"><a class="mega-title" href="san-pham.html#${c.id}">${c.icon} ${c.name}</a>${itemNames.map(name => `<a href="san-pham.html#${c.id}">${name}</a>`).join("")}</div>`;
  }).join("");
  const nav = PAGES.map(([h, t]) => {
    const act = cur === h ? " active" : "";
    if (h === "san-pham.html") return `<li class="has-mega"><a class="${act}" href="${h}">${t} ▾</a><div class="mega">${mega}</div></li>`;
    return `<li><a class="${act}" href="${h}">${t}</a></li>`;
  }).join("");
  document.getElementById("header").innerHTML = `
  <div class="topbar"><div class="container flex between">
    <span>📍 ${SITE.address}</span>
    <span>✉ ${SITE.email} &nbsp;|&nbsp; ☎ <a href="tel:${tel}">${SITE.hotline}</a></span>
  </div></div>
  <div class="mainbar"><div class="container flex between">
    <a class="logo" href="index.html"><img src="${escapeImageAttr(UI.logoImage || "assets/icons/stc-logo.svg")}" alt="${escapeImageAttr(UI.logoAlt || "STC Safety Technology")}" width="414" height="128" decoding="async"></a>
    <button type="button" class="burger" aria-label="Menu" aria-controls="site-navigation" aria-expanded="false">☰</button>
    <nav id="site-navigation"><ul class="menu">${nav}</ul></nav>
    <div class="right-tools">
      <form class="search" action="san-pham.html" role="search" aria-label="Tìm kiếm sản phẩm">
        <input type="search" name="q" autocomplete="off" aria-label="Tìm kiếm sản phẩm" placeholder="${escapeImageAttr(UI.searchPlaceholder || "Tìm sản phẩm")}">
        <button type="submit">${escapeImageAttr(UI.searchButton || "Tìm")}</button>
      </form>
      <div class="site-languages" id="language-switch" role="group" aria-label="Chọn ngôn ngữ">
        <button type="button" data-language="vi" aria-label="Tiếng Việt" aria-pressed="true"><img src="assets/icons/flag-vi.svg" alt="" width="20" height="13">VI</button>
        <button type="button" data-language="en" aria-label="Tiếng Anh" aria-pressed="false"><img src="assets/icons/flag-en.svg" alt="" width="20" height="13">EN</button>
      </div>
    </div>
  </div></div>`;

  const header = document.getElementById("header");
  const menuButton = header.querySelector(".burger");
  menuButton.addEventListener("click", () => {
    const expanded = document.body.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(expanded));
  });
  header.querySelector("#language-switch").addEventListener("click", event => {
    const button = event.target.closest("button[data-language]");
    if (button) I18N.setLanguage(button.dataset.language);
  });
}

function renderFooter() {
  const pLinks = (UI.policyLinks || []).map(l => `<a href="${l.href}">${l.text}</a>`).join("\n      ");
  document.getElementById("footer").innerHTML = `
  <div class="footer-main"><div class="container grid g4">
    <div class="footer-col-company"><h4 class="footer-company-name">${SITE.name}</h4>
      <p>${SITE.english}</p>
      <p><b>MST:</b> ${SITE.mst} <span>${UI.mstNote || "(Do Sở KH&ĐT TP. Hà Nội cấp)"}</span></p>
      <p><b>${UI.repLabel || "Đại diện pháp luật:"}</b> ${SITE.rep}</p>
      <p>📍 ${SITE.address}</p>
      <p class="nowrap-line">☎ <b>Hotline:</b> <a href="tel:${tel}">${SITE.hotline}</a></p>
      <p class="nowrap-line">✉ <b>Email:</b> <a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
    <div class="footer-cats"><h4>${UI.footerCol2Title || "Sản phẩm & Giải pháp"}</h4>${CATEGORIES.map(c => `<a class="footer-cat-link" href="san-pham.html#${c.id}">${c.name}</a>`).join("")}</div>
    <div><h4>${UI.footerCol3Title || "Chính sách & Quy định"}</h4>
      ${pLinks}
    </div>
    <div><h4>${UI.footerCol4Title || "Bản đồ vị trí"}</h4><iframe loading="lazy" title="Bản đồ" src="https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed"></iframe></div>
  </div></div>
  <div class="footer-bottom"><div class="container" style="text-align:center;font-size:13px">
    <span>© ${new Date().getFullYear()} <span>${SITE.name}</span>. <span>${UI.copyright || "Bảo lưu mọi quyền."}</span></span>
  </div></div>
  <a class="fab call" href="lien-he.html" title="Trang liên hệ">☎</a>
  <a class="fab zalo" href="https://zalo.me/${tel}" target="_blank" rel="noopener" title="Chat Zalo">Zalo</a>`;
}

const escapeImageAttr = value => String(value).replace(/[&"<>]/g, char => ({
  "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;"
}[char]));

const pic = (src, icon, alt = "") => src
  ? `<img src="${escapeImageAttr(src)}" alt="${escapeImageAttr(alt)}" loading="lazy" decoding="async" data-image-fallback="${escapeImageAttr(icon || "")}">`
  : escapeImageAttr(icon || "");

document.addEventListener("error", event => {
  const image = event.target;
  if (image instanceof HTMLImageElement && "imageFallback" in image.dataset) {
    image.replaceWith(document.createTextNode(image.dataset.imageFallback));
  }
}, true);

const productImagePath = value => {
  if (!value || value.includes("/")) return value || "";
  return "assets/img/products/" + (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(value) ? value : value + ".jpg");
};
const catCard = c => {
  const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
  const name = (isEn && c.name_en) ? c.name_en : ((isEn && typeof I18N.t === "function") ? I18N.t(c.name) : c.name);
  const desc = (isEn && c.desc_en) ? c.desc_en : ((isEn && typeof I18N.t === "function") ? I18N.t(c.desc) : c.desc);
  const baseMore = UI.btnMoreCat || "Xem chi tiết →";
  const more = isEn ? ((typeof I18N.t === "function") ? I18N.t(baseMore) : "View details →") : baseMore;
  const rawImg = (c.imgs && c.imgs[0]) ? c.imgs[0] : "";
  const imgSrc = productImagePath(rawImg);
  const imageClass = imgSrc.endsWith(".webp") ? "cat-img cat-img--catalog" : "cat-img";
  return `<a class="card cat-card" href="san-pham.html#${c.id}"><div class="${imageClass}">${pic(imgSrc, c.icon, name)}</div><h3>${name}</h3><p>${desc}</p><span class="more">${more}</span></a>`;
};
const svcCard = s => {
  const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
  const name = (isEn && s.name_en) ? s.name_en : ((isEn && typeof I18N.t === "function") ? I18N.t(s.name) : s.name);
  const desc = (isEn && s.desc_en) ? s.desc_en : ((isEn && typeof I18N.t === "function") ? I18N.t(s.desc) : s.desc);
  if (!s.img) return `<article class="card svc-card"><div class="ico" aria-hidden="true">${s.icon}</div><h3>${name}</h3><p>${desc}</p></article>`;
  return `<article class="card svc-card svc-card--photo"><div class="thumb svc-media">${pic(s.img, s.icon)}</div><div class="body"><h3>${name}</h3><p>${desc}</p></div></article>`;
};
const prjCard = p => {
  const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
  const title = (isEn && p.title_en) ? p.title_en : ((isEn && typeof I18N.t === "function") ? I18N.t(p.title) : p.title);
  const client = (isEn && p.client_en) ? p.client_en : ((isEn && typeof I18N.t === "function") ? I18N.t(p.client) : p.client);
  const place = (isEn && p.place_en) ? p.place_en : ((isEn && typeof I18N.t === "function") ? I18N.t(p.place) : p.place);
  const cat = (isEn && p.cat_en) ? p.cat_en : ((isEn && typeof I18N.t === "function") ? I18N.t(p.cat) : p.cat);
  const desc = (isEn && p.desc_en) ? p.desc_en : ((isEn && typeof I18N.t === "function") ? I18N.t(p.desc) : p.desc);
  const baseClientLbl = UI.lblClient || "Khách hàng:";
  const baseYearLbl = UI.lblYear || "Năm:";
  const clientLbl = isEn ? ((typeof I18N.t === "function") ? I18N.t(baseClientLbl) : "Client:") : baseClientLbl;
  const yearLbl = isEn ? ((typeof I18N.t === "function") ? I18N.t(baseYearLbl) : "Year:") : baseYearLbl;
  const photoLabel = { location: "Ảnh địa điểm", equipment: "Ảnh minh họa thiết bị", activity: "Ảnh minh họa hạng mục" }[p.imgKind];
  const photoNote = photoLabel ? `<small class="prj-photo-note">${isEn ? I18N.t(photoLabel) : photoLabel}</small>` : "";
  const imageClass = p.imgKind === "equipment" ? "thumb prj-equipment" : "thumb";
  const imageAlt = p.imgKind === "location" ? client : title;
  return `<div class="card prj-card"><div class="${imageClass}">${pic(p.img, "🏗️", imageAlt)}<span class="badge-cat">${cat}</span><span class="badge-year">${p.year}</span></div><div class="body">${photoNote}<h3>${title}</h3><p class="prj-client"><b>${clientLbl}</b> ${client}</p><div class="prj-meta"><span>📍 ${place}</span><span>📅 ${yearLbl} ${p.year}</span></div><p class="prj-desc">${desc}</p></div></div>`;
};
const newsCard = n => {
  const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
  const title = (isEn && n.title_en) ? n.title_en : n.title;
  const sum = (isEn && n.sum_en) ? n.sum_en : n.sum;
  const tag = (isEn && n.tag_en) ? n.tag_en : n.tag;
  const baseMore = UI.btnMoreNews || "Đọc tiếp →";
  const moreText = isEn ? ((typeof I18N.t === "function") ? I18N.t(baseMore) : "Read more →") : baseMore;
  return `<article class="card news-card"><div class="thumb">${pic(n.img, "📰", title)}<span class="badge">${tag}</span></div><div class="body"><small>${n.date}</small><h3>${title}</h3><p>${sum}</p><a class="more" href="tin-tuc-chi-tiet.html?id=${encodeURIComponent(n.id)}">${moreText}</a></div></article>`;
};

function renderLocalizedCollections() {
  const fill = (id, items, render, limit = items.length) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = items.slice(0, limit).map(render).join("");
  };
  fill("home-cats", CATEGORIES, catCard);
  fill("home-svcs", SERVICES, svcCard);
  fill("all-svcs", SERVICES, svcCard);
  fill("home-prj", PROJECTS, prjCard, 6);
  if (typeof NEWS !== "undefined" && Array.isArray(NEWS)) fill("home-news", NEWS, newsCard, 3);
  renderNewsPage(window.currentNewsPage || 1);
  renderProjectPage(window.currentPrjPage || 1);
}

// ============ PHÂN TRANG TIN TỨC (9 TIN / TRANG) ============
const NEWS_PER_PAGE = 9;
window.currentNewsPage = 1;

window.changeNewsPage = function(page) {
  const newsList = (typeof NEWS !== "undefined" && Array.isArray(NEWS)) ? NEWS : [];
  const totalPages = Math.ceil(newsList.length / NEWS_PER_PAGE) || 1;
  if (page < 1 || page > totalPages) return;
  window.currentNewsPage = page;
  renderNewsPage(window.currentNewsPage);
  const newsSec = document.getElementById("all-news");
  if (newsSec) {
    const topOffset = newsSec.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  }
};

function renderNewsPage(page) {
  const newsContainer = document.getElementById("all-news");
  const pagContainer = document.getElementById("news-pagination");
  if (!newsContainer) return;

  const newsList = (typeof NEWS !== "undefined" && Array.isArray(NEWS)) ? NEWS : [];
  const totalPages = Math.ceil(newsList.length / NEWS_PER_PAGE) || 1;
  const curPage = Math.max(1, Math.min(page, totalPages));
  window.currentNewsPage = curPage;

  const start = (curPage - 1) * NEWS_PER_PAGE;
  const items = newsList.slice(start, start + NEWS_PER_PAGE);

  newsContainer.innerHTML = items.map(newsCard).join("");

  if (pagContainer) {
    if (totalPages <= 1) {
      pagContainer.innerHTML = "";
    } else {
      const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
      let pagesHtml = "";
      for (let i = 1; i <= totalPages; i++) {
        const current = i === curPage ? ' aria-current="page"' : '';
        pagesHtml += `<button type="button" class="page-btn page-num ${current ? 'active' : ''}" onclick="changeNewsPage(${i})" aria-label="${isEn ? 'Page' : 'Trang'} ${i}"${current}>${i}</button>`;
      }
      const basePrev = (typeof UI !== "undefined" && UI.btnPrev) ? UI.btnPrev : "« Trước";
      const baseNext = (typeof UI !== "undefined" && UI.btnNext) ? UI.btnNext : "Sau »";
      const prevText = isEn ? "« Prev" : basePrev;
      const nextText = isEn ? "Next »" : baseNext;
      const prevDisabled = curPage === 1 ? "disabled" : "";
      const nextDisabled = curPage === totalPages ? "disabled" : "";
      const infoHtml = isEn
        ? `Page <b>${curPage}</b> / <b>${totalPages}</b> (Showing ${start + 1} – ${Math.min(start + NEWS_PER_PAGE, newsList.length)} of ${newsList.length} news articles)`
        : `Trang <b>${curPage}</b> / <b>${totalPages}</b> (Hiển thị ${start + 1} – ${Math.min(start + NEWS_PER_PAGE, newsList.length)} trên tổng số ${newsList.length} tin tức)`;

      pagContainer.innerHTML = `
        <div class="pagination-nav">
          <button type="button" class="page-btn page-prev ${prevDisabled}" onclick="changeNewsPage(${curPage - 1})" aria-label="${isEn ? 'Previous page' : 'Trang trước'}" ${curPage === 1 ? 'disabled' : ''}>${prevText}</button>
          ${pagesHtml}
          <button type="button" class="page-btn page-next ${nextDisabled}" onclick="changeNewsPage(${curPage + 1})" aria-label="${isEn ? 'Next page' : 'Trang sau'}" ${curPage === totalPages ? 'disabled' : ''}>${nextText}</button>
        </div>
        <div class="page-info">
          ${infoHtml}
        </div>
      `;
    }
  }
}

// ============ PHÂN TRANG DỰ ÁN (9 DỰ ÁN / TRANG) ============
const PRJ_PER_PAGE = 9;
window.currentPrjPage = 1;

window.changePrjPage = function(page) {
  const prjList = (typeof PROJECTS !== "undefined" && Array.isArray(PROJECTS)) ? PROJECTS : [];
  const totalPages = Math.ceil(prjList.length / PRJ_PER_PAGE) || 1;
  if (page < 1 || page > totalPages) return;
  window.currentPrjPage = page;
  renderProjectPage(window.currentPrjPage);
  const prjSec = document.getElementById("all-prj");
  if (prjSec) {
    const topOffset = prjSec.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  }
};

function renderProjectPage(page) {
  const prjContainer = document.getElementById("all-prj");
  const pagContainer = document.getElementById("prj-pagination");
  if (!prjContainer) return;

  const prjList = (typeof PROJECTS !== "undefined" && Array.isArray(PROJECTS)) ? PROJECTS : [];
  const totalPages = Math.ceil(prjList.length / PRJ_PER_PAGE) || 1;
  const curPage = Math.max(1, Math.min(page, totalPages));
  window.currentPrjPage = curPage;

  const start = (curPage - 1) * PRJ_PER_PAGE;
  const items = prjList.slice(start, start + PRJ_PER_PAGE);

  prjContainer.innerHTML = items.map(prjCard).join("");

  if (pagContainer) {
    if (totalPages <= 1) {
      pagContainer.innerHTML = "";
    } else {
      const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
      let pagesHtml = "";
      for (let i = 1; i <= totalPages; i++) {
        const current = i === curPage ? ' aria-current="page"' : '';
        pagesHtml += `<button type="button" class="page-btn page-num ${current ? 'active' : ''}" onclick="changePrjPage(${i})" aria-label="${isEn ? 'Page' : 'Trang'} ${i}"${current}>${i}</button>`;
      }
      const basePrev = (typeof UI !== "undefined" && UI.btnPrev) ? UI.btnPrev : "« Trước";
      const baseNext = (typeof UI !== "undefined" && UI.btnNext) ? UI.btnNext : "Sau »";
      const prevText = isEn ? "« Prev" : basePrev;
      const nextText = isEn ? "Next »" : baseNext;
      const prevDisabled = curPage === 1 ? "disabled" : "";
      const nextDisabled = curPage === totalPages ? "disabled" : "";
      const infoHtml = isEn
        ? `Page <b>${curPage}</b> / <b>${totalPages}</b> (Showing ${start + 1} – ${Math.min(start + PRJ_PER_PAGE, prjList.length)} of ${prjList.length} projects)`
        : `Trang <b>${curPage}</b> / <b>${totalPages}</b> (Hiển thị ${start + 1} – ${Math.min(start + PRJ_PER_PAGE, prjList.length)} trên tổng số ${prjList.length} dự án)`;

      pagContainer.innerHTML = `
        <div class="pagination-nav">
          <button type="button" class="page-btn page-prev ${prevDisabled}" onclick="changePrjPage(${curPage - 1})" aria-label="${isEn ? 'Previous page' : 'Trang trước'}" ${curPage === 1 ? 'disabled' : ''}>${prevText}</button>
          ${pagesHtml}
          <button type="button" class="page-btn page-next ${nextDisabled}" onclick="changePrjPage(${curPage + 1})" aria-label="${isEn ? 'Next page' : 'Trang sau'}" ${curPage === totalPages ? 'disabled' : ''}>${nextText}</button>
        </div>
        <div class="page-info">
          ${infoHtml}
        </div>
      `;
    }
  }
}

function updateContactPrefill() {
  const message = document.querySelector('#contact-form [name="msg"]');
  const product = new URLSearchParams(location.search).get("sp");
  if (!message || !product || message.value !== (message.dataset.consultationPrefill || "")) return;
  const prefix = I18N.t("Tôi cần tư vấn về giải pháp / thiết bị:");
  message.value = `${prefix} ${I18N.t(product)}`;
  message.dataset.consultationPrefill = message.value;
}

function initializeBrandCarousel() {
  const track = document.getElementById("brand-track");
  if (!track) return;
  const previous = document.getElementById("brand-previous");
  const next = document.getElementById("brand-next");
  const position = document.getElementById("brand-position");
  const last = track.children.length - 1;
  let page = 0;

  function update() {
    page = Math.max(0, Math.min(last, Math.round(track.scrollLeft / (track.clientWidth || 1))));
    previous.disabled = page === 0;
    next.disabled = page === last;
    position.textContent = `${page + 1} / ${last + 1}`;
  }

  function go(direction) {
    const target = Math.max(0, Math.min(last, page + direction));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: track.clientWidth * target, behavior: reduceMotion ? "instant" : "smooth" });
  }

  previous.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  track.addEventListener("scroll", update, { passive: true });
  track.addEventListener("keydown", event => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    go(event.key === "ArrowLeft" ? -1 : 1);
  });
  update();
}


document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initializeBrandCarousel();

  // trang sản phẩm
  const list = document.getElementById("product-list");
  if (list) {
    const q = new URLSearchParams(location.search).get("q");
    const draw = () => {
      const kw = (document.getElementById("pq").value || "").toLowerCase();
      const consultText = (typeof UI !== "undefined" && UI.btnConsult) ? UI.btnConsult : "Yêu cầu tư vấn";
      list.innerHTML = CATEGORIES.map(c => {
        const hit = s => (s + " " + I18N.t(s, "en")).toLowerCase().includes(kw);
        const filtered = c.items.map((item, index) => ({ item, index })).filter(({ item }) => {
          const name = typeof item === "object" ? item.name : item;
          return !kw || hit(name) || hit(c.name);
        });
        if (!filtered.length) return "";
        return `<section id="${c.id}" class="cat-block"><h2>${c.icon} ${c.name}</h2><p class="muted">${c.desc}</p>
          <div class="grid g3">${filtered.map(({ item, index }) => {
            const name = typeof item === "object" ? item.name : item;
            const images = c.imgs || [];
            const imgSrc = (typeof item === "object" && item.img) || productImagePath(images[index % images.length]);
            return `<div class="card prod"><div class="thumb">${pic(imgSrc, c.icon, name)}</div><div class="body"><h3>${name}</h3><a class="btn sm" href="lien-he.html?sp=${encodeURIComponent(name)}">${consultText}</a></div></div>`;
          }).join("")}</div></section>`;
      }).join("") || "<p>Không tìm thấy sản phẩm phù hợp.</p>";
      I18N.apply();
    };
    document.getElementById("pq").value = q || ""; document.getElementById("pq").oninput = draw; draw();
  }

  // form liên hệ – gửi thẳng về email công ty
  const f = document.getElementById("contact-form");
  if (f) {
    const status = document.getElementById("form-status"), btn = f.querySelector("button");
    const show = (msg, ok) => { status.textContent = msg; status.className = "form-status " + (ok ? "ok" : "err"); I18N.apply(); };
    f.onsubmit = async e => {
      e.preventDefault();
      if (f._honey.value) return;                       // chống spam (ô ẩn)
      btn.disabled = true; show("Đang gửi...", true);
      // Gửi trực tiếp vào SITE.email qua dịch vụ FormSubmit (không cần server riêng)
      const payload = {
        "Họ tên": f.elements.name.value, "Số điện thoại": f.phone.value, "Email khách": f.email.value || "(không có)",
        "Nội dung": f.msg.value, "Trang gửi": location.href,
        _subject: "[Website STC] Yêu cầu mới từ " + f.elements.name.value, _template: "table", _captcha: "false"
      };
      if (f.email.value) payload._replyto = f.email.value;
      try {
        const r = await fetch("https://formsubmit.co/ajax/" + SITE.email, {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload)
        });
        const j = await r.json();
        if (!r.ok || String(j.success) !== "true") throw new Error(j.message || r.status);
        f.reset(); show("Cảm ơn quý khách! Yêu cầu đã được gửi, STC sẽ liên hệ trong thời gian sớm nhất.", true);
      } catch (err) {
        show("Gửi không thành công. Vui lòng gọi hotline hoặc gửi email trực tiếp cho chúng tôi.", false);
      }
      btn.disabled = false;
    };
  }
  document.querySelectorAll("[data-site]").forEach(el => el.textContent = SITE[el.dataset.site]);
  I18N.apply();
  // slider & dots navigation
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("hero-dots");
  let slideIdx = 0, slideTimer = null;

  const showSlide = (idx) => {
    slides.forEach((s, k) => s.classList.toggle("on", k === idx));
    if (dotsContainer) {
      dotsContainer.querySelectorAll(".hero-dot").forEach((d, k) => d.classList.toggle("active", k === idx));
    }
    slideIdx = idx;
  };

  const nextSlide = () => {
    showSlide((slideIdx + 1) % slides.length);
  };

  const startAutoPlay = () => {
    if (slideTimer) clearInterval(slideTimer);
    if (slides.length > 1) {
      slideTimer = setInterval(nextSlide, 5000); // Tự động chuyển sau mỗi 5 giây
    }
  };

  if (dotsContainer && slides.length > 1) {
    dotsContainer.innerHTML = Array.from(slides).map((_, k) => `<button type="button" class="hero-dot ${k === 0 ? 'active' : ''}" data-idx="${k}" aria-label="Slide ${k + 1}"></button>`).join("");
    dotsContainer.querySelectorAll(".hero-dot").forEach(dot => {
      dot.addEventListener("click", (e) => {
        const targetIdx = parseInt(e.currentTarget.dataset.idx, 10);
        showSlide(targetIdx);
        startAutoPlay(); // Reset timer khi người dùng chủ động click
      });
    });
  }

  startAutoPlay();
});

// ============ CHẾ ĐỘ CLICK SỬA TRỰC TIẾP TRÊN GIAO DIỆN (LIVE VISUAL EDITOR) ============
if (window !== window.parent) {
  let visualEditActive = true;
  let hoveredEl = null;

  document.addEventListener("DOMContentLoaded", () => {
    if (visualEditActive && document.body) {
      document.body.classList.add("stc-visual-mode");
    }
  });

  const styleEl = document.createElement("style");
  styleEl.textContent = `
    .stc-visual-hover {
      outline: 2px dashed #0d2949 !important;
      outline-offset: 3px !important;
      background-color: rgba(13, 41, 73, 0.08) !important;
      cursor: pointer !important;
      position: relative;
    }
    body.stc-visual-mode * {
      cursor: pointer !important;
    }
  `;
  document.head.appendChild(styleEl);

  window.addEventListener("message", (e) => {
    if (e.data && e.data.type === "STC_VISUAL_EDIT_MODE") {
      visualEditActive = Boolean(e.data.enabled);
      document.body.classList.toggle("stc-visual-mode", visualEditActive);
      if (!visualEditActive && hoveredEl) {
        hoveredEl.classList.remove("stc-visual-hover");
        hoveredEl = null;
      }
    }
  });

  document.addEventListener("mouseover", (e) => {
    if (!visualEditActive) return;
    const t = e.target;
    if (!t || t === document.body || t === document.documentElement) return;
    if (hoveredEl && hoveredEl !== t) hoveredEl.classList.remove("stc-visual-hover");
    hoveredEl = t;
    hoveredEl.classList.add("stc-visual-hover");
  }, true);

  document.addEventListener("mouseout", (e) => {
    if (!visualEditActive) return;
    if (e.target && e.target.classList) e.target.classList.remove("stc-visual-hover");
  }, true);

  document.addEventListener("click", (e) => {
    if (!visualEditActive) return;
    const t = e.target;
    if (!t) return;
    e.preventDefault();
    e.stopPropagation();

    let rawText = "";
    if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") {
      rawText = t.getAttribute("placeholder") || t.value || "";
    } else {
      // Lấy text trực tiếp hoặc text của phần tử
      const directText = Array.from(t.childNodes)
        .filter(n => n.nodeType === 3)
        .map(n => n.nodeValue.trim())
        .filter(Boolean)
        .join(" ");
      rawText = directText || (t.innerText || t.textContent || "").trim();
    }

    // Bỏ hậu tố mũi tên menu " ▾" hoặc icon đầu dòng nếu chỉ muốn sửa chữ
    rawText = rawText.replace(/\s*▾\s*$/, "").replace(/^[📍✉☎📅✍⏱🔍🌐]+\s*/, "").trim();

    if (rawText) {
      window.parent.postMessage({
        type: "STC_TEXT_CLICKED",
        text: rawText,
        page: cur,
        tag: t.tagName
      }, "*");
    }
  }, true);
}
