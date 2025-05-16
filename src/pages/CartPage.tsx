import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const CartPage: React.FC = () => {
  const { state } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-4">Que tal começar a adicionar alguns produtos?</p>
          <Link 
            to="/"
            className="inline-block bg-teal text-white px-6 py-2 rounded-md hover:bg-teal/90 transition-colors"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-4">
            {state.items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </div>
        
        <div className="md:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;