"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "The Floor Decor - Premium Furniture Manufacturing & Interior Solutions",
  description: "Leading manufacturer of custom furniture, glass work, aluminum fabrication, and iron products. Professional onsite interior design and installation services for residential and commercial spaces.",
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
      <head>
        <title>The Floor Decor - Premium Furniture Manufacturing & Interior Solutions</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Leading manufacturer of custom furniture, glass work, aluminum fabrication, and iron products. Professional onsite interior design and installation services for residential and commercial spaces." />
        <meta name="keywords" content="furniture manufacturing, custom furniture, interior design, glass work, aluminum fabrication, iron work, onsite installation, commercial interiors, residential furniture" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
