import React from 'react';
import { useSearch } from '../../context/SearchContext';
import ProductCard from '../ui/ProductCard';
import { X } from 'lucide-react';

const SearchResults: React.FC = () => {
  const { searchResults, isSearching, searchQuery, clearSearch } = useSearch();

  if (!isSearching) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {searchResults.length > 0 
                  ? `${searchResults.length} resultados para "${searchQuery}"`
                  : `Nenhum resultado para "${searchQuery}"`}
              </h2>
              <button
                onClick={clearSearch}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fechar busca"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {searchResults.map((product) => (
                  <div key={product.id} onClick={clearSearch}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">
                  Não encontramos nenhum produto correspondente à sua busca.
                </p>
                <p className="text-gray-400">
                  Tente usar termos diferentes ou mais genéricos.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults