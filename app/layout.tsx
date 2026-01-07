import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Gradientflo - Learning Infrastructure for Engineering Teams",
  description:
    "Transform code activities into learning moments. Gradientflo identifies growth areas and supports improvement.",
  keywords: [
    "learning platform",
    "engineering teams",
    "developer tools",
    "AI learning",
    "code education",
  ],
  authors: [{ name: "Gradientflo" }],
  openGraph: {
    title: "Gradientflo - Learning Infrastructure for Engineering Teams",
    description:
      "Transform code activities into learning moments. Gradientflo identifies growth areas and supports improvement.",
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
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

