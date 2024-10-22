import type { Metadata } from "next";
import { Heebo } from 'next/font/google';

import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], 
});

export const metadata: Metadata = {
  title: "Portfolio blog",
  description: "This page is Zhanda's web developer portfolio blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={heebo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
