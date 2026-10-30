# ĐẶC TẢ KỸ THUẬT TOÀN DIỆN & KIẾN TRÚC HỆ THỐNG WEBSITE STC
**CÔNG TY TNHH AN TOÀN VÀ CÔNG NGHỆ STC**  
*(STC SAFETY AND TECHNOLOGY CO., LTD)*

---

## 1. TỔNG QUAN DỰ ÁN & MỤC TIÊU PHÁT TRIỂN

- **Chủ đầu tư / Đơn vị sở hữu:** CÔNG TY TNHH AN TOÀN VÀ CÔNG NGHỆ STC.
- **Mục tiêu:** Xây dựng website thương mại điện tử / giới thiệu doanh nghiệp tiêu chuẩn cao trong các lĩnh vực:
  1. Thiết bị và giải pháp Phòng cháy chữa cháy (PCCC).
  2. Thiết bị Cứu nạn – cứu hộ (CNCH) và An toàn lao động, công nghiệp.
  3. Hệ thống Camera giám sát an ninh (CCTV) & Phát hiện xâm nhập cảnh báo sớm.
  4. Thiết bị đo lường khí độc, khí cháy nổ, kiểm soát tự động hóa.
  5. Dịch vụ kỹ thuật: Tư vấn thiết kế, thi công lắp đặt, bảo trì, bảo dưỡng và kiểm định hiệu chuẩn.
- **Mô hình vận hành:** B2B / Dự án công trình (Tập trung tư vấn giải pháp kỹ thuật, không niêm yết giá bán lẻ đại trà, toàn bộ điều hướng chuyển về form yêu cầu tư vấn và hotline kỹ thuật).
- **Tuân thủ pháp luật hiện hành:**
  - Nghị định **52/2013/NĐ-CP** và Nghị định **85/2021/NĐ-CP** về Thương mại điện tử (Minh bạch thông tin doanh nghiệp, đại diện pháp luật, MST, đầy đủ 6 trang chính sách bắt buộc ở Footer).
  - Nghị định **13/2023/NĐ-CP** về Bảo vệ dữ liệu cá nhân (Trang chính sách bảo mật riêng biệt nêu rõ phạm vi thu thập, mục đích, quyền của chủ thể dữ liệu và đầu mối liên hệ xóa dữ liệu).

---

## 2. THÔNG TIN PHÁP LÝ & NHẬN DIỆN THƯƠNG HIỆU

| Hạng mục | Chi tiết cấu hình trên hệ thống |
|---|---|
| **Tên tiếng Việt** | **CÔNG TY TNHH AN TOÀN VÀ CÔNG NGHỆ STC** (Hiển thị 1 hàng duy nhất trên footer) |
| **Tên tiếng Anh** | **STC SAFETY AND TECHNOLOGY CO., LTD** |
| **Tên viết tắt / Brand** | **STC** |
| **Mã số thuế (MST)** | `0109400831` (Do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 02/11/2020) |
| **Người đại diện pháp luật** | **MAI THANH SƠN** (Định dạng chữ in hoa CAPSLOCK) |
| **Địa chỉ trụ sở** | Tầng 4, Tòa nhà Times Tower, số 35 Lê Văn Lương, Phường Nhân Chính, Quận Thanh Xuân, TP. Hà Nội |
| **Hotline kinh doanh & kỹ thuật** | `0886 628 362` |
| **Email tiếp nhận thông tin** | `info@stcsafety.vn` (Tích hợp nhận form tự động) |
| **Tên miền website** | `stcsafety.vn` |
| **Khẩu hiệu (Slogan)** | *"An toàn là giá trị cốt lõi – Công nghệ là giải pháp"* |
| **Màu sắc chủ đạo (Brand Color)** | Đỏ cứu hỏa `#d71920` (Primary), Đỏ sẫm `#7a0c10` (Dark hover), Xanh Navy công nghiệp `#14213d` (Accent), Nền `#f5f6f8` |

---

## 3. CÔNG NGHỆ, NGÔN NGỮ LẬP TRÌNH & NỀN TẢNG SỬ DỤNG

Website được thiết kế theo kiến trúc **Static Jamstack hiện đại** (Pure Web Standards), loại bỏ hoàn toàn sự phụ thuộc vào các thư viện bên thứ ba cồng kềnh (như jQuery, Bootstrap hay React/Angular), mang lại tốc độ tải trang gần như tức thì (< 0.5s), bảo mật tối đa và không sợ bị hack cơ sở dữ liệu:

