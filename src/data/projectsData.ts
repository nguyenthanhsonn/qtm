export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  image: string;
  startDate?: string;
  targetAudience?: string;
  speakers?: string[];
  metrics: { val: string; lbl: string }[];
  challenge: string;
  solution: string;
  impact: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "talkshow-khat-vong-khoi-nghiep",
    title: "Talkshow: Khát vọng Khởi nghiệp – Truyền cảm hứng cho thế hệ trẻ",
    category: "Chiến dịch Truyền thông",
    client: "Cộng đồng Sinh viên Đông Bắc Bộ & QTM Media",
    summary:
      "Chuỗi talkshow quy mô lớn dành cho hơn 15.000 sinh viên các trường đại học khu vực Đông Bắc Bộ, khởi động từ tháng 5/2017 nhằm kết nối, khơi dậy tinh thần dấn thân và định hướng con đường lập nghiệp cho thế hệ trẻ.",
    image: "/talkshow-khat-vong-khoi-nghiep.png",
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
    image: "/miss-legacy-hero-bg.png",
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
    image: "/miss-legacy-impact-bg.png",
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
    image: "/miss-legacy-partners-bg.jpg",
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
    image: "/miss-legacy-awards-bg.jpg",
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
];

export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}
