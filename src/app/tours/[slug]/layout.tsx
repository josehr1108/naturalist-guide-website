import { TOUR_LIST } from "@/app/constants/tours";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOUR_LIST.find((tour) => tour.slug === slug);

  if (!tour) {
    return {
      title: "Tour Not Found - Raul Obregon Birdman CR",
    };
  }

  return {
    title: `${tour.title} - Raul Obregon Birdman CR`,
    description: tour.shortDescription,
    keywords: [
      `Costa Rica ${tour.title}`,
      "nature tour",
      "birdwatching",
      "ecotourism",
    ],
    openGraph: {
      title: `${tour.title} - Raul Obregon Birdman CR`,
      description: tour.shortDescription,
      url: `https://your-domain.com/tours/${slug}`, //TODO: Replace with your actual domain
      images: [
        {
          url: tour.featuredImage,
          alt: tour.title,
        },
      ],
      type: "website",
    },
  };
}

export default function TourSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
