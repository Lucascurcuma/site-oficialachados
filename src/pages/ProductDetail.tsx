import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Package, ShoppingCart, Truck, Calendar, Check, X, Star, Shield, Clock, MessageCircle, Users, Siren as Fire } from 'lucide-react';
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
  const [timer, setTimer] = useState(3600); // 1 hour in seconds
  const [recentBuyers] = useState(12); // Fixed number of recent buyers
  const navigate = useNavigate();

  const getProductVideo = (productId: string) => {
    const videos: { [key: string]: string } = {
      '1': 'R3I-OZebwYw',  // Melzinho Árabe
      '3': 'RA735CnOhyI',  // Gel Volumetrão
      '4': 'KdhKp53wxAU',  // Progressiva Vegetal
      '5': 'WoNtJ_Nb9K8',  // Mounja Fit Black
      '9': 'pzWhMdfwwE0',  // Tônico MXD20
    };
    return videos[productId];
  };

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

    // Start countdown timer
    const countdownInterval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [id, navigate]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
  const videoId = getProductVideo(product.id);
  const rating = 4.8;
  const totalReviews = 127;
  const stockCount = 23; // Fixed stock count

  const reviews = [
    {
      id: 1,
      author: "Maria Silva",
      rating: 5,
      comment: "Produto excelente! Superou minhas expectativas. Entrega super rápida e atendimento nota 10!",
      date: "2024-02-15",
      verified: true,
      location: "São Paulo, SP"
    },
    {
      id: 2,
      author: "João Santos",
      rating: 5,
      comment: "Melhor compra que já fiz! Entrega no prazo e produto original. Recomendo muito!",
      date: "2024-02-10",
      verified: true,
      location: "Rio de Janeiro, RJ"
    },
    {
      id: 3,
      author: "Ana Oliveira",
      rating: 5,
      comment: "Já é a terceira vez que compro. Qualidade garantida e preço justo!",
      date: "2024-02-05",
      verified: true,
      location: "Belo Horizonte, MG"
    }
  ];

  const faqItems = [
    {
      question: "Qual o prazo de entrega?",
      answer: "Entregamos em até 24 horas após a confirmação do pedido para a maioria das regiões."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é feito apenas na entrega. Aceitamos cartão de crédito/débito, PIX ou dinheiro."
    },
    {
      question: "O produto tem garantia?",
      answer: "Sim! Oferecemos 7 dias de garantia para troca ou devolução, sem burocracia."
    },
    {
      question: "O produto é original?",
      answer: "Sim! Trabalhamos apenas com produtos 100% originais e de procedência garantida."
    }
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-4 text-sm">
          <a href="/" className="text-gray-500 hover:text-[#002f6c]">Home</a>
          <span className="mx-2 text-gray-500">/</span>
          <a href="/catalogo" className="text-gray-500 hover:text-[#002f6c]">Catálogo</a>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-[#002f6c]">{product.name}</span>
        </nav>

        {/* Urgency Banner */}
        <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2" />
              <span>Oferta termina em: <strong>{formatTime(timer)}</strong></span>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-2" />
              <span><strong>{recentBuyers} pessoas</strong> compraram na última hora!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Product Images */}
          <div>
            <Gallery images={product.images} productName={product.name} />
            
            {/* Video Section */}
            {videoId && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-3">Veja o produto em ação:</h3>
                <div className="relative pt-[56.25%] overflow-hidden rounded-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Product Info */}
          <div>
            {/* Category Badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                product.category === 'estimulantes' 
                  ? 'bg-red-100 text-red-700'
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {product.category === 'estimulantes' ? 'Estimulante' : 'Saúde & Beleza'}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({totalReviews} avaliações verificadas)
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-md">
                  -{discount}% OFF
                </div>
                <div className="text-3xl font-bold text-green-600">
                  R$ {selectedPrice.toFixed(2)}
                </div>
                <div className="text-lg text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2)}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                em até 12x de R$ {(selectedPrice / 12).toFixed(2)} sem juros
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <div className="flex items-center text-sm">
                <Fire className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-medium text-red-500">
                  ATENÇÃO: Apenas {stockCount} unidades em estoque!
                </span>
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
                    {index === 2 && (
                      <div className="mt-1 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                        MAIS VENDIDO
                      </div>
                    )}
                    {variant.price < product.variants[0].price && (
                      <div className="mt-1 text-xs text-green-600">
                        Economia de R$ {(product.variants[0].price - variant.price).toFixed(2)}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center bg-gray-50 p-3 rounded">
                <Shield className="text-green-600 w-6 h-6 mr-2" />
                <span className="text-sm">Compra 100% Segura</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded">
                <Truck className="text-green-600 w-6 h-6 mr-2" />
                <span className="text-sm">Frete Grátis</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded">
                <Clock className="text-green-600 w-6 h-6 mr-2" />
                <span className="text-sm">Entrega em 24h</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded">
                <MessageCircle className="text-green-600 w-6 h-6 mr-2" />
                <span className="text-sm">Suporte 24/7</span>
              </div>
            </div>

            {/* Buy Button */}
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth 
              onClick={() => setShowCheckoutForm(true)}
              className="mb-4 text-lg"
            >
              COMPRAR AGORA
            </Button>

            {/* Social Proof */}
            <div className="text-center space-y-2 bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">
                ⭐⭐⭐⭐⭐ 4.9/5 - Mais de 10.000 clientes satisfeitos!
              </p>
              <p className="text-sm text-gray-600">
                Pague apenas na entrega • Sem cobranças ocultas
              </p>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <Description 
          description={product.description} 
          features={product.features} 
        />

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Avaliações dos Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rating Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-4xl font-bold mr-4">{rating}</div>
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Baseado em {totalReviews} avaliações verificadas
                  </div>
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center">
                    <span className="w-8 text-sm text-gray-600">{stars}★</span>
                    <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${stars === 5 ? 85 : stars === 4 ? 12 : 3}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-sm text-gray-600">
                      {stars === 5 ? '85%' : stars === 4 ? '12%' : '3%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.map(review => (
                <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      {review.verified && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Compra verificada
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="font-medium">{review.author}</p>
                  <p className="text-sm text-gray-500 mb-1">{review.location}</p>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Satisfaction Guarantee */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <div className="text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Satisfação 100% Garantida
            </h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Oferecemos 7 dias de garantia incondicional. Se você não ficar completamente satisfeito(a) com o produto, devolvemos seu dinheiro na hora, sem burocracia.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Fixed CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-sm text-gray-600">Preço</div>
            <div className="text-xl font-bold text-green-600">
              R$ {selectedPrice.toFixed(2)}
            </div>
          </div>
          <Button 
            variant="primary"
            onClick={() => setShowCheckoutForm(true)}
          >
            COMPRAR AGORA
          </Button>
        </div>
      </div>

      {/* Checkout Form Modal */}
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