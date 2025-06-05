import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import './styles/index.css'; // ✅ This brings in your Tailwind and custom CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
