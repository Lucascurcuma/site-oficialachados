import React, { useState } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  images: string[];
  productName: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  
  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };
  
  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const handleNextClick = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };
  
  return (
    <div className="relative">
      <div className="flex gap-4">
        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex flex-col gap-2 w-20">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative aspect-square overflow-hidden rounded-lg border ${
                  index === activeIndex ? 'ring-2 ring-[#28a745] border-[#28a745]' : 'border-gray-200'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${productName} - miniatura ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-[#28a745] bg-opacity-10" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Main Image */}
        <div className="flex-1 relative bg-white rounded-lg overflow-hidden border">
          <img 
            src={images[activeIndex]} 
            alt={`${productName} - imagem ${activeIndex + 1}`} 
            className="w-full h-[500px] object-contain"
          />
          
          <button 
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Ver em tela cheia"
          >
            <Maximize2 size={20} />
          </button>
          
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevClick}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={handleNextClick}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Fullscreen Modal */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={toggleFullscreen}>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={images[activeIndex]} 
              alt={`${productName} - tela cheia`} 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevClick();
                  }}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextClick();
                  }}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Fechar tela cheia"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;