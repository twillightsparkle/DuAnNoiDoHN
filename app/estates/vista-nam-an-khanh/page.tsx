import Image from "next/image";
import Link from "next/link";
import { vistaNamAnKhanh } from "../properties/vista-nam-an-khanh";

export default function VistaNamAnKhanhPage() {
  return (
    <div className="space-y-10">
      <Link href="/estates" className="text-sm font-medium text-amber-800 hover:text-amber-950">
        Back to projects
      </Link>

      <section className="grid gap-8 rounded-[2rem] border border-amber-200 bg-white p-6 shadow-[0_18px_60px_rgba(120,73,12,0.12)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <Image
              src="/VistaNamAnKhanh/vistalogo.png"
              alt="Vista Logo"
              width={96}
              height={96}
              className="h-16 w-16 rounded-2xl border border-amber-200 bg-amber-50 object-contain p-2"
            />
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                Project profile
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-amber-950">
                {vistaNamAnKhanh.name}
              </h1>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-amber-100 bg-amber-50">
            <Image
              src={vistaNamAnKhanh.heroImage}
              alt={vistaNamAnKhanh.heroAlt}
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="max-w-3xl text-base leading-7 text-amber-900/75">
            {vistaNamAnKhanh.description}
          </p>
        </div>

        <aside className="space-y-4 rounded-[1.5rem] border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-5">
          <div>
            <p className="text-sm text-amber-700">Location</p>
            <p className="mt-1 text-base leading-7 text-amber-950/85">{vistaNamAnKhanh.location}</p>
          </div>
          <div>
            <p className="text-sm text-amber-700">Overview</p>
            <p className="mt-1 text-base leading-7 text-amber-950/85">{vistaNamAnKhanh.overview}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {vistaNamAnKhanh.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-amber-200 bg-white p-4">
                <p className="text-sm text-amber-700">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-amber-950">{stat.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-lg shadow-amber-950/5">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-amber-700" />
          <h2 className="text-2xl font-semibold text-amber-950">Key highlights</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {vistaNamAnKhanh.highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900/80">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-amber-700" />
          <h2 className="text-2xl font-semibold text-amber-950">Product types</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {vistaNamAnKhanh.featureCards?.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[1.5rem] border border-amber-200 bg-white shadow-lg shadow-amber-950/5">
              <div className="aspect-[4/3] bg-amber-50">
                <Image src={card.image} alt={card.alt} width={1200} height={800} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-lg font-semibold text-amber-950">{card.title}</h3>
                <p className="text-sm leading-6 text-amber-900/70">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-950 via-amber-900 to-yellow-700 p-6 text-amber-50 shadow-xl shadow-amber-950/10">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/80">Visual gallery</p>
            <h2 className="text-2xl font-semibold">Detailed site images and connection maps</h2>
            <p className="max-w-2xl text-sm leading-6 text-amber-50/85">
              {vistaNamAnKhanh.cta}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {vistaNamAnKhanh.gallery.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                <Image src={image.src} alt={image.alt} width={900} height={600} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {vistaNamAnKhanh.video ? (
        <section className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-lg shadow-amber-950/5">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-amber-700" />
            <h2 className="text-2xl font-semibold text-amber-950">Project video</h2>
          </div>
          <div className="w-full rounded-[1.5rem] border border-amber-200 overflow-hidden">
            <iframe
              className="w-full h-[540px] md:h-[360px] lg:h-[480px]"
              src="https://www.youtube.com/embed/mwQbFEFaFVs?si=lX1riM7jNcOTympW"
              title="Project video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}
    </div>
  );
}