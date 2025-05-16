import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  
  useEffect(() => {
    document.title = 'Carrinho de Compras | Achados Express';
  }, []);
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-[#002f6c] mb-4">Seu carrinho está vazio</h1>
          <p className="text-gray-600 mb-8">Parece que você ainda não adicionou nenhum produto ao seu carrinho.</p>
          <Link to="/catalogo">
            <Button variant="secondary" size="lg">
              Continuar Comprando
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#002f6c] mb-8">Carrinho de Compras</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <div className="grid grid-cols-12 text-sm font-semibold text-gray-600">
                  <div className="col-span-6 md:col-span-7">Produto</div>
                  <div className="col-span-2 text-center">Quantidade</div>
                  <div className="col-span-3">Subtotal</div>
                </div>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="p-4">
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-6 md:col-span-7">
                        <div className="flex items-center">
                          <Link to={`/produto/${item.product.id}`}>
                            <img 
                              src={item.product.images[0]} 
                              alt={item.product.name} 
                              className="w-16 h-16 object-cover rounded"
                            />
                          </Link>
                          <div className="ml-4">
                            <Link to={`/produto/${item.product.id}`} className="font-medium hover:text-[#28a745] transition-colors">
                              {item.product.name}
                            </Link>
                            <div className="text-[#002f6c] font-bold">
                              R$ {item.product.price.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-span-2">
                        <div className="flex w-24 mx-auto">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                            className="w-full text-center border-t border-b border-gray-300"
                            min="1"
                          />
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-3 flex justify-between items-center">
                        <div className="font-bold">
                          R$ {(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/catalogo" className="flex items-center text-[#002f6c] mt-6 hover:text-[#28a745] transition-colors">
              <ChevronLeft size={20} />
              <span>Continuar Comprando</span>
            </Link>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-[#28a745] font-semibold">Grátis</span>
                </div>
                <div className="border-t pt-3 font-bold flex justify-between text-lg">
                  <span>Total</span>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                onClick={() => setShowCheckoutForm(true)}
              >
                Finalizar Compra
              </Button>
              
              <div className="mt-4 text-sm text-gray-600">
                <p className="flex items-center justify-center">
                  Pague na entrega com total segurança!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCheckoutForm && (
        <CheckoutForm onClose={() => setShowCheckoutForm(false)} />
      )}
    </>
  );
};

export default Cart;