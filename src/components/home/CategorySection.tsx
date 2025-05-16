import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';
import { ShoppingBag, Star, Users } from 'lucide-react';

const CategorySection: React.FC = () => {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gradient animate-shine inline-block">
            Nossas Categorias
          </h2>
          <p className="text-sm md:text-lg text-secondary max-w-2xl mx-auto">
            Explore nossa seleção exclusiva de produtos para melhorar sua qualidade de vida
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/categoria/${category.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 mb-3 md:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {category.description}
                  </p>
                  
                  {/* Category Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-3 md:mb-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <div className="flex items-center text-white/80">
                      <ShoppingBag className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      <span className="text-xs md:text-sm">5+ Produtos</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Star className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      <span className="text-xs md:text-sm">4.8/5</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      <span className="text-xs md:text-sm">1k+ Clientes</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-brand-red transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    <span className="text-sm md:text-base font-medium">Explorar</span>
                    <ShoppingBag className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;