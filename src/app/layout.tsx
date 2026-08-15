import type { Metadata, Viewport } from "next";
import {
  Plus_Jakarta_Sans,
  Inter,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { profile, education, skills } from "@/lib/data";
import { siteUrl, keywords } from "@/lib/seo";
import { SiteHeader } from "@/components/nav";
import { SiteFooter } from "@/components/chrome";
import { Animations } from "@/components/animations";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { ScrollSidebar } from "@/components/scroll-sidebar";
import { MobileBottomNav } from "@/components/mobile-nav";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
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

// Theme script to avoid hydration flash (dark mode default for cyber violet aesthetic)
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      if (stored === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScrollProvider>
          <Animations />
          <ScrollSidebar />
          <MobileBottomNav />
          <SiteHeader />
          <main id="top" className="flex-1 pb-16 lg:pb-0">{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
