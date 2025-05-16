import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Package, ShoppingCart, Truck, Calendar, Check, X } from 'lucide-react';
import Gallery from '../components/sections/product/Gallery';
import Description from '../components/sections/product/Description';
import Button from '../components/ui/Button';
import { getProductById } from '../data/products';
import { Product } from '../types';
import CheckoutForm from '../components/checkout/CheckoutForm';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        if (id) {
          const data = await getProductById(id);
          setProduct(data);
          document.title = `${data.name} | Achados Express`;
        }
      } catch (error) {
        console.error('Error loading product:', error);
        navigate('/catalogo');
      } finally {
        setLoading(false);
      }
    };
    
    loadProduct();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-300 rounded"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
              <div className="h-14 bg-gray-300 rounded w-full mt-8"></div>
              <div className="h-32 bg-gray-300 rounded w-full mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Produto não encontrado</h2>
        <p className="text-gray-600 mb-6">O produto que você está procurando não existe ou foi removido.</p>
        <Button variant="secondary" onClick={() => navigate('/catalogo')}>
          Voltar para o Catálogo
        </Button>
      </div>
    );
  }

  const selectedPrice = product.variants[selectedVariant].price;
  const selectedQuantity = product.variants[selectedVariant].quantity;
  const discount = Math.round(((product.originalPrice - selectedPrice) / product.originalPrice) * 100);

  const comparisonData = [
    { feature: "Envio Grátis e Rápido", us: true, others: false },
    { feature: "Qualidade", us: true, others: false },
    { feature: "Oferta Imbatível", us: true, others: false },
    { feature: "Atendimento 24/7", us: true, others: false },
    { feature: "Pagamento na Entrega", us: true, others: false }
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Product Images */}
          <div>
            <Gallery images={[product.images[0]]} productName={product.name} />
          </div>
          
          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-md mr-3">
                {discount}% DESCONTO
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-green-600 mr-2">
                  R$ {selectedPrice.toFixed(2)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Delivery Timeline */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute left-[45px] right-[45px] top-[22px] h-[2px] bg-green-500"></div>
                
                {/* Order Placed */}
                <div className="text-center z-10">
                  <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">Pedido Realizado</p>
                </div>

                {/* Processing */}
                <div className="text-center z-10">
                  <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">Pedido Pronto</p>
                </div>

                {/* Delivery */}
                <div className="text-center z-10">
                  <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">Entregue</p>
                </div>
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Selecione a quantidade:</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedVariant === index
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-500'
                    }`}
                  >
                    <div className="font-bold text-lg">{variant.quantity} unidades</div>
                    <div className="text-green-600">R$ {variant.price.toFixed(2)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex items-center mb-2">
                <Truck className="text-green-600 mr-2" size={20} />
                <span className="font-medium text-green-700">PAGUE NA ENTREGA</span>
              </div>
              <p className="text-green-600 text-sm">Receba em até 24 horas</p>
            </div>

            {/* Buy Button */}
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth 
              onClick={() => setShowCheckoutForm(true)}
              className="mb-4"
            >
              SOLICITAR ENTREGA
            </Button>

            <p className="text-center text-sm text-gray-600">
              Sem cobranças ocultas
            </p>
          </div>
        </div>

        <Description 
          description={product.description} 
          features={product.features} 
        />

        {/* Comparison Section */}
        <div className="bg-[#002f6c] text-white py-12 px-4 rounded-lg mt-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">POR QUE COMPRAR CONOSCO</h2>
            <p className="text-center mb-12">Nosso objetivo é garantir a satisfação dos nossos clientes.</p>
            
            <div className="bg-[#001f4c] rounded-lg p-6">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="font-semibold">Característica</div>
                <div className="text-center font-semibold">Achados Express</div>
                <div className="text-center font-semibold">Outros</div>
              </div>
              
              {comparisonData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 border-t border-gray-700 py-3 text-sm">
                  <div>{item.feature}</div>
                  <div className="flex justify-center">
                    <Check className="text-green-400" size={20} />
                  </div>
                  <div className="flex justify-center">
                    <X className="text-red-400" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCheckoutForm && (
        <CheckoutForm 
          onClose={() => setShowCheckoutForm(false)}
          product={product}
          selectedVariant={selectedVariant}
        />
      )}
    </>
  );
};

export default ProductDetail;