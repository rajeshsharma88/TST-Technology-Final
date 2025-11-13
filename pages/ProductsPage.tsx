
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/productData';
import { categories } from '../data/categoryData';
import { Product } from '../types';

interface ProductsPageProps {
  openModal: (interest?: string) => void;
}

const PRODUCTS_PER_PAGE = 12;

const ProductsPage: React.FC<ProductsPageProps> = ({ openModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const catParam = searchParams.get('category');
    return catParam ? [catParam] : [];
  });
  
  const [stockStatus, setStockStatus] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedCategories(prev => {
      const newCategories = checked ? [...prev, value] : prev.filter(cat => cat !== value);
      
      if (newCategories.length) {
        setSearchParams({ category: newCategories[0] });
      } else {
        setSearchParams({});
      }
      return newCategories;
    });
    setCurrentPage(1);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.some(sc => p.category_slug === sc));
    }
    if (stockStatus !== 'all') {
      filtered = filtered.filter(p => p.stock_status === stockStatus);
    }
    
    const sorted = [...filtered];
    switch (sortOrder) {
      case 'price-asc':
        sorted.sort((a, b) => (a.discount_price || a.price) - (b.discount_price || b.price));
        break;
      case 'price-desc':
        sorted.sort((a, b) => (b.discount_price || b.price) - (a.discount_price || a.price));
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
      default:
        sorted.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
        break;
    }

    return sorted;
  }, [searchTerm, selectedCategories, stockStatus, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setStockStatus('all');
    setSearchParams({});
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">All Products</h1>
          <p className="mt-4 text-lg text-gray-600">Explore our wide range of technology solutions.</p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="p-6 bg-white rounded-lg shadow-md sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                 <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Categories</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                    {categories.map(cat => (
                      <label key={cat.slug} className="flex items-center">
                        <input type="checkbox" value={cat.slug} checked={selectedCategories.includes(cat.slug)} onChange={handleCategoryChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <span className="ml-2 text-gray-700">{cat.name}</span>
                      </label>
                    ))}
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Availability</h4>
                <select value={stockStatus} onChange={(e) => {setStockStatus(e.target.value); setCurrentPage(1);}} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="all">All</option>
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>

              <button onClick={clearFilters} className="w-full py-2 px-4 text-sm text-center text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">Showing {paginatedProducts.length > 0 ? (currentPage - 1) * PRODUCTS_PER_PAGE + 1 : 0}-{(currentPage - 1) * PRODUCTS_PER_PAGE + paginatedProducts.length} of {filteredAndSortedProducts.length} products</p>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="py-2 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="featured">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
              </select>
            </div>

            {paginatedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} openModal={openModal} />
                  ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-xl font-semibold">No products found</h3>
                    <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <nav className="mt-12 flex justify-center">
                  <ul className="flex items-center -space-x-px h-10 text-base">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <li key={page}>
                            <button onClick={() => setCurrentPage(page)} className={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === page ? 'text-blue-600 border border-blue-300 bg-blue-50' : 'text-gray-500 bg-white border border-gray-300'} hover:bg-gray-100 hover:text-gray-700`}>
                                {page}
                            </button>
                        </li>
                    ))}
                  </ul>
                </nav>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
