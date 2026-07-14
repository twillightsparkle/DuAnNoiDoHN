import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { estates } from "./estates/data";

const bannerSlides = [
  {
    name: estates[0].name,
    badge: estates[0].badge,
    src: estates[0].heroImage,
    alt: estates[0].heroAlt,
  },
  {
    name: estates[1].name,
    badge: estates[1].badge,
    src: estates[1].heroImage,
    alt: estates[1].heroAlt,
  },
  {
    name: estates[0].name,
    badge: estates[0].badge,
    src: estates[0].gallery[0].src,
    alt: estates[0].gallery[0].alt,
  },
  {
    name: estates[1].name,
    badge: estates[1].badge,
    src: estates[1].gallery[0].src,
    alt: estates[1].gallery[0].alt,
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplayTimerRef = useRef<number | null>(null);

  const restartAutoplay = () => {
    if (autoplayTimerRef.current !== null) {
      window.clearInterval(autoplayTimerRef.current);
    }

    autoplayTimerRef.current = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % bannerSlides.length);
    }, 7000);
  };

  useEffect(() => {
    restartAutoplay();

    return () => {
      if (autoplayTimerRef.current !== null) {
        window.clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + bannerSlides.length) % bannerSlides.length);
    restartAutoplay();
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % bannerSlides.length);
    restartAutoplay();
  };

  return (
    <div className="space-y-12">
      <section className="group relative overflow-hidden rounded-[2rem] border border-amber-200 bg-black shadow-[0_18px_60px_rgba(120,73,12,0.18)]">
        <div className="relative aspect-[16/9] min-h-[28rem] lg:min-h-[38rem]">
          {bannerSlides.map((slide, index) => {
            const isActive = index === activeSlide;

            return (
              <div
                key={`${slide.name}-${slide.src}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/25" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
                  <div className="max-w-xl rounded-2xl bg-black/40 px-4 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white/75">
                      {slide.badge}
                    </p>
                    <h1 className="mt-1 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                      {slide.name}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="absolute right-4 top-4 flex gap-2 sm:right-6 sm:top-6">
            {bannerSlides.map((slide, index) => (
              <button
                key={`${slide.name}-dot-${slide.src}`}
                type="button"
                aria-label={`Show slide for ${slide.name}`}
                onClick={() => {
                  setActiveSlide(index);
                  restartAutoplay();
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={showPreviousSlide}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-white/20 bg-black/40 p-3 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 group-hover:opacity-100 sm:left-6"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={showNextSlide}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-white/20 bg-black/40 p-3 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 group-hover:opacity-100 sm:right-6"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
              />
            </svg>
          </button>
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
