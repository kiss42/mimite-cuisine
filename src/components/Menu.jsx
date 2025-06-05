import React from 'react';
import menuItems from '../data/menu';
import FoodCard from './FoodCard';

const Menu = () => {
  return (
    <section
      id="menu"
      className="bg-gradient-to-b from-[#00209F] via-[#eaeaea] to-white py-20 px-6"
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
