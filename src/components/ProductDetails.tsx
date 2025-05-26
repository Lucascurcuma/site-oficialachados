import React from 'react';

const ProductDetails: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white text-center shadow-md rounded-lg mt-8 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Detalhes Técnicos e Modo de Uso
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ficha Técnica</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Contém:</strong> 18ml</li>
            <li><strong>Composição:</strong> Aqua, BHT, Capsicum Annum Extract, Carboxymenthylcullulose, Mentha Piperita Oil, Polysorbate 20, Propylparaben, Glycerin.</li>
            <li><strong>Informações Adicionais:</strong> O produto não é de uso medicinal.</li>
          </ul>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modo de Usar</h3>
          <p className="text-gray-700 leading-relaxed">
            Aplique no corpo do pênis e escroto. Massageie suavemente até que o produto seja completamente absorvido.
          </p>
        </div>
      </div>
      <div className="mt-8 p-6 bg-red-100 rounded-lg shadow-inner text-left">
        <h3 className="text-2xl font-semibold text-red-800 mb-4">Precauções Importantes</h3>
        <ul className="list-disc list-inside text-red-700 space-y-2">
          <li>Não expor ao Sol e nem a temperaturas superiores a 50°C.</li>
          <li>Proteger os olhos durante a aplicação, em caso de contato com os olhos, enxágue-os com água em abundância.</li>
          <li>Não usar se a pele estiver irritada ou lesionada.</li>
          <li>Em caso de irritação, suspenda o uso e procure um médico.</li>
          <li>Evite a inalação deste produto.</li>
          <li>Mantenha fora do alcance das crianças.</li>
          <li>Uso Externo.</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;