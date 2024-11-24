import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Angkor, Belgrano } from "next/font/google";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Saloon Game",
  description: "Generated by create next app",
};

export const angkor = Angkor({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const belgrano = Belgrano({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${angkor.className} bg-[#caa469]`}
      >
        {children}
      </body>
    </html>
  );
}
