import React from 'react';
import { useCart } from '../context/CartContext';
import { Navigate } from 'react-router-dom';
import CheckoutForm from '../components/checkout/CheckoutForm';

const CheckoutPage: React.FC = () => {
  const { state } = useCart();

  if (state.items.length === 0) {
    return <Navigate to="/carrinho" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;