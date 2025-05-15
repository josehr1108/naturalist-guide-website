import ImageCarousel from "./_components/ImageCarousel";

const images = [
  {
    src: "/images/slide1.webp",
    alt: "Slide 1",
    title: "Discover New Horizons",
    description: "Explore beautiful landscapes and vibrant destinations.",
  },
  {
    src: "/images/slide1.webp",
    alt: "Slide 2",
    title: "Adventure Awaits",
    description: "Find your next great experience with us.",
  },
  {
    src: "/images/slide1.webp",
    alt: "Slide 3",
    title: "Unforgettable Journeys",
    description: "Travel with confidence and create lasting memories.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ImageCarousel images={images} />
    </div>
  );
}
