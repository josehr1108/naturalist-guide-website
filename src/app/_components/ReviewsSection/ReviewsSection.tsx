"use client";

import React from "react";
import Image from "next/image";
import { Card, Rating, RatingStar } from "flowbite-react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "This tour was amazing! The guide was very knowledgeable and the sights were breathtaking.",
    rating: 5,
    image: "/images/p1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "I had a great time! The itinerary was well planned and the accommodations were top-notch.",
    rating: 4,
    image: "/images/p2.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    review:
      "An unforgettable experience! I would highly recommend this tour to anyone.",
    rating: 5,
    image: "/images/p3.png",
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section>
      <div className="bg-[whitesmoke] py-8">
        <h2 className="text-3xl font-bold mb-20 text-center text-primary">
          Reviews
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-2">
          {reviews.map((review) => (
            <Card className="max-w-sm" key={review.id}>
              <div className="flex justify-center">
                <Image
                  src={review.image}
                  alt={`${review.name}'s photo`}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-gray-200 shadow-md"
                />
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-primary text-center">
                {review.name}
              </h5>
              <div>
                <Rating className="flex justify-center align-center mb-2">
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar filled={false} />
                </Rating>
              </div>
              <p className="paragraph-text text-primary text-center">
                {review.review}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
