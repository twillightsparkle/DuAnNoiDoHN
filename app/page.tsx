import Image from "next/image";
import Link from "next/link";
import { estates } from "./estates/data";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-white shadow-[0_18px_60px_rgba(120,73,12,0.14)]">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 p-8 sm:p-10 lg:p-12">
            <p className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
              Luxury real estate showcase
            </p>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-amber-950 sm:text-5xl">
                Two signature projects, presented in a refined gold and brown style.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-amber-900/75 sm:text-lg">
                Explore Vista Nam An Khánh and Noble Palace Tây Thăng Long with a
                simple structure, direct project pages, and a more royal visual
                language inspired by premium branded residences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/estates"
                className="rounded-full bg-gradient-to-r from-amber-700 to-yellow-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-amber-700/20 transition-transform hover:-translate-y-0.5"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-amber-300 px-5 py-3 text-sm font-medium text-amber-950 transition-colors hover:bg-amber-50"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="grid gap-0 bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-700 p-6 text-amber-50 sm:p-8">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-100/80">Project snapshot</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {estates.map((estate) => (
                  <div key={estate.slug} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                    <p className="text-sm font-semibold text-white">{estate.name}</p>
                    <p className="mt-2 text-sm leading-6 text-amber-50/85">{estate.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
              Featured estates
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-amber-950">
              Noble Palace product lines
            </h2>
          </div>
          <Link href="/estates" className="text-sm font-medium text-amber-800 hover:text-amber-950">
            See all
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
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
                <h3 className="text-2xl font-semibold text-amber-950">{estate.name}</h3>
                <p className="text-sm leading-6 text-amber-900/70">{estate.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
