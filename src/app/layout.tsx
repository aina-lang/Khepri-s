// layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "../components";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { Toaster } from "react-hot-toast";
import { cn } from "../lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krepri-Service",
  description: "Khepri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-[100dvh] bg-grey-100 dark:bg-secondary-500 antialiased font-sans] duration-100 transition-all", inter.className)}>
        <SplashScreen />
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
