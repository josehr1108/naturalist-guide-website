import React from "react";
import Image from "next/image";

const NavigationBar: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <div className="flex items-center">
          <Image alt="Logo" src="/logo-no-bg.png" width={130} height={120} />
        </div>
        <div className="flex space-x-8">
          <a href="#" className="text-black text-sm font-semibold">
            Home
          </a>
          <a href="#" className="text-black text-sm font-semibold">
            Tours
          </a>
          <a href="#" className="text-black text-sm font-semibold">
            FAQ
          </a>
          <a href="#" className="text-black text-sm font-semibold">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
