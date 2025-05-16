import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';

const promos = [
  { icon: "💝", text: "PAGUE NA ENTREGA" },
  { icon: "🔥", text: "OFERTAS ÚNICAS" },
  { icon: "🚚", text: "FRETE GRÁTIS" }
];

const Header: React.FC = () => {
  const [promoIndex, setPromoIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoIndex((prevIndex) => (prevIndex + 1) % promos.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Promo Bar */}
      <div className="bg-[#002f6c] text-white py-2">
        <div className="flex justify-center items-center">
          <div 
            className="transition-opacity duration-500 flex items-center"
          >
            <span className="mr-2 text-xl">{promos[promoIndex].icon}</span>
            <span className="text-sm font-medium">{promos[promoIndex].text}</span>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-[#002f6c] font-bold text-xl md:text-2xl">
            Achados Express
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className={`text-sm hover:text-[#28a745] transition-colors ${location.pathname === '/' ? 'font-bold' : ''}`}>
              Início
            </Link>
            <Link to="/catalogo" className={`text-sm hover:text-[#28a745] transition-colors ${location.pathname === '/catalogo' ? 'font-bold bg-[#002f6c] text-white px-4 py-1 rounded' : ''}`}>
              Catálogo
            </Link>
            <Link to="/fale-conosco" className={`text-sm hover:text-[#28a745] transition-colors ${location.pathname === '/fale-conosco' ? 'font-bold bg-[#002f6c] text-white px-4 py-1 rounded' : ''}`}>
              Entrar em contato
            </Link>
          </div>
          
          {/* User Icon */}
          <div className="flex items-center">
            <Link to="/perfil" className="hover:text-[#28a745] transition-colors">
              <User size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="absolute left-0 right-0 bg-white border-b border-gray-200 px-4 py-2 shadow-lg">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`p-2 rounded-md ${location.pathname === '/' ? 'bg-[#002f6c] text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/catalogo" 
                className={`p-2 rounded-md ${location.pathname === '/catalogo' ? 'bg-[#002f6c] text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <Link 
                to="/fale-conosco" 
                className={`p-2 rounded-md ${location.pathname === '/fale-conosco' ? 'bg-[#002f6c] text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar em contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;