import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Shield, Package, Clock, CheckCircle, TrendingUp, Award } from 'lucide-react';

const banners = [
  {
    id: 1,
    imageUrl: 'https://i.pinimg.com/736x/0f/71/de/0f71debd1f63c2a499055adf71793b62.jpg',
    title: 'Transforme sua Vida',
    subtitle: 'Produtos exclusivos com resultados comprovados',
    ctaText: 'Explorar Agora',
    ctaLink: '/categoria/dia-a-dia',
    benefits: [
      'Mais de 50.000 clientes satisfeitos',
      'Resultados garantidos ou seu dinheiro de volta',
      'Entrega expressa em até 3 dias'
    ],
    stats: [
      { icon: ShoppingBag, value: '50k+', label: 'Clientes Satisfeitos' },
      { icon: Star, value: '4.8', label: 'Avaliação Média' },
      { icon: Shield, value: '100%', label: 'Garantia' }
    ]
  },
  {
    id: 2,
    imageUrl: 'https://i.pinimg.com/736x/8c/5b/c0/8c5bc0f2bebbc514408bd214343e6af7.jpg',
    title: 'Saúde e Beleza',
    subtitle: 'Produtos premium testados e aprovados',
    ctaText: 'Ver Produtos',
    ctaLink: '/categoria/saude-beleza',
    benefits: [
      'Fórmulas exclusivas e naturais',
      'Resultados visíveis em poucos dias',
      'Testado dermatologicamente'
    ],
    stats: [
      { icon: Clock, value: '24h', label: 'Envio Rápido' },
      { icon: Star, value: '4.9', label: 'Avaliação' },
      { icon: TrendingUp, value: '98%', label: 'Recompra' }
    ]
  },
  {
    id: 3,
    imageUrl: 'https://i.pinimg.com/736x/b7/e9/4c/b7e94cfb0990b99942c23e769633343f.jpg',
    title: 'Mais Energia',
    subtitle: 'Estimulantes naturais com eficácia comprovada',
    ctaText: 'Descobrir',
    ctaLink: '/categoria/estimulantes',
    benefits: [
      'Resultados desde a primeira dose',
      'Sem efeitos colaterais',
      'Aprovado pela ANVISA'
    ],
    stats: [
      { icon: Award, value: '1º', label: 'Mais Vendido' },
      { icon: Star, value: '4.7', label: 'Avaliação' },
      { icon: Shield, value: '100%', label: 'Garantia' }
    ]
  }
];

const HeroSection: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextBanner = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentBanner((prev) => (prev + 1) % banners.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };
  
  const prevBanner = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextBanner();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative h-[400px] md:h-[600px] overflow-hidden bg-gray-900">
      {/* Banners */}
      <div className="h-full relative">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`absolute inset-0 transition-all duration-700 ${
              currentBanner === index 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <div className="relative h-full w-full">
              {/* Background Image with Parallax Effect */}
              <div 
                className="absolute inset-0 transform scale-110 transition-transform duration-[10000ms]"
                style={{
                  backgroundImage: `url(${banner.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: `scale(${currentBanner === index ? '1.1' : '1'})`,
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center px-4 md:px-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-base md:text-xl text-white/90 mb-4 md:mb-6">
                    {banner.subtitle}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {banner.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-white/90">
                        <CheckCircle className="w-5 h-5 text-brand-red mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 md:gap-6 mb-6 md:mb-8">
                    {banner.stats.map((stat, i) => (
                      <div 
                        key={i} 
                        className="text-center p-2 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg transform hover:scale-105 transition-transform"
                      >
                        <stat.icon className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 text-brand-red" />
                        <div className="text-lg md:text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={banner.ctaLink}
                    className="inline-flex items-center bg-brand-red hover:bg-brand-orange text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-full transition-all duration-300 text-sm md:text-lg group hover:shadow-lg hover:shadow-brand-red/20 transform hover:-translate-y-0.5"
                  >
                    {banner.ctaText}
                    <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
        onClick={prevBanner}
        aria-label="Banner anterior"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button 
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
        onClick={nextBanner}
        aria-label="Próximo banner"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentBanner === index 
                ? 'bg-white scale-100' 
                : 'bg-white/50 scale-75 hover:scale-90 hover:bg-white/70'
            }`}
            onClick={() => setCurrentBanner(index)}
            aria-label={`Banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;