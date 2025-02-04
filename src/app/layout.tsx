import type { Metadata } from "next";
import { Open_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";
import { QueryProvider } from "@/components/query-client-provider";
//import { Footer } from "@/components/footer";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
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
      <body className={`${bebasNeue.variable} ${inter.variable} antialiased`}>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
