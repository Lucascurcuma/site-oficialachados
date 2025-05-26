import React from 'react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
      <div className="text-5xl text-red-500 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: "⏱️",
      title: "Controle Total e Duração Prolongada",
      description: "Desenvolvido para auxiliar no prolongamento da ejaculação, permitindo que você desfrute de cada segundo."
    },
    {
      icon: "💖",
      title: "Orgasmos Intensos para Ambos",
      description: "Garanta que sua(o) parceira(o) atinja o clímax, transformando o sexo em uma experiência de prazer mútuo e inesquecível."
    },
    {
      icon: "🌿",
      title: "Sensação Refrescante e Discreta",
      description: "Com suave aroma de menta e rápida absorção, proporciona uma experiência sensorial única e discreta."
    },
    {
      icon: "❄️",
      title: "Fórmula Avançada com Cravo e Menta",
      description: "Ativos naturais que promovem um efeito gelado e dessensibilizante, auxiliando no controle e na performance."
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-gray-100 text-center rounded-lg mt-8 max-w-4xl mx-auto shadow-md">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        Por que Rivosex Gel é a chave para sua satisfação?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;