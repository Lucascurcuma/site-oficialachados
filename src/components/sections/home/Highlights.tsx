import React from 'react';
import { Award, Gift, Truck, CreditCard } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlights = [
    {
      id: 1,
      icon: <Award size={40} className="text-[#28a745]" />,
      title: "Qualidade",
      description: "Produtos de alta qualidade selecionados especialmente para você"
    },
    {
      id: 2,
      icon: <Gift size={40} className="text-[#28a745]" />,
      title: "Ofertas exclusivas",
      description: "Descontos incríveis que você não encontrará em outros lugares"
    },
    {
      id: 3,
      icon: <Truck size={40} className="text-[#28a745]" />,
      title: "Frete grátis",
      description: "Entregamos sem custo adicional para todo o Brasil"
    },
    {
      id: 4,
      icon: <CreditCard size={40} className="text-[#28a745]" />,
      title: "Pague na entrega",
      description: "Só pague quando seu produto chegar em suas mãos"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#002f6c]">
          Sua loja favorita!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <div 
              key={highlight.id} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;