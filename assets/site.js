/* ============ CẤU HÌNH – CHỈNH THÔNG TIN CÔNG TY Ở ĐÂY ============ */
const SITE = {
  name: "CÔNG TY TNHH AN TOÀN VÀ CÔNG NGHỆ STC",
  short: "STC",
  english: "STC SAFETY AND TECHNOLOGY CO., LTD",
  slogan: "An toàn là giá trị cốt lõi – Công nghệ là giải pháp",
  mst: "0109400831",
  rep: "MAI THANH SƠN",
  address: "Tầng 4, Tòa nhà Times Tower, số 35 Lê Văn Lương, P. Nhân Chính, Q. Thanh Xuân, Hà Nội",
  hotline: "0886 628 362",
  email: "info@stcsafety.vn",      // email nhận yêu cầu từ form liên hệ
  website: "stcsafety.vn",
  hours: "Thứ 2 – Thứ 7: 8:00 – 17:30",
  mapQuery: "Times Tower 35 Lê Văn Lương Hà Nội"
};

const CATEGORIES = [
  { id: "chua-chay", imgs: ['chua-chay-1','chua-chay-0'], icon: "🧯", name: "Thiết bị chữa cháy", desc: "Bình chữa cháy, lăng phun, vòi, bọt chữa cháy, bơm chữa cháy xách tay.",
    items: ["Bình chữa cháy bột ABC, CO₂", "Lăng phun chữa cháy", "Lăng giá chữa cháy", "Vòi chữa cháy", "Bọt chữa cháy", "Bơm chữa cháy xách tay"] },
  { id: "bao-chay", imgs: ['panel-0','bao-chay-1','bao-chay-0','panel-1'], icon: "🚨", name: "Hệ thống báo cháy", desc: "Tủ báo cháy trung tâm, đầu báo khói – nhiệt – lửa, báo cháy không dây.",
    items: ["Tủ báo cháy trung tâm", "Đầu báo khói, báo nhiệt", "Đầu báo lửa (UV/IR)", "Chuông, đèn, nút nhấn khẩn", "Báo cháy không dây", "Module giám sát, điều khiển"] },
  { id: "chua-chay-khi", imgs: ['datacenter-0','datacenter-1'], icon: "💨", name: "Hệ thống chữa cháy bằng khí", desc: "Giải pháp bảo vệ phòng server, tủ điện, phòng điều khiển: FM-200, Novec 1230, CO₂, N₂.",
    items: ["Hệ thống FM-200 (HFC-227ea)", "Hệ thống Novec 1230", "Hệ thống CO₂", "Hệ thống khí N₂/IG-541", "Tủ chữa cháy tự động", "Bình chứa & van xả"] },
  { id: "do-luong", imgs: ['do-luong-0','do-luong-1','thermal-0','thermal-1'], icon: "📟", name: "Thiết bị đo lường & phát hiện khí", desc: "Máy đo khí độc, khí cháy nổ, cảm biến, thiết bị đo & điều khiển tự động hóa.",
    items: ["Máy đo khí đa chỉ tiêu", "Đầu dò khí cháy / khí độc", "Máy đo nồng độ O₂, CO, H₂S", "Camera nhiệt", "Cảm biến & thiết bị tự động hóa", "Hiệu chuẩn thiết bị đo"] },
  { id: "bao-ho", imgs: ['bao-ho-0','bao-ho-1','scba-0'], icon: "🦺", name: "Thiết bị bảo hộ an toàn", desc: "Quần áo chống cháy, chịu nhiệt, chống hóa chất, mặt nạ phòng độc, thiết bị thở.",
    items: ["Quần áo chữa cháy", "Quần áo chịu nhiệt độ cao", "Quần áo chống hóa chất", "Mặt nạ kèm bình khí thở", "Mặt nạ phòng độc", "Găng tay, ủng, mũ bảo hộ"] },
  { id: "cuu-ho", imgs: ['cuu-ho-0','cuu-ho-1','training-0'], icon: "⛑️", name: "Thiết bị cứu nạn – cứu hộ", desc: "Thiết bị phá dỡ, dò tìm nạn nhân, cứu hộ trên cao, không gian hạn chế.",
    items: ["Thiết bị phá dỡ đa năng", "Thiết bị dò tìm nạn nhân", "Thiết bị cứu nạn trên cao", "Thiết bị cứu hộ không gian hạn chế", "Đệm khí, nâng hạ", "Thiết bị lặn, cứu nạn dưới nước"] },
  { id: "cong-nghiep", imgs: ['cong-nghiep-0','cong-nghiep-1','substation-1'], icon: "🏭", name: "Thiết bị công nghiệp & dầu khí", desc: "Vật tư kỹ thuật, thiết bị xử lý sự cố tràn dầu, thiết bị an toàn công nghiệp.",
    items: [
      "Thiết bị xử lý dầu tràn",
      "Vật tư thấm hút hóa chất",
      "Thiết bị an toàn khu vực nguy hiểm",
      "Van, đường ống kỹ thuật",
      "Vật tư công nghiệp",
      "Thiết bị & phụ kiện phòng nổ (ATEX / IECEx)"
    ] },
  { id: "cctv", imgs: ['cctv-0','thermal-1','intrusion-0','access-control-0','panel-0','intrusion-1'], icon: "📹", name: "Hệ thống CCTV & Phát hiện xâm nhập", desc: "Camera giám sát an ninh, camera nhiệt phát hiện cháy sớm, đầu ghi NVR/DVR, hệ thống báo động chống đột nhập.",
    items: [
      { name: "Camera IP / Dome / Bullet / PTZ 360 độ", img: "assets/img/products/cctv-0.jpg" },
      { name: "Camera ảnh nhiệt phát hiện điểm cháy", img: "assets/img/products/thermal-1.jpg" },
      { name: "Hệ thống phát hiện xâm nhập & báo động đột nhập", img: "assets/img/products/intrusion-0.jpg" },
      { name: "Hệ thống kiểm soát ra vào (Access Control)", img: "assets/img/products/access-control-0.jpg" },
      { name: "Đầu ghi hình mạng chuyên dụng (NVR / DVR)", img: "assets/img/products/panel-0.jpg" },
      { name: "Hàng rào hồng ngoại & cảm biến chống leo rào", img: "assets/img/products/intrusion-1.jpg" }
    ] }
];

