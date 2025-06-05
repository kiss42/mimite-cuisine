import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-[#00209F] to-[#D21034] text-center px-4 pt-20"
    >
      <div className="max-w-2xl text-white">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Taste the Culture</h1>
        <p className="text-xl mb-6">Authentic Haitian meals crafted with love and tradition.</p>
        <a
          href="#menu"
          className="inline-block bg-white text-[#00209F] hover:bg-gray-100 text-lg font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md"
        >
          See Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
