
import React, { useState } from 'react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.message) {
      console.log("Contact Form Submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
    } else {
      alert("Please fill out all fields.");
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have a question or a project in mind? We'd love to hear from you.
            </p>
          </div>
          {isSubmitted ? (
             <div className="mt-8 text-center p-4 bg-green-100 text-green-800 rounded-md">
                Thank you for your message! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12" noValidate>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                    <label htmlFor="name" className="sr-only">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} autoComplete="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Full Name" required />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Email Address" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message" required></textarea>
                </div>
                </div>
                <div className="mt-6 sm:col-span-2 text-center">
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                </button>
                </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
