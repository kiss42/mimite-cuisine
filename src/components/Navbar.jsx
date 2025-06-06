import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Cart from './Cart';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b-4 border-[#D21034]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="MimiteCuisine Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider">
            <span className="text-[#D21034]">Mimite's</span>
            <span className="text-[#00209F]"> Cuisine</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-lg text-gray-800 font-medium">
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
          <li>
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D21034] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D21034] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg text-gray-800 font-medium">
            {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 border-b border-gray-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
