import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  const originalPrice = product.variants[0].price * (100 / (100 - discount));
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative">
          {/* Discount Banner */}
          <div className="absolute top-0 left-0 bg-yellow-400 text-black font-bold px-4 py-1 text-sm z-10">
            {discount}% DESCONTO
          </div>
          
          {/* Product Image */}
          <div className="bg-white p-4">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-48 object-contain"
            />
          </div>
        </div>

        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>

          {/* Price Section */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">
                R$ {product.variants[0].price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                R$ {originalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-4 bg-green-100 p-3 rounded-lg">
            <div className="flex items-center justify-center text-green-700">
              <span className="mr-2">🚚</span>
              <span className="text-sm font-medium">PAGUE NA ENTREGA</span>
            </div>
            <div className="text-center text-xs text-green-600 mt-1">
              Receba em até 24 horas
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;