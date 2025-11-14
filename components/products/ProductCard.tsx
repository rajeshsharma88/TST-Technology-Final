
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  openModal: (interest: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, openModal }) => {
  const handleInquiryClick = () => {
    openModal(product.title);
  };
    
  return (
    <div className="group relative flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="relative aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
        <img
          src={product.main_image}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {product.is_featured && (
            <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">Featured</span>
        )}
        {product.stock_status === 'out_of_stock' && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                <span className="text-gray-700 font-bold">Out of Stock</span>
            </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-sm text-blue-600 font-medium">{product.category}</span>
        <h3 className="mt-1 text-lg font-semibold text-gray-900">
          <Link to={`/products/${product.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500 h-10 overflow-hidden">{product.description}</p>
        <div className="mt-auto pt-4 flex items-end justify-between">
            <p className="text-xl font-bold text-gray-900">
                {product.discount_price ? (
                    <>
                        <span className="text-red-600">${product.discount_price.toLocaleString()}</span>
                        <span className="ml-2 text-base text-gray-500 line-through">${product.price.toLocaleString()}</span>
                    </>
                ) : (
                    `$${product.price.toLocaleString()}`
                )}
            </p>
        </div>
      </div>
       <div className="p-4 border-t border-gray-200">
            <button
                onClick={handleInquiryClick}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors"
            >
                Quick Inquiry
            </button>
       </div>
    </div>
  );
};

export default ProductCard;
