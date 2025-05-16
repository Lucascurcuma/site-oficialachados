import React from 'react';

const SatisfactionItem: React.FC<{ percentage: number; text: string }> = ({ percentage, text }) => {
  return (
    <div className="flex items-center mb-6">
      <div className="relative w-16 h-16 flex-shrink-0 mr-4">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div 
          className="absolute inset-0 rounded-full border-4 border-[#28a745]"
          style={{ 
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
            opacity: percentage / 100,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {percentage}%
        </div>
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

const Testimonial: React.FC<{ name: string; image: string; comment: string }> = ({ name, image, comment }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <p className="italic text-gray-700 mb-4">"{comment}"</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <strong>{name}</strong>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const satisfactionData = [
    { percentage: 98, text: "satisfeitos com durabilidade e eficiência" },
    { percentage: 96, text: "recomendam nossos produtos para o dia a dia" },
    { percentage: 99, text: "satisfeitos com o atendimento ao cliente" },
    { percentage: 97, text: "ficaram satisfeitos com o tempo de entrega" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Mariana Silva",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comment: "Comprei vários produtos na Achados Express e sempre fiquei muito satisfeita com a qualidade. O pagamento na entrega me dá muita segurança!"
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comment: "Os produtos chegaram em tempo recorde e com a mesma qualidade que vi no site. Com certeza vou comprar novamente!"
    },
    {
      id: 3,
      name: "Juliana Mendes",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comment: "Atendimento excelente e produtos de qualidade. Recomendo a todos meus amigos!"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#002f6c]">Pesquisa com clientes 2025</h2>
            {satisfactionData.map((item, index) => (
              <SatisfactionItem 
                key={index}
                percentage={item.percentage}
                text={item.text}
              />
            ))}
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#002f6c]">Opiniões de clientes</h2>
            {testimonials.map((testimonial) => (
              <Testimonial 
                key={testimonial.id}
                name={testimonial.name}
                image={testimonial.image}
                comment={testimonial.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;