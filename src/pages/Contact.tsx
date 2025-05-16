import React, { useEffect } from 'react';
import ContactForm from '../components/sections/contact/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageCircle, ShieldCheck, Truck, CreditCard } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Fale Conosco | Achados Express';
  }, []);

  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Compra Segura",
      description: "Pagamento somente na entrega do produto"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Entrega Rápida",
      description: "Receba em até 24 horas"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Formas de Pagamento",
      description: "Cartão, PIX ou Dinheiro"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "Suporte 24/7",
      description: "Atendimento rápido via WhatsApp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Fale Conosco</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar! Nossa equipe está disponível 24/7 para responder suas dúvidas e garantir a melhor experiência de compra.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 text-blue-600">Contato Rápido</h2>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5511955573233" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <Phone className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <p className="font-semibold text-green-600">WhatsApp</p>
                    <p className="text-green-700">+55 11 95557-3233</p>
                  </div>
                </a>

                <a 
                  href="mailto:achadosexpressofc@gmail.com"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-blue-600">E-mail</p>
                    <p className="text-blue-700">achadosexpressofc@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 text-blue-600">Horário de Atendimento</h2>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-2">
                    <p className="font-semibold">Segunda - Sexta</p>
                    <p className="text-gray-600">08h - 18h</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sábado, Domingo e Feriados</p>
                    <p className="text-gray-600">08h - 13h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 text-blue-600">Dúvidas Frequentes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Como funciona a entrega?</h3>
                  <p className="text-gray-600">Entregamos em até 24 horas após a confirmação do pedido, diretamente no endereço informado.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quais as formas de pagamento?</h3>
                  <p className="text-gray-600">Aceitamos cartão de crédito/débito, PIX ou dinheiro, todos pagos apenas na entrega do produto.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Posso trocar o produto?</h3>
                  <p className="text-gray-600">Sim, você tem até 7 dias após o recebimento para solicitar a troca ou devolução.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;