### 3.1. Các ngôn ngữ & Công nghệ chính
1. **HTML5 Semantics:**
   - Cấu trúc thẻ chuẩn SEO: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
   - Chuẩn di động: `<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">`.
   - Tối ưu hóa SEO On-page: Đầy đủ thẻ Title, Meta Description, Open Graph chuẩn bị sẵn.
2. **CSS3 Hiện đại (Modern CSS):**
   - **CSS Custom Properties (Variables):** Quản lý tập trung toàn bộ bảng mã màu, kích thước (`--red`, `--navy`, `--text`...).
   - **CSS Grid & Flexbox:** Bố cục linh hoạt đa cột (Desktop $4$ cột hoặc $3$ cột; Tablet $2$ cột; Smartphone $1$ cột).
   - **CSS Transitions & Animations:** Hiệu ứng hover nổi khối 3D (`transform: translateY(-4px)`), làm mờ banner trượt êm ái (`opacity 1s`).
   - **Media Queries & Safe Area Inset:** Tối ưu hóa chuẩn cho màn hình notch/tai thỏ trên iOS iPhone (`env(safe-area-inset-bottom)`).
3. **JavaScript thuần (Vanilla JavaScript ES6+):**
   - Không dùng thư viện ngoài, tải siêu nhẹ (< 15KB).
   - Module hóa logic: Quản lý dữ liệu tập trung qua JSON Object (`SITE`, `CATEGORIES`, `SERVICES`, `PROJECTS`, `NEWS`).
   - **DOM Renderer:** Tự động sinh giao diện menu đa cấp (Mega-menu), thẻ card sản phẩm, tin tức, footer.
   - **Slider Engine:** Bộ chuyển đổi banner tự động sau mỗi 2 giây kết hợp nút chấm tròn (Hero Dots) điều khiển chủ động và tự động reset chu kỳ khi người dùng tương tác.
   - **Live Search & Filter:** Lọc danh mục sản phẩm theo thời gian thực (Real-time keyword filter).
4. **i18n Engine (Đa ngôn ngữ Song ngữ Anh – Việt):**
   - Thuật toán `TreeWalker` quét cây DOM trực tiếp, dịch không giật màn hình (Zero Reload).
   - Dịch toàn bộ nội dung tĩnh, động, thẻ meta, thuộc tính form `placeholder`, `aria-label`, `title`.
   - Ghi nhớ trạng thái ngôn ngữ qua trình duyệt (`localStorage`).
5. **Serverless Form Handling:**
   - Tích hợp dịch vụ AJAX Endpoint `https://formsubmit.co/ajax/info@stcsafety.vn`.
   - Khách điền form -> Bấm gửi -> Hệ thống mã hóa gửi thẳng vào email `info@stcsafety.vn` mà không cần cài đặt PHP hay MySQL.
   - Tích hợp bẫy chống Spam Bot (Honeypot Field).
6. **PWA Standards (Progressive Web App):**
   - Tệp khai báo `site.webmanifest` chuẩn cho phép cài đặt website thành biểu tượng ứng dụng trên màn hình chính của iPhone và điện thoại Android.

---

## 4. QUY CHUẨN FONT CHỮ (TYPOGRAPHY) & HƯỚNG DẪN ĐỔI FONT

### 4.1. Font chữ hiện tại của Website
Trong tệp `assets/style.css`, dòng số 3 quy định bộ font:
```css
body {
  font-family: Roboto, "Segoe UI", Arial, sans-serif;
  color: var(--text);
  background: #fff;
  line-height: 1.6;
}
```
- **Roboto:** Font chữ hình học hiện đại, hiển thị dấu tiếng Việt rất đẹp, sắc nét, chuẩn Google Design.
- **Segoe UI:** Font hệ thống mặc định của Windows 10/11, đảm bảo tốc độ mở trang tức thì không phải chờ tải font ngoài.
- **Arial, sans-serif:** Font chữ an toàn (Fallback fonts) luôn có mặt trên 100% thiết bị toàn cầu.

### 4.2. Hướng dẫn chi tiết cách đổi sang Font chữ khác

Nếu anh muốn đổi toàn bộ giao diện website sang một font chữ khác (ví dụ: **Open Sans**, **Montserrat**, **Inter**, hoặc **Be Vietnam Pro**), anh thực hiện theo 2 bước cực kỳ đơn giản sau:

#### Bước 1: Nhúng Font mới từ Google Fonts
Mở các tệp `.html` (hoặc chèn trực tiếp vào đầu tệp `assets/style.css`).  
*Cách nhanh nhất là thêm `@import` vào dòng đầu tiên của tệp `assets/style.css`:*

