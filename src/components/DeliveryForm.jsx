import React, { useState } from 'react';

const DeliveryForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Delivery Instructions (Optional)</label>
        <textarea
          name="instructions"
          value={form.instructions}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-[#00209F] text-white text-sm font-medium py-1.5 px-3 rounded hover:bg-[#001970] transition"
      >
        Submit Info
      </button>
    </form>
  );
};

export default DeliveryForm;
