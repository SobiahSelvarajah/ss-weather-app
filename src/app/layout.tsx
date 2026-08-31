import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Weather App",
  description: "A responsive weather app with 5-day forecasts, weather-based activities and Spotify music recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
