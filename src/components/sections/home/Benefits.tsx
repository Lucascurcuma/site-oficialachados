import React from 'react';
import { Check, X, Award, Zap, HeadphonesIcon, Truck } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { id: 1, name: "Qualidade", icon: <Award className="w-12 h-12 text-[#28a745] mb-4" /> },
    { id: 2, name: "Ofertas Inigualáveis", icon: <Zap className="w-12 h-12 text-[#28a745] mb-4" /> },
    { id: 3, name: "Suporte 24/7", icon: <HeadphonesIcon className="w-12 h-12 text-[#28a745] mb-4" /> },
    { id: 4, name: "Entregas Ágeis", icon: <Truck className="w-12 h-12 text-[#28a745] mb-4" /> },
  ];

  const comparisons = [
    { id: 1, feature: "Entrega em até 3 dias", us: true, others: false },
    { id: 2, feature: "Produtos originais", us: true, others: true },
    { id: 3, feature: "Pagamento na entrega", us: true, others: false },
    { id: 4, feature: "Suporte 24/7", us: true, others: false },
    { id: 5, feature: "Garantia estendida", us: true, others: false },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#002f6c]">Por que nos escolher?</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold">{benefit.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#002f6c] text-white">
                <th className="py-4 px-6 text-left font-semibold">Característica</th>
                <th className="py-4 px-6 text-center font-semibold">Achados Express</th>
                <th className="py-4 px-6 text-center font-semibold">Outras Lojas</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-4 px-6">{item.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {item.us ? (
                      <Check className="w-6 h-6 text-[#28a745] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {item.others ? (
                      <Check className="w-6 h-6 text-[#28a745] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Benefits;