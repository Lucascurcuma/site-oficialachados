import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle size={64} className="mx-auto text-green-500 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Pedido Confirmado!</h1>
        <p className="text-gray-600 mb-8">
          Obrigado por comprar na Achadinhos Express. Você receberá um e-mail com os detalhes do seu pedido.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Próximos Passos</h2>
          <ul className="text-left space-y-3">
            <li className="flex items-center">
              <span className="w-6 h-6 bg-teal text-white rounded-full flex items-center justify-center mr-3">1</span>
              <span>Você receberá um e-mail de confirmação do pedido</span>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-teal text-white rounded-full flex items-center justify-center mr-3">2</span>
              <span>Nossa equipe irá preparar seu pedido para envio</span>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-teal text-white rounded-full flex items-center justify-center mr-3">3</span>
              <span>Entrega expressa em 1-3 dias úteis</span>
            </li>
          </ul>
        </div>
        
        <Link 
          to="/"
          className="inline-block bg-teal text-white px-8 py-3 rounded-md font-medium hover:bg-teal/90 transition-colors"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;