"use client";

import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import { TOUR_LIST } from "../../constants/tours";
import styles from "./TourList.module.css";

const TourList: React.FC = () => {
  return (
    <section className="startGradientBackground py-16 px-4">
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Offered Tours
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-2">
        {TOUR_LIST.map((tour) => (
          <Card
            className={`max-w-sm shadow-lg ${styles.cardContainer}`}
            key={tour.title}
            renderImage={() => (
              <div className="w-full h-60 relative">
                <Image
                  fill
                  src={tour.image}
                  alt={tour.title}
                  className="object-cover rounded-t-lg"
                />
              </div>
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight mb-5">
              {tour.title}
            </h5>
            <p className="paragraph-text">{tour.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TourList;
