import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile, education, skills } from "@/lib/data";
import { siteUrl, keywords } from "@/lib/seo";
import { SiteHeader } from "@/components/nav";
import { SiteFooter } from "@/components/chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
  keywords,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  applicationName: `${profile.name} · Portfolio`,
  category: "Human Resources",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Hari",
    lastName: "Pavan",
    title,
    description: profile.intro,
    url: siteUrl,
    siteName: `${profile.name} · Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.intro,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Person structured data (schema.org) for rich search results.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.fullName,
  jobTitle: profile.currentRole,
  worksFor: { "@type": "Organization", name: profile.currentCompany },
  alumniOf: [...new Set(education.map((e) => e.institution))].map((name) => ({
    "@type": "EducationalOrganization",
    name,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  sameAs: [profile.linkedin],
  knowsAbout: skills,
  description: profile.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteHeader />
        <main id="top" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
