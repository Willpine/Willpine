import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

import "../css/background.css";
import "../css/globals.css";

const geistSans = localFont({
  src: "../fonts/geist/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/geist/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pinefolio",
  description: "Site Portfolio de Dev_Yuiti",
  icons: {
    icon: '/imgs/icon200x200.jpg',
    shortcut: '/imgs/icon200x200.jpg',
    apple: '/imgs/icon200x200.jpg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased layoutContainer`}
      >
        <div className="bg-black h-8 grid grid-cols-2">
          <Link href={"/"} className="text-white">
            Dev_Will Portfolio
          </Link>
          <Link href="/blog" className="text-white">
            Blog (Under Construction🏗️)
          </Link>
        </div>

        {children}
      </body>
    </html>
  );
}
