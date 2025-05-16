import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQ[] = [
    // Pedidos
    {
      category: 'pedidos',
      question: 'Como faço para acompanhar meu pedido?',
      answer: 'Após a confirmação do pedido, você receberá um código de rastreamento por e-mail e WhatsApp. Com esse código, você pode acompanhar o status da entrega em tempo real através do nosso site ou diretamente no site da transportadora.'
    },
    {
      category: 'pedidos',
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo de entrega varia de 1 a 3 dias úteis, dependendo da sua localização. Para capitais e regiões metropolitanas, geralmente a entrega é realizada em 1-2 dias úteis. Para outras localidades, o prazo é de 2-3 dias úteis.'
    },
    {
      category: 'pedidos',
      question: 'Como cancelar um pedido?',
      answer: 'Para cancelar um pedido, entre em contato conosco imediatamente através do WhatsApp (11) 95557-3233. O cancelamento só é possível antes do envio do produto. Após o envio, será necessário seguir nossa política de devolução.'
    },
    
    // Produtos
    {
      category: 'produtos',
      question: 'Os produtos são originais?',
      answer: 'Sim, todos os nossos produtos são 100% originais e possuem garantia de autenticidade. Trabalhamos apenas com fornecedores autorizados e produtos de qualidade comprovada.'
    },
    {
      category: 'produtos',
      question: 'Qual a garantia dos produtos?',
      answer: 'Todos os nossos produtos possuem garantia contra defeitos de fabricação. O prazo de garantia varia de acordo com o produto e está especificado na descrição de cada item. Além disso, você tem 7 dias para devolver o produto caso não esteja satisfeito.'
    },
    {
      category: 'produtos',
      question: 'Como sei se o produto está disponível?',
      answer: 'Se o produto está disponível para compra no site, significa que temos estoque. Mantemos nosso inventário sempre atualizado para evitar frustações.'
    },
    
    // Pagamento
    {
      category: 'pagamento',
      question: 'Quais as formas de pagamento aceitas?',
      answer: 'Aceitamos diversas formas de pagamento: cartão de crédito, cartão de débito e pagamento na entrega. Todas as transações são seguras e processadas por sistemas confiáveis.'
    },
    {
      category: 'pagamento',
      question: 'O site é seguro para compras?',
      answer: 'Sim, nosso site utiliza certificado SSL e todas as transações são criptografadas. Além disso, trabalhamos com as principais operadoras de pagamento do mercado, garantindo total segurança nas suas compras.'
    },
    {
      category: 'pagamento',
      question: 'Como funciona o pagamento na entrega?',
      answer: 'No pagamento na entrega, você só paga quando receber o produto. Aceitamos dinheiro e cartões. O entregador levará a maquininha de cartão caso você opte por essa forma de pagamento.'
    },
    
    // Trocas e Devoluções
    {
      category: 'trocas',
      question: 'Como funciona a política de trocas?',
      answer: 'Você tem até 7 dias após o recebimento para solicitar a troca ou devolução do produto. O item deve estar em perfeito estado, na embalagem original e com todos os acessórios. Entre em contato conosco para iniciar o processo.'
    },
    {
      category: 'trocas',
      question: 'Quem paga o frete da devolução?',
      answer: 'Em caso de defeito ou erro no envio, nós pagamos o frete da devolução. Em caso de arrependimento ou troca por outro tamanho/cor, o cliente é responsável pelo custo do envio.'
    },
    {
      category: 'trocas',
      question: 'Qual o prazo para reembolso?',
      answer: 'Após recebermos o produto devolvido e confirmarmos que está tudo certo, o reembolso é processado em até 7 dias úteis, dependendo da forma de pagamento utilizada na compra.'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'pedidos', name: 'Pedidos' },
    { id: 'produtos', name: 'Produtos' },
    { id: 'pagamento', name: 'Pagamento' },
    { id: 'trocas', name: 'Trocas e Devoluções' }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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
          <div>
            <h1 className="text-2xl font-bold">Perguntas Frequentes</h1>
            <p className="text-secondary mt-1">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-100 text-secondary hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium pr-8">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus size={20} className="text-brand-red flex-shrink-0" />
                ) : (
                  <Plus size={20} className="text-brand-red flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                } overflow-hidden`}
              >
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-secondary">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Ainda tem dúvidas?</h2>
          <p className="text-secondary mb-4">
            Entre em contato conosco que teremos prazer em ajudar.
          </p>
          <div className="space-y-2">
            <p className="text-secondary">
              WhatsApp: (11) 95557-3233
            </p>
            <p className="text-secondary">
              Email: contato@achadinhosexpress.com.br
            </p>
            <p className="text-secondary">
              Horário de atendimento: Segunda a Sexta, das 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;