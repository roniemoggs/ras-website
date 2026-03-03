import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Oswald } from "next/font/google";
import "./globals.css";
import React from "react";
import ClientLayout from "./client-layout";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radha AI Solutions | Premium AI Agency",
  description: "Bespoke AI automation, custom ML development, and intelligent agent integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${outfit.variable} ${oswald.variable}`}>
        <ClientLayout>{children}</ClientLayout>
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
