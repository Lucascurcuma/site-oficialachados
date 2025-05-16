import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  ShoppingBag, 
  Heart, 
  Zap,
  HelpCircle,
  User,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle swipe to close
  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!sidebarRef.current) return;
      
      const touchCurrentX = e.touches[0].clientX;
      const diff = touchStartX - touchCurrentX;

      if (diff > 50) { // Swipe left threshold
        onClose();
      }
    };

    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.addEventListener('touchstart', handleTouchStart);
      sidebar.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('touchstart', handleTouchStart);
        sidebar.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [onClose]);

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`absolute top-0 left-0 w-full md:w-80 h-full bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="h-[calc(100%-64px)] overflow-y-auto">
          {/* Categories */}
          <div className="p-4 border-b">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Categorias</h3>
            <nav className="space-y-1">
              <Link
                to="/categoria/saude-beleza"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                <Heart className="w-5 h-5 text-brand-red" />
                <span>Saúde e Beleza</span>
              </Link>
              <Link
                to="/categoria/dia-a-dia"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                <ShoppingBag className="w-5 h-5 text-brand-red" />
                <span>Achadinhos</span>
              </Link>
              <Link
                to="/categoria/estimulantes"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                <Zap className="w-5 h-5 text-brand-red" />
                <span>Estimulantes</span>
              </Link>
            </nav>
          </div>

          {/* Auth Section */}
          <div className="p-4 border-b">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Conta</h3>
            {user ? (
              <div className="space-y-2">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                  <User className="w-5 h-5 text-gray-500" />
                  <div className="overflow-hidden">
                    <p className="font-medium truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sair</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="flex items-center justify-center w-full px-4 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-orange transition-colors"
                  onClick={onClose}
                >
                  Fazer Login
                </Link>
                <Link
                  to="/cadastro"
                  className="flex items-center justify-center w-full px-4 py-3 border border-brand-red text-brand-red rounded-lg hover:bg-brand-red/5 transition-colors"
                  onClick={onClose}
                >
                  Criar Conta
                </Link>
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="p-4">
            <Link
              to="/perguntas-frequentes"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <HelpCircle className="w-5 h-5 text-brand-red" />
              <span>Ajuda</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;