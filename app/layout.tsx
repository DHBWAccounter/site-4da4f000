import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Association Switzerland",
  description: "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486215439062-YZIDK4S304980M1UUWGH/favicon.ico?format=100w" />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}