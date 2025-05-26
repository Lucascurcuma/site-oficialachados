import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-8 px-4 text-center text-sm">
      <div className="max-w-4xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Rivosex Gel. Todos os direitos reservados.</p>
        <p className="mt-2">Produto não medicinal. Consulte um médico em caso de dúvidas.</p>
      </div>
    </footer>
  );
};

export default Footer;