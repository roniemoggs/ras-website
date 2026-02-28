import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import ClientLayout from "./client-layout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
      <body className={`${playfair.variable} ${jetbrainsMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
