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
  title: "Vista Nam An Khánh & Noble Palace Tây Thăng Long",
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
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <header className="sticky top-0 z-20 -mx-4 border-b border-amber-200/60 bg-gradient-to-r from-amber-950 via-amber-900 to-yellow-700 px-4 py-4 shadow-lg shadow-amber-950/10 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <Link href="/" className="text-lg font-semibold uppercase tracking-[0.18em] text-amber-50">
                Vista & Noble Estates
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
          <main className="flex-1 py-10">{children}</main>
          <footer className="-mx-4 mt-10 bg-gradient-to-r from-amber-950 via-amber-900 to-yellow-800 px-4 py-6 text-amber-50 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
              <p>© 2026 Vista Nam An Khánh & Noble Palace Tây Thăng Long</p>
              <p>Dự án bất động sản cao cấp tại Tây Thủ Đô</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
