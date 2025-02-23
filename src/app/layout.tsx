import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";
import { QueryProvider } from "@/components/query-client-provider";
//import { Footer } from "@/components/footer";

const oldTypwriter = localFont({
  src: "../fonts/lucky typewriter.ttf",
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
      <head>
        <meta name="theme-color" content="#c40330" />
        <meta name="msapplication-navbutton-color" content="#c40330" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#c40330" />
      </head>
      <body
        className={`${oldTypwriter.className} antialiased bg-black text-white`}
      >
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
