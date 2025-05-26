import React from 'react';
import { TestimonialProps } from '../types';

const TestimonialCard: React.FC<TestimonialProps> = ({ text, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-left">
      <p className="text-gray-700 italic mb-4">{text}</p>
      <p className="font-semibold text-gray-800">{author}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "\"Rivosex mudou completamente minha vida sexual! Minha parceira e eu estamos mais felizes do que nunca. Recomendo a todos!\"",
      author: "- João S., São Paulo"
    },
    {
      text: "\"Eu estava cético, mas o Rivosex realmente funciona. O efeito de menta é agradável e a absorção é super rápida. Entrega em 24h foi um bônus!\"",
      author: "- Carlos M., Rio de Janeiro"
    },
    {
      text: "\"Finalmente encontrei um produto que me dá confiança. A promoção de leve 2 é incrível e o pagamento na entrega é muito prático.\"",
      author: "- Fernando P., Belo Horizonte"
    },
    {
      text: "\"Minha esposa está adorando! Nossos momentos íntimos ficaram muito mais prazerosos. A entrega foi super rápida, como prometido.\"",
      author: "- Pedro R., Curitiba"
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-gray-100 text-center rounded-lg mt-8 max-w-4xl mx-auto shadow-md">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        O que nossos clientes estão dizendo:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            text={testimonial.text}
            author={testimonial.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;