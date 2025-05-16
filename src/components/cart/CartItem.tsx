import React from 'react';
import { X } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import QuantitySelector from '../product/QuantitySelector';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const installmentPrice = ((item.product.price * item.quantity) / 10).toFixed(2);
  
  const handleIncrease = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };
  
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    }
  };
  
  const handleRemove = () => {
    removeItem(item.product.id);
  };
  
  return (
    <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-full md:w-24 h-24 flex-shrink-0 mb-4 md:mb-0">
        <Link to={`/produto/${item.product.id}`}>
          <img 
            src={item.product.images[0]} 
            alt={item.product.name} 
            className="w-full h-full object-cover rounded-md"
          />
        </Link>
      </div>
      
      {/* Product Info */}
      <div className="md:ml-4 flex-grow">
        <Link 
          to={`/produto/${item.product.id}`}
          className="text-lg font-medium text-gray-800 hover:text-teal transition-colors"
        >
          {item.product.name}
        </Link>
        
        <div className="mt-1 text-sm text-gray-500">
          {item.product.category === 'saude-beleza' ? 'Saúde e Beleza' : item.product.category === 'dia-a-dia' ? 'Achadinhos' : 'Estimulantes'}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <QuantitySelector 
              quantity={item.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              size="small"
            />
          </div>
          
          <div className="flex flex-col items-end space-y-1">
            <div className="font-medium text-brand-red">
              R$ {(item.product.price * item.quantity).toFixed(2)}
              <span className="text-xs ml-1 text-gray-600">à vista</span>
            </div>
            
            <div className="text-xs text-gray-600">
              10x de R$ {installmentPrice} sem juros
            </div>
            
            <button 
              onClick={handleRemove}
              className="text-gray-400 hover:text-red-500 transition-colors mt-2"
              aria-label="Remover item"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;