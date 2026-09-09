import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Algofort — AI, Custom Software & Digital Transformation",
  description:
    "Algofort is a technology and digital solutions agency helping businesses turn ideas into scalable digital products. From AI and custom software to web, mobile, eCommerce and digital marketing, Algofort combines technology, creativity and business strategy to build solutions that drive growth.",
  icons: {
    icon: "/images/69463c322b61779ed353fc3c_Barreau_du_Quebec_logo%201.svg",
    apple: "/images/69463c3519f1d4d15787429f_Barreau_du_Quebec_logo%202.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Nunito+Sans:ital,opsz,wght@0,6..12,300..700;1,6..12,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Critical animation libs — load before interactive so GSAP is ready when algofort_script runs */}
        <Script src="/js/gsap.js" strategy="beforeInteractive" />
        <Script src="/js/gsap-split-text.js" strategy="beforeInteractive" />
        <Script src="/js/gsap-scroll-trigger.js" strategy="beforeInteractive" />
        <Script src="/js/lenis.js" strategy="beforeInteractive" />
        {/* Main app script — after interactive allows the page to paint first, then animate */}
        <Script src="/js/algofort_script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
