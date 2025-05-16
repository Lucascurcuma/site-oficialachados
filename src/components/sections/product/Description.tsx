import React from 'react';
import { AlignLeft, CheckCircle, Info } from 'lucide-react';

interface DescriptionProps {
  description: string;
  features: string[];
}

const Description: React.FC<DescriptionProps> = ({ description, features }) => {
  // Split description into product info and usage instructions
  const [productInfo, usageInstructions] = description.split(/(?<=\.) (?=[A-Z])/);

  return (
    <div className="space-y-8">
      {/* Product Description */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4 flex items-center text-[#002f6c]">
          <AlignLeft size={24} className="mr-2" />
          Descrição do Produto
        </h3>
        <p className="text-gray-700 leading-relaxed">{productInfo}</p>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4 flex items-center text-[#002f6c]">
          <CheckCircle size={24} className="mr-2" />
          Benefícios
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Usage Instructions */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4 flex items-center text-[#002f6c]">
          <Info size={24} className="mr-2" />
          Modo de Uso
        </h3>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-gray-700 leading-relaxed">{usageInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;