import React from 'react';
import { getBestSellers } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BestSellersPage: React.FC = () => {
  const products = getBestSellers();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link 
          to="/"
          className="p-2 hover:bg-brand-red/5 rounded-full transition-colors"
          aria-label="Voltar"
        >
          <ArrowLeft size={24} className="text-brand-red" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Itens Mais Vendidos</h1>
          <p className="text-secondary mt-1">
            Os {products.length} produtos mais populares
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersPage;