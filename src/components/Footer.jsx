import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#D21034] text-white py-8 mt-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-extrabold tracking-wider">
          <span className="text-white">Mimite</span>
          <span className="text-[#00209F]">Cuisine</span>
        </h1>

        <ul className="flex gap-6 text-sm">
          {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-white/80 text-center md:text-right">
          © {new Date().getFullYear()} MimiteCuisine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
