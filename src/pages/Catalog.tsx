import React, { useState, useEffect } from 'react';
import Filters from '../components/sections/catalog/Filters';
import ProductGrid from '../components/sections/catalog/ProductGrid';
import Sorting from '../components/sections/catalog/Sorting';
import { getProducts } from '../data/products';
import { Product, ProductFilters } from '../types';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<ProductFilters>({
    category: 'all',
    availability: 'all',
    priceRange: [0, 2000]
  });
  const [sortBy, setSortBy] = useState('nameAsc');
  
  useEffect(() => {
    document.title = 'Catálogo de Produtos | Achados Express';
    
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);
  
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Apply availability filter
    if (filters.availability !== 'all') {
      result = result.filter(product => product.availability === filters.availability);
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'nameAsc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discountDesc':
        result.sort((a, b) => {
          const discountA = (a.originalPrice - a.price) / a.originalPrice;
          const discountB = (b.originalPrice - b.price) / b.originalPrice;
          return discountB - discountA;
        });
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, filters, sortBy]);
  
  const handleFilterChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };
  
  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#002f6c] mb-8">Catálogo de Produtos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Filters onFilterChange={handleFilterChange} currentFilters={filters} />
        </div>
        
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Mostrando {filteredProducts.length} produtos
            </p>
            <Sorting onSortChange={handleSortChange} currentSort={sortBy} />
          </div>
          
          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;