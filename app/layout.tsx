import type { Metadata } from "next";
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
  title: "Future Logistics",
  description: "Future logistics",
  openGraph: {
    title: "Future Logistics",
    description: "Future Logistics",
    url: "https://futurelogistics.se",
    siteName: "Future Logistics",
    images: [
      {
        url: "https://futurelogistics.se/hero_image.JPG",
        width: 1200,
        height: 630,
        alt: "Preview image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
