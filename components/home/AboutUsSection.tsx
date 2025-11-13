
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative mb-8 lg:mb-0">
            <img 
              className="rounded-lg shadow-xl w-full" 
              src="https://picsum.photos/seed/about/600/400" 
              alt="About TST Technologies Team"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Partner in Digital Innovation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At TST Technologies, we are more than just a service provider; we are your dedicated partner in navigating the complexities of the digital world. With a passion for technology and a commitment to excellence, we deliver cutting-edge solutions that drive growth, efficiency, and success for your business.
            </p>
            <div className="mt-8">
              <Link 
                to="/about" 
                className="inline-block px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
