import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Raul Obregon Birdman CR",
  description:
    "Get in touch to plan your personalized nature adventure in Costa Rica. Contact an experienced naturalist guide for custom tours and wildlife experiences.",
  keywords: [
    "contact Costa Rica tours",
    "naturalist guide contact",
    "book Costa Rica tour",
    "custom nature tours",
  ],
  openGraph: {
    title: "Contact Us - Raul Obregon Birdman CR",
    description:
      "Get in touch to plan your personalized nature adventure in Costa Rica.",
    url: "https://your-domain.com/contact", //TODO: Replace with your actual domain
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
