import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#002f6c] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              PAGUE SÓ<br />NA ENTREGA!
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Todos os produtos com<br />até 60% de desconto
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link to="/catalogo" className="w-full sm:w-auto">
                <Button variant="white" size="lg" fullWidth>
                  COMPRAR AGORA
                </Button>
              </Link>
              <Link to="/catalogo" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth>
                  VER PRODUTOS
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://i.pinimg.com/736x/af/24/75/af247590359fbc96b154b8ec24a587db.jpg" 
                alt="Interface futurista com gráficos em azul" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-[#002f6c] p-4 rounded-lg shadow-lg">
                <div className="font-bold text-xl">60% OFF</div>
                <div className="text-sm">Ofertas Imperdíveis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;