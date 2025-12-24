import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nusantara Haute | Where Tradition Meets Artistry",
  description:
    "Experience the pinnacle of Indonesian fine dining. Nusantara Haute reimagines traditional cuisine through modern gastronomy, honoring the 17,000 islands of Indonesia in every dish.",
  keywords: [
    "Indonesian fine dining",
    "luxury restaurant",
    "Jakarta restaurant",
    "tasting menu",
    "Nusantara cuisine",
    "modern Indonesian",
    "chef's table",
    "fine dining experience",
  ],
  authors: [{ name: "Nusantara Haute" }],
  openGraph: {
    title: "Nusantara Haute | Where Tradition Meets Artistry",
    description:
      "A culinary journey through the soul of Indonesia. Each dish tells a story of generations, reimagined for the modern palate.",
    type: "website",
    locale: "en_US",
    siteName: "Nusantara Haute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nusantara Haute | Where Tradition Meets Artistry",
    description:
      "A culinary journey through the soul of Indonesia. Each dish tells a story of generations, reimagined for the modern palate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts - loaded via link tags for reliability */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
