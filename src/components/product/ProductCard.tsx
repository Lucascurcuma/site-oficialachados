import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Timer, Package, Shield, Users, Eye, CreditCard } from 'lucide-react';
import { Product } from '../../types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ProductCardProps {
  product: Product;
  size?: 'small' | 'medium' | 'large';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, size = 'medium' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    small: 'max-w-[140px]',
    medium: 'max-w-[180px] md:max-w-[250px]',
    large: 'max-w-[200px] md:max-w-[300px]'
  };
  
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  const stockStatus = product.stockCount < 10 ? `Últimas ${product.stockCount} unidades!` : null;
  
  const installmentPrice = (product.price / 10).toFixed(2);
  
  return (
    <Link 
      to={`/produto/${product.id}`} 
      className={`${sizeClasses[size]} block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <LazyLoadImage
          src={product.images[0]}
          alt={product.name}
          effect="blur"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          wrapperClassName="w-full h-full"
        />
        
        {/* Trust Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <div className="bg-white/90 backdrop-blur-sm p-1 rounded-full">
            <Star className="w-4 h-4 text-brand-warm fill-brand-warm" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-1 rounded-full">
            <Users className="w-4 h-4 text-brand-red" />
          </div>
        </div>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-brand-red text-white text-xs font-bold rounded-full px-3 py-1.5 animate-pulse shadow-lg">
            ECONOMIZE {discountPercentage}%
          </div>
        )}

        {/* Stock Status */}
        {stockStatus && (
          <div className="absolute bottom-2 left-2 right-2 bg-brand-orange/90 text-white text-xs font-medium rounded-full px-3 py-1.5 text-center animate-pulse">
            ⚡ {stockStatus}
          </div>
        )}

        {/* Quick View Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm font-medium px-6 py-2.5 bg-brand-red rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-brand-orange flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              Ver Detalhes
            </span>
            <div className="text-white text-xs">
              ⭐ {product.rating.toFixed(1)} ({product.numReviews} avaliações)
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-sm md:text-base text-primary line-clamp-2 h-10 md:h-12 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        
        {/* Price Section */}
        <div className="mt-3 space-y-1">
          {product.originalPrice && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                Economia de R$ {(product.originalPrice - product.price).toFixed(2)}
              </span>
            </div>
          )}
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-brand-red">
                R$ {product.price.toFixed(2)}
              </span>
              <span className="text-xs text-brand-red font-medium">
                à vista
              </span>
            </div>
            
            <div className="flex items-center text-xs text-gray-600 mt-1">
              <CreditCard className="w-4 h-4 text-brand-red mr-1" />
              <span>10x de R$ {installmentPrice} sem juros</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="space-y-1.5">
            <div className="flex items-center text-xs text-gray-600">
              <Timer size={14} className="text-brand-red mr-1.5" />
              <span>Entrega Expressa 1-3 dias</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Package size={14} className="text-brand-red mr-1.5" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Shield size={14} className="text-brand-red mr-1.5" />
              <span>Garantia de 30 dias</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;