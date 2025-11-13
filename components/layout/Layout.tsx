
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  openModal: (interest?: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, openModal }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header openModal={openModal} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
