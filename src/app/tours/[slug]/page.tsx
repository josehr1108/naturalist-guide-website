"use client";

import Image from "next/image";
import { Tour } from "@/app/constants/types";
import { use } from "react";
import { TOUR_LIST } from "@/app/constants/tours";
import useScreenCheck from "@/app/hooks/useScreenCheck";
import { notFound } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Clock, MapPin, User } from "lucide-react";
import { HRTrimmed, HR } from "flowbite-react";
import PhotoGallery from "@/app/_components/PhotoGallery/PhotoGallery";
import { Check, X } from "lucide-react";
import { getRandomTours } from "@/app/helpers/tourList";
import Link from "next/link";

const TourPage = ({ params }: { params: Promise<Tour> }) => {
  const { slug } = use(params);
  const { isMobile } = useScreenCheck();
  const selectedTour = TOUR_LIST.find((tour) => tour.slug === slug);

  if (!selectedTour) {
    // Redirect to the built-in Next.js not-found page
    // Import notFound from 'next/navigation' at the top of your file
    // import { notFound } from "next/navigation";
    return notFound();
  }

  const otherTours = TOUR_LIST.filter((tour) => tour.slug !== slug);
  const relatedTours = getRandomTours(otherTours, 3);

  return (
    <main className="finishGradientBackground">
      <div className="flex flex-col py-8 max-w-7xl mx-auto">
        <div className="tour-metadata text-center max-w-4xl lg:min-w-4xl mx-auto px-10 text-primary lg:order-2">
          <h1 className="text-primary font-bold text-4xl mb-8">
            {selectedTour.title}
          </h1>
          <HRTrimmed className="bg-[var(--color-tasman)]" />
          <div className="meta-info flex justify-around flex-wrap gap-y-5 mb-4">
            <div className="info-node-wrapper flex items-center mb-2">
              <MapPin size={30} className="me-2 text-primary" />
              <div className="flex flex-col items-start">
                <span className="font-bold">Location</span>
                <span>{selectedTour.location}</span>
              </div>
            </div>
            <div className="info-node-wrapper flex items-center mb-2">
              <Clock size={30} className="me-2 text-primary" />
              <div className="flex flex-col items-start">
                <span className="font-bold">Duration</span>
                <span>{selectedTour.duration}</span>
              </div>
            </div>
            <div className="info-node-wrapper flex items-center mb-2">
              <User size={30} className="me-2 text-primary" />
              <div className="flex flex-col items-start">
                <span className="font-bold">Min. Age</span>
                <span>{selectedTour.minAge} years</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tour-gallery lg:order-1">
          {isMobile ? (
            <Swiper
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-full h-[500px]"
            >
              {selectedTour.images.map((src, index) => (
                <SwiperSlide key={index} className="relative">
                  <Image
                    src={src}
                    alt={`Tour image ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <PhotoGallery images={selectedTour.images} />
          )}
        </div>
        <div className="tour-info-container max-w-4xl mx-auto px-10 py-6 lg:order-3">
          <div className="mb-12">
            {selectedTour.longDescriptionParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="mb-4 paragraph-text text-primary text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {selectedTour.infoSections &&
            selectedTour.infoSections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {section.title}
                </h2>
                {section.type === "bulletPoints" && (
                  <ul className="ms-5 list-disc">
                    {section.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="mb-2 text-primary paragraph-text"
                      >
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {section.type === "checkmarks" && (
                  <div>
                    {section.items.map((item, itemIdx) => {
                      // Import the icons
                      const isChecked = item.icon === "checked";
                      const Icon = isChecked ? Check : X;
                      return (
                        <span
                          key={itemIdx}
                          className="mb-2 text-primary paragraph-text flex items-center gap-2"
                        >
                          {item.text}
                          <Icon
                            size={20}
                            className={
                              isChecked ? "text-green-600" : "text-red-600"
                            }
                          />
                        </span>
                      );
                    })}
                  </div>
                )}
                {section.type === "paragraphs" && (
                  <div className="">
                    {section.items.map((item, itemIdx) => {
                      return (
                        <p
                          key={itemIdx}
                          className="mb-2 text-primary paragraph-text text-justify"
                        >
                          {item.text}
                        </p>
                      );
                    })}
                  </div>
                )}
                <HR className="bg-[var(--color-tasman)] h-0.5" />
              </div>
            ))}
        </div>
        <div className="other-tours lg:order-4">
          {relatedTours.length > 0 && (
            <>
              <div className="max-w-4xl mx-auto px-10">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Other Tours
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {relatedTours.map((tour: Tour) => (
                    <Link
                      key={tour.title}
                      href={`/tours/${tour.slug}`}
                      className=" rounded-lg overflow-hidden bg-[var(--color-honeydew)] shadow-xl shadow-[#29382c] hover:cursor-pointer"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={tour.featuredImage}
                          alt={tour.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col p-4 h-52 lg:h-75">
                        <h3 className="text-xl font-bold mb-2 text-primary">
                          {tour.title}
                        </h3>
                        <p className="text-primary paragraph-text mb-4">
                          {tour.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default TourPage;
