/* ============ DỮ LIỆU BÀI VIẾT TIN TỨC CHUYÊN SÂU (VI & EN) ============ */
const NEWS = [
  {
    id: "quy-dinh-dau-bao-khoi-tcvn-7568-14-2025",
    title: "Những quy định cần lưu ý khi lắp đặt đầu báo khói trên trần phẳng theo TCVN 7568-14:2025",
    title_en: "Key Requirements When Installing Smoke Detectors on Flat Ceilings Under TCVN 7568-14:2025",
    date: "15/10/2026",
    tag: "Quy chuẩn",
    tag_en: "Standards",
    img: "assets/img/news/news-1.jpg",
    sum: "Tiêu chuẩn quốc gia TCVN 7568-14:2025 (thay thế TCVN 5738:2021) quy định chi tiết bán kính bảo vệ 7,2m, khoảng cách tối đa 10,2m giữa hai đầu báo và các khoảng cách an toàn với miệng gió, trần nhà.",
    sum_en: "National standard TCVN 7568-14:2025 (replacing TCVN 5738:2021) details a 7.2m protection radius, 10.2m maximum spacing between detectors, and clearance from air vents and ceilings.",
    author: "Ban Kỹ Thuật STC",
    author_en: "STC Technical Board",
    reading_time: "5 phút đọc",
    reading_time_en: "5 min read",
    content: `
<p class="lead">Tiêu chuẩn quốc gia <b>TCVN 7568-14:2025</b> về <i>"Hệ thống báo cháy – Phần 14: Thiết kế, lắp đặt các hệ thống báo cháy cho nhà và công trình"</i> chính thức có hiệu lực và thay thế hoàn toàn tiêu chuẩn TCVN 5738:2021 trước đây. Việc nắm vững các thông số kỹ thuật mới khi bố trí đầu báo khói kiểu điểm trên trần phẳng là điều kiện tiên quyết để hồ sơ nghiệm thu PCCC đạt yêu cầu của cơ quan quản lý.</p>

<h2>1. Phạm vi bảo vệ và khoảng cách bố trí trên trần phẳng</h2>
<p>Theo mục 5.9 của TCVN 7568-14:2025, đối với các gian phòng hoặc khu vực có bề mặt trần phẳng (hoặc trần có dầm nổi nông với độ sâu dưới 0,3 mét), việc xác định vị trí và khoảng cách của đầu báo khói quang điện kiểu điểm phải tuân thủ nghiêm ngặt các quy định sau:</p>
<ul>
  <li><b>Bán kính bảo vệ (D):</b> Khoảng cách từ bất kỳ điểm nào trên mặt bằng sàn tới đầu báo khói gần nhất không được vượt quá <b>7,2 mét</b>.</li>
  <li><b>Khoảng cách giữa hai đầu báo khói liên tiếp (S):</b> Khoảng cách tâm giữa hai đầu báo bố trí trên cùng một trần phẳng không được vượt quá <b>10,2 mét</b>.</li>
  <li><b>Khoảng cách từ đầu báo tới vách tường hoặc vật cản gần nhất:</b> Không vượt quá <b>5,1 mét</b> và tuyệt đối không được nhỏ hơn <b>0,5 mét</b> để tránh vùng đọng khí không lưu thông.</li>
</ul>

<h2>2. Quy định khoảng cách theo phương thẳng đứng (Cao độ so với trần)</h2>
<p>Một trong những lỗi thường gặp nhất trong quá trình thi công hoàn thiện trần thạch cao hoặc trần nổi là lắp đặt sai cao độ của bộ phận cảm biến khói:</p>
<ul>
  <li><b>Đối với chiều cao trần phòng dưới 4 mét:</b> Khoảng cách thẳng đứng từ buồng cảm biến của đầu báo đến mặt phẳng trần nhà phải nằm trong giới hạn từ <b>0,025 mét (2,5 cm) đến 0,3 mét (30 cm)</b>.</li>
  <li><b>Đối với chiều cao trần từ 4 mét đến 15 mét:</b> Khoảng cách từ đầu báo đến mặt trần không được vượt quá <b>0,6 mét</b>.</li>
  <li><b>Trần cao trên 15 mét:</b> Không khuyến nghị sử dụng đầu báo khói kiểu điểm đơn thuần mà phải chuyển sang sử dụng giải pháp đầu báo khói dạng tia chiếu (Beam detector) hoặc hệ thống phát hiện khói độ nhạy cực cao (Hệ thống hút khí mẫu ASD).</li>
</ul>

<h2>3. Vị trí đối với miệng gió máy lạnh và các luồng khí cưỡng bức</h2>
<p>Dòng khí đối lưu nhân tạo có thể thổi bạt khói hoặc làm loãng khói trước khi khói kịp tiếp cận buồng đo quang học của đầu báo. Vì vậy, TCVN 7568-14:2025 bổ sung yêu cầu bắt buộc:</p>
<ul>
  <li>Khoảng cách từ mép ngoài của đầu báo khói đến miệng thổi không khí của hệ thống điều hòa thông gió (HVAC) phải <b>lớn hơn 0,4 mét</b>.</li>
  <li>Tuyệt đối không lắp đặt đầu báo khói nằm trong luồng thổi trực tiếp của miệng gió cấp hoặc quạt đảo trần.</li>
  <li>Đảm bảo đầu báo khói luôn nằm ngoài chu vi quay của cánh quạt trần nhằm chống nhiễu quang và tác động cơ học.</li>
</ul>

<h2>4. Khuyến nghị từ kỹ sư STC</h2>
<p>Khi thiết kế bản vẽ thi công cơ điện (M&E) kết hợp PCCC, các đơn vị tư vấn và chủ đầu tư cần phối hợp mặt bằng bố trí thiết bị (BIM / CAD Overlay) giữa hệ đèn, ống gió lạnh và đầu báo khói ngay từ giai đoạn Shopdrawing để tránh tình trạng phải di dời thiết bị sau khi đã khoét trần, dẫn đến phát sinh chi phí và chậm tiến độ nghiệm thu công trình.</p>
`,
    content_en: `
<p class="lead">National standard <b>TCVN 7568-14:2025</b> on <i>"Fire detection and fire alarm systems – Part 14: Design, installation of fire detection and fire alarm systems in and around buildings"</i> has officially taken effect, completely replacing the previous TCVN 5738:2021. Mastering these updated technical parameters for point-type smoke detectors on flat ceilings is essential for passing fire safety acceptance inspections.</p>

<h2>1. Coverage Area and Layout Distances on Flat Ceilings</h2>
<p>According to Section 5.9 of TCVN 7568-14:2025, for rooms or compartments with flat ceilings (or ceilings with shallow beams under 0.3m depth), the positioning and spacing of point-type optical smoke detectors must strictly comply with:</p>
<ul>
  <li><b>Protection Radius (D):</b> The horizontal distance from any point on the floor to the nearest smoke detector shall not exceed <b>7.2 meters</b>.</li>
  <li><b>Spacing Between Detectors (S):</b> The center-to-center distance between two adjacent smoke detectors on a flat ceiling shall not exceed <b>10.2 meters</b>.</li>
  <li><b>Distance to Nearest Wall or Obstruction:</b> Shall not exceed <b>5.1 meters</b> and must never be less than <b>0.5 meters</b> to avoid dead air zones.</li>
</ul>

<h2>2. Vertical Height Clearances (Distance from Ceiling Surface)</h2>
<p>A common defect observed during suspended ceiling installations is incorrect detector sensing chamber elevation:</p>
<ul>
  <li><b>For room ceiling heights under 4 meters:</b> The vertical distance from the detector sensing chamber to the ceiling plane must be between <b>0.025 meters (2.5 cm) and 0.3 meters (30 cm)</b>.</li>
  <li><b>For ceiling heights between 4 meters and 15 meters:</b> The clearance from detector to ceiling must not exceed <b>0.6 meters</b>.</li>
  <li><b>Ceilings over 15 meters:</b> Point-type smoke detectors are not recommended; optical beam detectors or Aspirating Smoke Detection (ASD) systems should be engineered instead.</li>
</ul>

<h2>3. Clearance from HVAC Air Inlets and Forced Airflows</h2>
<p>Forced mechanical airflow can dilute or deflect smoke plumes before reaching the optical sensing chamber. TCVN 7568-14:2025 enforces:</p>
<ul>
  <li>Clearance from the outer edge of any smoke detector to HVAC air supply diffusers must be <b>greater than 0.4 meters</b>.</li>
  <li>Detectors must never be mounted directly in the forced discharge stream of supply grilles or directional ceiling fans.</li>
  <li>Ensure detectors are positioned safely outside the rotating circumference of ceiling fans to prevent optical interference and turbulence.</li>
</ul>

<h2>4. Professional Recommendations from STC Engineers</h2>
<p>During M&E and fire safety shop-drawing preparation, contractors and building owners should run BIM/CAD clash detection between lighting fixtures, air ducts, and smoke detectors before core drilling ceiling tiles to avoid costly relocations and project acceptance delays.</p>
`
  },
  {
    id: "nghi-dinh-moi-muc-phat-vi-pham-pccc",
    title: "Nghị định mới: nâng mức phạt vi phạm quy định về phòng cháy chữa cháy",
    title_en: "New Decree: Substantially Increased Penalties for Fire Protection Violations",
    date: "02/10/2026",
    tag: "Pháp luật",
    tag_en: "Legal",
    img: "assets/img/news/news-2.jpg",
    sum: "Cập nhật các chế tài xử phạt hành chính mới nhất theo Nghị định số 106/2025/NĐ-CP và Nghị định số 69/2026/NĐ-CP: nâng khung xử phạt hành vi cản trở lối thoát nạn, không nghiệm thu PCCC và thẩm quyền xử phạt tại cơ sở.",
    sum_en: "Latest administrative sanctions under Decree 106/2025/ND-CP and Decree 69/2026/ND-CP: higher fines for blocked emergency exits, unapproved building operations, and enhanced local enforcement powers.",
    author: "Phòng Pháp Chế & An Toàn STC",
    author_en: "STC Legal & Safety Dept.",
    reading_time: "6 phút đọc",
    reading_time_en: "6 min read",
    content: `
<p class="lead">Trước diễn biến phức tạp của các sự cố cháy nổ tại các khu đô thị và nhà xưởng công nghiệp, Chính phủ đã ban hành hệ thống chế tài xử phạt vi phạm hành chính mới trong lĩnh vực PCCC và cứu nạn cứu hộ (Nghị định số 106/2025/NĐ-CP và các sửa đổi bổ sung theo Nghị định 69/2026/NĐ-CP). Các quy định mới không chỉ nâng mạnh mức tiền phạt mà còn mở rộng trách nhiệm đến người thuê cơ sở và áp dụng xử phạt trên môi trường số.</p>

<h2>1. Làm rõ trách nhiệm của bên đi thuê và bên cho thuê cơ sở</h2>
<p>Khắc phục tình trạng đùn đẩy trách nhiệm PCCC trong các hợp đồng thuê nhà xưởng, văn phòng hoặc kho bãi, quy định mới khẳng định rõ: Các tổ chức, cá nhân dù thuê, mượn hoặc sử dụng cơ sở dưới bất kỳ hình thức nào, nếu để xảy ra vi phạm quy chuẩn an toàn phòng cháy trong phạm vi mình quản lý, hoạt động thì đều bị xử lý trực tiếp.</p>

<h2>2. Các nhóm hành vi vi phạm phổ biến và mức phạt tiền cập nhật</h2>
<p>Khung tiền phạt được điều chỉnh tăng mạnh, đặc biệt đối với tổ chức (mức phạt tiền đối với tổ chức gấp 2 lần cá nhân):</p>
<ul>
  <li><b>Cản trở lối thoát nạn, cửa thoát hiểm:</b> Phạt tiền từ <b>2.000.000 đồng đến 5.000.000 đồng</b> đối với hành vi để hàng hóa, phương tiện che chắn lối thoát nạn; các hành vi khóa cửa thoát hiểm trong giờ làm việc có thể bị phạt tới <b>15.000.000 đồng</b>.</li>
  <li><b>Không huấn luyện nghiệp vụ PCCC:</b> Phạt từ <b>6.000.000 đồng đến 8.000.000 đồng</b> đối với cơ sở không tổ chức huấn luyện, bồi dưỡng nghiệp vụ cho đội PCCC cơ sở hoặc người làm việc trong môi trường nguy hiểm cháy nổ.</li>
  <li><b>Không trang bị, trang bị thiếu phương tiện PCCC:</b> Khung phạt lên đến <b>40.000.000 đồng</b> đối với hành vi không lắp đặt hệ thống báo cháy, chữa cháy bắt buộc theo quy mô công trình.</li>
  <li><b>Đưa công trình vào hoạt động khi chưa nghiệm thu PCCC:</b> Đây là lỗi vi phạm nghiêm trọng nhất với mức phạt kịch khung có thể lên đến hàng trăm triệu đồng, đồng thời áp dụng biện pháp <b>đình chỉ hoạt động tuyệt đối</b> cho đến khi khắc phục xong và có biên bản nghiệm thu đạt chuẩn.</li>
</ul>

<h2>3. Biện pháp khắc phục hậu quả và xử phạt điện tử</h2>
<p>Bên cạnh hình thức phạt tiền, cơ quan Cảnh sát PCCC và chính quyền các cấp kiên quyết áp dụng các biện pháp bổ sung:</p>
<ul>
  <li>Buộc di dời toàn bộ vật tư, hàng hóa vi phạm khoảng cách an toàn cháy nổ.</li>
  <li>Buộc cải tạo, khôi phục lại lối thoát nạn ban đầu theo hồ sơ thiết kế đã được thẩm duyệt.</li>
  <li>Tích hợp xử lý vi phạm trên Cổng dịch vụ công trực tuyến và ứng dụng VNeID, giúp công khai biên bản và theo dõi tiến độ khắc phục sai phạm của doanh nghiệp.</li>
</ul>

<h2>4. Khuyến nghị tuân thủ an toàn từ STC</h2>
<p>Doanh nghiệp cần chủ động rà soát định kỳ hệ thống thiết bị PCCC cơ sở, duy trì việc bảo trì bảo dưỡng thiết bị đo lường và báo động, đào tạo nhân viên đội PCCC tại chỗ. Việc tuân thủ quy chuẩn không chỉ giúp tránh các rủi ro chế tài pháp lý mà quan trọng nhất là bảo vệ tính mạng con người và tài sản doanh nghiệp.</p>
`,
    content_en: `
<p class="lead">In response to complex fire incidents in urban centers and industrial zones, the Government has enacted a stringent administrative penalty framework for fire prevention, fighting, and rescue (Decree No. 106/2025/ND-CP and amending Decree 69/2026/ND-CP). These decrees significantly escalate monetary fines, expand direct liabilities to facility tenants, and mandate digital enforcement procedures.</p>

<h2>1. Clarified Legal Liabilities for Lessors and Lessees</h2>
<p>Eliminating liability shifting in leased factories, offices, and logistics warehouses, the new decree explicitly establishes: Any organization or individual leasing, borrowing, or occupying premises shall be held directly liable for fire safety non-compliances occurring within their operational scope.</p>

<h2>2. Common Violations and Updated Fine Schedules</h2>
<p>Monetary fines have been sharply increased, especially for corporate entities (corporate fines double individual rates):</p>
<ul>
  <li><b>Obstruction of Exit Corridors and Emergency Doors:</b> Fines from <b>VND 2,000,000 to VND 5,000,000</b> for placing cargo, equipment, or vehicles in escape paths; locking emergency exits during operating hours incurs fines up to <b>VND 15,000,000</b>.</li>
  <li><b>Failure to Provide Fire Safety Training:</b> Fines from <b>VND 6,000,000 to VND 8,000,000</b> for failing to train in-house firefighting teams or personnel working in hazardous fire-risk environments.</li>
  <li><b>Missing or Deficient Fire Protection Equipment:</b> Fines up to <b>VND 40,000,000</b> for failing to equip mandatory fire detection and automatic suppression systems.</li>
  <li><b>Commissioning Buildings Prior to Fire Acceptance:</b> This critical non-compliance incurs maximum administrative penalties of hundreds of millions of VND, paired with an <b>immediate mandatory suspension of operations</b> until full compliance and certification are obtained.</li>
</ul>

<h2>3. Mandatory Remedial Measures and Digital Violations Processing</h2>
<p>Beyond fines, Fire Authorities rigorously enforce remedial actions:</p>
<ul>
  <li>Mandatory immediate removal of cargo violating fire safety clearance distances.</li>
  <li>Restoration of original escape routes per approved engineering plans.</li>
  <li>Integration of violation notices into the National Public Service Portal and digital ID platforms for tracking corporate compliance.</li>
</ul>

<h2>4. Compliance Recommendations from STC</h2>
<p>Enterprises should proactively conduct routine fire protection audits, maintain periodic sensor calibrations, and train internal safety teams. Compliance not only avoids severe legal penalties but fundamentally protects human life and business continuity.</p>
`
  },
  {
    id: "huong-dan-kiem-tra-bao-quan-mat-na-phong-doc-scba",
    title: "Hướng dẫn kiểm tra, bảo quản và sử dụng mặt nạ phòng độc cách ly",
    title_en: "Comprehensive Guide to Inspecting, Storing, and Operating Self-Contained Breathing Apparatus (SCBA)",
    date: "21/09/2026",
    tag: "Kỹ thuật",
    tag_en: "Technical",
    img: "assets/img/news/news-3.jpg",
    sum: "Quy trình kiểm tra độ kín áp suất, bảo dưỡng van thở, bình khí thở độc lập SCBA (Self-Contained Breathing Apparatus) và bảo quản phin lọc chuyên dụng theo tiêu chuẩn EN 137 / TCVN an toàn lao động.",
    sum_en: "Standard operating procedure for pressure leakage checks, demand valve maintenance, SCBA breathing cylinders, and filter storage compliant with EN 137 and occupational safety standards.",
    author: "Kỹ Sư An Toàn Thiết Bị Khí STC",
    author_en: "STC Gas Equipment Safety Engineers",
    reading_time: "5 phút đọc",
    reading_time_en: "5 min read",
    content: `
<p class="lead">Trong các sự cố cháy nổ hoặc rò rỉ hóa chất độc hại, thiết bị thở độc lập có bình khí nén (SCBA – Self-Contained Breathing Apparatus) và mặt nạ phòng độc cách ly toàn mặt (Full-face Mask) là trang bị bảo hộ sinh tồn tối quan trọng của lực lượng cứu hộ và nhân sự vận hành nhà máy. Dưới đây là quy chuẩn vận hành và kiểm tra an toàn thiết bị theo chuẩn kỹ thuật quốc tế EN 137 và tiêu chuẩn an toàn lao động Việt Nam.</p>

<h2>1. Quy trình kiểm tra thiết bị trước khi sử dụng (Checklist 4 bước)</h2>
<p>Trước khi đưa vào môi trường nguy hiểm, chiến sĩ hoặc kỹ thuật viên phải thực hiện kiểm tra nhanh trong vòng 60 giây:</p>
<ol>
  <li><b>Kiểm tra cơ học:</b> Quan sát toàn bộ dây đai, mặt nạ silicon, kính chắn polycarbonate xem có vết nứt, biến dạng hoặc chai cứng hay không.</li>
  <li><b>Kiểm tra áp suất bình khí nén:</b> Mở van bình khí chính, đọc chỉ số trên đồng hồ áp kế (Manometer). Áp suất khả dụng phải đạt từ <b>270 bar đến 300 bar</b> (đối với bình 300 bar) hoặc tối thiểu 85% dung lượng định mức.</li>
  <li><b>Kiểm tra độ kín áp lực cao:</b> Đóng van bình khí lại và theo dõi đồng hồ trong 60 giây. Độ giảm áp không được vượt quá <b>10 bar/phút</b>.</li>
  <li><b>Kiểm tra còi báo động áp suất thấp (Whistle Test):</b> Xả khí từ từ qua van cấp khí. Còi cảnh báo cơ học bắt buộc phải kích hoạt khi áp suất trong bình giảm xuống ngưỡng <b>50 - 55 bar</b> (đảm bảo còn đủ 10 phút để người thao tác rút lui an toàn).</li>
</ol>

<h2>2. Kiểm tra độ kín mặt nạ (Face Seal Test)</h2>
<p>Đeo mặt nạ lên mặt, kéo đều các quai siết theo thứ tự từ cổ lên gáy và đỉnh đầu. Dùng lòng bàn tay bịt kín cổng kết nối van thở và hít sâu vào: mặt nạ phải ôm chặt vào da mặt và giữ nguyên độ co móp, không khí bên ngoài không được lọt vào trong ít nhất 10 giây.</p>

<h2>3. Vệ sinh và bảo dưỡng sau khi sử dụng</h2>
<ul>
  <li><b>Vệ sinh mặt nạ:</b> Rửa sạch bằng nước ấm (dưới 40°C) kết hợp dung dịch xà phòng trung tính hoặc chất tẩy trùng chuyên dụng được hãng Dräger/MSA/Honeywell chỉ định. Không dùng dung môi gốc dầu hoặc cồn mạnh vì sẽ làm giòn viền silicon và ố mặt kính chống xước.</li>
  <li><b>Làm khô:</b> Để khô tự nhiên ở nơi thoáng gió, râm mát, tránh ánh nắng mặt trời trực tiếp và nguồn nhiệt cao.</li>
  <li><b>Nạp khí thở:</b> Bình khí thở sau khi sử dụng phải được nạp lại ngay bằng máy nén khí thở sạch chuyên dụng đạt chuẩn EN 12021 (không lẫn dầu, CO, CO₂ và hơi ẩm).</li>
</ul>

<h2>4. Bảo quản định kỳ trong kho</h2>
<p>Thiết bị SCBA và phin lọc dự phòng phải được bảo quản trong vali cứng chuyên dụng hoặc tủ cứu hộ khẩn cấp ở điều kiện nhiệt độ phòng từ 15°C - 25°C, độ ẩm dưới 70%. Định kỳ 6 tháng một lần phải đem thiết bị đến trung tâm kỹ thuật STC để kiểm tra van điều áp và kiểm định áp lực thủy tĩnh vỏ bình khí (Hydrostatic test) theo chu kỳ 3 - 5 năm.</p>
`,
    content_en: `
<p class="lead">During fire emergencies or hazardous chemical spills, Self-Contained Breathing Apparatus (SCBA) and full-face respirator masks represent life-critical safety equipment for emergency responders and industrial plant operators. Below is the operational protocol and inspection checklist compliant with EN 137 international standards and Vietnamese occupational health regulations.</p>

<h2>1. Pre-Use Operational Inspection (4-Step Checklist)</h2>
<p>Before deploying into hazardous atmospheres, operators must execute a rapid 60-second inspection:</p>
<ol>
  <li><b>Visual & Mechanical Inspection:</b> Inspect harness webbing, silicone facepiece, and polycarbonate visor for cracks, distortion, or elastomeric hardening.</li>
  <li><b>Cylinder Pressure Verification:</b> Open the cylinder handwheel fully and observe the pressure gauge (Manometer). Available pressure must register between <b>270 bar and 300 bar</b> (for 300 bar systems) or at least 85% of rated capacity.</li>
  <li><b>High-Pressure Leakage Test:</b> Close the cylinder handwheel and observe the gauge for 60 seconds. Pressure drop must not exceed <b>10 bar/minute</b>.</li>
  <li><b>Low-Pressure Warning Whistle Test:</b> Bleed air gradually through the lung demand valve. The pneumatic warning whistle must activate sharply when pressure drops to <b>50 - 55 bar</b> (guaranteeing a 10-minute escape buffer).</li>
</ol>

<h2>2. Face Seal Integrity Test</h2>
<p>Don the facepiece, tightening harness straps evenly from bottom neck straps to crown. Seal the lung-demand valve adapter with the palm of your hand and inhale gently: the facepiece should collapse slightly against your face and maintain seal vacuum for at least 10 seconds without ambient air infiltration.</p>

<h2>3. Post-Use Cleaning and Disinfection</h2>
<ul>
  <li><b>Facepiece Cleaning:</b> Wash with lukewarm water (under 40°C) and neutral detergent or disinfectant approved by Dräger/MSA/Honeywell. Avoid volatile solvents or alcohols that degrade silicone seals and scratch visors.</li>
  <li><b>Drying:</b> Air-dry naturally in shaded, well-ventilated areas away from direct sunlight or radiant heat sources.</li>
  <li><b>Cylinder Refilling:</b> Discharged breathing air cylinders must be refilled using breathing-air compressors compliant with EN 12021 purity standards (free from oil vapors, CO, and moisture).</li>
</ul>

<h2>4. Storage and Periodic Technical Audits</h2>
<p>SCBA units and canister filters should be stored in rigid carry cases or emergency cabinets at 15°C - 25°C and relative humidity below 70%. Bring equipment to STC Technical Service Center every 6 months for pressure regulator recalibration and mandatory 3-to-5-year hydrostatic cylinder pressure re-testing.</p>
`
  },
  {
    id: "khi-nao-nen-chon-he-thong-chua-chay-khi-thay-sprinkler",
    title: "Khi nào nên chọn hệ thống chữa cháy bằng khí thay cho sprinkler?",
    title_en: "When Should Clean Agent Gas Fire Suppression Be Chosen Over Water Sprinklers?",
    date: "08/09/2026",
    tag: "Giải pháp",
    tag_en: "Solutions",
    img: "assets/img/news/news-4.jpg",
    sum: "Phân tích kỹ thuật so sánh giữa hệ thống chữa cháy bằng nước Sprinkler tự động và các hệ thống chữa cháy khí sạch (FM-200, Novec 1230, IG-541, CO₂) đối với phòng Server, trung tâm dữ liệu, tủ điện cao thế và kho lưu trữ di sản.",
    sum_en: "Technical comparison between automatic wet-pipe sprinklers and clean agent gaseous suppression systems (FM-200, Novec 1230, IG-541, CO₂) for data centers, MCC electrical rooms, and archival vaults.",
    author: "Chuyên Gia Giải Pháp Chữa Cháy Khí STC",
    author_en: "STC Gas Suppression Specialists",
    reading_time: "6 phút đọc",
    reading_time_en: "6 min read",
    content: `
<p class="lead">Hệ thống chữa cháy Sprinkler tự động bằng nước là giải pháp phổ biến nhất trong các tòa nhà dân cư và trung tâm thương mại. Tuy nhiên, đối với các khu vực chứa máy chủ dữ liệu (Data Center), phòng điều khiển trung tâm, phòng viễn thông hoặc phòng biến áp, việc kích hoạt nước chữa cháy có thể gây chập điện tức thời và phá hủy toàn bộ tài sản số không thể phục hồi. Đó là lý do hệ thống chữa cháy bằng khí sạch trở thành sự lựa chọn bắt buộc.</p>

<h2>1. Bản chất cơ chế dập tắt đám cháy</h2>
<p>Để hiểu rõ thời điểm áp dụng, kỹ sư STC so sánh 2 cơ chế chữa cháy:</p>
<ul>
  <li><b>Hệ thống Sprinkler:</b> Sử dụng nước để hấp thụ nhiệt lượng từ đám cháy và ngăn cách oxy. Nước có tính dẫn điện cao và để lại cặn ẩm gây rỉ sét, hư hỏng bo mạch bán dẫn và linh kiện điện tử siêu nhạy.</li>
  <li><b>Hệ thống Chữa cháy khí sạch (Clean Agent):</b> Sử dụng khí trơ (IG-541, IG-55, N₂) hoặc hợp chất khí hóa lỏng (FM-200 / HFC-227ea, Novec 1230 / FK-5-1-12). Cơ chế dập tắt dựa trên sự hấp thụ nhiệt ở cấp độ phân tử và gián đoạn phản ứng hóa học chuỗi của ngọn lửa mà không làm suy giảm lượng oxy cần thiết cho con người.</li>
</ul>

<h2>2. Bảng so sánh kỹ thuật giữa Sprinkler và Chữa cháy khí</h2>
<table class="info" style="margin: 16px 0; font-size:14px">
  <tr><td><b>Tiêu chí</b></td><td><b>Hệ thống Sprinkler Nước</b></td><td><b>Hệ thống Khí Sạch (FM-200 / Novec)</b></td></tr>
  <tr><td>Thời gian xả dập tắt</td><td>Vài phút đến hàng chục phút</td><td><b>Dưới 10 giây</b> (dập tắt lửa trong giai đoạn âm ỉ)</td></tr>
  <tr><td>Tác động đến điện tử</td><td>Chập điện, hư hỏng vĩnh viễn</td><td><b>Cách điện 100%</b>, không ảnh hưởng thiết bị điện tử</td></tr>
  <tr><td>Vệ sinh sau chữa cháy</td><td>Mất hàng tuần dọn dẹp cặn nước</td><td><b>Bay hơi hoàn toàn</b>, không để lại bất kỳ cặn bẩn nào</td></tr>
  <tr><td>Thời gian ngưng trệ (Downtime)</td><td>Rất dài, thiệt hại gián tiếp lớn</td><td>Doanh nghiệp có thể vận hành lại gần như ngay lập tức</td></tr>
  <tr><td>Không gian lắp đặt</td><td>Cần bể nước chữa cháy dung tích lớn</td><td>Chỉ cần cụm bình chứa khí nén gọn gàng</td></tr>
</table>

<h2>3. Khi nào bắt buộc phải chọn hệ thống chữa cháy bằng khí?</h2>
<p>Theo tiêu chuẩn quốc tế NFPA 2001 và tiêu chuẩn Việt Nam TCVN 7161, các khu vực sau đây được khuyến cáo lựa chọn hệ thống khí:</p>
<ol>
  <li><b>Phòng máy chủ Data Center & Server Room:</b> Nơi lưu trữ cơ sở dữ liệu số quan trọng của ngân hàng, viễn thông và cơ quan quản lý.</li>
  <li><b>Phòng phân phối điện, trạm biến áp, tủ điều khiển MCC:</b> Nơi có điện áp cao và mật độ đấu nối dây cáp dày đặc.</li>
  <li><b>Kho lưu trữ tài liệu quý, thư viện quốc gia, viện bảo tàng:</b> Nơi lưu giữ các tác phẩm nghệ thuật, cổ vật hoặc tài liệu giấy cổ không thể tiếp xúc với nước.</li>
  <li><b>Phòng thiết bị y tế công nghệ cao:</b> Khu vực đặt máy cộng hưởng từ (MRI), máy chụp CT Scanner giá trị hàng triệu USD.</li>
</ol>

<h2>4. Tư vấn lựa chọn từ STC</h2>
<p>Mặc dù chi phí đầu tư ban đầu của hệ thống khí sạch cao hơn so với sprinkler thông thường, nhưng khi so sánh với tổn thất hàng triệu USD nếu cụm server ngưng hoạt động chỉ trong 1 giờ, hệ thống chữa cháy khí là khoản đầu tư bảo hiểm an toàn hoàn toàn xứng đáng và tối ưu.</p>
`,
    content_en: `
<p class="lead">Automatic wet-pipe sprinkler systems are widely deployed in commercial and residential properties. However, in critical mission facilities such as data centers, control rooms, telecommunication hubs, and high-voltage switchgear rooms, discharging water creates instant short-circuits and irreparably damages electronic assets. In such applications, clean agent gaseous suppression is technically imperative.</p>

<h2>1. Fundamental Extinguishing Mechanisms</h2>
<p>STC fire protection engineers compare two primary mechanisms:</p>
<ul>
  <li><b>Wet Sprinklers:</b> Discharges water to extract heat and blanket fuel. Water is electrically conductive, corrosive, and leaves moisture residues that destroy sensitive semiconductor circuit boards.</li>
  <li><b>Clean Agent Systems:</b> Employs inert gases (IG-541, IG-55, N₂) or synthetic halo-carbons (FM-200 / HFC-227ea, Novec 1230 / FK-5-1-12). They suppress fires through molecular thermal absorption and chemical chain interruption without depleting oxygen below human safety thresholds.</li>
</ul>

<h2>2. Technical Comparison Matrix: Sprinklers vs Clean Agent</h2>
<table class="info" style="margin: 16px 0; font-size:14px">
  <tr><td><b>Criteria</b></td><td><b>Wet Pipe Sprinklers</b></td><td><b>Clean Agent (FM-200 / Novec)</b></td></tr>
  <tr><td>Discharge & Suppression Time</td><td>Minutes to tens of minutes</td><td><b>Under 10 seconds</b> (rapid suppression at incipient stage)</td></tr>
  <tr><td>Electrical Conductivity</td><td>Conductive; causes immediate shorting</td><td><b>100% Non-conductive</b>; zero electronic damage</td></tr>
  <tr><td>Post-Discharge Cleanup</td><td>Weeks of water vacuuming & mold remediation</td><td><b>Zero residue</b>; evaporates entirely into atmosphere</td></tr>
  <tr><td>Operational Downtime</td><td>Protracted; severe financial interruption</td><td>Operations resume almost immediately</td></tr>
  <tr><td>Footprint</td><td>Requires extensive water storage reservoirs</td><td>Compact modular cylinder storage bank</td></tr>
</table>

<h2>3. Mandatory Applications for Gaseous Suppression</h2>
<p>Per NFPA 2001 and Vietnamese standard TCVN 7161, gaseous clean agents are essential for:</p>
<ol>
  <li><b>Tier III & IV Data Centers & Server Rooms:</b> Housing mission-critical banking, cloud, and telecommunications data.</li>
  <li><b>Electrical Distribution, Substation & MCC Rooms:</b> High-voltage transformers and dense cable trays.</li>
  <li><b>National Archives, Libraries & Museums:</b> Preserving historical paper manuscripts and priceless artifacts.</li>
  <li><b>Advanced Medical Imaging Suites:</b> Housing multi-million-dollar MRI, CT, and radiotherapy equipment.</li>
</ol>

<h2>4. Engineering Assessment from STC</h2>
<p>While initial capital expenditures for gaseous systems exceed basic sprinklers, when weighted against the millions of dollars lost during server downtime, clean agent systems represent an indispensable engineering safeguard.</p>
`
  },
  {
    id: "checklist-bao-tri-he-thong-pccc-dinh-ky-nha-xuong",
    title: "Checklist bảo trì hệ thống PCCC định kỳ cho nhà xưởng",
    title_en: "Periodic Fire Protection Maintenance Checklist for Industrial Facilities",
    date: "25/08/2026",
    tag: "Bảo trì",
    tag_en: "Maintenance",
    img: "assets/img/news/news-5.jpg",
    sum: "Quy trình kiểm tra bảo trì định kỳ hệ thống báo cháy, mạng lưới chữa cháy vách tường, máy bơm chữa cháy diesel - điện và nạp sạc bình chữa cháy theo TCVN 3890:2023 và thông tư Bộ Công An.",
    sum_en: "Standard periodic maintenance procedure for fire alarm panels, hydrants, diesel/electric fire pumps, and extinguisher recertification under TCVN 3890:2023 and Ministry of Public Security directives.",
    author: "Trung Tâm Bảo Trì Cơ Điện & PCCC STC",
    author_en: "STC M&E and Fire Maintenance Center",
    reading_time: "5 phút đọc",
    reading_time_en: "5 min read",
    content: `
<p class="lead">Theo quy định tại Thông tư 149/2020/TT-BCA và Tiêu chuẩn quốc gia TCVN 3890:2023, toàn bộ hệ thống phòng cháy chữa cháy tại các cơ sở nhà máy, xí nghiệp, kho vận phải được kiểm tra bảo dưỡng định kỳ ít nhất mỗi năm 1 lần, các bộ phận trọng yếu phải kiểm tra hàng quý và hàng tháng. Dưới đây là bảng checklist chuẩn kỹ thuật được các kỹ sư STC áp dụng tại hàng trăm nhà máy trên toàn quốc.</p>

<h2>1. Checklist kiểm tra hàng tháng (Monthly Inspection)</h2>
<ul>
  <li><b>Tủ báo cháy trung tâm (FACP):</b> Kiểm tra hiển thị màn hình LED/LCD; kiểm tra đèn nguồn AC 220V và nguồn ắc quy dự phòng (Battery standby); xác nhận không có bất kỳ tín hiệu lỗi đứt mạch (Fault/Trouble) nào.</li>
  <li><b>Cụm máy bơm chữa cháy:</b> Kiểm tra áp lực đường ống trên đồng hồ áp kế (áp lực duy trì tiêu chuẩn từ <b>7 đến 10 bar</b>); kiểm tra mức nhiên liệu dầu diesel, nước làm mát và điện áp bình đề của bơm diesel dự phòng.</li>
  <li><b>Bình chữa cháy xách tay:</b> Kiểm tra kim đồng hồ áp suất nằm trong vùng xanh; kiểm tra kẹp chì niêm phong còn nguyên vẹn; lắc đảo bột chữa cháy đối với bình bột ABC để tránh vón cục.</li>
  <li><b>Hệ thống chiếu sáng sự cố & Đèn Exit:</b> Thử ngắt điện nguồn mô phỏng để kiểm tra thời gian duy trì sáng của đèn thoát nạn (phải đạt trên 120 phút).</li>
</ul>

<h2>2. Checklist bảo dưỡng hàng quý (Quarterly Service)</h2>
<ul>
  <li><b>Kiểm tra đầu báo khói / nhiệt ngẫu nhiên:</b> Sử dụng bình xịt khói chuyên dụng (Smoke tester) và máy sấy nhiệt thử nghiệm kích hoạt ít nhất 10% tổng số lượng đầu báo trên các loop địa chỉ.</li>
  <li><b>Khởi động thử cụm bơm chữa cháy:</b> Chạy thử nghiệm bơm điện chính và bơm bù áp (Jockey pump) ở chế độ tự động (Auto); kiểm tra độ rung giật, nhiệt độ ổ bi và rò rỉ tại phớt cơ khí.</li>
  <li><b>Van và họng tiếp nước chữa cháy:</b> Đóng mở toàn bộ các van chặn trên đường ống chính; tra mỡ bôi trơn ty van; xả nước súc rửa cặn gỉ tại các họng vách tường cuối đường ống.</li>
</ul>

<h2>3. Checklist đại tu & kiểm định hàng năm (Annual Overhaul)</h2>
<ul>
  <li><b>Thử xả tải toàn diện (Full Load Test):</b> Mở họng chữa cháy lưu lượng lớn nhất để kiểm tra khả năng tự động khởi động của bơm diesel khi mất điện nguồn lưới 220V/380V.</li>
  <li><b>Bảo dưỡng ắc quy dự phòng:</b> Đo nội trở và dung lượng pin lưu điện của tủ báo cháy; thay mới nếu ắc quy đã sử dụng trên 24 - 36 tháng.</li>
  <li><b>Nạp sạc & thủy nghiệm bình chữa cháy:</b> Thu hồi các bình chữa cháy hết hạn kiểm định để cân nạp khí đẩy, thay bột mới và kiểm tra áp suất vỏ bình (Hydrostatic test).</li>
  <li><b>Lập biên bản kiểm định kỹ thuật:</b> Cấp chứng chỉ nghiệm thu bảo trì có dấu tròn pháp nhân của STC phục vụ đoàn kiểm tra an toàn PCCC liên ngành.</li>
</ul>

<h2>4. Dịch vụ bảo trì trọn gói của STC</h2>
<p>Công ty TNHH An toàn và Công nghệ STC cung cấp gói bảo trì định kỳ chuyên nghiệp 24/7. Mọi sự cố kỹ thuật sẽ được đội phản ứng nhanh có mặt xử lý trong vòng 60 phút tại các khu công nghiệp Hà Nội, Bắc Ninh, Hưng Yên, Hải Phòng và Hà Nam.</p>
`,
    content_en: `
<p class="lead">Under Circular 149/2020/TT-BCA and National Standard TCVN 3890:2023, all fire protection systems in industrial factories, warehouses, and assembly plants must undergo comprehensive maintenance at least annually, with critical components inspected monthly and quarterly. Below is the technical checklist deployed by STC engineers across industrial facilities nationwide.</p>

<h2>1. Monthly Inspection Checklist</h2>
<ul>
  <li><b>Fire Alarm Control Panel (FACP):</b> Verify LED/LCD display indications; check 220V AC mains and standby battery charging voltage; ensure zero fault/trouble loops exist.</li>
  <li><b>Fire Pump Skid:</b> Verify system header pressure on calibrated gauges (maintained at <b>7 to 10 bar</b>); inspect diesel fuel level, engine coolant, and starter battery electrolyte.</li>
  <li><b>Portable Fire Extinguishers:</b> Verify pressure gauge needles sit firmly in the green zone; ensure tamper seals remain intact; invert ABC dry powder cylinders to prevent powder caking.</li>
  <li><b>Emergency & Exit Lighting:</b> Simulate primary power failure to verify emergency battery duration (minimum 120 minutes continuous illumination required).</li>
</ul>

<h2>2. Quarterly Maintenance Checklist</h2>
<ul>
  <li><b>Detector Sampling Test:</b> Using calibrated aerosol dispensers and thermal testing wands, functionally actuate at least 10% of total addressable smoke and heat detectors per loop.</li>
  <li><b>Automated Pump Testing:</b> Run main electric fire pump and jockey pressure-maintenance pump in automatic mode; check vibration levels, bearing temperatures, and mechanical packing gland leakage.</li>
  <li><b>Valves & Hydrant Flushing:</b> Cycle all isolating butterfly and OS&Y gate valves; lubricate valve stems; flush water through terminal landing valves to clear rust silt deposits.</li>
</ul>

<h2>3. Annual Overhaul & Certification</h2>
<ul>
  <li><b>Full Flow Capacity Test:</b> Open flow test headers to verify automatic diesel fire pump startup upon simulated 220V/380V mains blackout.</li>
  <li><b>Battery Internal Resistance Audit:</b> Conduct battery conductance and discharge profiling for FACP standby power; replace cells exceeding 24 - 36 months in service.</li>
  <li><b>Extinguisher Hydrostatic Recertification:</b> Retrieve cylinders due for 5-year hydrostatic pressure testing, recharge dry chemical agents, and install new inspection collars.</li>
  <li><b>Official Maintenance Documentation:</b> Issue comprehensive maintenance dossiers with STC corporate seal for presentation to inter-agency fire safety audit delegations.</li>
</ul>

<h2>4. STC Turnkey Maintenance Services</h2>
<p>STC provides 24/7 industrial service contracts. Our rapid technical response team arrives on-site within 60 minutes throughout industrial parks across Hanoi, Bac Ninh, Hung Yen, Hai Phong, and Ha Nam.</p>
`
  },
  {
    id: "vi-sao-can-hieu-chuan-may-do-khi-dinh-ky",
    title: "Vì sao cần hiệu chuẩn máy đo khí định kỳ?",
    title_en: "Why Do Industrial Gas Detectors Require Periodic Calibration?",
    date: "10/08/2026",
    tag: "Đo lường",
    tag_en: "Measurement",
    img: "assets/img/news/news-6.jpg",
    sum: "Hiện tượng trôi điểm zero (Zero Drift), ngộ độc cảm biến (Sensor Poisoning) và tiêu chuẩn thực hiện Bump Test / Span Calibration đối với các máy đo nồng độ khí cháy nổ LEL, O₂, CO, H₂S trong môi trường công nghiệp.",
    sum_en: "Zero drift phenomenon, sensor poisoning mechanisms, and bump test / span calibration protocols for combustible LEL, O₂, CO, and H₂S portable monitors in hazardous industrial sites.",
    author: "Phòng Đo Lường & Hiệu Chuẩn STC",
    author_en: "STC Measurement & Calibration Dept.",
    reading_time: "5 phút đọc",
    reading_time_en: "5 min read",
    content: `
<p class="lead">Trong các ngành công nghiệp lọc hóa dầu, khai thác mỏ, sản xuất hóa chất và xử lý nước thải, thiết bị đo khí cầm tay đa chỉ tiêu (Multi-gas Detector) là người bảo vệ thầm lặng cảnh báo trước khi khí độc hoặc khí cháy nổ đạt ngưỡng nguy hiểm chết người. Tuy nhiên, nếu không được hiệu chuẩn đúng quy chuẩn, máy đo có thể hiển thị chỉ số an toàn giả tạo trong khi thực tế nồng độ độc hại đã vượt ngưỡng phơi nhiễm cho phép.</p>

<h2>1. Vì sao máy đo khí bị sai số theo thời gian?</h2>
<p>Các cảm biến khí (đặc biệt là cảm biến điện hóa Electrochemical, xúc tác Catalytic Bead và cảm biến quang hóa PID) luôn bị suy giảm độ nhạy do các yếu tố môi trường:</p>
<ul>
  <li><b>Trôi điểm không (Zero Drift):</b> Sự thay đổi nhiệt độ, độ ẩm và áp suất khí quyển làm điểm chuẩn 0 ppm của máy bị lệch theo thời gian.</li>
  <li><b>Ngộ độc cảm biến (Sensor Poisoning):</b> Khi tiếp xúc với các hợp chất chứa Silicon (chất bôi trơn), hợp chất chì, hợp chất lưu huỳnh hoặc hơi axit đậm đặc, bề mặt xúc tác của cảm biến LEL bị trơ hóa và mất khả năng bắt cháy.</li>
  <li><b>Lão hóa chất điện phân:</b> Cảm biến đo oxy (O₂) và khí độc (CO, H₂S, SO₂) sử dụng chất điện phân hóa học sẽ tiêu hao dần theo số giờ hoạt động, tuổi thọ trung bình từ 1 đến 2 năm.</li>
</ul>

<h2>2. Phân biệt Bump Test và Hiệu chuẩn đầy đủ (Span Calibration)</h2>
<p>Nhiều doanh nghiệp thường nhầm lẫn giữa kiểm tra phản ứng nhanh và hiệu chuẩn nồng độ:</p>
<ul>
  <li><b>Bump Test (Kiểm tra phản hồi nhanh):</b> Là thao tác cho máy tiếp xúc ngắn với một lượng khí mẫu đã biết nồng độ để xác nhận cảm biến và hệ thống còi đèn còn phản hồi. Thao tác này nên thực hiện <b>trước mỗi ca làm việc</b> khi vào không gian hạn chế (Confined Space).</li>
  <li><b>Span Calibration (Hiệu chuẩn điểm chuẩn):</b> Là quá trình điều chỉnh lại hệ số khuếch đại của mạch vi xử lý sao cho giá trị đo hiển thị trùng khớp chính xác 100% với nồng độ khí chuẩn (Cal Gas) có chứng chỉ phân tích của nhà sản xuất. Thực hiện định kỳ từ <b>1 đến 3 tháng một lần</b> hoặc theo khuyến cáo của hãng (Dräger, Honeywell RAE, MSA, Industrial Scientific).</li>
</ul>

<h2>3. Quy chuẩn hiệu chuẩn tại Trung tâm Kỹ thuật STC</h2>
<p>Tại STC, toàn bộ quy trình hiệu chuẩn thiết bị đo khí được thực hiện theo tiêu chuẩn phòng thí nghiệm khép kín:</p>
<ol>
  <li>Sử dụng bình khí chuẩn chính hãng nồng độ chuẩn xác 4 khí: 50% LEL Methane, 18% O₂, 100 ppm CO, 25 ppm H₂S cân bằng trong N₂.</li>
  <li>Kiểm tra độ nhạy, thời gian đáp ứng (T₉₀) và độ lặp lại của từng cảm biến độc lập.</li>
  <li>Hiệu chuẩn nhiệt độ bù trừ tự động.</li>
  <li>Dán tem hiệu chuẩn có mã số tra cứu và cấp <b>Giấy chứng nhận hiệu chuẩn (Certificate of Calibration)</b> hợp chuẩn theo quy định của Tổng cục Tiêu chuẩn Đo lường Chất lượng.</li>
</ol>
`,
    content_en: `
<p class="lead">In petrochemical refineries, mining, chemical synthesis, and wastewater treatment plants, multi-gas monitors stand as silent sentinels alerting workers before toxic or combustible vapors breach life-threatening thresholds. However, without systematic calibration, instruments may display deceptively safe readings while ambient atmospheres have far exceeded Permissible Exposure Limits (PEL).</p>

<h2>1. Why Do Gas Sensors Drift and Degrade Over Time?</h2>
<p>Sensor elements (particularly electrochemical cells, catalytic beads, and photoionization PID lamps) suffer from natural sensitivity loss caused by operational environments:</p>
<ul>
  <li><b>Zero Baseline Drift:</b> Ambient temperature fluctuations, relative humidity swings, and barometric shifts cause the zero-point reference to drift over time.</li>
  <li><b>Catalytic Sensor Poisoning:</b> Exposure to volatile silicones (lubricants, sealants), lead compounds, sulfur, or halogenated vapors permanently coats the active platinum catalyst bead, leaving the LEL sensor blind to combustible gases.</li>
  <li><b>Electrolyte Depletion:</b> Toxic sensors ($CO, H_2S, SO_2$) and consumable capillary oxygen ($O_2$) cells chemically consume internal electrolytes during continuous sensing, yielding an operational lifespan of 12 to 24 months.</li>
</ul>

<h2>2. Distinguishing Between Bump Tests and Full Span Calibration</h2>
<p>Safety managers frequently confuse routine functionality checks with metrological calibration:</p>
<ul>
  <li><b>Bump Test (Functionality Verification):</b> A brief exposure of sensors to a certified target gas mix to confirm that sensor membranes respond and visual/audible alarms actuate. Mandatory <b>prior to daily entry</b> into confined spaces.</li>
  <li><b>Span Calibration (Full Metrological Adjustment):</b> Adjusting internal microprocessor gain parameters to ensure digital sensor outputs match 100% with traceable calibration gas concentration standards. Required every <b>1 to 3 months</b> per manufacturer specifications (Dräger, Honeywell RAE, MSA, Industrial Scientific).</li>
</ul>

<h2>3. Metrological Standards at STC Technical Calibration Lab</h2>
<p>STC executes gas detector calibration in an environmentally controlled laboratory environment:</p>
<ol>
  <li>Traceable 4-gas certified standards: 50% LEL Methane, 18% $O_2$, 100 ppm $CO$, 25 ppm $H_2S$ balanced in $N_2$.</li>
  <li>Auditing sensor response times ($T_{90}$) and signal repeatability.</li>
  <li>Automated electronic zero and span calibration balancing.</li>
  <li>Affixing traceable calibration labels and issuing official <b>Certificates of Calibration</b> compliant with the Directorate for Standards, Metrology and Quality of Vietnam.</li>
</ol>
`
  }
];
