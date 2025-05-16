import React from 'react';

interface SkeletonLoaderProps {
  type: 'product' | 'text' | 'image';
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type, count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'product':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-md mb-4" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
            <div className="h-6 bg-gray-200 rounded w-1/3" />
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-2 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        );
      
      case 'image':
        return (
          <div className="aspect-square bg-gray-200 rounded-md animate-pulse" />
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div key={index} className="w-full">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;