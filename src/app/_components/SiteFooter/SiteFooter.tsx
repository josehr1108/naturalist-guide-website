"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";

const SiteFooter: React.FC = () => {
  return (
    <Footer container className="bg-[var(--color-tasman)] rounded-none">
      <div className="w-full text-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around pt-3">
          <Image
            src="/images/logo-no-bg.png"
            alt="Logo"
            width={200}
            height={150}
            className="mb-6"
          ></Image>
          <div className="flex flex-col">
            <div className="flex items-center mb-2 justify-center text-center">
              <MapPin size={16} className="me-2 text-primary" />
              <span className="text-lg text-primary text-center">
                La Fortuna, San Carlos, Costa Rica
              </span>
            </div>
            <div className="flex items-center mb-2 justify-center text-center">
              <Mail size={16} className="me-2 text-primary" />
              <span className="text-lg text-primary text-center">
                <a href="mailto:raulobregonbirdmancr@gmail.com">
                  raulobregonbirdmancr@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="flex mt-3 mb-3">
            <a
              href="https://www.facebook.com/raul.obregonhernandez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/facebook-logo.png"
                alt="Facebook"
                width={24}
                height={24}
                className="mx-2"
              />
            </a>
            <a
              href="https://www.instagram.com/raul_obregon_birdmancr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/instagram-logo.png"
                alt="Instagram"
                width={24}
                height={24}
                className="mx-2"
              />
            </a>
          </div>
        </div>
        <FooterDivider className="border-[var(--color-forestgreen)]" />
        <FooterCopyright
          href="#"
          by=" Raul Obregon Birdman CR"
          year={2025}
          className="py-3 text-primary"
        />
      </div>
    </Footer>
  );
};

export default SiteFooter;
