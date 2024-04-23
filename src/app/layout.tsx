"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "The Floor Decor",
  description: "We are working of glass, furniture and aluminium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, [])
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      

        </body>
    </html>
  );
}
