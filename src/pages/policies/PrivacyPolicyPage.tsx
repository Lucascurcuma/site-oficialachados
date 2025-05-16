import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
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
          <h1 className="text-2xl font-bold">Política de Privacidade</h1>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Informações que coletamos</h2>
            <p className="mb-4">
              Coletamos informações que você nos fornece diretamente ao utilizar nossos serviços, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Endereço para entrega</li>
              <li>Informações de pagamento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Como usamos suas informações</h2>
            <p className="mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Processar e entregar seus pedidos</li>
              <li>Enviar atualizações sobre seus pedidos</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Compartilhamento de informações</h2>
            <p className="mb-4">
              Não vendemos ou alugamos suas informações pessoais a terceiros. Compartilhamos suas informações apenas com:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Parceiros de entrega para realizar a entrega dos produtos</li>
              <li>Processadores de pagamento para processar suas transações</li>
              <li>Prestadores de serviços que nos ajudam a operar o site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Segurança dos dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Criptografia SSL para todas as transmissões de dados</li>
              <li>Acesso restrito a informações pessoais</li>
              <li>Monitoramento regular de segurança</li>
              <li>Backups regulares de dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Seus direitos</h2>
            <p className="mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Retirar seu consentimento para marketing</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Contato</h2>
            <p className="mb-4">
              Para questões relacionadas à privacidade, entre em contato conosco:
            </p>
            <ul className="list-none space-y-2">
              <li>Email: privacidade@achadinhosexpress.com.br</li>
              <li>Telefone: (11) 95557-3233</li>
              <li>WhatsApp: (11) 95557-3233</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;