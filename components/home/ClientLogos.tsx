
import React from 'react';
import { clientData } from '../../data/clientData';

const ClientLogos: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Trusted Clients</h2>
          <p className="mt-4 text-lg text-gray-600">We are proud to partner with leading companies across various industries.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {clientData.map((client) => (
            <div key={client.id} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md aspect-w-3 aspect-h-2">
              <img
                className="h-16 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
                src={client.logo_image}
                alt={client.client_name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
