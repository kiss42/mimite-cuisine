import React from 'react';
import menuItems from '../data/menu';
import FoodCard from './FoodCard';
import menuBackground from '../assets/menubackground.png';

const Menu = () => {
  return (
    <section
      id="menu"
      className="relative bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: ` url(${menuBackground})`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-10 tracking-wide">
          Our Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <FoodCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
