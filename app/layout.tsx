
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ağaçören Ev Yemekleri - Geleneksel Lezzetler",
  description: "Ağaçören'de ev yapımı yemekler. Geleneksel Türk mutfağı, günlük taze menüler. Sipariş: 0545 282 97 34",
  keywords: "ağaçören ev yemekleri, aksaray ev yemekleri, geleneksel türk mutfağı, ev yapımı yemek siparişi",
  authors: [{ name: "Ağaçören Ev Yemekleri" }],
  openGraph: {
    title: "Ağaçören Ev Yemekleri - Geleneksel Lezzetler",
    description: "Ağaçören'de ev yapımı yemekler. Geleneksel Türk mutfağı, günlük taze menüler.",
    url: "https://agacorenevyemekleri.com",
    siteName: "Ağaçören Ev Yemekleri",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://agacorenevyemekleri.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <Head>
  <meta name="google-adsense-account" content="ca-pub-4575620319903211" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575620319903211"
        crossOrigin="anonymous"
      ></script>
    </Head>
return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
