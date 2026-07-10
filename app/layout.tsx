import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dự Án Nội Đô",
  description: "Luxury real estate marketing site for Vista Nam An Khánh and Noble Palace Tây Thăng Long.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/estates", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 z-20 border-b border-amber-200/60 bg-gradient-to-r from-amber-950 via-amber-900 to-yellow-700 px-4 py-4 shadow-lg shadow-amber-950/10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <Link href="/" className="text-lg font-semibold uppercase tracking-[0.18em] text-amber-50">
                Dự án nội đô
              </Link>
              <div className="flex items-center justify-between gap-6">
                <nav className="flex items-center gap-5 text-sm text-amber-50/90">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="hidden rounded-full border border-amber-200/40 bg-white/10 px-4 py-2 text-sm text-amber-50 md:block">
                  Hotline: 0984 704 988
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </main>
          <footer className="mt-10 bg-gradient-to-r from-amber-950 via-amber-900 to-yellow-800 px-4 py-6 text-amber-50 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
              <p>Dự án bất động sản cao cấp tại Thủ Đô</p>
              <p>Hotline: 0984 704 988</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
