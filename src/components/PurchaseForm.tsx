import React, { useState, useEffect } from 'react';
import { FormData, DeliveryDate } from '../types';

interface PurchaseFormProps {
  onSubmit: (formData: FormData) => void;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    reference: '',
    state: '',
    city: '',
    deliveryDate: ''
  });
  
  const [deliveryDates, setDeliveryDates] = useState<DeliveryDate[]>([]);
  const [cepError, setCepError] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    populateDeliveryDates();
  }, []);

  const populateDeliveryDates = () => {
    const dates: DeliveryDate[] = [];
    const today = new Date();
    
    for (let i = 0; i < 3; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      
      const dateString = futureDate.toLocaleDateString('pt-BR', options);
      const dateValue = futureDate.toISOString().split('T')[0]; // YYYY-MM-DD format
      
      dates.push({
        value: dateValue,
        label: dateString
      });
    }
    
    setDeliveryDates(dates);
    
    // Set default delivery date to first available date
    if (dates.length > 0) {
      setFormData(prev => ({ ...prev, deliveryDate: dates[0].label }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleCepBlur = async () => {
    const cep = formData.cep.replace(/\D/g, ''); // Remove non-digits
    
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setCepError(true);
        } else {
          setCepError(false);
          setFormData(prev => ({
            ...prev,
            address: data.logradouro || prev.address,
            city: data.localidade || prev.city,
            state: data.uf || prev.state
          }));
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        setCepError(true);
      }
    } else {
      setCepError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['name', 'phone', 'cep', 'address', 'number', 'state', 'city', 'deliveryDate'];
    const errors: Record<string, boolean> = {};
    let hasErrors = false;
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof FormData].trim()) {
        errors[field] = true;
        hasErrors = true;
      }
    });
    
    if (hasErrors) {
      setFormErrors(errors);
      return;
    }
    
    // If validation passes, submit the form
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6 rounded-md shadow-sm">
        <p className="font-bold text-lg mb-2">🎉 PROMOÇÃO EXCLUSIVA!</p>
        <p className="text-xl">Compre <span className="font-extrabold">1</span> e leve <span className="font-extrabold">2</span> unidades de Rivosex Gel!</p>
        <p className="text-lg mt-1">De: <s className="text-red-500">R$ 249,90</s> por apenas <span className="text-green-600 font-extrabold text-2xl">R$ 150,00</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
        <div className="bg-blue-50 p-3 rounded-lg shadow-sm">
          <p className="font-semibold text-blue-700">✅ Pagamento só na entrega</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg shadow-sm">
          <p className="font-semibold text-green-700">🚚 Frete Grátis em todo o Brasil</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg shadow-sm">
          <p className="font-semibold text-purple-700">⚡ Receba em até 24H</p>
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome e Sobrenome *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Nome e Sobrenome" 
          className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 ${formErrors.name ? 'border-red-500' : ''}`}
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        {formErrors.name && <p className="text-red-500 text-xs italic">Este campo é obrigatório.</p>}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Celular (Whatsapp) *</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="+55" 
          className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 ${formErrors.phone ? 'border-red-500' : ''}`}
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        {formErrors.phone && <p className="text-red-500 text-xs italic">Este campo é obrigatório.</p>}
      </div>
      
      <div>
        <label htmlFor="cep" className="block text-gray-700 text-sm font-bold mb-2">CEP *</label>
        <input 
          type="text" 
          id="cep" 
          name="cep" 
          placeholder="CEP" 
          className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 ${formErrors.cep || cepError ? 'border-red-500' : ''}`}
          value={formData.cep}
          onChange={handleInputChange}
          onBlur={handleCepBlur}
          required 
          maxLength={9}
        />
        {cepError && <p className="text-red-500 text-xs italic">CEP inválido ou não encontrado.</p>}
        {formErrors.cep && <p className="text-red-500 text-xs italic">Este campo é obrigatório.</p>}
      </div>
      
      <div>
        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Endereço *</label>
        <input 
          type="text" 
          id="address" 
          name="address" 
          placeholder="Ex: Rua Turonte Júlio" 
          className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 ${formErrors.address ? 'border-red-500' : ''}`}
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        {formErrors.address && <p className="text-red-500 text-xs italic">Este campo é obrigatório.</p>}
      </div>
      
      <div>
        <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Número *</label>
        <input 
          type="text" 
          id="number" 
          name="number" 
          placeholder="Número" 
          className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 ${formErrors.number ? 'border-red-500' : ''}`}
          value={formData.number}
          onChange={handleInputChange}
          required
        />
        {formErrors.number && <p className="text-red-500 text-xs italic">Este campo é obrigatório.</p>}
      </div>
      
      <div>
        <label htmlFor="reference" className="block text-gray-700 text-sm font-bold mb-2">Ponto de referência</label>
        <input 
          type="text" 
          id="reference" 
          name="reference" 
          placeholder="Ex: Bloco B, AP 61" 
          className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.reference}
          onChange={handleInputChange}
        />
      </div>
      
      <div>
        <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">Estado *</label>
        <input 
          type="text" 
          id="state" 
          name="state" 
          placeholder="Estado" 
          className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 ${formErrors.state ? 'border-red-500' : ''}`}
          value={formData.state}
          onChange={handleInputChange}
          required
        />
        {formErrors.state && <p className="text-red-500 text-xs italic">Este campo é obrigatório.</p>}
      </div>
      
      <div>
        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">Cidade *</label>
        <input 
          type="text" 
          id="city" 
          name="city" 
          placeholder="Cidade" 
          className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 ${formErrors.city ? 'border-red-500' : ''}`}
          value={formData.city}
          onChange={handleInputChange}
          required
        />
        {formErrors.city && <p className="text-red-500 text-xs italic">Este campo é obrigatório.</p>}
      </div>
      
      <div>
        <label htmlFor="deliveryDate" className="block text-gray-700 text-sm font-bold mb-2">Data de entrega *</label>
        <select 
          id="deliveryDate" 
          name="deliveryDate" 
          className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 ${formErrors.deliveryDate ? 'border-red-500' : ''}`}
          value={formData.deliveryDate}
          onChange={handleInputChange}
          required
        >
          {deliveryDates.map((date, index) => (
            <option key={index} value={date.label}>{date.label}</option>
          ))}
        </select>
        {formErrors.deliveryDate && <p className="text-red-500 text-xs italic">Este campo é obrigatório.</p>}
      </div>

      <div className="mt-6 text-center">
        <button 
          type="submit" 
          className="btn-primary inline-block text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl text-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          CONCLUIR PEDIDO - R$ 150,00
        </button>
        <p className="text-green-600 font-semibold mt-2">Frete grátis</p>
      </div>
    </form>
  );
};

export default PurchaseForm;