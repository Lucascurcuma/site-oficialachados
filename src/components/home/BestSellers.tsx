import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { getBestSellers } from '../../data/products';

const BestSellers: React.FC = () => {
  const bestSellers = getBestSellers();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * (direction === 'left' ? -0.8 : 0.8);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Itens em alta</h2>
          <Link 
            to="/mais-vendidos" 
            className="flex items-center px-3 py-1.5 rounded-full bg-white text-sm font-medium text-brand-red hover:bg-brand-red/5 transition-colors duration-200 shadow-sm"
          >
            Ver todos
            <ArrowRight size={16} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="text-brand-red" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={24} className="text-brand-red" />
          </button>
          
          {/* Products Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
          >
            {bestSellers.map((product) => (
              <div key={product.id} className="flex-none w-[280px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;