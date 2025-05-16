import React from 'react';
import { Product } from '../../types';

interface ProductSchemaProps {
  product: Product;
}

const ProductSchema: React.FC<ProductSchemaProps> = ({ product }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images[0],
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Achadinhos Express'
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.achadinhosexpress.store/produto/${product.id}`,
      priceCurrency: 'BRL',
      price: product.price,
      availability: product.stockCount > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Achadinhos Express'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.numReviews
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default ProductSchema;