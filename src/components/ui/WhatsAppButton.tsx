import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  onClick: () => void;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-brand-red hover:bg-brand-orange text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
      aria-label="Falar com atendente"
    >
      <MessageCircle className="w-6 h-6 animate-bounce" />
      <span className="absolute right-full mr-3 bg-white px-3 py-1.5 rounded-lg text-primary text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
        Fale Conosco
      </span>
    </button>
  );
};

export default WhatsAppButton;