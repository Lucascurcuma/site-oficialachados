import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

interface SearchContextType {
  searchQuery: string;
  searchResults: Product[];
  isSearching: boolean;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = searchQuery
    ? products.filter(product => {
        const searchTerms = searchQuery.toLowerCase().split(' ');
        const productText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
        return searchTerms.every(term => productText.includes(term));
      })
    : [];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(!!query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider 
      value={{
        searchQuery,
        searchResults,
        isSearching,
        setSearchQuery: handleSearch,
        clearSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};