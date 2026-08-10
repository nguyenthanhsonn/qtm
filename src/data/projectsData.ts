import type { ProjectItem } from "@/types/project";
export type { ProjectItem };

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "talkshow-khat-vong-khoi-nghiep",
    title: "Talkshow: Khát vọng Khởi nghiệp – Truyền cảm hứng cho thế hệ trẻ",
    category: "Chiến dịch Truyền thông",
    client: "Cộng đồng Sinh viên Đông Bắc Bộ & QTM Media",
    summary:
      "Chuỗi talkshow quy mô lớn dành cho hơn 15.000 sinh viên các trường đại học khu vực Đông Bắc Bộ, khởi động từ tháng 5/2017 nhằm kết nối, khơi dậy tinh thần dấn thân và định hướng con đường lập nghiệp cho thế hệ trẻ.",
    image: "/projects/talkshow.png",
    startDate: "Tháng 05/2017",
    targetAudience: "Hơn 15.000 sinh viên tại các trường Đại học thuộc khu vực Đông Bắc Bộ (Đại học Hàng hải, Hải Phòng,...)",
    speakers: ["TS. Lê Thẩm Dương", "Ông Trần Lương Sơn", "Ông Nguyễn Hữu Thái Hoà", "Ông Nguyễn Cảnh Bình"],
    metrics: [
      { val: "15.000+", lbl: "Sinh viên tham gia" },
      { val: "05/2017", lbl: "Khởi động chương trình" },
      { val: "Top Diễn Giả", lbl: "TS. Lê Thẩm Dương,..." },
    ],
    challenge:
      "Sinh viên trẻ ở độ tuổi đôi mươi gặp nhiều bỡ ngỡ, thiếu định hướng thực tế về con đường lập nghiệp và thiếu cơ hội kết nối trực tiếp với các diễn giả, chuyên gia hàng đầu.",
    solution:
      "QTM cùng đội ngũ đối tác tổ chức chuỗi diễn thuyết truyền cảm hứng tại các trường Đại học lớn (như buổi diễn thuyết tại Đại học Hàng hải, Hải Phòng ngày 26/05/2017) với sự đồng hành của các bậc thầy tri thức: TS. Lê Thẩm Dương, Ông Trần Lương Sơn, Ông Nguyễn Hữu Thái Hoà, Ông Nguyễn Cảnh Bình...",
    impact:
      "Khơi gợi khát vọng đam mê và nhiệt huyết cho tuổi trẻ, tháo gỡ khó khăn chia sẻ bài học thực tế, đồng thời gia tăng kết nối giữa thế hệ đi trước tài năng với hơn 15.000 sinh viên trẻ.",
  },
  {
    id: "miss-legacy",
    title: "Miss Legacy - Gìn Giữ Hồn Việt | Tỏa Sáng Toàn Cầu",
    category: "Văn hóa & Di sản",
    client: "QTM Foundation & Đơn vị Văn hóa",
    summary:
      "Hành trình tìm kiếm, tôn vinh và ứng dụng công nghệ AI lan tỏa giá trị di sản văn hóa Việt Nam đến thế hệ trẻ và cộng đồng quốc tế.",
    image: "/projects/miss-legacy.png",
    startDate: "Năm 2026",
    targetAudience: "Cộng đồng yêu văn hóa Việt & bạn bè quốc tế",
    speakers: ["Đại sứ Miss Legacy", "Hội đồng Cố vấn Văn hóa QTM"],
    metrics: [
      { val: "1.000.000+", lbl: "Lượt lan tỏa" },
      { val: "50+", lbl: "Đại sứ vinh danh" },
      { val: "10+", lbl: "Quốc gia đồng hành" },
    ],
    challenge:
      "Văn hóa di sản truyền thống đứng trước nguy cơ bị suy giảm sự chú ý trong kỷ nguyên số hóa, giới trẻ chưa thực sự tìm thấy sự gắn kết với di sản.",
    solution:
      "QTM xây dựng hệ sinh thái truyền thông số Miss Legacy kết hợp AI nghệ thuật, thiết kế bộ nhận diện thương hiệu số đậm chất di sản Việt và chiến dịch viral đa kênh.",
    impact:
      "Tạo làn sóng tự hào di sản mạnh mẽ, thu hút hơn 1 triệu lượt tương tác trên MXH, khẳng định vị thế văn hóa Việt Nam trên bản đồ di sản toàn cầu.",
  },
  {
    id: "ai-marketing-retail",
    title: "Hệ Thống AI Marketing Automation Cho Tập Đoàn Bán Lẻ",
    category: "Chuyển đổi số & AI",
    client: "RetailCorp Vietnam",
    summary:
      "Xây dựng hệ thống tự động hóa chiến dịch Marketing bằng AI Agent, tối ưu hóa điểm chạm khách hàng toàn kênh theo thời gian thực.",
    image: "/projects/ai-retail.png",
    startDate: "Năm 2025",
    targetAudience: "Tập đoàn bán lẻ & chuỗi cửa hàng toàn quốc",
    speakers: ["Chuyên gia AI QTM", "Đội ngũ Kỹ sư Dữ liệu"],
    metrics: [
      { val: "+185%", lbl: "Tỷ lệ chuyển đổi" },
      { val: "-40%", lbl: "Chi phí CAC" },
      { val: "2.5x", lbl: "Tăng trưởng doanh số" },
    ],
    challenge:
      "Dữ liệu khách hàng bị phân tán, quy trình phân tích bài viết thủ công khiến doanh nghiệp bỏ lỡ thời điểm vàng tiếp cận khách hàng tiềm năng.",
    solution:
      "QTM tích hợp bộ giải pháp AI Enterprise Data Analytics, tự động hóa phân khúc khách hàng, cá nhân hóa nội dung quảng cáo và tự động điều chỉnh ngân sách tối ưu.",
    impact:
      "Tăng gấp 2.5 lần hiệu suất chiến dịch, giảm 40% chi phí tìm kiếm khách hàng mới và giúp ban lãnh đạo đưa ra quyết định kinh doanh chuẩn xác theo từng giây.",
  },
  {
    id: "ocop-branding",
    title: "Định Vị Thương Hiệu & Quảng Bá Nông Sản OCOP Quốc Gia",
    category: "Thương hiệu & OCOP",
    client: "Sở Công Thương & OCOP Vietnam",
    summary:
      "Chiến lược tái định vị thương hiệu nông sản đặc sản vùng miền, ứng dụng bộ nhận diện số chuẩn quốc tế vươn tầm thế giới.",
    image: "/projects/ocop-branding.png",
    startDate: "Năm 2024",
    targetAudience: "Hơn 500 doanh nghiệp & Hợp tác xã OCOP",
    speakers: ["Chuyên gia Thương hiệu QTM", "Đại diện Bộ Công Thương"],
    metrics: [
      { val: "12", lbl: "Quốc gia xuất khẩu" },
      { val: "+220%", lbl: "Giá trị thương hiệu" },
      { val: "500+", lbl: "Doanh nghiệp OCOP" },
    ],
    challenge:
      "Nông sản Việt Nam có chất lượng hàng đầu nhưng thiếu bao bì chuẩn quốc tế, câu chuyện sản phẩm còn mờ nhạt và khó tiếp cận thị trường cao cấp.",
    solution:
      "QTM tái thiết kế toàn bộ hệ thống bao bì số, xây dựng chuỗi bài viết Storytelling văn hóa vùng miền và số hóa sản phẩm lên sàn TMĐT xuyên biên giới.",
    impact:
      "Mở rộng thị trường xuất khẩu sang 12 quốc gia Châu Âu & Châu Á, nâng tầm giá trị nông sản Việt và tăng thu nhập bền vững cho hàng ngàn bà con nông dân.",
  },
  {
    id: "techbank-campaign",
    title: "Chiến Dịch Truyền Thông Số Ngân Hàng Kỹ Thuật Số TechBank",
    category: "Chiến dịch Truyền thông",
    client: "TechBank Digital",
    summary:
      "Kích hoạt chiến dịch truyền thông phủ sóng giới trẻ Gen Z với thông điệp 'Ngân Hàng Số Không Giới Hạn'.",
    image: "/projects/techbank.png",
    startDate: "Năm 2025",
    targetAudience: "Thế hệ Gen Z & Người dùng số trẻ tuổi",
    speakers: ["Đội ngũ Sáng tạo QTM", "Creators & KOLs"],
    metrics: [
      { val: "5.000.000+", lbl: "Lượt hiển thị" },
      { val: "250.000+", lbl: "Tài khoản mở mới" },
      { val: "#1", lbl: "Trending chiến dịch số" },
    ],
    challenge:
      "Gen Z có thói quen sử dụng tài chính linh hoạt và rất khắt khe với các thông điệp quảng cáo truyền thống khô khan.",
    solution:
      "Sáng tạo tuyến nội dung ngắn Gamification, hợp tác cùng dàn Creator công nghệ hàng đầu và tổ chức sự kiện âm nhạc tương tác thực tế ảo AR.",
    impact:
      "Đạt hơn 250.000 mở tài khoản mới chỉ sau 30 ngày khởi chạy, chiến dịch dẫn đầu xu hướng truyền thông ngân hàng năm 2026.",
  },
  {
    id: "women-empowerment",
    title: "Nền Tảng Đào Tạo & Kết Nối Phụ Nữ Khởi Nghiệp Số",
    category: "Văn hóa & Di sản",
    client: "QTM Ecosystem & Hội LHPN",
    summary:
      "Xây dựng chuỗi hội thảo, khóa học số và cộng đồng kết nối hàng ngàn nữ doanh nhân trẻ bứt phá trong thời đại mới.",
    image: "/miss-legacy-mission-bg.jpg",
    startDate: "Năm 2025",
    targetAudience: "Hàng ngàn nữ doanh nhân & phụ nữ trẻ toàn quốc",
    speakers: ["Cố vấn Khởi nghiệp QTM", "Lãnh đạo Hội LHPN"],
    metrics: [
      { val: "10.000+", lbl: "Học viên toàn quốc" },
      { val: "300+", lbl: "Dự án nhận đầu tư" },
      { val: "98%", lbl: "Hài lòng tuyệt đối" },
    ],
    challenge:
      "Nhiều phụ nữ khởi nghiệp ở khu vực địa phương gặp rào cản về tiếp cận công nghệ số và quản trị tài chính doanh nghiệp.",
    solution:
      "Cung cấp chương trình đào tạo trực tuyến miễn phí, xây dựng mạng lưới cố vấn chuyên gia 1-1 và kết nối trực tiếp với các quỹ đầu tư thiên thần.",
    impact:
      "Giúp hơn 300 dự án khởi nghiệp do nữ làm chủ hoàn thiện mô hình kinh doanh và nhận vốn đầu tư mở rộng quy mô toàn quốc.",
  },
  {
    id: "ooh-smart-city-led",
    title: "Mạng Lưới Truyền Thông Đô Thị & LED 3D Tương Tác OOH",
    category: "Truyền thông Đô thị & OOH",
    client: "Tập đoàn Đô thị Thông minh SmartCity",
    summary:
      "Triển khai mạng lưới màn hình LED 3D Naked-Eye tại các đại lộ trung tâm thành phố, kết nối dữ liệu thời gian thực và trải nghiệm AR.",
    image: "/home/ecosystem/panel-city.jpg",
    startDate: "Tháng 12/2025",
    targetAudience: "Cư dân đô thị & du khách tại các trung tâm kinh tế lớn",
    speakers: ["Đội ngũ Kỹ thuật OOH QTM", "Chuyên gia Thiết kế 3D Visual"],
    metrics: [
      { val: "20.000.000+", lbl: "Lượt tiếp cận/tháng" },
      { val: "15+", lbl: "Màn hình 3D Naked-Eye" },
      { val: "+300%", lbl: "Tăng nhận diện" },
    ],
    challenge:
      "Hình thức OOH truyền thống bị giảm hiệu quả do thiếu tính tương tác và khả năng đo lường chỉ số ROI cho nhãn hàng.",
    solution:
      "QTM ứng dụng công nghệ LED 3D Naked-Eye kết hợp hệ thống camera AI cảm biến lưu lượng giao thông để điều chỉnh nội dung quảng cáo động theo thời gian thực.",
    impact:
      "Tái định nghĩa trải nghiệm truyền thông ngoài trời tại Việt Nam, biến các billboard thành biểu tượng kiến trúc công nghệ rực rỡ thu hút du khách.",
  },
  {
    id: "ai-customer-experience-center",
    title: "Trung Tâm Trải Nghiệm Khách Hàng Thông Minh AI Experience",
    category: "Chuyển đổi số & AI",
    client: "Tập đoàn Công nghệ NextGen",
    summary:
      "Thiết kế và thi công không gian trải nghiệm công nghệ đa giác quan tương tác AI cho trung tâm điều hành thương hiệu.",
    image: "/home/ecosystem/panel-office.jpg",
    startDate: "Tháng 08/2025",
    targetAudience: "Khách hàng VIP, đối tác chiến lược & các nhà đầu tư lớn",
    speakers: ["Kiến trúc sư Trải nghiệm QTM", "Đội ngũ Kỹ sư AI"],
    metrics: [
      { val: "100%", lbl: "Tương tác số hóa" },
      { val: "5.000+", lbl: "Lượt đoàn tham quan" },
      { val: "99%", lbl: "Đánh giá ấn tượng" },
    ],
    challenge:
      "Không gian trưng bày truyền thống thiếu tính công nghệ tương tác, chưa truyền tải hết quy mô và năng lực số hóa của doanh nghiệp.",
    solution:
      "QTM xây dựng không gian immersive tích hợp bản đồ hologram 3D, phòng trải nghiệm AI nhận diện giọng nói và cảm biến cử chỉ thông minh.",
    impact:
      "Nâng tầm hình ảnh thương hiệu quốc tế cho doanh nghiệp, chốt hàng trăm hợp đồng hợp tác chiến lược ngay tại trung tâm trải nghiệm.",
  },
  {
    id: "heritage-art-festival-2025",
    title: "Festival Âm Nhạc & Văn Hóa Di Sản Số 2025",
    category: "Văn hóa & Di sản",
    client: "Sở Văn hóa Thể thao & Miss Legacy",
    summary:
      "Đại nhạc hội kết hợp ánh sáng Laser Mapping 3D tái hiện di sản truyền thống Việt Nam trên sân khấu quy mô 30.000 khán giả.",
    image: "/home/ecosystem/panel-concert.jpg",
    startDate: "Tháng 11/2025",
    targetAudience: "Hơn 30.000 khán giả xem trực tiếp & hàng triệu người xem livestream",
    speakers: ["Đạo diễn Sân khấu QTM", "Nghệ sĩ Văn hóa Di sản"],
    metrics: [
      { val: "30.000+", lbl: "Khán giả trực tiếp" },
      { val: "10.000.000+", lbl: "Lượt tương tác MXH" },
      { val: "Top 1", lbl: "Sự kiện văn hóa năm" },
    ],
    challenge:
      "Kết hợp giữa nét trầm mặc của di sản văn hóa cổ truyền với nhịp sống âm nhạc hiện đại mà không làm mất đi tính nguyên bản của lịch sử.",
    solution:
      "QTM xây dựng kịch bản 3 chương âm nhạc công nghệ, ứng dụng kỹ thuật trình chiếu ánh sáng Hologram 3D trên nền âm hưởng dân gian đương đại.",
    impact:
      "Sự kiện ghi dấu ấn rực rỡ trong lòng công chúng, thu hút báo chí quốc tế đưa tin và tạo làn sóng tự hào di sản trẻ trung.",
  },
  {
    id: "eco-green-brand-repositioning",
    title: "Chiến Lược Tái Định Vị Thương Hiệu Xanh EcoGreen",
    category: "Thương hiệu & OCOP",
    client: "EcoGreen Corporation",
    summary:
      "Tái kiến tạo toàn bộ nhận diện thương hiệu bền vững, xây dựng thông điệp ESG phát triển vì môi trường cho tập đoàn sản xuất sạch.",
    image: "/home/ecosystem/panel-growth.jpg",
    startDate: "Tháng 03/2025",
    targetAudience: "Người tiêu dùng xanh & cộng đồng nhà đầu tư ESG",
    speakers: ["Chuyên gia Chiến lược QTM", "Đại sứ Phát triển Bền vững"],
    metrics: [
      { val: "+160%", lbl: "Chỉ số yêu thích thương hiệu" },
      { val: "100%", lbl: "Bao bì tái chế" },
      { val: "ESG A+", lbl: "Xếp hạng bền vững" },
    ],
    challenge:
      "Thương hiệu lâu đời bị thị trường đánh giá là già cỗi, chưa bắt kịp xu hướng phát triển bền vững và tiêu dùng xanh toàn cầu.",
    solution:
      "QTM xây dựng bộ tái nhận diện thương hiệu tinh gọn, chạy chiến dịch 'Gieo Mầm Xanh - Kiến Tạo Bền Vững' phủ sóng toàn quốc.",
    impact:
      "Giúp doanh nghiệp tái khẳng định vị thế dẫn đầu trong sản xuất xanh, đạt chứng nhận ESG quốc tế và gia tăng 160% thiện cảm thương hiệu.",
  },
  {
    id: "smart-mobility-ooh-network",
    title: "Mạng Lưới Quảng Cáo Đô Thị Đa Điểm Chạm Smart Mobility",
    category: "Truyền thông Đô thị & OOH",
    client: "Mobility Tech Vietnam",
    summary:
      "Hệ thống màn hình thông minh tích hợp trên các phương tiện giao thông công cộng, đo lường hành vi tiếp cận bằng AI Vision.",
    image: "/home/ecosystem/panel-data.jpg",
    startDate: "Tháng 07/2025",
    targetAudience: "Hàng triệu hành khách di chuyển đô thị mỗi ngày",
    speakers: ["Chuyên gia Dữ liệu OOH QTM", "Kỹ sư IoT System"],
    metrics: [
      { val: "5.000+", lbl: "Màn hình kết nối" },
      { val: "15.000.000+", lbl: "Lượt tiếp cận/ngày" },
      { val: "Realtime", lbl: "Đo lường dữ liệu" },
    ],
    challenge:
      "Quảng cáo trên phương tiện di chuyển thiếu tính đo lường dữ liệu chính xác và khó tùy biến nội dung theo từng quận huyện.",
    solution:
      "QTM phát triển hộp thiết bị thông minh GPS/AI Vision định vị xe, tự động phát clip quảng cáo phù hợp với vị trí địa lý của phương tiện.",
    impact:
      "Tối ưu hóa ngân sách quảng cáo cho nhãn hàng lên gấp 2 lần, cung cấp báo cáo đo lường thị giác minh bạch từng giây.",
  },
  {
    id: "vietnam-tech-forum-2025",
    title: "Diễn Đàn Chuyển Đổi Số & Đổi Mới Sáng Tạo Việt Nam",
    category: "Sự kiện & Hội nghị",
    client: "Bộ Thông tin Truyền thông & QTM",
    summary:
      "Hội nghị quy mô cấp quốc gia kết nối hàng ngàn doanh nghiệp công nghệ, startup và các nhà đầu tư mạo hiểm quốc tế.",
    image: "/talkshow-khat-vong-khoi-nghiep.png",
    startDate: "Tháng 09/2025",
    targetAudience: "Cộng đồng công nghệ, Doanh nghiệp DX & Nhà đầu tư",
    speakers: ["Lãnh đạo Bộ ngành", "Lãnh đạo QTM MediaTech", "Chuyên gia Tech Global"],
    metrics: [
      { val: "3.000+", lbl: "Doanh nghiệp tham gia" },
      { val: "50M$", lbl: "Cam kết đầu tư" },
      { val: "50+", lbl: "Gian hàng công nghệ 3D" },
    ],
    challenge:
      "Cần thiết lập triển lãm công nghệ số trực tuyến kết hợp trực tiếp với tiêu chuẩn bảo mật dữ liệu cấp chính phủ.",
    solution:
      "QTM vận hành toàn bộ hạ tầng công nghệ đăng ký check-in khuôn mặt AI, triển lãm ảo 3D Metaverse và ứng dụng Networking tự động.",
    impact:
      "Thúc đẩy hàng chục thương vụ hợp tác chuyển đổi số giá trị lớn, củng cố vị thế nền kinh tế số Việt Nam.",
  },
  {
    id: "healthcare-ai-communication",
    title: "Chiến Dịch Truyền Thông Sức Khỏe Cộng Đồng AI Healthcare",
    category: "Chuyển đổi số & AI",
    client: "Healthcare Alliance & QTM",
    summary:
      "Ứng dụng trợ lý AI tư vấn sức khỏe chủ động và chiến dịch nâng cao nhận thức chăm sóc y tế cho người dân vùng xa.",
    image: "/miss-legacy-hero-bg.png",
    startDate: "Tháng 04/2025",
    targetAudience: "Người dân toàn quốc & các y bác sĩ cơ sở",
    speakers: ["Chuyên gia Y tế", "Đội ngũ AI R&D QTM"],
    metrics: [
      { val: "2.000.000+", lbl: "Lượt tư vấn AI" },
      { val: "63", lbl: "Tỉnh thành phủ sóng" },
      { val: "95%", lbl: "Độ chính xác tư vấn" },
    ],
    challenge:
      "Người dân vùng xa thiếu cơ hội tiếp cận thông tin y tế chính thống, quy trình đặt lịch khám chữa bệnh còn rườm rà.",
    solution:
      "QTM xây dựng Chatbot AI y tế thông minh trên Zalo/Facebook, kết hợp các video hoạt hình sinh động hướng dẫn phòng bệnh.",
    impact:
      "Hỗ trợ hơn 2 triệu lượt hỏi đáp sức khỏe tự động, giảm tải áp lực cho các bệnh viện tuyến trên.",
  },
  {
    id: "digital-ooh-airport-takeover",
    title: "Chiến Dịch Phủ Sóng OOH Kỹ Thuật Số Sân Bay Quốc Tế",
    category: "Truyền thông Đô thị & OOH",
    client: "Luxury Brands Association",
    summary:
      "Chiến dịch bao phủ toàn bộ hạ tầng LED màn hình cong tại ga quốc tế, chào đón hàng triệu du khách đến Việt Nam.",
    image: "/home/ecosystem/panel-city.jpg",
    startDate: "Tháng 01/2026",
    targetAudience: "Du khách quốc tế & thương gia cao cấp tại sân bay",
    speakers: ["Đội ngũ Sáng tạo OOH QTM"],
    metrics: [
      { val: "8.000.000+", lbl: "Du khách tiếp cận" },
      { val: "100%", lbl: "Màn hình cong 4K" },
      { val: "Top Impact", lbl: "Đánh giá xuất sắc" },
    ],
    challenge:
      "Sân bay là môi trường đòi hỏi tiêu chuẩn khắt khe về mặt thị giác, chất lượng hình ảnh hiển thị và khả năng hoạt động 24/7.",
    solution:
      "QTM thiết kế bộ hình ảnh Visual 3D siêu thực cá nhân hóa theo từng quốc gia của chuyến bay hạ cánh.",
    impact:
      "Tạo ấn tượng thị giác choáng ngợp đầu tiên cho du khách quốc tế ngay khi bước chân xuống Việt Nam.",
  },
  {
    id: "national-culture-summit",
    title: "Hội Nghị Quốc Gia Báo Chí & Truyền Thông Số Di Sản",
    category: "Sự kiện & Hội nghị",
    client: "Hội Nhà Báo Việt Nam & QTM",
    summary:
      "Chuỗi hội thảo cấp cao bàn về chiến lược chuyển đổi số báo chí và bảo tồn di sản văn hóa trên không gian mạng.",
    image: "/miss-legacy-impact-bg.png",
    startDate: "Tháng 06/2025",
    targetAudience: "Lãnh đạo các cơ quan báo chí & truyền thông toàn quốc",
    speakers: ["Lãnh đạo Hội Nhà Báo", "Chuyên gia Truyền thông QTM"],
    metrics: [
      { val: "500+", lbl: "Tổng biên tập & Nhà báo" },
      { val: "100%", lbl: "Số hóa tài liệu" },
      { val: "10+", lbl: "Chủ đề bứt phá" },
    ],
    challenge:
      "Báo chí truyền thống đang đối mặt với sự cạnh tranh khốc liệt từ các nền tảng mạng xã hội xuyên biên giới.",
    solution:
      "QTM chia sẻ mô hình Toà soạn số tích hợp AI Agent và mô hình kinh doanh nội dung số đa nền tảng.",
    impact:
      "Mở ra định hướng chiến lược mới giúp các cơ quan báo chí bứt phá doanh thu và giữ vững dòng tin tức chính thống.",
  },
];

export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}
