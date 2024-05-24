import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsBackground from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
// import Navbar from "@/components/main/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsBackground />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
