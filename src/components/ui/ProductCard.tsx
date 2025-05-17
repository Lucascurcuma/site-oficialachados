import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Star } from 'lucide-react';
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
          {/* Category Badge */}
          <div className="absolute top-2 left-2 z-10">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              product.category === 'estimulantes' 
                ? 'bg-red-100 text-red-700'
                : 'bg-purple-100 text-purple-700'
            }`}>
              {product.category === 'estimulantes' ? 'Estimulante' : 'Saúde & Beleza'}
            </span>
          </div>

          {/* Discount Badge */}
          <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm z-10">
            -{discount}%
          </div>
          
          {/* Product Image */}
          <div className="bg-white p-4">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-48 object-contain transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>

          {/* Quick Benefits */}
          <div className="mb-3">
            <ul className="text-sm text-gray-600 space-y-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Star className="w-4 h-4 text-yellow-400 mt-1 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

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
            <div className="text-xs text-gray-500">
              em até 12x de R$ {(product.variants[0].price / 12).toFixed(2)}
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-4 bg-green-50 p-3 rounded-lg">
            <div className="flex items-center justify-center text-green-700">
              <Package className="w-4 h-4 mr-2" />
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