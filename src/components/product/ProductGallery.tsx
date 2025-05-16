import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [activeImage, setActiveImage] = useState(0);
  
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg mb-2 md:mb-4">
        <img 
          src={images[activeImage]} 
          alt={productName} 
          className="w-full h-full object-contain bg-white"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full text-primary"
              onClick={prevImage}
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full text-primary"
              onClick={nextImage}
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </>
        )}
        
        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                  activeImage === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`Imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Thumbnails (Desktop) */}
      {images.length > 1 && (
        <div className="hidden md:grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`aspect-square rounded-md overflow-hidden border-2 ${
                activeImage === index ? 'border-teal' : 'border-transparent'
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`Visualizar imagem ${index + 1}`}
            >
              <img 
                src={image} 
                alt={`${productName} - Imagem ${index + 1}`} 
                className="w-full h-full object-contain bg-white"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;