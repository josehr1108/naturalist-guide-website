import React from "react";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around pt-3">
          <Image
            src="/images/logo-no-bg.png"
            alt="Logo"
            width={200}
            height={150}
            className="mb-6"
          ></Image>

          <div className="flex flex-col">
            <div className="flex items-center mb-2 justify-center text-center">
              <MapPin size={16} color="black" className="me-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                La Fortuna, San Carlos, Costa Rica
              </span>
            </div>
            <div className="flex items-center mb-2 justify-center text-center">
              <Mail size={16} color="black" className="me-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                <a href="mailto:raulobregon@gmail.com">raulobregon@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="flex mt-3">
            <a
              href="https://www.facebook.com/raulobregonbirdmancr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors duration-300"
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
              href="https://www.instagram.com/raulobregonbirdmancr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors duration-300"
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
        <hr className="mx-auto my-5" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 text-center pb-3">
          © 2025 Raul Obregon Birdman CR. All Rights Reserved.{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
