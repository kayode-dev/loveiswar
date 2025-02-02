import type { Metadata } from "next";
import { UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const unifrakturMaguntia = UnifrakturMaguntia({
  weight: ["400"],
  subsets: ["latin"],
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
      <body className={`${unifrakturMaguntia.className} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
