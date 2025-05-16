import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

const CartSummary: React.FC = () => {
  const { state } = useCart();
  const installmentPrice = (state.total / 10).toFixed(2);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold pb-4 border-b border-gray-200">Resumo do Pedido</h2>
      
      <div className="space-y-3 py-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <div className="text-right">
            <div className="font-medium">R$ {state.total.toFixed(2)}</div>
            <div className="text-xs text-gray-600 flex items-center mt-1">
              <CreditCard className="w-3 h-3 mr-1" />
              10x de R$ {installmentPrice} sem juros
            </div>
          </div>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Frete:</span>
          <span className="font-medium">GRÁTIS</span>
        </div>
        <div className="pt-3 border-t border-gray-200">
          <div className="flex justify-between items-baseline">
            <span className="font-bold">Total:</span>
            <div className="text-right">
              <div className="font-bold text-lg text-brand-red">
                R$ {state.total.toFixed(2)}
                <span className="text-xs ml-1 text-gray-600">à vista</span>
              </div>
              <div className="text-xs text-gray-600">
                ou 10x de R$ {installmentPrice} sem juros
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Link
        to="/checkout"
        className={`block w-full text-center py-3 px-4 rounded-md font-medium transition-colors ${
          state.items.length > 0
            ? 'bg-teal text-white hover:bg-teal/90'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        aria-disabled={state.items.length === 0}
        onClick={(e) => state.items.length === 0 && e.preventDefault()}
      >
        Finalizar Compra
      </Link>
      
      <div className="mt-4 text-center">
        <Link 
          to="/"
          className="text-teal text-sm hover:underline"
        >
          Continuar comprando
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;