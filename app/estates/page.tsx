import Image from "next/image";
import Link from "next/link";
import { estates } from "./data";

export default function EstatesPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-amber-200/80 bg-white shadow-[0_18px_60px_rgba(120,73,12,0.08)]">
    <div className="grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
      {/* Left: Project Narrative */}
      <div className="space-y-3">
        <span className="inline-flex rounded-full border border-amber-300/80 bg-amber-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
          Tổng Quan
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-amber-950 sm:text-3xl lg:text-4xl">
          Tìm Hiểu Về Dự Án
        </h1>
        <p className=" text-sm leading-relaxed text-amber-900/75 sm:text-base">
          Chúng tôi cung cấp thông tin chi tiết về các dự án bất động sản cao cấp tại Hà Nội, giúp bạn dễ dàng tìm hiểu và lựa chọn không gian sống cũng như đầu tư phù hợp với nhu cầu.
        </p>
      </div>

      {/* Right: Focused Metric Card */}
      <div className="flex shrink-0">
        <div className="w-full rounded-2xl border border-amber-900/20 bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-900 p-6 text-center text-amber-50 shadow-inner sm:w-56 sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-200/80">
            Dự Án Hiện Có
          </p>
          <p className="my-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {estates.length}
          </p>
          <p className="text-xs text-amber-200/70">
            Đang mở bán & phát triển
          </p>
        </div>
      </div>
    </div>
  </section>

      <section className="grid gap-5 md:grid-cols-3">
        {estates.map((estate) => (
          <Link
            key={estate.slug}
            href={`/estates/${estate.slug}`}
            className="group overflow-hidden rounded-[1.75rem] border border-amber-200 bg-white shadow-lg shadow-amber-950/5 transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden bg-amber-50">
              <Image
                src={estate.heroImage}
                alt={estate.heroAlt}
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-5">
              <p className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                {estate.badge}
              </p>
              <h2 className="text-2xl font-semibold text-amber-950">{estate.name}</h2>
              <p className="text-sm leading-6 text-amber-900/70">{estate.summary}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}