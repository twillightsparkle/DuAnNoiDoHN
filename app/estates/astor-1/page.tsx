const basePath = ""; // Adjust this to your repository name if needed

export default function Home() {
  return (
    <div>
      {/* TỔNG QUAN */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Tổng quan Astor 1</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-amber-900">Sống tự do giữa kỳ quan biểu tượng</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mb-6 rounded-full"></div>
          
          <p className="text-amber-800 mb-4 leading-relaxed">
            Một chân trời mới đầy kiêu hãnh xuất hiện, biểu tượng thời đại mới của Hà Nội. Giới thượng lưu ở các đại đô thị luôn chọn dịch chuyển tới những quần thể đô thị giàu tiềm năng, được quy hoạch đầu tư bài bản, định hình tầm vóc sống quốc tế và thời thượng với tầm nhìn trở thành vùng sống UPTOWN đại diện cho trung tâm của tương lai.
          </p>
          <p className="text-amber-800 mb-6 leading-relaxed">
            Vùng sống Uptown mới đang ngày càng rõ nét tại Ciputra. Giữa 65 hecta không gian xanh và cảnh quan, hệ tiện ích thượng lưu hoàn chỉnh và sự hiện diện của những quần thể quy mô như VietinBank Tower và Sunshine Empire cùng các tổ hợp cao cấp lân cận, khu vực này đang bước vào một chương mới khi Astor 1 song hành cùng hai tòa 68 & 48 tầng VietinBank Tower, cùng kiến tạo quần thể cao tầng nổi bật trên đường chân trời. Một quần thể landmark biểu tượng đang thành hình, một chất sống Uptown ngày càng rõ nét trên miền đất thượng lưu Ciputra.
          </p>
          <img src={`${basePath}/Astor-1/1.jpg`} alt="Tổng quan Astor 1" className="w-full rounded-xl shadow-inner mb-4 aspect-video object-cover" />
          <p className="text-center text-amber-700 italic font-medium">Astor 1 - IA25 Ciputra</p>
        </div>

        {/* Thông tin dự án Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-5">
            <h3 className="text-2xl font-bold text-white text-center tracking-wide uppercase drop-shadow-md">Thông tin dự án Astor 1</h3>
          </div>
          <div className="p-8 text-amber-800 text-lg">
            <p className="mb-6 font-medium">Astor 1 là tòa căn hộ mới hiếm hoi được phát triển ngay trong lõi quỹ đất Khu đô thị Nam Thăng Long (Ciputra), Hà Nội, nơi mỗi giá trị được nâng tầm để kiến tạo nên một chuẩn sống biểu tượng.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Tên dự án:</strong> ASTOR 1</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Vị trí:</strong> Lô đất IA25, KĐT Nam Thăng Long – Ciputra, phường Phú Thượng, Hà Nội</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Phát triển dự án:</strong> Công ty cổ phần bất động sản PRISTIE</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Đơn vị thiết kế:</strong> Công ty cổ phần thiết kế xây dựng STELLAR</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Đơn vị quản lý vận hành:</strong> CBRE</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Tổng thầu xây dựng:</strong> Tập đoàn xây dựng DELTA</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Quy mô:</strong> 0.36 ha</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Mật độ xây dựng:</strong> 37.07%</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Kết cấu:</strong> 40 tầng nổi và 2 tầng hầm</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Cơ cấu sản phẩm:</strong> 350 căn</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Loại hình sản phẩm:</strong> BĐS nhà ở đô thị</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Khối đế thương mại:</strong> Shop thương mại, dịch vụ thương mại, tiện ích, gym, bể bơi...</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Tình trạng:</strong> Đã khởi công; giá bán, chính sách và tiến độ bàn giao cần cập nhật theo thông báo chính thức</span>
              </li>
            </ul>

            <div className="flex flex-col items-center space-y-8 mb-4">
              {["2","3"].map((imgNum) => (
              <div key={imgNum} className="w-full rounded-xl shadow-inner mt-6">
              <img 
                  src={`${basePath}/Astor-1/${imgNum}.${["3"].includes(imgNum) ? "jpg" : "png"}`} 
                  alt={`Tiện ích ${imgNum}`} 
                  className="w-full h-auto rounded-lg" />
              </div>))}
            </div>
          </div>
        </div>
      </section>

      {/* VỊ TRÍ & KẾT NỐI */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Vị trí & Kết nối giao thông</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-10">
          <p className="text-amber-800 mb-8 leading-relaxed text-lg">
            Từ dự án IA25, cư dân dễ dàng di chuyển nhanh chóng tới các trục giao thông huyết mạch của Thủ đô:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Đường Võ Chí Công:</strong> Trục kết nối thẳng ra sân bay quốc tế Nội Bài.</span>
            </div>
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Đường Phạm Văn Đồng:</strong> Tuyến vành đai quan trọng liên thông nội đô và khu vực phía Bắc Hà Nội.</span>
            </div>
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Đường Nguyễn Hoàng Tôn:</strong> Trục kết nối trực tiếp từ Hồ Tây tới ga Phú Diễn.</span>
            </div>
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Đường Nguyễn Văn Huyên kéo dài:</strong> Liên kết nhanh tới Cầu Giấy, Thanh Xuân và trung tâm hành chính mới.</span>
            </div>
            <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-yellow-100 md:col-span-2">
              <span className="text-yellow-600 text-2xl mr-3">✦</span>
              <span className="text-amber-800"><strong>Tuyến Metro số 2 (Ciputra – Trần Hưng Đạo):</strong> Dài 11km, nâng tầm khả năng kết nối giao thông công cộng trong tương lai.</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-yellow-200 hover:shadow-2xl transition-shadow">
            <img src={`${basePath}/Astor-1/4.jpg`} alt="Vị trí và Kết nối" className="w-full rounded-xl shadow-md" />
            <p className="text-center text-amber-700 italic mt-4 font-medium">Bản đồ kết nối giao thông Astor 1</p>
          </div>
        </div>
      </section>

      {/* HỆ THỐNG TIỆN ÍCH */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Hệ thống tiện ích chuẩn quốc tế</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-10">
          <p className="text-amber-800 mb-8 leading-relaxed text-lg">
            Hệ thống tiện ích của dự án Astor 1 IA25 được thiết kế theo tiêu chuẩn quốc tế mang lại không gian sống đẳng cấp:
          </p>

          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-xl border border-yellow-100 shadow-sm">
              <h4 className="text-xl font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg shadow-sm">🌿</span>
                Không gian xanh & Thể thao
              </h4>
              <p className="text-amber-800 pl-11">
                Hồ bơi Olympic dài 34 mét, phòng tập gym hiện đại rộng 3.000 m² và khu vườn xanh chiếm 40% tổng diện tích dự án.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-yellow-100 shadow-sm">
              <h4 className="text-xl font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg shadow-sm">🛍️</span>
                Mua sắm & Giải trí
              </h4>
              <p className="text-amber-800 pl-11">
                Trung tâm thương mại tại tầng thấp cung cấp đầy đủ dịch vụ nhà hàng, café, cửa hàng tiện lợi và khu vui chơi trẻ em an toàn, hiện đại.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-yellow-100 shadow-sm">
              <h4 className="text-xl font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg shadow-sm">🔒</span>
                An ninh & Công nghệ
              </h4>
              <p className="text-amber-800 pl-11">
                Hệ thống an ninh 24/7 với bảo vệ chuyên nghiệp, camera 4K phủ khắp, khóa từ thông minh và công nghệ IoT quản lý tòa nhà (Smart Building).
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-yellow-100 shadow-sm">
              <h4 className="text-xl font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg shadow-sm">⛳</span>
                Tiện ích ngoại khu
              </h4>
              <p className="text-amber-800 pl-11">
                Cư dân thừa hưởng trọn vẹn hệ sinh thái chuẩn toàn cầu của KĐT Nam Thăng Long như trường quốc tế UNIS, sân Golf tiêu chuẩn, đường dạo bộ sinh thái.
              </p>
            </div>
          </div>
        </div>

        {/* Thư viện Tiện ích */}
        <div className="flex flex-col items-center space-y-8 mb-10">
          {["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"].map((imgNum) => (
          <div key={imgNum} className="w-full bg-white rounded-xl p-2 shadow-md border border-yellow-100">
          <img 
              src={`${basePath}/Astor-1/${imgNum}.${["5", "6", "7", "9", "10", "11", "12", "13", "14"].includes(imgNum) ? "png" : "jpg"}`} 
              alt={`Tiện ích ${imgNum}`} 
              className="w-full h-auto rounded-lg" />
          </div>))}
        </div>
      </section>

      {/* CƠ CẤU SẢN PHẨM */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Cơ cấu sản phẩm</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-10 flex flex-col items-start">
          <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center mr-3 text-lg">✧</span>
            Đa dạng loại hình căn hộ
          </h3>
          <p className="text-amber-800 mb-6 text-lg">
            Dự án cung cấp các loại hình căn hộ đa dạng từ Studio đến 5 phòng ngủ và dòng căn duplex, penhouse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <span className="text-amber-800"><strong>Căn hộ tiêu chuẩn:</strong> Studio, 2PN, 3PN, 5PN – Dual key.</span>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start shadow-sm">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <span className="text-amber-800"><strong>Penthouse / VIP:</strong> 243 m² ~ 35 Tỷ (Tầm nhìn trực diện sân Golf).</span>
            </div>
          </div>
          

          <div className="flex flex-col items-center space-y-8 mb-4">
          {["15", "16", "17", "18"].map((imgNum) => (
          <div key={imgNum} className="w-full rounded-xl shadow-inner">
          <img 
              src={`${basePath}/Astor-1/${imgNum}.${["15", "16", "18"].includes(imgNum) ? "jpg" : "png"}`} 
              alt={`Tiện ích ${imgNum}`} 
              className="w-full h-auto rounded-lg" />
          </div>))}
          </div>
        </div>
      </section>

      {/* PHÁP LÝ & CHÍNH SÁCH */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 uppercase">Pháp lý & Chính sách bán hàng</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mt-4 mb-8 rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
           <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-5">
            <h3 className="text-2xl font-bold text-white text-center tracking-wide uppercase drop-shadow-md">Khung pháp lý vững chắc</h3>
          </div>
          <div className="p-8">
            <ul className="space-y-4 text-amber-800 text-lg">
              <li className="flex items-start bg-amber-50 p-4 rounded-xl border border-yellow-100">
                <span className="text-yellow-600 text-2xl mr-4 leading-none">✦</span>
                <span><strong className="text-amber-900">Quyết định phê duyệt:</strong> Quyết định số 5336/QĐ-UBND ngày 27/10/2025 của UBND TP Hà Nội.</span>
              </li>
              <li className="flex items-start bg-amber-50 p-4 rounded-xl border border-yellow-100">
                <span className="text-yellow-600 text-2xl mr-4 leading-none">✦</span>
                <span><strong className="text-amber-900">Hình thức sử dụng:</strong> Đất ở đô thị, thời hạn sử dụng lâu dài; đảm bảo điều kiện cấp sổ hồng theo quy định nhà ở thương mại.</span>
              </li>
              <li className="flex items-start bg-amber-50 p-4 rounded-xl border border-yellow-100">
                <span className="text-yellow-600 text-2xl mr-4 leading-none">✦</span>
                <span><strong className="text-amber-900">Pháp lý và Bàn giao:</strong> Sở hữu lâu dài, dự kiến bàn giao Quý 1/2029.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
           <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-5">
            <h3 className="text-2xl font-bold text-white text-center tracking-wide uppercase drop-shadow-md">Chính sách ưu đãi</h3>
          </div>
          <div className="p-8">
             <ul className="space-y-4 text-amber-800 text-lg mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Ngân hàng hỗ trợ vốn:</strong> 70% với lãi suất 0% trong 24 tháng.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Thanh toán sớm 95%:</strong> Chiết khấu 14%.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-amber-900">Thanh toán tiến độ:</strong> CK 4% và thanh toán làm 11 đợt hoặc 14 đợt tùy khách hàng chọn lựa cho đến khi nhận nhà.</span>
              </li>
            </ul>
            <div className="bg-amber-50 p-4 rounded-xl border border-yellow-100 shadow-sm flex justify-center">
                <img src={`${basePath}/Astor-1/19.jpg`} alt="Chính sách bán hàng Astor 1" className="w-full max-w-4xl rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* LIÊN HỆ */}
      <section className="max-w-6xl mx-auto px-4 py-16 mb-10">
        <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-3xl p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Thông tin liên hệ phòng kinh doanh</h3>
            <p className="text-lg mb-2 flex items-start">
              <span className="mr-3 text-yellow-400 flex-shrink-0">📍</span>
              <span><strong>Địa chỉ:</strong> Lô đất IA25, Khu đô thị Nam Thăng Long - Ciputra, phường Phú Thượng, Hà Nội.</span>
            </p>
            <p className="text-lg flex items-center">
               <span className="mr-3 text-yellow-400">📞</span>
               <strong>Hotline:</strong> 0984.704.988
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}