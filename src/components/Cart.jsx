import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import DeliveryForm from './DeliveryForm';

const DELIVERY_FEE = 5.0;

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeItem, total } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [showForm, setShowForm] = useState(false);

  if (!isOpen) return null;

  const isDelivery = deliveryMethod === 'delivery';
  const finalTotal = (total + (isDelivery ? DELIVERY_FEE : 0)).toFixed(2);

  const handleCheckout = () => {
    if (isDelivery) {
      setShowForm(true);
    } else {
      alert('Order placed for pickup!');
      onClose(); // Optionally close cart after pickup order
    }
  };

  const handleDeliverySubmit = (info) => {
    console.log('Delivery Info:', info);
    alert('Order placed for delivery!');
    setShowForm(false);
    onClose();
  };

  return (
    <aside className="fixed right-0 top-0 w-full sm:w-[400px] h-full bg-white shadow-lg z-50 overflow-y-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#00209F]">Your Cart</h2>
        <button onClick={onClose}>
          <X className="w-6 h-6 text-gray-500 hover:text-red-600" />
        </button>
      </div>

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
                    onClick={() => removeItem(item.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <label className="block font-semibold text-gray-700 mb-2">
              How would you like to receive your order?
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setDeliveryMethod('pickup');
                  setShowForm(false);
                }}
                className={`px-4 py-2 rounded border ${
                  deliveryMethod === 'pickup'
                    ? 'bg-[#00209F] text-white'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                Pickup
              </button>
              <button
                onClick={() => setDeliveryMethod('delivery')}
                className={`px-4 py-2 rounded border ${
                  deliveryMethod === 'delivery'
                    ? 'bg-[#00209F] text-white'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                Delivery (+${DELIVERY_FEE})
              </button>
            </div>
          </div>

          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ${finalTotal}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-[#00209F] text-white font-semibold py-2 rounded hover:bg-[#001970] transition"
            >
              Proceed to Checkout
            </button>
          </div>

          {isDelivery && showForm && (
            <DeliveryForm onSubmit={handleDeliverySubmit} />
          )}
        </div>
      )}
    </aside>
  );
};

export default Cart;
