"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryProps {
  images: string[];
}

const PhotoGallery: FC<PhotoGalleryProps> = ({ images }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openOverlay = (index: number) => {
    setCurrentIndex(index);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => setIsOverlayOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div className="h-100 w-full grid grid-rows-2 grid-cols-4 gap-2 mb-10 px-5">
        {images.slice(0, 4).map((imgSrc, index) => {
          const isLastImage = index === 3 && images.length > 4;
          const gridClasses = [
            "col-span-2 row-span-2",
            "col-span-1 row-span-2",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1",
          ];
          const wrapperClassNames = `relative ${gridClasses[index] ?? ""}`;

          return (
            <div
              key={index}
              className={wrapperClassNames}
              onClick={() => openOverlay(index)}
            >
              <Image
                src={imgSrc}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover cursor-pointer"
              />
              {isLastImage && (
                <div
                  onClick={() => openOverlay(index)}
                  className="absolute w-20 h-10 rounded-full bottom-3 right-3 bg-[var(--color-tasman)] opacity-80 flex items-center justify-center text-[var(--color-forestgreen)] text-xl font-bold hover:cursor-pointer hover:opacity-100"
                >
                  +{images.length - 4}
                  <ImageIcon className="ms-2" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isOverlayOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <button
            onClick={closeOverlay}
            className="absolute top-5 left-5 text-white p-2 rounded-full bg-black/50 hover:bg-black/80"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-5 text-white p-2 rounded-full bg-black/50 hover:bg-black/80"
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // para no cerrar al hacer click en la imagen
          >
            <Image
              src={images[currentIndex]}
              alt={`Overlay image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] max-w-full"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-5 text-white p-2 rounded-full bg-black/50 hover:bg-black/80"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
