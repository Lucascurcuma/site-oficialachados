import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import InputMask from 'react-input-mask';
import Button from '../ui/Button';
import { Product } from '../../types';

interface CheckoutFormProps {
  onClose: () => void;
  product: Product;
  selectedVariant: number;
}

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onClose, product, selectedVariant }) => {
  const variant = product.variants[selectedVariant];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    state: '',
    city: '',
    zipCode: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fieldsDisabled, setFieldsDisabled] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const fetchAddress = async (cep: string) => {
    try {
      setIsLoading(true);
      setError('');
      
      const cleanCep = cep.replace(/\D/g, '');
      if (cleanCep.length !== 8) {
        throw new Error('CEP deve conter 8 dígitos');
      }

      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      if (!response.ok) {
        throw new Error('Erro ao buscar CEP');
      }

      const data: Address = await response.json();
      
      if (data.erro) {
        throw new Error('CEP não encontrado');
      }

      setFormData(prev => ({
        ...prev,
        address: data.logradouro || prev.address,
        neighborhood: data.bairro || prev.neighborhood,
        city: data.localidade,
        state: data.uf
      }));

      setFieldsDisabled(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar CEP');
      setFieldsDisabled(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, zipCode: value }));
    
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length === 8) {
      fetchAddress(cleanValue);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const orderData = {
        customer: {
          name: formData.name,
          phone: formData.phone,
          address: {
            street: formData.address,
            number: formData.number,
            complement: formData.complement,
            neighborhood: formData.neighborhood,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode
          }
        },
        product: {
          id: product.id,
          name: product.name,
          quantity: variant.quantity,
          price: variant.price,
          total: variant.price
        }
      };

      const response = await fetch('https://082a-2804-7f0-bec3-1649-f599-a414-30dc-eb21.ngrok-free.app/webhook/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar pedido');
      }

      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar pedido. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className={`bg-white rounded-lg w-full max-w-lg relative transform transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl font-bold mb-6">PAGAMENTO NA ENTREGA</h2>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-center mb-2">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-20 h-20 object-contain bg-white rounded mr-3"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">Quantidade: {variant.quantity}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="font-medium">Total:</span>
              <span className="font-bold">R$ {variant.price.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Método de envio</h3>
            <div className="flex items-center bg-gray-50 p-3 rounded">
              <input type="radio" checked readOnly className="mr-2" />
              <span>Envio grátis</span>
              <span className="ml-auto font-medium">Grátis</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-medium">Digite seu endereço de entrega</h3>

            <div>
              <label className="block text-sm mb-1">
                Nome completo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Celular (WhatsApp)<span className="text-red-500">*</span>
              </label>
              <InputMask
                mask="(99) 99999-9999"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                CEP<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <InputMask
                  mask="99999-999"
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleZipCodeChange}
                  className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent ${
                    isLoading ? 'bg-gray-100' : ''
                  }`}
                  disabled={isLoading}
                  required
                />
                {isLoading && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#28a745]"></div>
                  </div>
                )}
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">
                Endereço completo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                disabled={fieldsDisabled}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">
                  Número<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Complemento
                </label>
                <input
                  type="text"
                  name="complement"
                  value={formData.complement}
                  onChange={handleChange}
                  className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                  placeholder="Apto, Bloco, etc."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">
                Bairro<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                disabled={fieldsDisabled}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Estado<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                disabled={fieldsDisabled}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Cidade<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                disabled={fieldsDisabled}
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'ENVIANDO...' : `SOLICITAR AGORA - R$ ${variant.price.toFixed(2)}`}
            </Button>

            <p className="text-center text-sm text-gray-500">
              Sem cobranças ocultas
            </p>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full mx-4 relative">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <Check className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Pedido Realizado com Sucesso!</h3>
            <p className="text-gray-600 text-center">
              Em breve entraremos em contato via WhatsApp para confirmar seu pedido.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;