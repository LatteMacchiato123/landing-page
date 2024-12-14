import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Inter } from 'next/font/google';
import "./globals.css";

// Import Inter font from Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Andhika Gama Pratama | Full-stack Developer",
  description: "Portfolio Andhika Gama Pratama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