const SERVICES = [
  { icon: "📐", name: "Tư vấn thiết kế PCCC", desc: "Khảo sát, tư vấn giải pháp và lập hồ sơ thiết kế phòng cháy chữa cháy phù hợp quy chuẩn QCVN, TCVN." },
  { icon: "🔧", name: "Thi công, lắp đặt hệ thống", desc: "Thi công hệ thống báo cháy, chữa cháy tự động, chữa cháy bằng khí, sprinkler, vách tường – đúng tiến độ, nghiệm thu đạt." },
  { icon: "📹", name: "Tư vấn, lắp đặt CCTV & Hệ thống phát hiện xâm nhập", desc: "Khảo sát, thiết kế và thi công hệ thống camera giám sát, camera nhiệt cảnh báo cháy sớm và hệ thống cảm biến báo động phát hiện xâm nhập cho nhà máy, tòa nhà, kho bãi." },
  { icon: "🛠️", name: "Bảo trì, bảo dưỡng", desc: "Kiểm tra định kỳ, bảo dưỡng hệ thống PCCC, nạp sạc bình chữa cháy, thay thế vật tư." },
  { icon: "🎯", name: "Hiệu chuẩn, kiểm định thiết bị", desc: "Hiệu chuẩn máy đo khí, thiết bị đo lường điều khiển, đảm bảo độ chính xác & an toàn vận hành." },
  { icon: "📦", name: "Cung cấp thiết bị chính hãng", desc: "Phân phối thiết bị PCCC, cứu hộ, đo lường từ các hãng uy tín, đầy đủ CO – CQ, bảo hành." }
];

