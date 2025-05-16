import React, { useState } from 'react';
import { Product } from '../../types';
import { Star, Award, Shield, Package, Clock, CheckCircle, Users, TrendingUp, ChevronDown } from 'lucide-react';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState('descricao');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { id: 'descricao', label: 'Descrição' },
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'modo-de-uso', label: 'Como Usar' },
    { id: 'garantia', label: 'Garantia' },
    { id: 'faq', label: 'Dúvidas Frequentes' }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsDropdownOpen(false);
  };

  const getActiveTabLabel = () => {
    return tabs.find(tab => tab.id === activeTab)?.label;
  };

  const faqs = [
    {
      question: 'O produto é original?',
      answer: 'Sim, todos os nossos produtos são 100% originais, com nota fiscal e garantia. Trabalhamos apenas com fornecedores autorizados e produtos de qualidade comprovada.'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'Realizamos entrega expressa para todo Brasil em 1-3 dias úteis. Você receberá o código de rastreamento assim que o pedido for enviado.'
    },
    {
      question: 'Como funciona a garantia?',
      answer: 'Oferecemos garantia de 30 dias. Se não ficar satisfeito, devolvemos seu dinheiro integralmente, sem burocracia.'
    },
    {
      question: 'O pagamento é seguro?',
      answer: 'Sim! Você só paga quando receber o produto em casa. Aceitamos cartão de crédito, débito, PIX e dinheiro na entrega.'
    }
  ];

  const tabContent = {
    descricao: (
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre o Produto</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            <p className="text-gray-700 leading-relaxed">{product.details}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Por que escolher?</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <div>
                    <h4 className="font-medium">Produto Mais Vendido</h4>
                    <p className="text-sm text-gray-600">{product.rating.toFixed(1)}/5 ({product.numReviews} avaliações)</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-brand-red" />
                  <div>
                    <h4 className="font-medium">Qualidade Premium</h4>
                    <p className="text-sm text-gray-600">Produto testado e aprovado</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <div>
                    <h4 className="font-medium">Satisfação Garantida</h4>
                    <p className="text-sm text-gray-600">30 dias de garantia ou seu dinheiro de volta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    beneficios: (
      <div className="py-8">
        <h3 className="text-xl font-bold mb-6">Principais Benefícios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    'modo-de-uso': (
      <div className="py-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Como Usar</h3>
          {product.usage ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="prose max-w-none">
                {product.usage.split('\n').map((line, index) => (
                  <p key={index} className="text-gray-700 mb-4">{line}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-600">Instruções de uso serão adicionadas em breve.</p>
            </div>
          )}
        </div>
      </div>
    ),
    garantia: (
      <div className="py-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Nossa Garantia</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-green-500" />
              <div>
                <h4 className="text-lg font-bold">Garantia de 30 Dias</h4>
                <p className="text-gray-600">Satisfação garantida ou seu dinheiro de volta</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Confiamos tanto na qualidade dos nossos produtos que oferecemos uma garantia incondicional de 30 dias.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Como funciona?</h5>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Use o produto por até 30 dias</li>
                    <li>• Se não estiver satisfeito, solicite o reembolso</li>
                    <li>• Devolvemos 100% do seu dinheiro</li>
                    <li>• Sem perguntas, sem burocracia</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Por que oferecemos?</h5>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Confiamos na qualidade do produto</li>
                    <li>• Queremos sua satisfação garantida</li>
                    <li>• Compra sem risco para você</li>
                    <li>• Transparência total</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    faq: (
      <div className="py-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Perguntas Frequentes</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-medium mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };
  
  return (
    <div className="mt-12">
      {/* Mobile Dropdown */}
      <div className="md:hidden relative mb-6">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-left font-medium flex items-center justify-between shadow-sm hover:border-brand-red transition-colors"
        >
          <span>{getActiveTabLabel()}</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                  activeTab === tab.id ? 'text-brand-red font-medium' : 'text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:flex overflow-x-auto gap-2 border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-brand-red text-brand-red'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="mt-6">
        {tabContent[activeTab as keyof typeof tabContent]}
      </div>
    </div>
  );
};

export default ProductTabs;