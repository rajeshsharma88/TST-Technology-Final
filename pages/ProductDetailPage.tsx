
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/productData';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../types';

interface ProductDetailPageProps {
  openModal: (interest?: string) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ openModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<'features' | 'specifications'>('features');

  useEffect(() => {
    // Simulate fetching data
    const foundProduct = products.find(p => p.slug === slug);
    setProduct(foundProduct);
    setActiveTab('features'); // Reset tab on product change
  }, [slug]);

  if (product === undefined) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Loading product...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
        <p className="mt-4 text-gray-600">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="mt-8 inline-block px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Back to All Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category_slug === product.category_slug && p.id !== product.id)
    .slice(0, 4);
    
  const tabClasses = (tabName: 'features' | 'specifications') => 
    `whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
      activeTab === tabName
        ? 'border-blue-600 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`;
    
  const displayedSpecifications = [...(product.specifications || [])];
    if (product.warranty_info) {
        displayedSpecifications.unshift({ name: 'Warranty', value: product.warranty_info });
    }
    if (product.dimensions) {
        displayedSpecifications.unshift({ name: 'Dimensions', value: product.dimensions });
    }
    if (product.sku) {
        displayedSpecifications.unshift({ name: 'SKU', value: product.sku });
    }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 pt-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Image gallery */}
          <div className="aspect-w-1 aspect-h-1">
            <img 
              src={product.main_image} 
              alt={product.title} 
              className="w-full h-full object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Product info */}
          <div className="mt-10 lg:mt-0">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
                </li>
                <li>
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" /></svg>
                </li>
                <li>
                  <Link to={`/products?category=${product.category_slug}`} className="text-gray-500 hover:text-gray-700">{product.category}</Link>
                </li>
              </ol>
            </nav>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.title}</h1>
            <p className="mt-2 text-base text-gray-500">Model: {product.model_number}</p>
            
            <div className="mt-4">
              <p className="text-3xl text-gray-900">
                {product.discount_price ? (
                  <>
                    <span className="text-red-600 font-bold">${product.discount_price.toLocaleString()}</span>
                    <span className="ml-3 text-xl text-gray-500 line-through">${product.price.toLocaleString()}</span>
                  </>
                ) : (
                  <span className="font-bold">${product.price.toLocaleString()}</span>
                )}
              </p>
            </div>
            
            {product.stock_status === 'in_stock' ? (
                <p className="mt-2 text-sm text-green-600 font-semibold">In Stock</p>
            ) : (
                <p className="mt-2 text-sm text-red-600 font-semibold">Out of Stock</p>
            )}

            <div className="mt-6 prose prose-lg text-gray-700">
              <p>{product.description}</p>
            </div>

            <div className="mt-10">
              <button
                onClick={() => openModal(product.title)}
                disabled={product.stock_status === 'out_of_stock'}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button className={tabClasses('features')} onClick={() => setActiveTab('features')}>
                Features
              </button>
              <button className={tabClasses('specifications')} onClick={() => setActiveTab('specifications')}>
                Technical Specifications
              </button>
            </nav>
          </div>
          <div className="mt-6">
            {activeTab === 'features' && (
              <div className="prose max-w-none text-gray-700">
                <ul className="list-disc space-y-2 pl-5">
                  {product.features.map((feature, index) => <li key={index}>{feature}</li>)}
                </ul>
              </div>
            )}
            {activeTab === 'specifications' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {displayedSpecifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
       </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
          <section className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map((p: Product) => (
                        <ProductCard key={p.id} product={p} openModal={openModal} />
                    ))}
                </div>
            </div>
          </section>
      )}
    </div>
  );
};

export default ProductDetailPage;