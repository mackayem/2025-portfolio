import { Geist, Geist_Mono } from "next/font/google";
import { Domine } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontdomine = Domine({
  variable: '--font-domine',
  subsets: ['latin'],
});

export const metadata = {
  title: "Emily Mackay",
  description: "Front-end web developer based in Vancouver, BC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontdomine.variable} ${fontdomine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
