import React from 'react';
import { BenefitCardProps } from '../types';

interface CallToActionProps {
  onOpenModal: () => void;
}

const BenefitBadge: React.FC<BenefitCardProps> = ({ icon, text }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm font-semibold">
      <span className={`${text.includes('Pagamento') ? 'text-blue-700' : text.includes('Frete') ? 'text-green-700' : 'text-purple-700'}`}>
        {icon} {text}
      </span>
    </div>
  );
};

const CallToAction: React.FC<CallToActionProps> = ({ onOpenModal }) => {
  const benefits = [
    { icon: "✅", text: "Pagamento só na entrega" },
    { icon: "🚚", text: "Frete Grátis em todo o Brasil" },
    { icon: "⚡", text: "Receba em até 24H" }
  ];

  return (
    <section id="comprar" className="w-full bg-gradient-to-br from-red-700 to-red-900 text-white py-16 px-4 text-center rounded-t-3xl shadow-xl mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Não perca mais tempo, garanta sua satisfação!
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
          Aproveite a promoção de <span className="font-extrabold">Compre 1 Leve 2</span> e transforme suas noites hoje mesmo!
        </p>
        <button 
          onClick={onOpenModal}
          className="btn-primary inline-block text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl text-xl sm:text-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          GARANTA SEU RIVOSEX GEL AGORA!
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-8">
          {benefits.map((benefit, index) => (
            <BenefitBadge 
              key={index}
              icon={benefit.icon}
              text={benefit.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;