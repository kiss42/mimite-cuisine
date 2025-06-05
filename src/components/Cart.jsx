
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  return (
    <aside className="fixed right-0 top-0 w-full sm:w-[400px] h-full bg-white shadow-lg z-50 overflow-y-auto p-6">
      <h2 className="text-2xl font-bold text-[#00209F] mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-start justify-between gap-4 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded object-cover" />
              <div className="flex-1">
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-[#D21034] font-bold">{item.price}</span>
                  <button
                    className="text-sm text-red-600 hover:underline"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
            <button className="mt-4 w-full bg-[#00209F] text-white font-semibold py-2 rounded hover:bg-[#001970] transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Cart;
