import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeItem, updateItemQuantity, total } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}
    >
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div className="p-4 overflow-y-auto flex-1">
          {cartItems.length === 0 && (
            <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
          )}
          {cartItems.map((item) => (
            <div key={item.name} className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItemQuantity(item.name, parseInt(e.target.value, 10))
                  }
                  className="w-16 border rounded px-2 py-1"
                />
                <button
                  onClick={() => removeItem(item.name)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <p className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
