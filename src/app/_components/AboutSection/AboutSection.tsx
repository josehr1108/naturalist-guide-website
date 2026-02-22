"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-60 h-60 mx-auto rounded-full overflow-hidden mb-6 shadow-lg relative">
          <Image
            src="/images/about.jpeg"
            alt="Naturalist Guide Portrait"
            fill
            sizes="240px"
            className="object-cover object-right"
            priority
          />
        </div>
        <div className="info text-primary">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className=" paragraph-text leading-relaxed mb-6">
            I was born and raised in La Fortuna, San Carlos, surrounded by the
            natural beauty and biodiversity of the Arenal Volcano region. By
            growing up in this environment, I shaped my deep appreciation for
            wildlife and laid the foundation for what would become a lifelong
            career in nature-based tourism.
          </p>
          <p className=" paragraph-text leading-relaxed mb-6">
            I am a certified tour guide in Costa Rica with extensive experience
            in birdwatching and guided nature tours. For years, I have explored
            tropical forests, national parks, and private reserves, guiding
            travelers who want to connect with nature and discover the
            country&apos;s extraordinary biodiversity and best places.
          </p>
          <p className="paragraph-text leading-relaxed">
            My mission is to provide authentic, safe, and enriching experiences
            where every visitor can discover the country&apos;s natural beauty
            in a personal and memorable way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
