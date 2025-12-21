import ReviewsSection from "./_components/ReviewsSection/ReviewsSection";
import AboutSection from "./_components/AboutSection/AboutSection";
import HeroSection from "./_components/HeroSection/HeroSection";
import TourList from "./_components/TourList/TourList";
import CTASection from "./_components/CtaSection/CtaSection";

const HERO_TITLE = "Discover Costa Rica Through the Eyes of a Naturalist";
const HERO_DESCRIPTION =
  "Embark on a unique adventure surrounded by tropical forests, exotic birds, and breathtaking landscapes. From birdwatching tours to night walks and explorations of national parks, experience journeys designed for nature lovers seeking authentic moments in one of the most biodiverse countries on Earth.";
const HERO_IMAGE_SRC = "/images/bosque-fondo.png";
const HERO_IMAGE_ALT = "Nature background";

export default function Home() {
  return (
    <main>
      <HeroSection
        title={HERO_TITLE}
        description={HERO_DESCRIPTION}
        imageSrc={HERO_IMAGE_SRC}
        imageAlt={HERO_IMAGE_ALT}
        heightStyles="h-130 xl:h-200"
      />

      <AboutSection />

      <TourList />

      <ReviewsSection />

      <CTASection />
    </main>
  );
}
