export default function Home() {
  return (
    <div>
      {/* TỔNG QUAN */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Tổng quan Vista Nam An Khánh</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-4 mb-12">
          <iframe 
            src="https://www.youtube.com/embed/mwQbFEFaFVs?si=lX1riM7jNcOTympW" 
            className="w-full rounded-xl shadow-inner mb-4 aspect-video"
            allowFullScreen
            title="Video tổng thể Khu đô thị Vista Nam An Khánh"
          ></iframe>
          <p className="text-center text-amber-700 italic font-medium">Video tổng thể Khu đô thị Vista Nam An Khánh</p>
        </div>

        {/* Thông tin dự án Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-5">
            <h3 className="text-2xl font-bold text-white text-center tracking-wide uppercase drop-shadow-md">Thông tin dự án Vista Nam An Khánh</h3>
          </div>
          <div className="p-8 text-amber-800 text-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Chủ đầu tư:</strong> Công ty cổ phần SJ Group</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Vị trí:</strong> xã An Khánh, huyện Hoài Đức, TP. Hà Nội</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Quy mô:</strong> 288,8 ha gồm 8 Phân khu:</span>
              </li>
              <ul className="list-decimal pl-10 space-y-2 text-amber-700 font-medium">
                <li>La Vista – Nam An Khanh Ha Noi</li>
                <li>Vista Serena – Nam An Khanh Ha Noi</li>
                <li>Vista Lago – Nam An Khanh Ha Noi</li>
                <li>Vista Palma – Nam An Khanh Ha Noi</li>
                <li>Vista Valley – Nam An Khanh Ha Noi</li>
                <li>Vista Sky Lakeview – Nam An Khanh Ha Noi</li>
                <li>Vista Complex – Nam An Khanh Ha Noi</li>
                <li>Vista Garden – Nam An Khanh Ha Noi</li>
              </ul>
              <li className="flex items-start mt-4">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Mở bán đợt 2 gồm 2 phân khu:</strong></span>
              </li>
              <ul className="list-none pl-10 space-y-2 text-amber-700">
                <li className="flex items-center"><span className="text-yellow-500 mr-2">✦</span>Phân khu Vista Serena và Vista Palma: 241 căn nhà thấp tầng</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">✦</span>Phân khu Vista Serena dự kiến bàn giao 160 căn vào tháng 9/2026</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">✦</span>Phân khu Vista Palma đã sẵn sàng bàn giao</li>
              </ul>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Cơ cấu sản phẩm:</strong> Biệt thự đơn lập, song lập, nhà liền kề sân vườn, shophouse cao 3 - 4 tầng.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Mật độ xây dựng:</strong> 42%</span>
              </li>
            </ul>

            <div className="mt-10 space-y-8">
              <div className="bg-amber-50 p-4 rounded-xl border border-yellow-100 shadow-sm">
                <img src="/VistaNamAnKhanh/tongmatbangANK.jpg" alt="Tổng mặt bằng Nam An Khánh" className="w-full rounded-lg shadow-md" />
                <p className="text-center text-amber-700 italic mt-3 font-medium">Tổng mặt bằng Khu đô thị Vista Nam An Khánh</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-4 rounded-xl border border-yellow-100 shadow-sm">
                  <img src="/VistaNamAnKhanh/tongmatbangPalma.jpg" alt="Tổng mặt bằng Vista Palma" className="w-full rounded-lg shadow-md" />
                  <p className="text-center text-amber-700 italic mt-3 font-medium">Tổng mặt bằng Vista Palma</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-yellow-100 shadow-sm">
                  <img src="/VistaNamAnKhanh/tongmatbangSerena.jpg" alt="Tổng mặt bằng Vista Serena" className="w-full rounded-lg shadow-md" />
                  <p className="text-center text-amber-700 italic mt-3 font-medium">Tổng mặt bằng Vista Serena</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thiết kế & Quy mô */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-amber-900">Thiết kế & Quy mô</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mb-6 rounded-full"></div>
          
          <p className="text-amber-800 mb-4 leading-relaxed">Cảnh quan theo mô hình gồm các cung đường rộng uốn lượn ôm lấy hồ (có 3 hồ lớn nhỏ) và rất nhiều khoảng &ldquo;xanh&rdquo; trong khu đô thị với mật độ xây dựng thấp. Từng biệt thự được thiết kế theo phong cách Địa Trung Hải trẻ trung, ấn tượng.</p>
          <p className="text-amber-800 mb-6 leading-relaxed">Khu đô thị Vista Nam An Khánh có tổng cộng 1793 căn nhà ở thấp tầng và các căn hộ chung cư cao cấp. Trong đó có:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <span className="text-amber-800"><strong>228 căn Biệt thự Đơn Lập</strong> (cao 03 tầng, 356m² – 1200m²)</span>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <span className="text-amber-800"><strong>417 căn Biệt thự Song Lập</strong> (cao 03 tầng, 333m² – 600m²)</span>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <span className="text-amber-800"><strong>564 căn Liền kề Nhà Vườn</strong> (cao 04 tầng, 130m² – 348m²)</span>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
              <span className="text-amber-800"><strong>584 căn Shophouse</strong> (cao 04 tầng, 129m² – 212m²) để ở hoặc kinh doanh bám theo trục đường lớn</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-4">
          <img src="https://bietthulienke.info/pl/img/26/Tong-quan-nam-an-khanh-2.jpg" alt="Phối cảnh tổng thể" className="w-full rounded-xl shadow-md mb-4" />
          <p className="text-center text-amber-700 italic font-medium">Phối cảnh tổng thể Khu đô thị Vista Nam An Khánh 3D (234ha)</p>
        </div>
      </section>

      {/* VỊ TRÍ & KẾT NỐI */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Vị trí & kết nối giao thông</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-10">
          <p className="text-amber-800 mb-8 leading-relaxed text-lg">Khu đô thị Vista Nam An Khánh nằm tại vị trí đắc địa cửa ngõ phía Tây Thủ Đô, ngay nút giao giữa Đại Lộ Thăng Long và trục đường Lê Trọng Tấn. 
            Giáp khu đô thị Vinhomes Smart City, Geleximco Lê Trọng Tấn, cách Trung tâm Hội nghị Quốc gia 5 km. 
            Chạy dọc 2 km chiều dài tuyến đường cao tốc Láng – Hòa Lạc, tuyến đường cao tốc trọng điểm kết nối trung tâm thủ đô tới Khu CNC và hệ thống trường ĐHQG Hà Nội tại Hòa Lạc. 
            Việc kết nối giao thông đi lại giữa Khu đô thị Vista Nam An Khánh đến trung tâm Hà Nội và các khu đô thị lân cận rất thuận tiện.</p>

          <h3 className="text-2xl font-bold mb-4 text-amber-900">Ranh giới dự án</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Phía Bắc:</strong> Giáp Đại lộ Thăng Long</span>
            </div>
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Phía Đông:</strong> Giáp đường Lê Trọng Tấn</span>
            </div>
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Phía Nam:</strong> Giáp đường tỉnh lộ 72 & KDC Ngãi Cầu</span>
            </div>
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Phía Tây:</strong> Giáp đường liên khu 8 (60m)</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-yellow-200 hover:shadow-2xl transition-shadow">
            <img src="/VistaNamAnKhanh/bandoketnoi.jpg" alt="Bản đồ kết nối" className="w-full rounded-xl shadow-md" />
            <p className="text-center text-amber-700 italic mt-4 font-medium">Bản đồ kết nối giao thông</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-yellow-200 hover:shadow-2xl transition-shadow">
            <img src="/VistaNamAnKhanh/huongketnoigt.jpg" alt="Hướng kết nối" className="w-full rounded-xl shadow-md" />
            <p className="text-center text-amber-700 italic mt-4 font-medium">Hướng kết nối giao thông</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-yellow-200 hover:shadow-2xl transition-shadow">
            <img src="/VistaNamAnKhanh/metro5.jpg" alt="Tuyến Metro số 5" className="w-full rounded-xl shadow-md" />
            <p className="text-center text-amber-700 italic mt-4 font-medium">Tuyến metro số 5 qua dự án</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-yellow-200 hover:shadow-2xl transition-shadow">
            <img src="/VistaNamAnKhanh/cactuyenduongminhhoa.jpg" alt="Các tuyến đường" className="w-full rounded-xl shadow-md" />
            <p className="text-center text-amber-700 italic mt-4 font-medium">Các tuyến đường kết nối chính</p>
          </div>
        </div>

        {/* Hạ tầng giao thông & Thời gian kết nối */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-yellow-300 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-4">
            <h4 className="text-xl font-bold text-white uppercase text-center tracking-wide">Hạ tầng Giao thông & Kết nối lý tưởng</h4>
          </div>
          
          <div className="p-8">
            <div className="border-b-2 border-yellow-100">
              {/* Các tuyến đường xung quanh dự án */}
              <h5 className="text-2xl font-bold mb-6 text-amber-900 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg shadow-sm">✧</span>
                Các tuyến đường xung quanh dự án
              </h5>
              <ul className="space-y-4 text-amber-800 text-lg md:pl-4">
                <li className="flex items-start bg-amber-50 p-4 rounded-xl border border-yellow-100">
                  <span className="text-yellow-600 text-2xl mr-4 leading-none">✦</span>
                  <span><strong className="text-amber-900">Đại lộ Thăng Long:</strong> rộng 140m với 6 làn xe</span>
                </li>
                <li className="flex items-start bg-amber-50 p-4 rounded-xl border border-yellow-100">
                  <span className="text-yellow-600 text-2xl mr-4 leading-none">✦</span>
                  <span><strong className="text-amber-900">Đường Lê Trọng Tấn – Hoàng Tùng:</strong> rộng 50m, 6 làn xe (Vành đai 3.5)</span>
                </li>
                <li className="flex items-start bg-amber-50 p-4 rounded-xl border border-yellow-100">
                  <span className="text-yellow-600 text-2xl mr-4 leading-none">✦</span>
                  <span><strong className="text-amber-900">Đường liên khu LK8:</strong> rộng 50m, 6 làn xe</span>
                </li>
              </ul>

              {/* Thời gian di chuyển */}
              <h5 className="mt-10 text-2xl font-bold mb-6 text-amber-900 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg shadow-sm">✧</span>
                Cửa ngõ phía Tây Thủ đô kết nối vô cùng thuận tiện
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-amber-50 rounded-xl border border-yellow-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-white text-2xl shadow-md mb-3">🚗</div>
                  <span className="text-amber-900 font-bold text-xl mb-1">20 phút</span>
                  <span className="text-amber-700 text-sm">Đến trung tâm thành phố</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-amber-50 rounded-xl border border-yellow-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-white text-2xl shadow-md mb-3">🏢</div>
                  <span className="text-amber-900 font-bold text-xl mb-1">10 phút</span>
                  <span className="text-amber-700 text-sm">Trung tâm Hội nghị Quốc gia</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-amber-50 rounded-xl border border-yellow-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-white text-2xl shadow-md mb-3">✈️</div>
                  <span className="text-amber-900 font-bold text-xl mb-1">35 phút</span>
                  <span className="text-amber-700 text-sm">Sân bay quốc tế Nội Bài</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-amber-50 rounded-xl border border-yellow-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-white text-2xl shadow-md mb-3">🏭</div>
                  <span className="text-amber-900 font-bold text-xl mb-1">20 phút</span>
                  <span className="text-amber-700 text-sm">Khu công nghệ cao Hòa Lạc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUY MÔ & PHÂN KHU */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Quy mô & Phân khu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>

        <div className="space-y-10">
          {/* Khu A */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 border-b-2 border-yellow-100 pb-2">Khu A Vista Nam An Khánh (189,7ha)</h3>
            <p className="text-amber-800 mb-6">Được triển khai làm 2 giai đoạn, kiến tạo không gian sống xa hoa bậc nhất với hồ điều hòa rộng lớn và hạ tầng cảnh quan đồng bộ.</p>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold text-yellow-600 mb-3">Giai đoạn 1 (51ha)</h4>
              <p className="text-amber-800 mb-4">Xây quanh khu hồ nhỏ Từ TT1 đến TT32 Bán cho một số chủ đầu tư cấp 2 như PVSD, BIDV, Taseco, Đất Quảng, Thăng Long ITC… Tiến độ một số thứ cấp này có đơn vị xây xong thô, đơn vị bàn giao đất cho người mua nhưng chưa xây dựng và cũng có đơn vị bàn giao đất cho dân tự xây (đặc biệt có một số lô đã có sổ đỏ).</p>
              <img src="https://bietthulienke.info/pl/img/26/nam-an-khanh_giai-doan-1.jpg" alt="Giai đoạn 1" className="w-full rounded-xl shadow-lg" />
              <p className="text-center text-amber-700 italic mt-4 font-medium">Mặt bằng tổng thể Dự án Vista Nam An Khánh khu A giai đoạn 1 (51ha)</p>
              <p className="text-amber-800 mb-6"><strong>Tiến độ giai đoạn 1:</strong> Hiện SJ Group đang làm hạ tầng tương đối nhanh (khách hàng có thể cảm nhận được khi ra thực địa hiện hữu).</p>
            </div>


            <div>
              <h4 className="text-xl font-bold text-yellow-600 mb-3">Giai đoạn 2 (106ha)</h4>
              <img src="https://bietthulienke.info/pl/img/26/giai-doan-2-nam-an-khanh.jpg" alt="Giai đoạn 2" className="w-full rounded-xl shadow-lg" />
              <p className="text-center text-amber-700 italic mt-4 font-medium">Mặt bằng tổng thể Dự án Vista Nam An Khánh khu A giai đoạn 2 (106ha)</p>
              <p className="text-amber-800 mb-4 mt-4">SJ Group tự xây một bên mặt hồ Lớn bao gồm các biệt thự, Shophouse và Vinhomes (Vinhomes Thăng Long) làm bên còn lại.</p>
              <img src="https://bietthulienke.info/pl/img/26/du-an-nam-an-khanh-123.jpg" alt="Giai đoạn 2" className="w-full rounded-xl shadow-lg" />
              <p className="text-center text-amber-700 italic mt-4 font-medium">Dự án Vista Nam An Khánh với Phân khu Vinhomes (Vinhomes Thăng Long) 24ha</p>
              <p className="text-amber-800 mt-4"><strong>Tiến độ:</strong> Hiện tại Hồ Vista Nam An Khánh đã làm xong ở cả 2 bên hồ cùng hạ tầng xung quanh. Bên Vingroup tháng 12/2016 nhận nhà còn bên SJ Group giữa năm 2017 sẽ xong hoàn toàn hạ tầng toàn khu (bao gồm đường đi, cây xanh và công trình phụ trợ như trường học, nhà trẻ) và đến cuối năm 2017 đã bàn giao toàn bộ tiện ích cùng nhà ở.</p>
            </div>
          </div>

          {/* Khu B */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mt-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 border-b-2 border-yellow-100 pb-2">
              Khu B - Mở rộng (44,6ha) & Hỗn hợp (33ha)
            </h3>
            <p className="text-amber-800 mb-6">
              Không gian phát triển đô thị tương lai và tổ hợp căn hộ cao cấp, tích hợp đầy đủ hệ sinh thái tiện ích bao gồm Đại siêu thị, Trường học quốc tế,...
            </p>
            
            {/* Phân khu B - Mở rộng */}
            <div className="mb-8 border-b border-yellow-100 pb-6">
              <h4 className="text-xl font-bold text-yellow-600 mb-3">
                Dự án Vista Nam An Khánh Khu B (Khu mở rộng) - 44,6 ha
              </h4>
              <p className="text-amber-800 mb-4">
                Dự án Vista Nam An Khánh phần mở rộng khu B (44,6ha) mới chỉ đang tiến hành giải phóng mặt bằng (được 24ha), chưa xây dựng hạ tầng kỹ thuật cũng như công trình nào.
              </p>
              <img 
                src="https://bietthulienke.info/pl/img/26/giai-doan-mo-rong-nam-an-khanh.jpg" 
                alt="Khu mở rộng" 
                className="w-full rounded-xl shadow-lg" 
              />
              <p className="text-center text-amber-700 italic mt-4 font-medium">
                Mặt bằng tổng thể Dự án Vista Nam An Khánh Khu B (Khu mở rộng)
              </p>
            </div>

            {/* Khu hỗn hợp & Tiện ích */}
            <div>
              <h4 className="text-xl font-bold text-yellow-600 mb-3">
                Khu hỗn hợp - 33ha
              </h4>
              <p className="text-amber-800 mb-4">
                Khu hỗn hợp của dự án Vista Nam An Khánh kéo dài từ HH1 đến HH6. Trong đó:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-amber-800">
                <li>
                  <strong className="text-amber-900">HH1:</strong> Đã được Phúc Hà xây dựng chung cư The Victory (hiện đã xây dựng xong 2 tòa trên tổng số 5 tòa).
                </li>
                <li>
                  <strong className="text-amber-900">HH6:</strong> Được Sông Đà Hoàng Long xây dựng Chung cư Golden An Khánh (đã hoàn thiện xong 2 tòa và 3 tòa còn lại đang trong quá trình thi công phần thân).
                </li>
              </ul>

              <p className="text-amber-800 mb-4">
                Sau khi thu hồi đất nông nghiệp phục vụ dự án, người dân địa phương được đền bù đất dịch vụ thuộc phạm vi 4 làng bao gồm: <strong className="text-amber-900">Vân Lũng, An Thọ, Yên Lũng, Phú Vinh</strong>.
              </p>

              <p className="text-amber-800 mb-3 font-semibold">
                Tiện ích & Hạ tầng dịch vụ hiện tại:
              </p>
              <p className="text-amber-800 mb-4">
                Hiện tại, khu đất dịch vụ Vista Nam An Khánh đã hoàn thành hạ tầng đồng bộ (do Vingroup làm chủ đầu tư xây dựng). Hệ thống tiện ích này là dùng chung cho toàn bộ khu đô thị, do đó cư dân bên ngoài Vinhomes vẫn được thừa hưởng đầy đủ:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2 text-amber-800">
                <li>
                  <strong className="text-amber-900">Đại siêu thị WinMart:</strong> Tọa lạc ngay tại tầng 1 của chung cư Golden An Khánh, đáp ứng trọn vẹn nhu cầu mua sắm của cư dân.
                </li>
                <li>
                  <strong className="text-amber-900">Trường học liên cấp Vinschool:</strong> Nằm ở vị trí ngay phía sau Trạm Xá và đang trong những bước hoàn thiện cuối cùng.
                </li>
              </ol>

              <img 
                src="https://bietthulienke.info/pl/img/26/nam-an-khanh-tien-ich.jpg" 
                alt="Tiện ích Vista Nam An Khánh" 
                className="w-full rounded-xl shadow-lg" 
              />
              <p className="text-center text-amber-700 italic mt-4 font-medium">
                Tiện ích và các khu đô thị lân cận
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SẢN PHẨM NỔI BẬT */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Bộ sưu tập sản phẩm</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>

        {/* Gallery */}
        <div className="space-y-8 mb-10">
          <div className="bg-white rounded-2xl p-3 shadow-lg border border-yellow-100 group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-3">
              <img src="/VistaNamAnKhanh/bietthudonlap.jpg" alt="Biệt thự đơn lập" className="w-full h-auto" />
            </div>
            <p className="text-center text-amber-900 font-bold text-lg">Biệt thự Đơn lập</p>
          </div>
          <div className="bg-white rounded-2xl p-3 shadow-lg border border-yellow-100 group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-3">
              <img src="/VistaNamAnKhanh/bietthusonglap.jpg" alt="Biệt thự song lập" className="w-full h-auto" />
            </div>
            <p className="text-center text-amber-900 font-bold text-lg">Biệt thự Song lập</p>
          </div>
          <div className="bg-white rounded-2xl p-3 shadow-lg border border-yellow-100 group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-3">
              <img src="/VistaNamAnKhanh/maunhavuon.jpg" alt="Nhà liền kề sân vườn" className="w-full h-auto" />
            </div>
            <p className="text-center text-amber-900 font-bold text-lg">Liền kề Sân vườn</p>
          </div>
          <div className="bg-white rounded-2xl p-3 shadow-lg border border-yellow-100 group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-3">
              <img src="/VistaNamAnKhanh/nhalienke.jpg" alt="Shophouse" className="w-full h-auto" />
            </div>
            <p className="text-center text-amber-900 font-bold text-lg">Shophouse Thương mại</p>
          </div>
        </div>

        {/* Chi tiết Biệt thự */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-10">
          <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg">✧</span>
            Biệt thự Tôn quý
          </h3>
          
          <p className="text-amber-800 mb-4 text-lg">
            Biệt thự Nam An Khánh là sản phẩm đắt giá của SJ Group nhờ lợi thế giao thông vô cùng thuận tiện. Phân khu chạy dọc theo Đại lộ Thăng Long – trục giao thông trọng điểm Tây Hà Nội, kết nối trực tiếp nội đô tới trung tâm công nghệ cao Hòa Lạc và các tỉnh Tây, Tây Bắc.
          </p>
          
          <p className="text-amber-800 mb-3 text-lg font-medium">Thiết kế đa dạng với các dòng sản phẩm cao cấp, sang trọng:</p>
          <ul className="list-disc pl-6 space-y-2 text-amber-800 mb-8 text-lg">
            <li><strong>Biệt thự nhà vườn:</strong> Diện tích từ 210 – 483m²</li>
            <li><strong>Biệt thự đơn lập:</strong> Diện tích từ 400 – 700m²</li>
            <li><strong>Biệt thự song lập:</strong> Diện tích từ 355 – 681m²</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820255.jpg" className="w-full rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300" alt="Biệt thự Nam An Khánh" />
            <img src="https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820251jpg.jpg" className="w-full rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300" alt="Biệt thự Nam An Khánh" />
          </div>
        </div>

        {/* Chi tiết Shophouse & Liền kề */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Shophouse */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg">✧</span>
              Shophouse Phồn hoa
            </h3>
            
            <p className="text-amber-800 mb-4">
              Dự án cung cấp khoảng <strong>584 căn</strong> Shophouse cao 4 tầng (diện tích dao động 129 – 212m²) với kiến trúc Tây Ban Nha và Italia cổ điển, sang trọng nhưng vẫn mang nét hiện đại.
            </p>
            
            <p className="text-amber-800 mb-6">
              Sở hữu vị trí trên các trục đường lớn, Shophouse được thiết kế tối ưu với mặt bằng kinh doanh rộng rãi ở <strong>tầng 1, 2, 3</strong> và không gian sinh hoạt ở <strong>tầng 4</strong>. Đây là những tuyến phố buôn bán sôi động, hứa hẹn cơ hội sinh lời vượt trội xứng tầm chủ nhân.
            </p>
            
            <img src="https://bietthulienke.info/pl/img/59/shophouse_nam_an_kh%C3%A1nh_0820251.jpg" className="w-full rounded-xl shadow-md mt-auto hover:shadow-xl transition-shadow duration-300" alt="Shophouse Nam An Khánh" />
          </div>
          
          {/* Liền kề */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg">✧</span>
              Liền kề Sân vườn
            </h3>
            
            <p className="text-amber-800 mb-4">
              Điểm đột phá của khu đô thị với lợi thế cách Trung tâm Hội nghị Quốc gia chỉ <strong>4,5km</strong>. Nằm trải dài 2km trên Đại lộ Thăng Long, việc di chuyển vào trung tâm thành phố chỉ mất khoảng <strong>20 – 25 phút</strong>.
            </p>
            
            <p className="text-amber-800 mb-6">
              Tiếp giáp hàng loạt KĐT đẳng cấp như: Geleximco, Hà Đô Charm Villas, Vinhomes Smart City, Splendora... Phân khu hội tụ đầy đủ thiết kế hiện đại và dịch vụ giải trí đỉnh cao, là sự lựa chọn hoàn hảo cho các khách hàng có tiềm lực tài chính tốt.
            </p>
            
            <img src="https://bietthulienke.info/pl/img/59/Li%E1%BB%81n_k%E1%BB%81_Nam_an_kh%C3%A1nh_0820251.jpg" className="w-full rounded-xl shadow-md mt-auto hover:shadow-xl transition-shadow duration-300" alt="Liền kề sân vườn Nam An Khánh" />
          </div>
          
        </div>
      </section>

      {/* TIỆN ÍCH */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Tiện ích Đặc quyền</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>
        
        <div className="space-y-10">
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-4">
            <img src="/VistaNamAnKhanh/tienichintro.jpg" alt="Đơn vị vận hành Savills" className="w-full rounded-xl shadow-md mb-3" />
            <p className="text-center text-amber-900 font-bold">Savills - Đối tác quản lý vận hành chuẩn Quốc tế</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-4">
            <img src="/VistaNamAnKhanh/tienichchung.jpg" alt="Tiện ích chung" className="w-full rounded-xl shadow-md mb-3" />
            <p className="text-center text-amber-900 font-bold">Hệ sinh thái tiện ích toàn diện</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-4">
            <img src="/VistaNamAnKhanh/tienich.jpg" alt="Tiện ích Vista Nam An Khánh" className="w-full rounded-xl shadow-md mb-3" />
            <p className="text-center text-amber-900 font-bold">Trải nghiệm sống thượng lưu mỗi ngày</p>
          </div>
        </div>
      </section>

      {/* CHÍNH SÁCH BÁN HÀNG */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Chính sách Bán hàng</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-4">
          <img src="/VistaNamAnKhanh/chinhsachbanhang.jpg" alt="Chính sách bán hàng Vista Nam An Khánh" className="w-full rounded-xl shadow-md" />
        </div>
      </section>

  
    </div>
  );
}