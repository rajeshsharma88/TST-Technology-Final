
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Layout from './components/layout/Layout';
import Modal from './components/ui/Modal';
import InquiryForm from './components/shared/InquiryForm';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productInterest, setProductInterest] = useState<string>('');

  const openModal = (interest?: string) => {
    if (interest) setProductInterest(interest);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setProductInterest(''); // Reset interest on close
  };

  return (
    <HashRouter>
      <Layout openModal={openModal}>
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />
          <Route path="/products" element={<ProductsPage openModal={openModal} />} />
          <Route path="/products/:slug" element={<ProductDetailPage openModal={openModal} />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <InquiryForm closeModal={closeModal} productInterest={productInterest} />
      </Modal>
    </HashRouter>
  );
};

export default App;
