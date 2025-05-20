import React, { useState, useMemo, useEffect } from 'react';
import { X, Check, Shield, Clock, Truck, CreditCard } from 'lucide-react';
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

  // Gera as 3 próximas datas úteis uma única vez
  const deliveryDates = useMemo(() => {
    const dates: Date[] = [];
    const today = new Date();
    let cur = new Date(today);

    while (dates.length < 3) {
      cur.setDate(cur.getDate() + 1);
      if (cur.getDay() !== 0) { // pula domingos
        const copy = new Date(cur.getTime());
        copy.setHours(0, 0, 0, 0);
        dates.push(copy);
      }
    }
    return dates;
  }, []);

  const formatDate = (date: Date) => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const weekDay = weekDays[date.getDay()];
    return `${weekDay}, ${day}/${month}`;
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zipCode: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    deliveryDate: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldsDisabled, setFieldsDisabled] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [timer, setTimer] = useState(900); // 15 minutes in seconds
  const [showUrgencyPopup, setShowUrgencyPopup] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    
    // Show urgency popup after 5 seconds
    const urgencyTimer = setTimeout(() => {
      setShowUrgencyPopup(true);
    }, 5000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(urgencyTimer);
      clearInterval(countdownInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const fetchAddress = async (cep: string) => {
    try {
      setIsLoading(true);
      setError('');
      const cleanCep = cep.replace(/\D/g, '');
      if (cleanCep.length !== 8) throw new Error('CEP deve conter 8 dígitos');

      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      if (!res.ok) throw new Error('Erro ao buscar CEP');
      const data: Address = await res.json();
      if (data.erro) throw new Error('CEP não encontrado');

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
    const clean = value.replace(/\D/g, '');
    if (clean.length === 8) fetchAddress(clean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      },
      deliveryDate: formData.deliveryDate
    };

    try {
      const res = await fetch(
        'https://43de-2804-7f0-bec3-1649-217c-cecc-85af-35e0.ngrok-free.app/webhook-test/webhookexpress',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData)
        }
      );
      if (!res.ok) throw new Error('Erro ao enviar pedido');

      alert('✅ Pedido enviado com sucesso!');
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        handleClose();
      }, 3000);
    } catch {
      alert('❌ Erro ao enviar pedido. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const remainingStock = 23;

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
          {/* Timer Banner */}
          <div className="bg-red-600 text-white p-4 rounded-lg mb-6 text-center">
            <p className="text-sm mb-1">⚠️ Reserva expira em:</p>
            <p className="text-2xl font-bold">{formatTime(timer)}</p>
          </div>

          <h2 className="text-xl font-bold mb-6 text-center">PAGAMENTO NA ENTREGA</h2>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center bg-gray-50 p-3 rounded">
              <Shield className="text-green-600 w-5 h-5 mr-2" />
              <span className="text-sm">Compra Segura</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded">
              <Truck className="text-green-600 w-5 h-5 mr-2" />
              <span className="text-sm">Frete Grátis</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded">
              <Clock className="text-green-600 w-5 h-5 mr-2" />
              <span className="text-sm">Entrega 24h</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded">
              <CreditCard className="text-green-600 w-5 h-5 mr-2" />
              <span className="text-sm">Pague na Entrega</span>
            </div>
          </div>

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
                <p className="text-sm text-gray-600">
                  Quantidade: {variant.quantity}
                </p>
                <p className="text-sm text-red-600 font-medium">
                  ⚡ ÚLTIMAS {remainingStock} UNIDADES DISPONÍVEIS!
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="font-medium">Total:</span>
              <div>
                <span className="font-bold text-xl text-green-600">R$ {variant.price.toFixed(2)}</span>
                <p className="text-sm text-gray-500">ou 12x de R$ {(variant.price / 12).toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Método de envio</h3>
            <div className="flex items-center bg-gray-50 p-3 rounded">
              <input type="radio" checked readOnly className="mr-2" />
              <span>Envio grátis</span>
              <span className="ml-auto font-medium text-green-600">Grátis</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-medium">Digite seu endereço de entrega</h3>

            {/* Nome */}
            <div>
              <label className="block text-sm mb-1">
                Nome completo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                required
                placeholder="Digite seu nome completo"
              />
            </div>

            {/* Telefone */}
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
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                required
                placeholder="(00) 00000-0000"
              />
            </div>

            {/* Data de entrega */}
            <div>
              <label className="block text-sm mb-1">
                Data de entrega<span className="text-red-500">*</span>
              </label>
              <select
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                required
              >
                <option value="">Selecione a data de entrega</option>
                {deliveryDates.map((date, idx) => {
                  const isoDate = date.toISOString().slice(0, 10);
                  return (
                    <option key={idx} value={isoDate}>
                      {formatDate(date)}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* CEP */}
            <div>
              <label className="block text-sm mb-1">
                CEP<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <InputMask
                  mask="99999-999"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleZipCodeChange}
                  className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745] ${
                    isLoading ? 'bg-gray-100' : ''
                  }`}
                  disabled={isLoading}
                  required
                  placeholder="00000-000"
                />
                {isLoading && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#28a745]" />
                  </div>
                )}
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>

            {/* Endereço completo */}
            <div>
              <label className="block text-sm mb-1">
                Endereço completo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={fieldsDisabled}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                required
                placeholder="Rua, Avenida, etc."
              />
            </div>

            {/* Número e Complemento */}
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
                  className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                  required
                  placeholder="123"
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
                  placeholder="Apto, Bloco, etc."
                  className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                />
              </div>
            </div>

            {/* Bairro */}
            <div>
              <label className="block text-sm mb-1">
                Bairro<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                disabled={fieldsDisabled}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                required
                placeholder="Seu bairro"
              />
            </div>

            {/* Estado */}
            <div>
              <label className="block text-sm mb-1">
                Estado<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                disabled={fieldsDisabled}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                required
                placeholder="UF"
              />
            </div>

            {/* Cidade */}
            <div>
              <label className="block text-sm mb-1">
                Cidade<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={fieldsDisabled}
                className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-[#28a745]"
                required
                placeholder="Sua cidade"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? 'ENVIANDO...'
                : `SOLICITAR AGORA - R$ ${variant.price.toFixed(2)}`}
            </Button>

            {/* Social Proof */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Mais de 10.000 clientes satisfeitos! ⭐⭐⭐⭐⭐
              </p>
              <p className="text-sm text-gray-500">
                Sem cobranças ocultas • Pague apenas na entrega
              </p>
            </div>
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
            <h3 className="text-xl font-bold text-center mb-2">
              Pedido Realizado com Sucesso!
            </h3>
            <p className="text-gray-600 text-center">
              Em breve entraremos em contato via WhatsApp para confirmar seu pedido.
            </p>
          </div>
        </div>
      )}

      {/* Urgency Popup */}
      {showUrgencyPopup && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-bounce">
          <p className="text-sm font-medium text-red-600">
            🔥 12 pessoas compraram este produto nos últimos 30 minutos!
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;