- **Nếu muốn đổi sang font Inter (rất sang trọng, công nghệ):**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  ```
- **Nếu muốn đổi sang font Montserrat (mạnh mẽ, phong cách kỹ thuật):**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
  ```
- **Nếu muốn đổi sang font Be Vietnam Pro (chuẩn thiết kế tiếng Việt xuất sắc):**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap');
  ```

#### Bước 2: Cập nhật dòng khai báo `font-family` trong `assets/style.css`
Tìm dòng số 3 trong `assets/style.css` và thay thế tên font:
```css
body {
  /* Ví dụ đổi sang Inter: */
  font-family: 'Inter', Roboto, "Segoe UI", sans-serif;
  
  /* Hoặc nếu đổi sang Montserrat: */
  /* font-family: 'Montserrat', sans-serif; */
  
  /* Hoặc nếu đổi sang Be Vietnam Pro: */
  /* font-family: 'Be Vietnam Pro', sans-serif; */
  
  color: var(--text);
  background: #fff;
  line-height: 1.6;
}
```
Lưu tệp lại (`Ctrl + S`), toàn bộ chữ trên mọi trang web sẽ tự động chuyển sang font mới ngay lập tức.

---

## 5. TỔNG HỢP TOÀN BỘ CẤU TRÚC DANH MỤC CỦA WEBSITE

Hệ thống danh mục của website STC được chuẩn hóa theo tỷ lệ vàng đối xứng, bao gồm:

### 5.1. Hệ thống Trang (Site Pages - 8 Trang nghiệp vụ + 6 Trang chính sách)
1. **Trang chủ (`index.html`):** 4 Banner Slider, 8 Danh mục sản phẩm chính, Khối đếm số liệu thống kê, 6 Dịch vụ, 3 Dự án nổi bật, 3 Tin tức mới, 14 Logo đối tác & thương hiệu.
2. **Sản phẩm (`san-pham.html`):** Toàn bộ 8 phân nhóm sản phẩm chuẩn hóa (mỗi nhóm 6 block) kèm ô tìm kiếm từ khóa thời gian thực.
3. **Dịch vụ (`dich-vu.html`):** 6 Dịch vụ kỹ thuật cốt lõi + Sơ đồ quy trình làm việc 4 bước.
4. **Dự án (`du-an.html`):** 9 Dự án công trình tiêu biểu hiển thị dạng lưới $3 \times 3$.
5. **Giới thiệu (`gioi-thieu.html`):** Giới thiệu công ty, tầm nhìn, sứ mệnh, giá trị cốt lõi, bảng tra cứu pháp lý.
6. **Tin tức (`tin-tuc.html`):** Danh mục 6 bài viết kỹ thuật, tiêu chuẩn TCVN/QCVN, nghị định pháp luật có thumbnail chuyên đề sắc nét.
7. **Chi tiết bài viết (`tin-tuc-chi-tiet.html`):** Trang đọc bài viết hoàn chỉnh với nội dung chuyên sâu, tiêu chuẩn trích dẫn, ảnh minh họa HD, bảng so sánh và gợi ý bài viết liên quan.
8. **Liên hệ (`lien-he.html`):** Bản đồ nhúng Google Maps, thông tin liên lạc, biểu mẫu gửi tư vấn trực tiếp.
9. **6 Trang chính sách pháp lý:**
   - `chinh-sach-bao-mat.html`: Bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP.
   - `dieu-khoan-dich-vu.html`: Quy chế hoạt động & điều khoản sử dụng.
   - `chinh-sach-thanh-toan.html`: Quy định thanh toán theo hợp đồng kinh tế.
   - `chinh-sach-giao-nhan.html`: Quy chuẩn vận chuyển, giao nhận & đồng kiểm hàng hóa.
   - `chinh-sach-doi-tra.html`: Chính sách đổi trả & xử lý sự cố thiết bị.
   - `chinh-sach-bao-hanh.html`: Chính sách bảo hành chính hãng từ 12 đến 36 tháng.

---

### 5.2. Tổng hợp 8 Module Danh mục Sản phẩm (Mỗi module 6 Block)

```text
1. THIẾT BỊ CHỮA CHÁY (Icon: 🧯)
   ├── [1] Bình chữa cháy bột ABC, CO₂
   ├── [2] Lăng phun chữa cháy
   ├── [3] Lăng giá chữa cháy
   ├── [4] Vòi chữa cháy
   ├── [5] Bọt chữa cháy
   └── [6] Bơm chữa cháy xách tay

