import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white text-center shadow-md rounded-lg mt-8 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Você merece momentos de prazer sem limites!
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        A ejaculação precoce não precisa mais ser um obstáculo. Com Rivosex Gel, transforme sua vida sexual e redescubra a intimidade plena.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="flex-1 p-6 bg-red-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-red-600 mb-3">O Desafio</h3>
          <p className="text-gray-600">Momentos curtos, insatisfação, ansiedade e perda de confiança.</p>
        </div>
        <div className="flex-1 p-6 bg-green-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-600 mb-3">A Solução Rivosex</h3>
          <p className="text-gray-600">Controle, prazer prolongado, orgasmos mútuos e confiança renovada.</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;