import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BenefitsBanner from '../components/ui/BenefitsBanner';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BestSellers from '../components/home/BestSellers';
import Testimonials from '../components/home/Testimonials';
import { ShoppingBag, Star, Shield, CreditCard, Truck, DollarSign, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Above the fold */}
      <div className="relative pb-24 md:pb-20">
        <HeroSection />
        
        {/* Floating Trust Badges */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-10 container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-5 gap-4">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-brand-red mb-2" />
                <div className="font-medium text-sm">Frete Grátis</div>
                <div className="text-xs text-gray-600">Todo Brasil</div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Clock className="w-6 h-6 text-brand-red mb-2" />
                <div className="font-medium text-sm">Entrega Expressa</div>
                <div className="text-xs text-gray-600">1-3 dias úteis</div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <DollarSign className="w-6 h-6 text-brand-red mb-2" />
                <div className="font-medium text-sm">Pague na Entrega</div>
                <div className="text-xs text-gray-600">Mais segurança</div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Shield className="w-6 h-6 text-brand-red mb-2" />
                <div className="font-medium text-sm">Garantia</div>
                <div className="text-xs text-gray-600">30 dias</div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Star className="w-6 h-6 text-brand-red mb-2" />
                <div className="font-medium text-sm">+50 mil</div>
                <div className="text-xs text-gray-600">Clientes Felizes</div>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="overflow-x-auto pb-2 scrollbar-hide -mx-4">
                <div className="flex gap-3 px-4">
                  <div className="flex-none w-28">
                    <div className="flex flex-col items-center text-center">
                      <Truck className="w-6 h-6 text-brand-red mb-2" />
                      <div className="font-medium text-sm">Frete Grátis</div>
                      <div className="text-xs text-gray-600">Todo Brasil</div>
                    </div>
                  </div>
                  
                  <div className="flex-none w-28">
                    <div className="flex flex-col items-center text-center">
                      <Clock className="w-6 h-6 text-brand-red mb-2" />
                      <div className="font-medium text-sm">Entrega</div>
                      <div className="text-xs text-gray-600">1-3 dias</div>
                    </div>
                  </div>
                  
                  <div className="flex-none w-28">
                    <div className="flex flex-col items-center text-center">
                      <DollarSign className="w-6 h-6 text-brand-red mb-2" />
                      <div className="font-medium text-sm">Pague</div>
                      <div className="text-xs text-gray-600">Na entrega</div>
                    </div>
                  </div>
                  
                  <div className="flex-none w-28">
                    <div className="flex flex-col items-center text-center">
                      <Shield className="w-6 h-6 text-brand-red mb-2" />
                      <div className="font-medium text-sm">Garantia</div>
                      <div className="text-xs text-gray-600">30 dias</div>
                    </div>
                  </div>
                  
                  <div className="flex-none w-28">
                    <div className="flex flex-col items-center text-center">
                      <Star className="w-6 h-6 text-brand-red mb-2" />
                      <div className="font-medium text-sm">+50 mil</div>
                      <div className="text-xs text-gray-600">Clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="mt-20 md:mt-16">
        <BenefitsBanner variant="compact" className="md:hidden" />
        <CategorySection />
        <FeaturedProducts />
        <BestSellers />
        <BenefitsBanner variant="full" className="hidden md:block" />
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;