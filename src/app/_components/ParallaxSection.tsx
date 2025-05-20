"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ParallaxSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden max-h-[700px]">
      <div
        className="absolute top-0 left-0 w-full h-[120%] will-change-transform"
        style={{
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      >
        <Image
          src="/images/bird_migration_bg.jpg"
          alt="Parallax Background"
          fill
          priority
          quality={80}
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-[1000px] mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Explore Nature with a Certified Naturalist Guide
        </h1>
        <p className="text-xl">
          Join expertly guided nature tours led by a certified naturalist with a
          passion for wildlife, native ecosystems, and birdwatching. Discover
          hidden trails, observe diverse species, and connect with nature
          through immersive and educational outdoor experiences.
        </p>
      </div>
    </div>
  );
};

export default ParallaxSection;
