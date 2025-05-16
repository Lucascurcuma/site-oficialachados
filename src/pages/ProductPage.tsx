import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductTabs from '../components/product/ProductTabs';
import RelatedProducts from '../components/product/RelatedProducts';
import { Star, Sparkles, CreditCard, Package, Shield, Clock, MessageCircle, Users, TrendingUp, Award, CheckCircle, DollarSign, Truck } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const [recentViews, setRecentViews] = useState(0);
  const [recentSales, setRecentSales] = useState(0);
  
  const product = getProductById(id || '');
  
  useEffect(() => {
    const endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + 30);

    const updateTimer = () => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();
      
      if (diff <= 0) {
        endTime.setMinutes(endTime.getMinutes() + 30);
      }
      
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${minutes}m ${seconds}s`);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const baseViews = Math.floor(Math.random() * 50) + 100;
    const baseSales = Math.floor(Math.random() * 10) + 20;
    setRecentViews(baseViews);
    setRecentSales(baseSales);
    
    const interval = setInterval(() => {
      setRecentViews(prev => prev + Math.floor(Math.random() * 3));
      setRecentSales(prev => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Produto não encontrado</h1>
      </div>
    );
  }
  
  const currentVariant = product.variants[selectedVariant];
  const installmentPrice = (currentVariant.price / 10).toFixed(2);

  const handleVariantSelect = (index: number) => {
    setSelectedVariant(index);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const calculateSavings = (variant: typeof currentVariant) => {
    if (!product.originalPrice) return 0;
    const originalTotal = product.originalPrice * variant.quantity;
    const savings = originalTotal - variant.price;
    return savings;
  };

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de saber mais sobre o produto ${product.name}. Vi no site que custa R$ ${currentVariant.price.toFixed(2)} ${currentVariant.quantity > 1 ? `(${currentVariant.quantity} unidades)` : ''}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511955573233?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl p-6 mb-8 shadow-lg border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 group hover:scale-105 transition-transform">
            <div className="bg-brand-red/10 p-3 rounded-lg">
              <DollarSign className="w-8 h-8 text-brand-red" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Pague na Entrega</div>
              <div className="text-sm text-gray-600 group-hover:text-brand-red transition-colors">Mais segurança</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group hover:scale-105 transition-transform">
            <div className="bg-brand-red/10 p-3 rounded-lg">
              <Truck className="w-8 h-8 text-brand-red" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Frete Grátis</div>
              <div className="text-sm text-gray-600 group-hover:text-brand-red transition-colors">Todo Brasil</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group hover:scale-105 transition-transform">
            <div className="bg-brand-red/10 p-3 rounded-lg">
              <Clock className="w-8 h-8 text-brand-red" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Entrega Expressa</div>
              <div className="text-sm text-gray-600 group-hover:text-brand-red transition-colors">1-3 dias úteis</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group hover:scale-105 transition-transform">
            <div className="bg-brand-red/10 p-3 rounded-lg">
              <Shield className="w-8 h-8 text-brand-red" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Garantia Total</div>
              <div className="text-sm text-gray-600 group-hover:text-brand-red transition-colors">Ou dinheiro de volta</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>
        
        <div>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-red" />
                <span className="text-sm text-gray-600">
                  {recentViews} pessoas estão vendo agora
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">
                  {recentSales} vendas nas últimas 24h
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <Star size={20} className="text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
            </div>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-secondary">{product.numReviews} avaliações</span>
            <span className="mx-2 text-gray-300">|</span>
            <div className="flex items-center">
              <Award className="w-5 h-5 text-brand-red mr-1" />
              <span className="text-sm text-gray-600">Mais Vendido</span>
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-red animate-pulse" />
                <span className="font-medium text-brand-red">Oferta por tempo limitado:</span>
              </div>
              <span className="font-bold text-brand-red">{timeLeft}</span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-3">Principais Benefícios:</h3>
            <div className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-brand-red">
                R$ {currentVariant.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-600">à vista</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600 mt-2">
              <CreditCard className="w-4 h-4 text-brand-red mr-2" />
              <span>10x de R$ {installmentPrice} sem juros</span>
            </div>
            
            {product.originalPrice && (
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-gray-500 line-through">
                  De R$ {(product.originalPrice * currentVariant.quantity).toFixed(2)}
                </span>
                <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                  Economia de R$ {calculateSavings(currentVariant).toFixed(2)}
                </span>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-3">Formas de Pagamento na Entrega:</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CreditCard className="w-4 h-4 text-brand-red" />
                <span>Cartão de Crédito</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CreditCard className="w-4 h-4 text-brand-red" />
                <span>Cartão de Débito</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <DollarSign className="w-4 h-4 text-brand-red" />
                <span>Dinheiro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Package className="w-4 h-4 text-brand-red" />
                <span>PIX</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-primary mb-2">
              Selecione a Quantidade
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => handleVariantSelect(index)}
                  className={`relative p-3 rounded-lg border-2 transition-all duration-300 ${
                    selectedVariant === index
                      ? 'border-brand-red bg-brand-red/5 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-brand-red/50 hover:bg-brand-red/5'
                  }`}
                >
                  {selectedVariant === index && isAnimating && (
                    <Sparkles 
                      className="absolute -top-2 -right-2 text-brand-red animate-bounce"
                      size={16}
                    />
                  )}
                  <div className="text-sm font-medium">
                    {variant.quantity} {variant.quantity === 1 ? 'unidade' : 'unidades'}
                  </div>
                  <div className="text-lg font-bold text-brand-red mt-1">
                    R$ {variant.price.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-600">
                    10x de R$ {(variant.price / 10).toFixed(2)}
                  </div>
                  {product.originalPrice && (
                    <div className="text-xs text-brand-red mt-1">
                      -{Math.round((1 - variant.price / (product.originalPrice * variant.quantity)) * 100)}% OFF
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {product.stockCount < 10 && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <div className="flex items-center text-orange-600">
                <Clock className="w-5 h-5 mr-2 animate-pulse" />
                <span className="font-medium">Apenas {product.stockCount} unidades em estoque!</span>
              </div>
            </div>
          )}
          
          <div className="flex gap-4">
            <a
              href={currentVariant.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-brand-red text-white py-3 rounded-md font-medium hover:bg-brand-orange transition-colors flex items-center justify-center text-lg"
            >
              Comprar Agora
            </a>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium transition-colors"
            >
              <MessageCircle size={24} />
              <span className="hidden md:inline">Falar com Atendente</span>
            </button>
          </div>
        </div>
      </div>
      
      <ProductTabs product={product} />
      <RelatedProducts currentProductId={product.id} category={product.category} />
    </div>
  );
};

export default ProductPage;