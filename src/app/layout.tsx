import type { Metadata } from "next";
import { Inter, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const unifrakturMaguntia = UnifrakturMaguntia({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-unifraktur-maguntia",
});
const inter = Inter({
  weight: ["400"],
  subsets: ["greek-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Love is War",
  description: "love, turmoil and everything in between",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unifrakturMaguntia.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
