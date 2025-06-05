import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import griotCombo from "../assets/gallery/griot-plantain-combo.jpeg";
import legume from "../assets/gallery/haitian-legume.jpeg";
import patties from "../assets/gallery/haitian-patty-box.jpeg";
import friedPate from "../assets/gallery/fried-pate-box.jpeg";
import kremas from "../assets/gallery/haitian-kremas-bottles.jpeg";

const images = [
  griotCombo,
  legume,
  patties,
  friedPate,
  kremas,
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-[#00209F] via-white to-[#D21034] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10 tracking-wide">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((url, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={url}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
