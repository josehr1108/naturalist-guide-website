import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nature Tours - Costa Rica Naturalist Guide",
  description:
    "Explore tropical forests, discover exotic birds, and experience Costa Rica's wildlife with expert-guided nature tours. Birdwatching, night walks, and eco-adventures.",
  keywords: [
    "Costa Rica tours",
    "nature tours",
    "birdwatching tours",
    "ecotourism Costa Rica",
    "wildlife tours",
  ],
  openGraph: {
    title: "Nature Tours - Costa Rica Naturalist Guide",
    description:
      "Explore tropical forests, discover exotic birds, and experience Costa Rica's wildlife with expert-guided nature tours.",
    url: "https://your-domain.com/tours", //TODO: Replace with your actual domain
    type: "website",
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
