import React from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="w-full bg-gradient-to-br from-red-600 to-red-800 text-white py-16 px-4 text-center rounded-b-3xl shadow-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Liberte-se da pressa: Viva o prazer que você merece com Rivosex Gel!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
          A solução discreta que garante orgasmos mais intensos e momentos inesquecíveis para você e seu(sua) parceiro(a).
        </p>
        <img 
          src="https://miess.vteximg.com.br/arquivos/ids/167217-900-900/SL059_1.jpg?v=637181026233800000" 
          alt="Imagem do produto Rivosex Gel" 
          className="mx-auto mb-8 rounded-lg shadow-lg max-w-full h-auto animate-zoom-in"
        />
        <div className="bg-yellow-100 text-yellow-900 p-4 rounded-lg mb-6 shadow-md border-l-4 border-yellow-500">
          <p className="font-bold text-xl sm:text-2xl">🔥 PROMOÇÃO IMPERDÍVEL! 🔥</p>
          <p className="text-lg sm:text-xl mt-1">Compre <span className="font-extrabold">1</span> e leve <span className="font-extrabold">2</span> unidades!</p>
          <p className="text-md sm:text-lg mt-1">De: <s className="text-red-500">R$ 249,90</s> por apenas <span className="text-green-700 font-extrabold text-2xl sm:text-3xl">R$ 150,00</span></p>
        </div>
        <button 
          onClick={onOpenModal}
          className="btn-primary inline-block text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl text-xl sm:text-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          QUERO MAIS PRAZER AGORA!
        </button>
      </div>
    </section>
  );
};

export default Hero;