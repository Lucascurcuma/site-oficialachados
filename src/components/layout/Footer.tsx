import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002f6c] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Customer Support Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tem alguma dúvida?</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock size={20} className="mr-2" />
                <div>
                  <p className="font-bold">Horário de atendimento:</p>
                  <p>Seg–Sex: 08h–18h</p>
                  <p>Sáb, Dom e feriados: 08h–13h</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>achadosexpressofc@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+55 11 95557-3233</span>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviço ao Cliente</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#28a745] transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#28a745] transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#28a745] transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#28a745] transition-colors">Sobre Nós</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Junte-se à nossa família</h3>
            <p className="mb-4">Receba gratuitamente as melhores ofertas por e-mail</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="px-4 py-2 w-full rounded-l-md text-gray-800 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-[#28a745] text-white px-4 py-2 rounded-r-md hover:bg-[#218838] transition-colors"
              >
                Quero receber
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/30 mt-12 pt-6 text-center">
          <p>© 2025 Achados Express. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;