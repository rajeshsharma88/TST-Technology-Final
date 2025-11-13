
import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
    </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">About TST Technologies</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Innovating for a better future, one solution at a time.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative mb-10 lg:mb-0">
              <img 
                className="rounded-lg shadow-xl w-full" 
                src="https://picsum.photos/seed/team/600/450" 
                alt="TST Technologies Team working"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Who We Are
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded with a vision to revolutionize the tech industry, TST Technologies has grown into a leading provider of innovative IT solutions. We are a team of passionate developers, designers, and strategists dedicated to helping businesses thrive in the digital landscape.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our core belief is that technology should be an enabler of growth and efficiency. We work closely with our clients to understand their unique challenges and deliver tailor-made solutions that not only meet but exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <FeatureCard
                    title="Our Mission"
                    description="To empower businesses with transformative technology solutions that drive success, foster innovation, and create lasting value for our clients and their customers."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                />
                <FeatureCard
                    title="Our Vision"
                    description="To be a globally recognized leader in technology and digital innovation, renowned for our client-centric approach, commitment to quality, and positive impact on the digital world."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                />
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