2. HỆ THỐNG BÁO CHÁY (Icon: 🚨)
   ├── [1] Tủ báo cháy trung tâm
   ├── [2] Đầu báo khói, báo nhiệt
   ├── [3] Đầu báo lửa (UV/IR)
   ├── [4] Chuông, đèn, nút nhấn khẩn
   ├── [5] Báo cháy không dây
   └── [6] Module giám sát, điều khiển

3. HỆ THỐNG CHỮA CHÁY BẰNG KHÍ (Icon: 💨)
   ├── [1] Hệ thống FM-200 (HFC-227ea)
   ├── [2] Hệ thống Novec 1230
   ├── [3] Hệ thống CO₂
   ├── [4] Hệ thống khí N₂/IG-541
   ├── [5] Tủ chữa cháy tự động
   └── [6] Bình chứa & van xả

4. THIẾT BỊ ĐO LƯỜNG & PHÁT HIỆN KHÍ (Icon: 📟)
   ├── [1] Máy đo khí đa chỉ tiêu
   ├── [2] Đầu dò khí cháy / khí độc
   ├── [3] Máy đo nồng độ O₂, CO, H₂S
   ├── [4] Camera nhiệt
   ├── [5] Cảm biến & thiết bị tự động hóa
   └── [6] Hiệu chuẩn thiết bị đo

5. THIẾT BỊ BẢO HỘ AN TOÀN (Icon: 🦺)
   ├── [1] Quần áo chữa cháy
   ├── [2] Quần áo chịu nhiệt độ cao
   ├── [3] Quần áo chống hóa chất
   ├── [4] Mặt nạ kèm bình khí thở
   ├── [5] Mặt nạ phòng độc
   └── [6] Găng tay, ủng, mũ bảo hộ

6. THIẾT BỊ CỨU NẠN – CỨU HỘ (Icon: ⛑️)
   ├── [1] Thiết bị phá dỡ đa năng
   ├── [2] Thiết bị dò tìm nạn nhân
   ├── [3] Thiết bị cứu nạn trên cao
   ├── [4] Thiết bị cứu hộ không gian hạn chế
   ├── [5] Đệm khí, nâng hạ
   └── [6] Thiết bị lặn, cứu nạn dưới nước

7. THIẾT BỊ CÔNG NGHIỆP & DẦU KHÍ (Icon: 🏭)
   ├── [1] Thiết bị xử lý dầu tràn
   ├── [2] Vật tư thấm hút hóa chất
   ├── [3] Thiết bị an toàn khu vực nguy hiểm
   ├── [4] Van, đường ống kỹ thuật
   ├── [5] Vật tư công nghiệp
   └── [6] Thiết bị & phụ kiện phòng nổ (ATEX / IECEx)

8. HỆ THỐNG CCTV & PHÁT HIỆN XÂM NHẬP (Icon: 📹)
   ├── [1] Camera IP / Dome / Bullet / PTZ 360 độ
   ├── [2] Camera ảnh nhiệt phát hiện điểm cháy
   ├── [3] Hệ thống phát hiện xâm nhập & báo động đột nhập
   ├── [4] Hệ thống kiểm soát ra vào (Access Control)
   ├── [5] Đầu ghi hình mạng chuyên dụng (NVR / DVR)
   └── [6] Hàng rào hồng ngoại & cảm biến chống leo rào
