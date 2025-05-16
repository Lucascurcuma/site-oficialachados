import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = getProductsByCategory(id || '');
  const category = categories.find(cat => cat.id === id);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Categoria não encontrada</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">{category.name}</h1>
      <p className="text-gray-600 mb-6">{category.description}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;