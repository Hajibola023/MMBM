import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mmbm.shop"),

  title: {
    default: "MMBM | Premium Streetwear",
    template: "%s | MMBM",
  },

  description:
    "Premium streetwear built for dream chasers, creators, entrepreneurs, and everyone committed to the mindset.",

  keywords: [
    "MMBM",
    "Money Must Be Made",
    "premium streetwear",
    "UK streetwear",
    "streetwear clothing",
    "hoodies",
    "T-shirts",
    "fashion",
  ],

  authors: [{ name: "MMBM" }],
  creator: "MMBM",
  publisher: "MMBM",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "MMBM | Premium Streetwear",
    description:
      "Premium streetwear built for dream chasers, creators, entrepreneurs, and everyone committed to the mindset.",
    url: "https://www.mmbm.shop",
    siteName: "MMBM",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "MMBM | Premium Streetwear",
    description:
      "Premium streetwear built for dream chasers, creators, entrepreneurs, and everyone committed to the mindset.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

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
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <Navbar />

          <div className="flex-1">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}