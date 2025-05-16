export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  availability: 'inStock' | 'preOrder';
  images: string[];
  videoUrl?: string;
  variants: ProductVariant[];
  category: 'saude_beleza' | 'estimulantes';
}

export interface ProductVariant {
  quantity: number;
  price: number;
}

export interface ProductFilters {
  category: string;
  availability: string;
  priceRange: [number, number];
}