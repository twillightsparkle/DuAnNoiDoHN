import Image from "next/image";
import Link from "next/link";
import { estates } from "./data";

export default function EstatesPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-white shadow-[0_18px_60px_rgba(120,73,12,0.12)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 p-8 sm:p-10">
            <p className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
              Estate option
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-amber-950 sm:text-4xl">
              Two luxury projects, one refined presentation
            </h1>
            <p className="max-w-2xl text-base leading-7 text-amber-900/75">
              Browse the Vista Nam An Khánh and Noble Palace Tây Thăng Long
              project pages below. Each one has its own folder and simple URL so
              you can update content later without changing the site structure.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-700 p-8 text-amber-50">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-100/80">Site style</p>
              <h2 className="mt-3 text-2xl font-semibold">Brown and gold luxury theme</h2>
              <p className="mt-3 text-sm leading-6 text-amber-50/85">
                Rich gradients, rounded cards, and strong typography to match a
                royal branded-residence feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
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