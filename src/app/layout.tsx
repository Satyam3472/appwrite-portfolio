import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppBackground } from "./components/app-background";
import { ThemeProvider } from "./components/theme-provider";
import { portfolioData } from "./portfolio-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${portfolioData.personalInfo.website}`),
  title: `${portfolioData.personalInfo.name} — ${portfolioData.personalInfo.title} | Portfolio`,
  description: portfolioData.personalInfo.objective,
  keywords: [
    portfolioData.personalInfo.name,
    portfolioData.personalInfo.title,
    ...portfolioData.skills.frontEnd,
    ...portfolioData.skills.backEnd,
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: portfolioData.personalInfo.name, url: `https://${portfolioData.personalInfo.website}` }],
  creator: portfolioData.personalInfo.name,
  publisher: portfolioData.personalInfo.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${portfolioData.personalInfo.website}`,
    title: `${portfolioData.personalInfo.name} — ${portfolioData.personalInfo.title}`,
    description: portfolioData.personalInfo.shortBio,
    siteName: `${portfolioData.personalInfo.name} Portfolio`,
    images: [
      {
        url: `https://${portfolioData.personalInfo.website}/og-image.png`, // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: `${portfolioData.personalInfo.name} — Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personalInfo.name} — ${portfolioData.personalInfo.title}`,
    description: portfolioData.personalInfo.shortBio,
    images: [`https://${portfolioData.personalInfo.website}/og-image.png`],
    creator: "@ksatyam", // Maintain hardcoded if not in data, or add to data interface
  },

  alternates: {
    canonical: `https://${portfolioData.personalInfo.website}`,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personalInfo.name,
    jobTitle: portfolioData.personalInfo.title,
    url: `https://${portfolioData.personalInfo.website}`,
    sameAs: [
      portfolioData.personalInfo.linkedin,
      portfolioData.personalInfo.github,
    ],
    description: portfolioData.personalInfo.shortBio,
    knowsAbout: [
      ...portfolioData.skills.frontEnd,
      ...portfolioData.skills.backEnd,
      ...portfolioData.skills.toolsFrameworks,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AppBackground>{children}</AppBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
