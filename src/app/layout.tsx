import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velocine | Premium Creator Video Tool",
  description: "Turn long videos into viral clips without touching a timeline. The premium AI co-pilot for fast, high-quality video editing.",
  metadataBase: new URL("https://velocine.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velocine.ai",
    title: "Velocine | Premium Creator Video Tool",
    description: "Turn long videos into viral clips without touching a timeline. The premium AI co-pilot for fast, high-quality video editing.",
    siteName: "Velocine Studio",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "Velocine Studio Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocine | Premium Creator Video Tool",
    description: "Turn long videos into viral clips without touching a timeline.",
    images: ["/og-image.jpg"], // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${outfit.className} min-h-screen antialiased flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
