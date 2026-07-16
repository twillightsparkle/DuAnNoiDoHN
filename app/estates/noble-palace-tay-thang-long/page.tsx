import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* ============================================================ */}
      {/* SECTION: Trang chủ (Home) */}
      {/* ============================================================ */}
      <main id="home" className="relative">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-amber-900 mb-8 leading-tight">
              NOBLE PALACE
              <span className="block text-yellow-600 text-3xl sm:text-5xl mt-2">
                TÂY THĂNG LONG
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          </div>

          {/* Introduction Section */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl text-amber-800 mb-8 leading-relaxed text-justify">
                  Noble Palace Tây Thăng Long là <span className="font-bold">đô thị thấp tầng hàng hiệu (Branded Residences) đầu tiên của Hà Nội</span>,
                  nơi nghệ thuật chạm đến tầm cao, nằm trong bộ sưu tập nhà phố thương mại, biệt thự và dinh thự hàng hiệu Noble Palace của NOBLE Group.
                  Dự án cũng là <span className="font-bold">thành phố thông minh tiên phong ứng dụng công nghệ AI tối đa</span> trong quản lý đô thị,
                  sánh ngang tầm với những thành phố danh tiếng của thế giới.
                </p>
              </div>
            </div>
          </div>
          {/* Video Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                VIDEO GIỚI THIỆU DỰ ÁN
              </h2>
            </div>
            <div className="p-8">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/AbHgreR47No?si=WtsDZvPm_7tjs8pz"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="mt-16 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
              <Image
                src="/noblepalaceTayThangLong/1.jpg"
                alt="Noble Palace Tây Thăng Long"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
              <Image
                src="/noblepalaceTayThangLong/2.jpg"
                alt="Noble Palace Tây Thăng Long"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* Project Overview Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                TỔNG QUAN DỰ ÁN NOBLE PALACE TÂY THĂNG LONG
              </h2>
            </div>

            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                {/* Project Details Table */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Tên dự án</p>
                      <p className="text-lg text-amber-900 font-bold">Noble Palace Tây Thăng Long</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Tổng diện tích đất</p>
                      <p className="text-lg text-amber-900 font-bold">77 ha</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Mật độ xây dựng</p>
                      <p className="text-lg text-amber-900 font-bold">30%</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="text-sm text-amber-700 font-semibold mb-3">Vị trí dự án</p>
                    <p className="text-amber-900 leading-relaxed">
                      Mặt đường nối đường Hoàng Quốc Việt kéo dài, xã Tân Lập, huyện Đan Phượng, Hà Nội
                    </p>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="text-sm text-amber-700 font-semibold mb-3">Chủ đầu tư</p>
                    <p className="text-amber-900 leading-relaxed">
                      Liên danh Công ty Cổ phần đầu tư DIA và Công ty Cổ phần Tư vấn Đầu tư thương mại Tân Cương
                    </p>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="text-sm text-amber-700 font-semibold mb-3">Đơn vị phát triển dự án</p>
                    <p className="text-amber-900 leading-relaxed">
                      Công ty cổ phần kinh doanh Bất động sản Noble
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-yellow-200 pt-6">
                    <div>
                      <p className="text-sm text-amber-700 font-semibold mb-2">Loại hình sản phẩm</p>
                      <p className="text-amber-900 font-bold">Nhà phố thương mại, Shophouse</p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-700 font-semibold mb-2">Hình thức sở hữu</p>
                      <p className="text-amber-900 font-bold">Sổ đỏ lâu dài</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="text-sm text-amber-700 font-semibold mb-2">Số lượng sản phẩm</p>
                    <p className="text-2xl font-bold text-yellow-600">2,448 sản phẩm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 District Sections */}
          <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 text-center mb-4">
              Quy Mô Dự Án: 4 Phân Khu Tinh Hoa
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Legacy */}
              <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Phân Khu A</h3>
                <p className="text-lg font-semibold text-yellow-600 text-center">Legacy</p>
                <p className="text-amber-700 leading-relaxed mt-4 text-center">
                  Khu vực tinh tế mang đậm dấu ấn kiến trúc cổ điển, kết hợp hài hòa với hiện đại
                </p>
              </div>

              {/* Century */}
              <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Phân Khu B</h3>
                <p className="text-lg font-semibold text-yellow-600 text-center">Century</p>
                <p className="text-amber-700 leading-relaxed mt-4 text-center">
                  Biểu tượng của sự phát triển bền vững qua các thế kỷ
                </p>
              </div>

              {/* Harmony */}
              <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Phân Khu C</h3>
                <p className="text-lg font-semibold text-yellow-600 text-center">Harmony</p>
                <p className="text-amber-700 leading-relaxed mt-4 text-center">
                  Sự hòa hợp giữa con người, thiên nhiên và công nghệ
                </p>
              </div>

              {/* Victory */}
              <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Phân Khu D</h3>
                <p className="text-lg font-semibold text-yellow-600 text-center">Victory</p>
                <p className="text-amber-700 leading-relaxed mt-4 text-center">
                  Chiến thắng trong mỗi khía cạnh: thiết kế, vị trí, và đầu tư
                </p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="mt-16 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
              <Image
                src="/noblepalaceTayThangLong/3.jpg"
                alt="Noble Palace Tây Thăng Long"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
              <Image
                src="/noblepalaceTayThangLong/4.jpg"
                alt="Noble Palace Tây Thăng Long"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>


      {/* ============================================================ */}
      {/* SECTION: Sản phẩm (Shophouse Overview) */}
      {/* ============================================================ */}
      <section id="san-pham">
        <main className="relative">

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-8 leading-tight">
                Nhà Phố Thương Mại
                <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                  SHOPHOUSE
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
            </div>

            {/* Introduction Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
              <div className="px-8 py-12">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6 text-center">
                    Thiết Kế Kiến Trúc Châu Âu Sang Trọng
                  </h2>

                  <div className="space-y-6 text-amber-800 leading-relaxed text-lg">
                    <p>
                      Shophouse Noble Palace Tây Thăng Long được thiết kế <span className="font-bold">4 – 5 tầng với kiến trúc Châu Âu sang trọng</span>,
                      mặt tiền thoáng rộng, tối ưu hoá 100% phần diện tích phục vụ giao thông (thang máy, thang bộ) để ưu tiên tuyệt đối cho không gian kinh doanh
                      và có thể an cư.
                    </p>

                    <p>
                      Với diện tích sử dụng đa dạng (<span className="font-bold">từ 150m² đến 600m²</span>), các căn shophouse tại Noble Palace Tây Thăng Long
                      vừa là chốn an cư thanh bình, tiện nghi; vừa là <span className="font-bold">địa chỉ kinh doanh sinh lời bền vững</span> của gia chủ,
                      với khả năng vượt trội về dòng tiền, tính thanh khoản hấp dẫn, tạo nên hấp lực mạnh mẽ với thị trường bất động sản thấp tầng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Shophouse Images */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8">
                Hình Ảnh Tổng Thể Dự Án
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-200 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/overall.jpg"
                    alt="Tổng thể shophouse - Hình 1"
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-200 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/overall2.jpg"
                    alt="Tổng thể shophouse - Hình 2"
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-200 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/overall3.jpg"
                    alt="Tổng thể shophouse - Hình 3"
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Two Types of Shophouses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Elegant Shophouse */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-yellow-400 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-amber-700 to-yellow-600 px-8 py-8">
                  <h3 className="text-3xl font-bold text-white text-center">
                    Elegant Shophouse
                  </h3>
                </div>

                <div className="px-8 py-10">
                  <div className="space-y-6">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Chiều Cao</p>
                      <p className="text-2xl font-bold text-amber-900">4 Tầng</p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Số Lượng Căn</p>
                      <p className="text-2xl font-bold text-amber-900">1,496 Căn</p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-2">Tổng Diện Tích Sàn</p>
                      <p className="text-lg font-bold text-yellow-600">145m² – 372m²/căn</p>
                      <p className="text-sm text-amber-700 mt-2">Nhỏ gọn, hiệu quả kinh tế cao</p>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4 mt-6 border border-amber-200">
                      <p className="text-amber-900 font-semibold text-center">
                        Lý tưởng cho các chủ kinh doanh vừa và nhỏ, tối ưu chi phí đầu tư
                      </p>
                    </div>
                  </div>

                  <Link
                    href="#elegant-shophouse"
                    className="mt-8 block w-full bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>

              {/* Grand Shophouse */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-yellow-400 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-amber-700 to-yellow-600 px-8 py-8">
                  <h3 className="text-3xl font-bold text-white text-center">
                    Grand Shophouse
                  </h3>
                </div>

                <div className="px-8 py-10">
                  <div className="space-y-6">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Chiều Cao</p>
                      <p className="text-2xl font-bold text-amber-900">5 Tầng</p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Số Lượng Căn</p>
                      <p className="text-2xl font-bold text-amber-900">952 Căn</p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-2">Tổng Diện Tích Sàn</p>
                      <p className="text-lg font-bold text-yellow-600">211m² – 562m²/căn</p>
                      <p className="text-sm text-amber-700 mt-2">Linh hoạt cho cả sử dụng riêng và kinh doanh</p>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4 mt-6 border border-amber-200">
                      <p className="text-amber-900 font-semibold text-center">
                        Lý tưởng cho các chủ kinh doanh mong muốn không gian rộng và nhiều tầng sử dụng
                      </p>
                    </div>
                  </div>

                  <Link
                    href="#grand-shophouse"
                    className="mt-8 block w-full bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* ============================================================ */}
      {/* SECTION: Grand Shophouse */}
      {/* ============================================================ */}
      <section id="grand-shophouse">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              🌟 GRAND SHOPHOUSE 🌟
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-4">
              ĐA TẦNG GIÁ TRỊ, VẠN LỐI PHỒN VINH
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-amber-700 leading-relaxed mb-6">
                💎 <strong>Grand Shophouse</strong> tại Noble Palace Tay Thang Long - biểu tượng thịnh vượng của giới tinh hoa, nơi mỗi tầng là một công năng, mỗi không gian là một giá trị đầu tư.
              </p>
            </div>
          </div>

          {/* Grand Shophouse Images */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">📸 Hình Ảnh Grand Shophouse</h2>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/noblepalaceTayThangLong/5.jpg"
                  alt="Grand Shophouse - Hình 1"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/noblepalaceTayThangLong/6.jpg"
                  alt="Grand Shophouse - Hình 2"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Công năng từng tầng */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">Công Năng Từng Tầng</h2>
            <div className="space-y-6">
              <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 1: Không gian kinh doanh</h3>
                  <p className="text-amber-700">Mặt bằng vàng sinh lợi nhuận</p>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 2: Văn phòng / Kho</h3>
                  <p className="text-amber-700">Tối ưu vận hành</p>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  3-4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 3 & 4: Không gian sinh hoạt riêng tư</h3>
                  <p className="text-amber-700">Tiện nghi, sang trọng</p>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 5: Đa năng / Sân vườn thư giãn</h3>
                  <p className="text-amber-700">Điểm chạm cân bằng cho cuộc sống thư thái</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vị trí đắc địa */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">📍 Vị Trí Đắc Địa</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
              <p className="text-amber-700 leading-relaxed text-lg">
                <strong>Toạ lạc mặt đường Hoàng Quốc Việt kéo dài</strong> - vị trí phượng hoàng hiếm có, Noble Palace Tay Thang Long bảo chứng cho giá trị đầu tư, thanh khoản bền vững, tiềm năng tăng giá vượt trội.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-amber-900 to-yellow-800 rounded-2xl shadow-xl p-8 text-white text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg leading-relaxed">
                <strong>Quyết định đầu tư Grand Shophouse ngay hôm nay</strong> để sở hữu tài sản đa công năng, đa giá trị, sinh lời bền vững.
              </p>
            </div>
          </div>
        </main>
      </section>

      {/* ============================================================ */}
      {/* SECTION: Elegant Shophouse */}
      {/* ============================================================ */}
      <section id="elegant-shophouse">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              ✨ ELEGANT SHOPHOUSE
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-4">
              NHÀ PHỐ THÔNG MINH, 4 TẦNG ĐA CÔNG NĂNG
            </h2>
            <p className="text-lg text-amber-700 max-w-4xl mx-auto">
              Lựa chọn hoàn hảo cho các nhà đầu tư trẻ, chủ kinh doanh quy mô vừa và nhỏ hoặc mô hình vừa ở vừa kinh doanh.
            </p>
          </div>

          {/* Thông số kỹ thuật */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Thông tin sản phẩm</h2>
            <div className="space-y-4 text-amber-700">
              <div className="flex items-start">
                <span className="text-amber-500 mr-3">●</span>
                <span>Số lượng: 1.496 căn</span>
              </div>
              <div className="flex items-start">
                <span className="text-amber-500 mr-3">●</span>
                <span>Tầng cao: 4 tầng</span>
              </div>
              <div className="flex items-start">
                <span className="text-amber-500 mr-3">●</span>
                <span>Diện tích sàn từ 144,6m² - 371,1m²/căn</span>
              </div>
              <div className="flex items-start">
                <span className="text-amber-500 mr-3">●</span>
                <span>Thiết kế tối ưu, chi phí vận hành hợp lý, phù hợp nhiều mô hình khai thác như: boutique shop, lưu trú cao cấp, dịch vụ ăn uống, studio sáng tạo,...</span>
              </div>
              <div className="flex items-start">
                <span className="text-amber-500 mr-3">●</span>
                <span>Vị trí nhà phố Elegant shophouse 4 tầng: Nằm tại trục trung tâm các phân khu, có giao thông nội khu thông suốt, dễ tiếp cận công viên, clubhouse và các tiện ích chính.</span>
              </div>
            </div>
          </div>

          {/* Elegant Shophouse Images */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">📸 Hình Ảnh Elegant Shophouse</h2>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/noblepalaceTayThangLong/7.jpg"
                  alt="Elegant Shophouse - Hình 1"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/noblepalaceTayThangLong/8.jpg"
                  alt="Elegant Shophouse - Hình 2"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Thiết kế và công năng */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-amber-900 mb-4">🏠 Các Dòng Sản Phẩm Nổi Bật</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-bold text-amber-900 mb-2">Smart 4T</h4>
                  <p className="text-amber-700">Tối ưu diện tích 50-60m²</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                  <h4 className="font-bold text-amber-900 mb-2">Fastlink Plus</h4>
                  <p className="text-amber-700">Diện tích lớn, đa công năng (70m²+)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ưu điểm */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">🎯 ƯU ĐIỂM ELEGANT SHOPHOUSE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">Dễ Khai Thác</h3>
                <p className="text-amber-700 text-sm">Dễ khai thác, dễ cho thuê</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">Chi Phí Hợp Lý</h3>
                <p className="text-amber-700 text-sm">Khả năng tăng giá tốt khi hạ tầng hoàn thiện</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">Đáp Ứng Linh Hoạt</h3>
                <p className="text-amber-700 text-sm">Phù hợp người trẻ khởi nghiệp - doanh nghiệp sáng tạo</p>
              </div>
            </div>
          </div>

          {/* Chính sách bán hàng */}
          <div className="bg-gradient-to-r from-amber-900 to-yellow-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">📍 ƯU ĐÃI CHƯA TỪNG CÓ - DÀNH CHO NHÀ ĐẦU TƯ NHẠY BÉN</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">Chiết khấu 2%</span>
                </div>
                <p className="text-sm opacity-90">Khi giao dịch qua Noble App</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">Chiết khấu 10%/năm</span>
                </div>
                <p className="text-sm opacity-90">Khi thanh toán sớm</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">Miễn phí 24 tháng</span>
                </div>
                <p className="text-sm opacity-90">Quản lý vận hành</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">Hỗ trợ vay 70%</span>
                </div>
                <p className="text-sm opacity-90">Ngân hàng hỗ trợ</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">Lãi suất 0%</span>
                </div>
                <p className="text-sm opacity-90">Trong 18 tháng</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">Chiết khấu 1%</span>
                </div>
                <p className="text-sm opacity-90">ĐKTT tại Đan Phượng (cũ)</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">Chiết khấu 1,5%</span>
                </div>
                <p className="text-sm opacity-90">Khách hàng thân thiết</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:col-span-2">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="font-semibold">Tặng gian hàng điện tử</span>
                </div>
                <p className="text-sm opacity-90">Trên Noble App - hỗ trợ vay lên tới 2 tỷ đồng</p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                  <span>Sổ đỏ lâu dài, bàn giao hoàn thiện tiêu chuẩn hàng hiệu</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                  <span>Ký HĐMB ngay, giao nhà ngay (từ quý 3/2025)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                  <span>Bảng hàng hiện có trên Noble App</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* ============================================================ */}
      {/* SECTION: Tiến Độ Xây Dựng */}
      {/* ============================================================ */}
      <section id="tien-do">
        <main className="relative">

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-8 leading-tight">
                Tiến Độ Xây Dựng
                <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                  NOBLE PALACE TÂY THĂNG LONG
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
            </div>

              {/* Video Section */}
              <div className="mt-16 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                VIDEO CẬP NHẬT TIẾN ĐỘ XÂY DỰNG
                </h2>
              </div>
              <div className="p-8">
                <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/bJA8LscYG3Y?si=V6uwlFeCD6wxQ7CF"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                </div>
              </div>
              </div>
          </div>
        </main>
      </section>

      {/* ============================================================ */}
      {/* SECTION: Tiện ích tại dự án */}
      {/* ============================================================ */}
      <section id="tien-ich">
        <main className="relative">

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-8 leading-tight">
                Tiện ích tại dự án
                <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                  NOBLE PALACE TÂY THĂNG LONG
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
            </div>

            {/* Introduction Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
              <div className="px-8 py-12">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6 text-center">
                    Quản Lý Vận Hành Quốc Tế Best Western Hotels & Resorts
                  </h2>

                  <div className="space-y-6 text-amber-800 leading-relaxed text-lg">
                    <p>
                      Noble Palace Tây Thăng Long là <span className="font-bold">khu đô thị thấp tầng đầu tiên tại Hà Nội</span> được quản lý và vận hành bởi
                      <span className="font-bold"> Đơn vị vận hành thương hiệu Quốc tế là Best Western Hotels & Resorts (BWH)</span> - đơn vị quản lý vận hành
                      Khách sạn đẳng cấp Quốc tế với lịch sử hơn 70 năm hoạt động trong ngành dịch vụ Khách sạn và hiện diện tại gần 100 quốc gia và vùng lãnh thổ,
                      danh tiếng toàn cầu, chắc chắn sẽ thoả mãn được mọi nhu cầu khắt khe nhất về tận hưởng tinh hoa, mang tới những trải nghiệm đầy đủ từ nghỉ dưỡng,
                      giải trí, ẩm thực… theo mô hình <span className="font-bold">&quot;all in one&quot;</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Image */}
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300 mb-16">
              <Image
                src="/noblepalaceTayThangLong/9.png"
                alt="Tiện ích tại dự án"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main Amenities List */}
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
              <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                  Các Tiện Ích Nổi Bật
                </h2>
              </div>

              <div className="px-8 py-12">
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-4">
                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Tổ hợp 4 công viên</h3>
                        <p className="text-amber-700">Với quy mô lên tới 200ha</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Trục đại lộ thương mại</h3>
                        <p className="text-amber-700">Cùng những tuyến phố mua sắm thời thượng</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Không gian giải trí và nghệ thuật</h3>
                        <p className="text-amber-700">Đỉnh cao với những hoạt động văn hoá sôi động</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Trường học quốc tế Regal Academy</h3>
                        <p className="text-amber-700">Giáo dục chất lượng cao cho các em nhỏ</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Công viên hoàng gia Imperial Garden</h3>
                        <p className="text-amber-700">Khu vườn mang đậm dấu ấn hoàng gia châu Âu</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Tổ hợp bể bơi bốn mùa Infinity Oasis</h3>
                        <p className="text-amber-700">Ốc đảo nhiệt đới giữa lòng thành phố</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Bệnh viện quốc tế Noble Hospital</h3>
                        <p className="text-amber-700">Tuyệt phẩm y tế nghỉ dưỡng chuẩn 5 sao</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Công nghệ AI tiên phong</h3>
                        <p className="text-amber-700">Được tích hợp đồng bộ trong toàn khu đô thị</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Gallery */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8">
                Hình Ảnh Tiện Ích
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/10.jpg"
                    alt="Tiện ích - Hình 1"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/11.jpg"
                    alt="Tiện ích - Hình 2"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/12.jpg"
                    alt="Tiện ích - Hình 3"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/13.jpg"
                    alt="Tiện ích - Hình 4"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/14.jpg"
                    alt="Tiện ích - Hình 5"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/15.jpg"
                    alt="Tiện ích - Hình 6"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/16.jpg"
                    alt="Tiện ích - Hình 7"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/noblepalaceTayThangLong/17.jpg"
                    alt="Tiện ích - Hình 8"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </main>
      </section>

      {/* ============================================================ */}
      {/* SECTION: Vị Trí Kết Nối Giao Thông */}
      {/* ============================================================ */}
      <section id="vi-tri">
        <main className="relative">

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-8 leading-tight">
                Vị Trí Kết Nối Giao Thông
                <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                  NOBLE PALACE TÂY THĂNG LONG
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
            </div>

            {/* Overview Image */}
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300 mb-16">
              <Image
                src="/noblepalaceTayThangLong/18.jpg"
                alt="Vị trí kết nối giao thông"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Introduction Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
              <div className="px-8 py-12">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6 text-center">
                    Vị Trí Đắc Địa - Giao Thông Hạ Tầng Hiếm Có
                  </h2>

                  <div className="space-y-4 text-amber-800 leading-relaxed text-lg">
                    <p>
                      Noble Palace Tây Thăng Long nằm tại tọa độ <span className="font-bold">Phượng Hoàng</span>,
                      <span className="font-bold"> vị trí đắc địa với lợi thế hiếm có về giao thông hạ tầng</span>:
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Advantages */}
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
              <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                  Lợi Thế Giao Thông Hạ Tầng
                </h2>
              </div>

              <div className="px-8 py-12">
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-4">
                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Trục Thương Mại Xuyên Tâm</h3>
                        <p className="text-amber-700">Đắt giá là đường nối Hoàng Quốc Việt kéo dài, kết nối trực tiếp với các tuyến giao thông chính</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Kết Nối Huyết Mạch Giao Thông</h3>
                        <p className="text-amber-700">Nằm giữa và kết nối trực tiếp với các tuyến giao thông huyết mạch: Đường vành đai 4 và vành đai 3.5 giao cắt đại lộ Thăng Long và Quốc lộ 32</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Đại Lộ Tây Thăng Long - 10 Làn Xe</h3>
                        <p className="text-amber-700">Nằm sát Đại lộ Tây Thăng Long gồm 10 làn xe. Sau khi hoàn thiện, chỉ mất khoảng hơn 10 phút để di chuyển tới đường Võ Chí Công - Hồ Tây</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Kết Nối Công Viên Xanh</h3>
                        <p className="text-amber-700">Nằm cạnh sát công viên chuyên đề lớn nhất Hà Nội với diện tích gần 90ha và gần kề công viên mở đa chức năng rộng hơn 100ha</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8">
                Bản Đồ Vị Trí Dự Án
              </h2>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/noblepalaceTayThangLong/19.jpg"
                  alt="Bản đồ vị trí Noble Palace Tây Thăng Long"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6">
                  Khám Phá Tiện Ích Tuyệt Vời
                </h2>
                <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
                  Trải nghiệm cuộc sống đẳng cấp tại Noble Palace Tây Thăng Long với những tiện ích hiện đại và toàn diện
                </p>
                <a
                  href="tel:0984704988"
                  className="inline-block bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  Liên Hệ Ngay: <span className="inline">0984 704 988</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>
      
      
    </div>
  );
}
