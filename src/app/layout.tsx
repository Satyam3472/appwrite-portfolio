import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppBackground } from "./components/app-background";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ksatyam.online"),
  title: "Kumar Satyam — Full-Stack Developer | Portfolio",
  description:
    "Portfolio of Kumar Satyam — META-certified Software Engineer with 3.8 years experience in React.js, Next.js, Node.js, TypeScript & Docker. Senior Solutions Developer at Tata Technologies building scalable apps, APIs & enterprise solutions.",
  keywords: [
    "Kumar Satyam",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "META Certified Developer",
    "Portfolio",
    "Tata Technologies",
  ],
  authors: [{ name: "Kumar Satyam", url: "https://ksatyam.online" }],
  creator: "Kumar Satyam",
  publisher: "Kumar Satyam",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ksatyam.online",
    title: "Kumar Satyam — Full-Stack Developer | Portfolio",
    description:
      "META-certified Full-Stack Developer (React, Next.js, Node.js, TypeScript). 3.8+ years experience building scalable apps, dashboards & enterprise workflows.",
    siteName: "Kumar Satyam Portfolio",
    images: [
      {
        url: "https://ksatyam.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kumar Satyam — Full-Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kumar Satyam — Full-Stack Developer | Portfolio",
    description:
      "META-certified Software Engineer specializing in React, Next.js, Node.js & scalable enterprise solutions.",
    images: ["https://ksatyam.online/og-image.png"],
    creator: "@ksatyam",
  },

  alternates: {
    canonical: "https://ksatyam.online",
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
    name: "Kumar Satyam",
    jobTitle: "Software Engineer | Full Stack Developer",
    url: "https://ksatyam.online",
    image: "https://ksatyam.online/profile.jpg",
    sameAs: [
      "https://linkedin.com/in/ksatyam4199",
      "https://github.com/Satyam3472",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Tata Technologies",
    },
    description:
      "META-certified full-stack developer with expertise in React.js, Next.js, Node.js, TypeScript, Docker, Prisma, AWS & scalable enterprise applications.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Shree Shankaracharya Group of Institutions",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "GraphQL",
      "AWS",
      "MongoDB",
      "MySQL",
      "Enterprise Solutions",
      "Frontend Engineering",
      "Full Stack Development",
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
