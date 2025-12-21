"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "flowbite-react";
import { Tour } from "../../constants/types";
import { TOUR_LIST } from "../../constants/tours";
import styles from "./TourList.module.css";

interface TourListProps {
  title?: string;
  tourList?: Tour[];
}

const TourList: React.FC<TourListProps> = ({ tourList = TOUR_LIST, title }) => {
  return (
    <section className="startGradientBackground py-16 px-4">
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          {title || "Offered Tours"}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-2">
        {tourList.map((tour) => (
          <Link
            key={tour.title}
            href={`tours/${tour.slug}`}
            className={`max-w-sm ${styles.cardAnchor}`}
          >
            <Card
              className={`max-w-sm shadow-lg ${styles.cardContainer} h-full`}
              renderImage={() => (
                <div className="w-full h-60 relative">
                  <Image
                    fill
                    src={tour.featuredImage}
                    alt={tour.title}
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight mb-5">
                {tour.title}
              </h5>
              <p className="paragraph-text">{tour.shortDescription}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TourList;
