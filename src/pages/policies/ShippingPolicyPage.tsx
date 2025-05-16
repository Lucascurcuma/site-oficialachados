import React from 'react';
import { ArrowLeft, Truck, Clock, MapPin, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/"
            className="p-2 hover:bg-brand-red/5 rounded-full transition-colors"
            aria-label="Voltar"
          >
            <ArrowLeft size={24} className="text-brand-red" />
          </Link>
          <h1 className="text-2xl font-bold">Política de Envio</h1>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Truck className="w-8 h-8 text-brand-red mb-3" />
            <h3 className="font-bold mb-2">Frete Grátis</h3>
            <p className="text-secondary">
              Entrega gratuita para todo o Brasil em todos os pedidos
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="w-8 h-8 text-brand-red mb-3" />
            <h3 className="font-bold mb-2">Entrega Expressa</h3>
            <p className="text-secondary">
              Prazo de entrega de 1-3 dias úteis para todo o Brasil
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Prazos de entrega</h2>
            <p className="mb-4">
              Nossos prazos de entrega são:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Capitais: 1-2 dias úteis</li>
              <li>Regiões metropolitanas: 2-3 dias úteis</li>
              <li>Interior: 2-3 dias úteis</li>
              <li>Áreas remotas: até 5 dias úteis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Rastreamento</h2>
            <p className="mb-4">
              Após o envio do pedido:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Você receberá o código de rastreamento por e-mail e WhatsApp</li>
              <li>Atualizações em tempo real do status da entrega</li>
              <li>Notificações automáticas sobre o progresso do envio</li>
              <li>Suporte dedicado para acompanhamento da entrega</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Áreas de entrega</h2>
            <p className="mb-4">
              Realizamos entregas em:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Todas as capitais do Brasil</li>
              <li>Regiões metropolitanas</li>
              <li>Cidades do interior</li>
              <li>Áreas rurais e remotas (prazo diferenciado)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Processo de envio</h2>
            <div className="relative pl-8 space-y-6">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white text-sm">
                  1
                </div>
                <h3 className="font-medium mb-2">Confirmação do pedido</h3>
                <p className="text-secondary">
                  Após a confirmação do pagamento, seu pedido é processado em até 24 horas.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white text-sm">
                  2
                </div>
                <h3 className="font-medium mb-2">Preparação do pedido</h3>
                <p className="text-secondary">
                  Separamos e embalamos seus produtos com todo cuidado.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white text-sm">
                  3
                </div>
                <h3 className="font-medium mb-2">Envio</h3>
                <p className="text-secondary">
                  Seu pedido é coletado pela transportadora e inicia a viagem.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white text-sm">
                  4
                </div>
                <h3 className="font-medium mb-2">Entrega</h3>
                <p className="text-secondary">
                  Entregamos seu pedido no endereço informado.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Contato</h2>
            <p className="mb-4">
              Para informações sobre sua entrega:
            </p>
            <ul className="list-none space-y-2">
              <li>WhatsApp: (11) 95557-3233</li>
              <li>Email: entregas@achadinhosexpress.com.br</li>
              <li>Horário de atendimento: Segunda a Sexta, das 9h às 18h</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;