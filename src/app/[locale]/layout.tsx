import { Open_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {setRequestLocale} from 'next-intl/server';
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./../globals.scss";

const heebo = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="zhanda.dev" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="google-site-verification" content="9uC-dOThG2blBEVeSDS4B_mK0dbeLMLoy75bFrJIg5A" />
        <meta name="yandex-verification" content="2251d91dd91fb1d5" />
      </head>
      <body className={heebo.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
