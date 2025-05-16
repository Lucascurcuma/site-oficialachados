import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: 'small' | 'medium' | 'large';
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  size = 'medium'
}) => {
  const sizes = {
    small: {
      container: 'h-8',
      button: 'w-8 h-8',
      icon: 16
    },
    medium: {
      container: 'h-10',
      button: 'w-10 h-10',
      icon: 18
    },
    large: {
      container: 'h-12',
      button: 'w-12 h-12',
      icon: 20
    }
  };
  
  const currentSize = sizes[size];
  
  return (
    <div className={`flex items-center border border-gray-300 rounded-md overflow-hidden ${currentSize.container}`}>
      <button
        className={`${currentSize.button} flex items-center justify-center border-r border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors`}
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Diminuir quantidade"
      >
        <Minus size={currentSize.icon} className={quantity <= 1 ? 'text-gray-400' : 'text-gray-700'} />
      </button>
      
      <div className="px-4 flex items-center justify-center">
        <span className="font-medium">{quantity}</span>
      </div>
      
      <button
        className={`${currentSize.button} flex items-center justify-center border-l border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors`}
        onClick={onIncrease}
        aria-label="Aumentar quantidade"
      >
        <Plus size={currentSize.icon} className="text-gray-700" />
      </button>
    </div>
  );
};

export default QuantitySelector;