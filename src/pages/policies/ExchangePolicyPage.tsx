import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExchangePolicyPage: React.FC = () => {
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
          <h1 className="text-2xl font-bold">Política de Trocas e Devoluções</h1>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Prazo para trocas e devoluções</h2>
            <p className="mb-4">
              Você tem até 7 (sete) dias corridos, a contar da data de recebimento, para solicitar a troca ou devolução de produtos nas seguintes condições:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Produto com defeito de fabricação</li>
              <li>Produto danificado durante o transporte</li>
              <li>Produto em desacordo com o pedido</li>
              <li>Arrependimento da compra</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Como solicitar uma troca ou devolução</h2>
            <p className="mb-4">
              Para iniciar o processo, siga os passos abaixo:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Entre em contato com nosso atendimento via WhatsApp ou e-mail</li>
              <li>Informe o número do pedido e o motivo da troca/devolução</li>
              <li>Envie fotos do produto, se necessário</li>
              <li>Aguarde a análise e aprovação do nosso time</li>
              <li>Siga as instruções para envio do produto</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Condições para troca e devolução</h2>
            <p className="mb-4">
              Para que a troca ou devolução seja aceita, o produto deve:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Estar na embalagem original</li>
              <li>Não apresentar sinais de uso</li>
              <li>Estar com todos os acessórios e manuais</li>
              <li>Estar acompanhado da nota fiscal</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Reembolso</h2>
            <p className="mb-4">
              Após a aprovação da devolução, o reembolso será realizado:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Em até 7 dias úteis para pagamentos com cartão de crédito</li>
              <li>Em até 5 dias úteis para pagamentos com cartão de débito</li>
              <li>Em até 3 dias úteis para pagamentos via PIX</li>
              <li>Imediatamente para pagamentos na entrega (dinheiro)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Custos de envio</h2>
            <p className="mb-4">
              Os custos de envio para troca ou devolução serão:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Por conta da Achadinhos Express em caso de defeito ou erro no envio</li>
              <li>Por conta do cliente em caso de arrependimento da compra</li>
              <li>Gratuitos para trocas por tamanho ou cor (quando disponível)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Contato</h2>
            <p className="mb-4">
              Para solicitar uma troca ou devolução, entre em contato:
            </p>
            <ul className="list-none space-y-2">
              <li>WhatsApp: (11) 95557-3233</li>
              <li>Email: trocas@achadinhosexpress.com.br</li>
              <li>Horário de atendimento: Segunda a Sexta, das 9h às 18h</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExchangePolicyPage;