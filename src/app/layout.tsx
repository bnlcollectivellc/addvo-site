import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADDVO | Swedish IT Consultancy",
  description:
    "We're a Swedish IT consultancy built to outpace change — connecting ambitious companies with elite tech talent and tailored teams.",
  keywords: [
    "IT consultancy",
    "Sweden",
    "tech talent",
    "software development",
    "digital transformation",
  ],
  authors: [{ name: "ADDVO" }],
  openGraph: {
    title: "ADDVO | Swedish IT Consultancy",
    description:
      "We're a Swedish IT consultancy built to outpace change — connecting ambitious companies with elite tech talent and tailored teams.",
    type: "website",
    locale: "en_US",
    siteName: "ADDVO",
  },
  icons: {
    icon: "/favicon-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
