import React from 'react';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';
import { products } from '../../data/products';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId, category }) => {
  // Get 4 products from the same category, excluding current product
  const relatedProducts = products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 4);
  
  if (relatedProducts.length === 0) return null;
  
  return (
    <section className="mt-12 mb-8">
      <h2 className="text-xl font-bold mb-6">Produtos Relacionados</h2>
      
      {/* Mobile (Horizontal Scroll) */}
      <div className="md:hidden overflow-x-auto pb-4">
        <div className="flex space-x-4 px-1 min-w-max">
          {relatedProducts.map((product) => (
            <div key={product.id} className="w-[150px]">
              <ProductCard product={product} size="small" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop (Grid) */}
      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;