import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/background.png'; // Replace with your actual hero image

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-red bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black drop-shadow-lg">
          Taste the Heart of Haiti
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 font-medium">
          Authentic Haitian cuisine made with love & tradition.
        </p>
        <a
          href="#menu"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded bg-[#D21034] hover:bg-[#b10f2f] transition font-semibold shadow-lg"
        >
          Explore Menu <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
