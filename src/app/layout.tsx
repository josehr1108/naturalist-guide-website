import type { Metadata } from "next";
import Image from "next/image";
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
    "Raul Obregon",
    "Birdman CR",
  ],
  authors: [{ name: "Raul Obregon Birdman CR" }],
  creator: "Raul Obregon Birdman CR",
  publisher: "Raul Obregon Birdman CR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://raulobregonbirdmancr.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raul Obregon Birdman CR - Authentic Wildlife Adventures",
    description:
      "Embark on unique adventures in Costa Rica's tropical forests, exotic birds, and breathtaking landscapes. Birdwatching tours, night walks, and national park explorations for nature lovers.",
    url: "https://raulobregonbirdmancr.com",
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
              url: "https://raulobregonbirdmancr.com",
              logo: "https://raulobregonbirdmancr.com/images/logo-no-bg.png",
              description:
                "Authentic wildlife adventures and naturalist tours in Costa Rica",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+506 87434489",
                contactType: "Personal Phone Number",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/raul.obregonhernandez",
                "https://www.instagram.com/raul_obregon_birdmancr",
              ],
            }),
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <SiteFooter />
        <a
          href="https://wa.me/50687434489"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Let's chat on WhatsApp"
          style={{
            position: "fixed",
            right: "2rem",
            bottom: "1rem",
            zIndex: 9999,
          }}
        >
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp logo"
            width={56}
            height={56}
          />
        </a>
      </body>
    </html>
  );
}
