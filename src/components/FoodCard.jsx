import React from 'react';
import { useCart } from '../context/CartContext';

const FoodCard = ({ item }) => {
  const { addItem } = useCart();

  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition w-full max-w-sm mx-auto">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex -space-x-2 overflow-hidden">
            {item.reviews.map((avatar, i) => (
              <img
                key={i}
                src={avatar}
                alt="review avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <div className="flex items-center text-yellow-400 font-semibold text-lg">
            ★ {item.rating}
          </div>
        </div>

        <h3 className="text-xl font-bold">{item.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-[#D21034] font-bold">{item.price}</span>
          <button
            onClick={() => addItem(item)}
            className="border border-white rounded-full px-4 py-1 font-bold hover:bg-white hover:text-black transition"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
