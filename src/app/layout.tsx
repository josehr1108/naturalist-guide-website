import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./_components/NavigationBar/NavigationBar";
import SiteFooter from "./_components/SiteFooter/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raul Obregon Birdman CR - Authentic Wildlife Adventures",
  description:
    "Embark on unique adventures in Costa Rica's tropical forests, exotic birds, and breathtaking landscapes. Birdwatching tours, night walks, and national park explorations for nature lovers.",
  keywords: [
    "Costa Rica tours",
    "naturalist guide",
    "birdwatching",
    "wildlife tours",
    "ecotourism",
    "Costa Rica wildlife",
    "nature adventures",
  ],
  authors: [{ name: "Raul Obregon Birdman CR" }],
  creator: "Raul Obregon Birdman CR",
  publisher: "Raul Obregon Birdman CR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"), // TODO: replace with your email domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raul Obregon Birdman CR - Authentic Wildlife Adventures",
    description:
      "Embark on unique adventures in Costa Rica's tropical forests, exotic birds, and breathtaking landscapes. Birdwatching tours, night walks, and national park explorations for nature lovers.",
    url: "https://your-domain.com", // TODO: Replace with your actual domain
    siteName: "Raul Obregon Birdman CR",
    images: [
      {
        url: "/images/logo-no-bg.png",
        width: 1200,
        height: 630,
        alt: "Raul Obregon Birdman CR Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raul Obregon Birdman CR - Authentic Wildlife Adventures",
    description:
      "Embark on unique adventures in Costa Rica's tropical forests, exotic birds, and breathtaking landscapes.",
    images: ["/images/logo-no-bg.png"],
    creator: "@yourtwitterhandle", // TODO: Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Raul Obregon Birdman CR",
              url: "https://your-domain.com", // TODO: Replace with your actual domain
              logo: "https://your-domain.com/images/logo-no-bg.png", // TODO: Replace with your actual domain
              description:
                "Authentic wildlife adventures and naturalist tours in Costa Rica",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+506-1234-5678", // TODO: Replace with actual phone
                contactType: "Personal Phone Number",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/yourpage", // TODO: Replace with actual social links
                "https://www.instagram.com/yourpage",
                "https://twitter.com/yourhandle",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
