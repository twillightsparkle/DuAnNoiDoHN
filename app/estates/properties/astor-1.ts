import type { Estate } from "../types";

const basePath = "/DuAnNoiDoHN"; // Adjust this to your repository name if needed

export const astor1: Estate = {
  slug: "astor-1",
  name: "Astor 1",
  badge: "Astor 1",
  summary: "Tòa căn hộ cao tầng tại lô IA25, khu đô thị Nam Thăng Long - Ciputra, Hà Nội.",
  description:
    "Astor 1 là dự án căn hộ cao tầng trong lõi khu đô thị Nam Thăng Long (Ciputra), được định vị như một biểu tượng sống Uptown mới của Hà Nội.",
  heroImage: `${basePath}/Astor-1/1.jpg`,
  heroAlt: "Phối cảnh dự án Astor 1",
  location: "Lô IA25, khu đô thị Nam Thăng Long - Ciputra, phường Phú Thượng, Hà Nội.",
  overview:
    "Dự án có quy mô 0,36 ha, gồm 40 tầng nổi và 2 tầng hầm với 350 căn hộ. Astor 1 được phát triển bởi PRISTIE, thiết kế bởi STELLAR và quản lý vận hành bởi CBRE.",
  stats: [
    { label: "Quy mô", value: "0,36 ha" },
    { label: "Kết cấu", value: "40 tầng + 2 hầm" },
    { label: "Sản phẩm", value: "350 căn" },
    { label: "Mật độ", value: "37,07%" },
  ],
  highlights: [
    "Vị trí trong lõi khu đô thị Nam Thăng Long - Ciputra",
    "Kết nối thuận tiện tới Võ Chí Công, Phạm Văn Đồng và sân bay Nội Bài",
    "Hệ tiện ích gồm bể bơi, phòng gym, không gian xanh và khối đế thương mại",
    "Đa dạng loại hình căn hộ từ studio đến căn hộ 5 phòng ngủ và penthouse",
  ],
  gallery: [
    { src: `${basePath}/Astor-1/2.png`, alt: "Thông tin dự án Astor 1" },
    { src: `${basePath}/Astor-1/3.jpg`, alt: "Phối cảnh Astor 1" },
    { src: `${basePath}/Astor-1/4.jpg`, alt: "Bản đồ kết nối giao thông Astor 1" },
  ],
  featureCards: [
    {
      title: "Tiện ích chuẩn quốc tế",
      text: "Bể bơi Olympic, phòng gym, khu vườn xanh và hệ tiện ích thương mại tại khối đế.",
      image: `${basePath}/Astor-1/5.png`,
      alt: "Tiện ích dự án Astor 1",
    },
    {
      title: "Căn hộ đa dạng",
      text: "Các lựa chọn từ studio, 2 phòng ngủ, 3 phòng ngủ đến căn hộ lớn và penthouse.",
      image: `${basePath}/Astor-1/15.jpg`,
      alt: "Thiết kế căn hộ Astor 1",
    },
  ],
  cta: "Nhận thông tin mặt bằng, chính sách và tiến độ của Astor 1 ngay hôm nay.",
};