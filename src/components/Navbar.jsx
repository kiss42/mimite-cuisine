import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b-4 border-[#D21034]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="MimiteCuisine Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-3xl font-extrabold tracking-wider">
            <span className="text-[#D21034]">Mimite's</span>
            <span className="text-[#00209F]"> Cuisine</span>
          </h1>
        </a>

        <ul className="flex items-center gap-10 text-lg text-gray-800 font-medium">
          {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="group-hover:text-[#D21034] transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00209F] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
