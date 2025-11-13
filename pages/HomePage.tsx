
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/home/HeroSlider';
import ClientLogos from '../components/home/ClientLogos';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/productData';
import { Product } from '../types';
import AboutUsSection from '../components/home/AboutUsSection';
import Testimonials from '../components/home/Testimonials';
import ContactFormSection from '../components/home/ContactFormSection';

interface HomePageProps {
  openModal: (interest?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ openModal }) => {
  const featuredProducts = products.filter(p => p.is_featured).slice(0, 4);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenInquiryModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        openModal('General Inquiry');
        localStorage.setItem('hasSeenInquiryModal', 'true');
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [openModal]);


  return (
    <div>
      <HeroSlider openModal={openModal} />
      <ClientLogos />
      <AboutUsSection />

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Products</h2>
            <p className="mt-4 text-lg text-gray-600">
              Check out our most popular and innovative solutions.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} openModal={openModal} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-block px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <ContactFormSection />
    </div>
  );
};

export default HomePage;
