import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://philip-nilsson.vercel.app'),
  title: "Philip Nilsson, IT Specialist in Älmhult | Full-Stack Dev & Automation",
  description: "Portfolio of Philip Nilsson, an IT Support Specialist based in Älmhult. Focusing on custom full-stack solutions, Python automation for IT tooling, and complex data modeling.",
  alternates: {
    canonical: 'https://philip-nilsson.vercel.app/',
  },
  keywords: [
    // PRIMARY IDENTIFIERS
    'Philip Nilsson Älmhult',
    'Philip Nilsson IT',
    
    // DIFFERENTIATING LOCAL TERMS
    'Philip Nilsson Häradsbäck',        // Football affiliation
    'Philip Nilsson Bråthult',         // School affiliation
    
    // PROFESSIONAL SKILLS
    'System Support Specialist',
    'Full-Stack Developer',
    'Python Automation',
    'IT Automation',
    'Älmhult Developer',
  ],
  authors: [{ name: 'Philip Nilsson' }],
  openGraph: {
    title: "Philip Nilsson | System Support Specialist & Full-Stack Developer",
    description: "Focusing on custom full-stack solutions, Python automation for IT tooling, and complex data modeling to streamline system performance and workflow.",
    url: 'https://philip-nilsson.vercel.app/',
    siteName: "Philip's Portfolio",
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Philip Nilsson Portfolio Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // --- TWITTER CARD TAGS for Twitter/X Sharing ---
  twitter: {
    card: 'summary_large_image', // Use summary_large_image for a better visual
    title: "Philip Nilsson | System Support Specialist & Full-Stack Developer",
    description: "Portfolio of a Support Specialist who codes: Focusing on custom full-stack solutions, Python automation for IT tooling.",
    images: ['/og-image.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
