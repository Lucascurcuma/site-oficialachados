import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortingProps {
  onSortChange: (sortBy: string) => void;
  currentSort: string;
}

const Sorting: React.FC<SortingProps> = ({ onSortChange, currentSort }) => {
  const sortOptions = [
    { value: 'nameAsc', label: 'Alfabética (A-Z)' },
    { value: 'nameDesc', label: 'Alfabética (Z-A)' },
    { value: 'priceAsc', label: 'Menor preço' },
    { value: 'priceDesc', label: 'Maior preço' },
    { value: 'discountDesc', label: 'Maior desconto' },
  ];
  
  return (
    <div className="flex items-center space-x-2">
      <ArrowUpDown size={20} className="text-gray-500" />
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f6c]"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;