export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: CategoryType;
  rating: number;
  numReviews: number;
  stockCount: number;
  details: string;
  usage?: string;
  benefits: string[];
}

export interface ProductVariant {
  quantity: number;
  price: number;
  link: string;
}

export interface ProductWithVariants extends Product {
  variants: ProductVariant[];
}

export type CategoryType = 'saude-beleza' | 'dia-a-dia' | 'estimulantes';

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: ProductVariant;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}