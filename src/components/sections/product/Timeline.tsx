import React from 'react';
import { Check, Clock } from 'lucide-react';

interface TimelineProps {
  estimatedDelivery: {
    start: string;
    end: string;
  };
}

const Timeline: React.FC<TimelineProps> = ({ estimatedDelivery }) => {
  const today = new Date();
  const orderPlacedDate = today.toLocaleDateString('pt-BR');
  
  const preparationDate = new Date(today);
  preparationDate.setDate(today.getDate() + 1);
  const orderPreparedDate = preparationDate.toLocaleDateString('pt-BR');
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-bold mb-4">Status do Pedido</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 left-6 w-0.5 h-full bg-gray-300"></div>
        
        {/* Order Placed Step */}
        <div className="relative flex items-start mb-6 z-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#28a745] text-white">
            <Check size={24} />
          </div>
          <div className="ml-4">
            <h4 className="font-bold">Pedido realizado</h4>
            <p className="text-gray-600">{orderPlacedDate}</p>
          </div>
        </div>
        
        {/* Order Prepared Step */}
        <div className="relative flex items-start mb-6 z-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#28a745] text-white">
            <Check size={24} />
          </div>
          <div className="ml-4">
            <h4 className="font-bold">Pedido preparado</h4>
            <p className="text-gray-600">{orderPreparedDate}</p>
          </div>
        </div>
        
        {/* Delivery Step */}
        <div className="relative flex items-start z-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 text-gray-600">
            <Clock size={24} />
          </div>
          <div className="ml-4">
            <h4 className="font-bold">Entrega</h4>
            <p className="text-gray-600">{estimatedDelivery.start} - {estimatedDelivery.end}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;