const PROJECTS = [
  { title: "Hệ thống chữa cháy khí FM-200 phòng Data Center", img: "assets/img/projects/datacenter-0.jpg", cat: "Chữa cháy khí", place: "Hà Nội" },
  { title: "Hệ thống báo cháy địa chỉ cho tòa nhà văn phòng", img: "assets/img/projects/office-1.jpg", cat: "Báo cháy", place: "Hà Nội" },
  { title: "Lắp đặt hệ thống camera nhiệt phát hiện cháy sớm nhà xưởng", img: "assets/img/products/cctv-1.jpg", cat: "CCTV & Giám sát", place: "Bắc Ninh" },
  { title: "Cung cấp máy đo khí độc cho nhà máy hóa chất", img: "assets/img/projects/factory-1.jpg", cat: "Đo lường", place: "Hải Phòng" },
  { title: "Trang bị thiết bị cứu nạn cho đội PCCC cơ sở", img: "assets/img/projects/training-0.jpg", cat: "Cứu nạn cứu hộ", place: "Bắc Ninh" },
  { title: "Bảo trì hệ thống PCCC khu công nghiệp", img: "assets/img/projects/substation-1.jpg", cat: "Bảo trì", place: "Hưng Yên" },
  { title: "Hệ thống chữa cháy tự động cho trạm biến áp", img: "assets/img/projects/substation-0.jpg", cat: "Chữa cháy tự động", place: "Hà Nam" },
  { title: "Hệ thống kiểm soát ra vào & an ninh tòa nhà", img: "assets/img/products/access-control-0.jpg", cat: "Kiểm soát an ninh", place: "Hà Nội" },
  { title: "Hệ thống phát hiện xâm nhập & bảo vệ chu vi kho logistics", img: "assets/img/products/intrusion-1.jpg", cat: "Phát hiện xâm nhập", place: "Hải Phòng" }
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

/* ============ HEADER / FOOTER ============ */
const PAGES = [
  ["index.html", "Trang chủ"], ["san-pham.html", "Sản phẩm"], ["dich-vu.html", "Dịch vụ"],
  ["du-an.html", "Dự án"], ["gioi-thieu.html", "Giới thiệu"], ["tin-tuc.html", "Tin tức"], ["lien-he.html", "Liên hệ"]
];
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
    <a class="logo" href="index.html"><span class="logo-mark">STC</span><span class="logo-text"><b>AN TOÀN & CÔNG NGHỆ</b><small>STC SAFETY AND TECHNOLOGY</small></span></a>
    <button class="burger" onclick="document.body.classList.toggle('nav-open')" aria-label="Menu">☰</button>
    <nav><ul class="menu">${nav}</ul></nav>
    <div class="right-tools"><form class="search" action="san-pham.html"><input name="q" placeholder="Tìm sản phẩm..."><button>🔍</button></form>
    <button type="button" class="lang-btn" id="lang-btn" onclick="I18N.toggle()">🌐 EN</button></div>
  </div></div>`;
}

function renderFooter() {
  document.getElementById("footer").innerHTML = `
  <div class="footer-main"><div class="container grid g4">
    <div class="footer-col-company"><h4 class="footer-company-name">${SITE.name}</h4>
      <p>${SITE.english}</p>
      <p><b>MST:</b> ${SITE.mst} <span>(Do Sở KH&ĐT TP. Hà Nội cấp)</span></p>
      <p><b>Đại diện pháp luật:</b> ${SITE.rep}</p>
      <p>📍 ${SITE.address}</p>
      <p class="nowrap-line">☎ <b>Hotline:</b> <a href="tel:${tel}">${SITE.hotline}</a></p>
      <p class="nowrap-line">✉ <b>Email:</b> <a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
    <div class="footer-cats"><h4>Sản phẩm & Giải pháp</h4>${CATEGORIES.map(c => `<a class="footer-cat-link" href="san-pham.html#${c.id}">${c.name}</a>`).join("")}</div>
    <div><h4>Chính sách & Quy định</h4>
      <a href="chinh-sach-bao-mat.html">Bảo vệ dữ liệu cá nhân</a>
      <a href="dieu-khoan-dich-vu.html">Điều khoản & Quy chế hoạt động</a>
      <a href="chinh-sach-thanh-toan.html">Chính sách thanh toán</a>
      <a href="chinh-sach-giao-nhan.html">Chính sách vận chuyển & kiểm hàng</a>
      <a href="chinh-sach-doi-tra.html">Chính sách đổi trả & hoàn tiền</a>
      <a href="chinh-sach-bao-hanh.html">Chính sách bảo hành sản phẩm</a>
    </div>
    <div><h4>Bản đồ vị trí</h4><iframe loading="lazy" title="Bản đồ" src="https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed"></iframe></div>
  </div></div>
  <div class="footer-bottom"><div class="container" style="text-align:center;font-size:13px">
    <span>© ${new Date().getFullYear()} <span>${SITE.name}</span>. <span>Bảo lưu mọi quyền.</span></span>
  </div></div>
  <a class="fab call" href="lien-he.html" title="Trang liên hệ">☎</a>
  <a class="fab zalo" href="https://zalo.me/${tel}" target="_blank" rel="noopener" title="Chat Zalo">Zalo</a>`;
}

const pic = (src, icon, alt) => src ? `<img src="${src}" alt="${alt || ""}" loading="lazy" onerror="this.replaceWith(document.createTextNode('${icon}'))">` : icon;
const catCard = c => `<a class="card cat-card" href="san-pham.html#${c.id}"><div class="cat-img">${pic("assets/img/products/" + c.imgs[0] + ".jpg", c.icon, c.name)}</div><h3>${c.name}</h3><p>${c.desc}</p><span class="more">Xem chi tiết →</span></a>`;
const svcCard = s => `<div class="card svc-card"><div class="ico">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p></div>`;
const prjCard = p => `<div class="card prj-card"><div class="thumb">${pic(p.img, "🏢", p.title)}<span class="badge">${p.cat}</span></div><div class="body"><h3>${p.title}</h3><p>📍 ${p.place}</p></div></div>`;
const newsCard = n => {
  const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
  const title = (isEn && n.title_en) ? n.title_en : n.title;
  const sum = (isEn && n.sum_en) ? n.sum_en : n.sum;
  const tag = (isEn && n.tag_en) ? n.tag_en : n.tag;
  const moreText = isEn ? "Read more →" : "Đọc tiếp →";
  return `<article class="card news-card"><div class="thumb">${pic(n.img, "📰", title)}<span class="badge">${tag}</span></div><div class="body"><small>${n.date}</small><h3>${title}</h3><p>${sum}</p><a class="more" href="tin-tuc-chi-tiet.html?id=${encodeURIComponent(n.id)}">${moreText}</a></div></article>`;
};

function fillNewsCards() {
  const fill = (id, arr, fn, n) => { const el = document.getElementById(id); if (el) el.innerHTML = arr.slice(0, n || arr.length).map(fn).join(""); };
  fill("home-news", NEWS, newsCard, 3);
  fill("all-news", NEWS, newsCard);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader(); renderFooter();
  const fill = (id, arr, fn, n) => { const el = document.getElementById(id); if (el) el.innerHTML = arr.slice(0, n || arr.length).map(fn).join(""); };
  fill("home-cats", CATEGORIES, catCard); fill("home-svcs", SERVICES, svcCard);
  fillNewsCards(); fill("home-prj", PROJECTS, prjCard, 3);
  fill("all-svcs", SERVICES, svcCard); fill("all-prj", PROJECTS, prjCard);

  // trang sản phẩm
  const list = document.getElementById("product-list");
  if (list) {
    const q = new URLSearchParams(location.search).get("q");
    const draw = () => {
      const kw = (document.getElementById("pq").value || "").toLowerCase();
      list.innerHTML = CATEGORIES.map(c => {
        const hit = s => (s + " " + I18N.t(s)).toLowerCase().includes(kw);
        const filtered = c.items.filter(item => {
          const name = typeof item === "object" ? item.name : item;
          return !kw || hit(name) || hit(c.name);
        });
        if (!filtered.length) return "";
        return `<section id="${c.id}" class="cat-block"><h2>${c.icon} ${c.name}</h2><p class="muted">${c.desc}</p>
          <div class="grid g3">${filtered.map((item, ix) => {
            const name = typeof item === "object" ? item.name : item;
            const imgSrc = (typeof item === "object" && item.img) ? item.img : ("assets/img/products/" + c.imgs[ix % c.imgs.length] + ".jpg");
            return `<div class="card prod"><div class="thumb">${pic(imgSrc, c.icon, name)}</div><div class="body"><h3>${name}</h3><a class="btn sm" href="lien-he.html?sp=${encodeURIComponent(name)}">Yêu cầu tư vấn</a></div></div>`;
          }).join("")}</div></section>`;
      }).join("") || "<p>Không tìm thấy sản phẩm phù hợp.</p>";
      I18N.apply();
    };
    document.getElementById("pq").value = q || ""; document.getElementById("pq").oninput = draw; draw();
  }

  // form liên hệ – gửi thẳng về email công ty
  const f = document.getElementById("contact-form");
  if (f) {
    const sp = new URLSearchParams(location.search).get("sp");
    if (sp) f.msg.value = "Tôi cần tư vấn về giải pháp / thiết bị: " + sp;
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
      slideTimer = setInterval(nextSlide, 2000); // Tự động chuyển sau mỗi 2 giây
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