```

---

### 5.3. Tổng hợp 6 Dịch vụ Kỹ thuật Cốt lõi
1. **Tư vấn thiết kế PCCC:** Khảo sát, lập phương án kỹ thuật và thiết kế hệ thống theo QCVN/TCVN.
2. **Thi công, lắp đặt hệ thống:** Thi công báo cháy, chữa cháy tự động, khí, sprinkler, vách tường đúng tiến độ.
3. **Tư vấn, lắp đặt CCTV & Hệ thống phát hiện xâm nhập:** Khảo sát thiết kế camera an ninh, camera nhiệt cảnh báo cháy sớm, cảm biến bảo vệ chu vi tòa nhà, nhà xưởng, kho bãi.
4. **Bảo trì, bảo dưỡng định kỳ:** Kiểm tra, bảo dưỡng toàn diện hệ thống PCCC & an ninh, nạp sạc bình chữa cháy.
5. **Hiệu chuẩn, kiểm định thiết bị:** Hiệu chuẩn độ nhạy máy đo khí độc, khí cháy nổ, thiết bị đo lường tự động hóa.
6. **Cung cấp thiết bị chính hãng:** Phân phối thiết bị đầy đủ CO/CQ từ các hãng hàng đầu thế giới.

---

### 5.4. Tổng hợp 9 Dự án Công trình Tiêu biểu (Lưới $3 \times 3$)
1. *Hệ thống chữa cháy khí FM-200 phòng Data Center* – Hà Nội (Chữa cháy khí)
2. *Hệ thống báo cháy địa chỉ cho tòa nhà văn phòng* – Hà Nội (Báo cháy)
3. *Lắp đặt hệ thống camera nhiệt phát hiện cháy sớm nhà xưởng* – Bắc Ninh (CCTV & Giám sát)
4. *Cung cấp máy đo khí độc cho nhà máy hóa chất* – Hải Phòng (Đo lường)
5. *Trang bị thiết bị cứu nạn cho đội PCCC cơ sở* – Bắc Ninh (Cứu nạn cứu hộ)
6. *Bảo trì hệ thống PCCC khu công nghiệp* – Hưng Yên (Bảo trì)
7. *Hệ thống chữa cháy tự động cho trạm biến áp* – Hà Nam (Chữa cháy tự động)
8. *Hệ thống kiểm soát ra vào & an ninh tòa nhà* – Hà Nội (Kiểm soát an ninh)
9. *Hệ thống phát hiện xâm nhập & bảo vệ chu vi kho logistics* – Hải Phòng (Phát hiện xâm nhập)

---

### 5.5. Tổng hợp 14 Đối tác & Thương hiệu Quốc tế
1. **Dräger** (Đức – Thiết bị đo khí & an toàn thở)
2. **Honeywell** (Mỹ – Báo cháy, cảm biến & an ninh)
3. **Hikvision** (Camera giám sát & phân tích thông minh)
4. **MSA Safety** (Mỹ – Bảo hộ lao động & cứu hộ)
5. **Nohmi Bosai** (Nhật Bản – Hệ thống báo cháy cao cấp)
6. **3M** (Mỹ – Thiết bị bảo hộ & an toàn lao động)
7. **Teledyne FLIR** (Mỹ – Camera ảnh nhiệt chuyên dụng)
8. **Kidde** (Mỹ – Hệ thống chữa cháy khí FM-200, Novec 1230)
9. **Yokogawa** (Nhật Bản – Thiết bị đo lường & tự động hóa)
10. **Rosemount / Emerson** (Mỹ – Thiết bị đo mức, áp suất, lưu lượng)
11. **Siemens** (Đức – Tự động hóa & hệ thống báo cháy)
12. **ABB** (Thụy Sĩ – Thiết bị đo lường & điện công nghiệp)
13. **Simplex / Tyco / Johnson Controls** (Mỹ – Hệ thống an toàn tích hợp)
14. **Hochiki** (Nhật Bản – Thiết bị báo cháy & cảnh báo khói)

---

## 6. HƯỚNG DẪN BẢO TRÌ, CHỈNH SỬA DỮ LIỆU & QUY CHUẨN KÍCH THƯỚC ẢNH

### 6.1. Quy chuẩn kích thước hình ảnh tối ưu
- **Banner Slider trang chủ:** `1920 x 720 px`, định dạng `.jpg` hoặc `.webp`, dung lượng `< 200 KB`, lưu tại `assets/img/banner-*.jpg`.
- **Ảnh sản phẩm:** `800 x 600 px` hoặc `800 x 800 px`, dung lượng `< 120 KB`, lưu tại `assets/img/products/`.
- **Ảnh dự án:** `800 x 600 px`, dung lượng `< 150 KB`, lưu tại `assets/img/projects/`.
- **Logo đối tác:** `400 x 160 px` (.png nền trong suốt), dung lượng `< 50 KB`, lưu tại `assets/img/brands/`.
- **Icon / Favicon:** Vector `.svg` hoặc `.ico`, `.png` lưu tại `assets/icons/`.

### 6.2. Nơi chỉnh sửa nội dung
- Sửa thông tin chung công ty, hotline, email, đại diện: Sửa biến `SITE` trong `assets/site.js`.
- Sửa danh mục sản phẩm, dịch vụ, dự án, tin tức: Sửa các biến mảng `CATEGORIES`, `SERVICES`, `PROJECTS`, `NEWS` trong `assets/site.js`.
- Sửa bản dịch tiếng Anh: Thêm/sửa cặp từ vựng trong mảng `PAIRS` tại `assets/i18n.js`.
- Sửa các trang tĩnh (Giới thiệu, Chính sách): Sửa trực tiếp mã HTML tương ứng.
