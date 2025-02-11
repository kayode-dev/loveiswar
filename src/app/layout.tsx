import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";
import { QueryProvider } from "@/components/query-client-provider";
//import { Footer } from "@/components/footer";

const oldTypwriter = localFont({
  src: "../fonts/Old Typewriter2.0.ttf",
  variable: "--font-old-typewriter",
});
const inter = Open_Sans({
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oldTypwriter.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
