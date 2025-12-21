"use client";

import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  heightStyles?: string; // Optional prop for custom height styles
}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { title, description, imageSrc, imageAlt, heightStyles } = props;

  return (
    <section
      id="hero-section"
      className={`relative w-full ${
        heightStyles || ""
      } flex items-center justify-center overflow-hidden`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || "Hero Section background"}
          fill
          priority
          style={{ objectFit: "cover", zIndex: 0 }}
          sizes="100vw"
        />
      )}
      {}
      <div className="relative z-10 text-center text-secondary justify-center max-w-3xl px-4">
        <h1 className="text-4xl xl:text-6xl font-bold text-shadow-black">
          {title}
        </h1>
        {description && (
          <p className="mt-10 paragraph-text text-shadow-black">
            {description}
          </p>
        )}
      </div>
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
