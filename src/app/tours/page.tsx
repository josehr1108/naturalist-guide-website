import HeroSection from "../_components/HeroSection/HeroSection";
import TourList from "../_components/TourList/TourList";

const HERO_TITLE = "Tours Designed to Experience Costa Rica Up Close";
const HERO_IMAGE_SRC = "/images/arenal-contact-bg.png";
const HERO_DESCRIPTION =
  "Explore tropical forests, discover exotic birds, walk beneath the stars, and visit the country’s most iconic destinations with a local expert guide who will make every journey unforgettable.";
const HERO_IMAGE_ALT = "Arenal volcano background";

const Contact = () => {
  return (
    <main>
      <HeroSection
        title={HERO_TITLE}
        description={HERO_DESCRIPTION}
        imageSrc={HERO_IMAGE_SRC}
        imageAlt={HERO_IMAGE_ALT}
        heightStyles="h-100 xl:h-150"
      />
      <TourList />
    </main>
  );
};

export default Contact;
