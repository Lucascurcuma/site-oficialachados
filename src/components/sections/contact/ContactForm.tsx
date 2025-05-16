import React, { useState } from 'react';
import Button from '../../ui/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // This would normally be an API call
      if (Math.random() > 0.1) { // 90% success rate for demo
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setFormState('error');
      }
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-[#002f6c]">Precisa de ajuda? Fale com a gente!</h2>
      
      {formState === 'success' ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
          <h3 className="font-bold text-lg mb-2">Mensagem enviada com sucesso!</h3>
          <p>Agradecemos pelo seu contato. Nossa equipe retornará em breve.</p>
          <Button 
            variant="primary" 
            onClick={() => setFormState('idle')} 
            className="mt-4"
          >
            Enviar outra mensagem
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002f6c] focus:outline-none"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">E-mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002f6c] focus:outline-none"
                placeholder="exemplo@email.com"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1 font-medium">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002f6c] focus:outline-none"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1 font-medium">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002f6c] focus:outline-none"
              placeholder="Como podemos ajudar?"
            ></textarea>
          </div>
          
          <Button
            type="submit"
            variant="secondary"
            fullWidth
            disabled={formState === 'submitting'}
          >
            {formState === 'submitting' ? 'Enviando...' : 'Enviar'}
          </Button>
          
          {formState === 'error' && (
            <div className="mt-4 bg-red-50 text-red-800 p-4 rounded-md">
              Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;