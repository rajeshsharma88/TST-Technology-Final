
import React from 'react';
import { testimonialData } from '../../data/testimonialData';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-blue-100">
            We pride ourselves on building strong, lasting relationships.
          </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white text-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <img 
                className="w-24 h-24 rounded-full -mt-20 border-4 border-white shadow-md"
                src={testimonial.avatar} 
                alt={testimonial.author} 
              />
              <blockquote className="mt-6 text-lg italic text-gray-600">
                "{testimonial.quote}"
              </blockquote>
              <cite className="mt-4 not-italic">
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
