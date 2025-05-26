import React from 'react';
import { StepCardProps } from '../types';

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
      <div className="text-6xl text-red-500 mb-4">{number}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Aplique",
      description: "Aplique uma pequena quantidade no pênis e escroto."
    },
    {
      number: "2️⃣",
      title: "Massageie",
      description: "Massageie suavemente até a completa absorção do gel."
    },
    {
      number: "3️⃣",
      title: "Desfrute!",
      description: "Sinta o efeito e aproveite momentos de prazer prolongado."
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-white text-center shadow-md rounded-lg mt-8 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Como Funciona em 3 Passos Simples
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard 
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;