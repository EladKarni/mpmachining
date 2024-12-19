import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";
import { metadataConstructor } from "@/util/metadataConstructor";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = metadataConstructor();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar>
          <NavLinks />
        </Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
