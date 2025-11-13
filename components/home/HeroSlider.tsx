import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { sliderData } from '../../data/sliderData';
import type { Slide } from '../../types';

interface HeroSliderProps {
    openModal: (interest?: string) => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ openModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = sliderData;
  // Fix: Use ReturnType<typeof setTimeout> for portability between environments (browser vs. node).
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => resetTimeout();
  }, [currentSlide, nextSlide, resetTimeout]);

  const handleCTA2Click = (e: React.MouseEvent, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      openModal('General Inquiry');
    }
  };
  

  return (
    <div className="relative h-[70vh] md:h-screen w-full overflow-hidden" onMouseEnter={resetTimeout} onMouseLeave={() => { timeoutRef.current = setTimeout(nextSlide, 5000)}}>
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.background_image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6 md:p-8">
        {slides.map((slide, index) => (
            <div key={slide.id} className={`w-full max-w-4xl transform transition-all duration-700 ease-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {index === currentSlide && (
                    <>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-2xl">{slide.title}</h1>
                        <p className="mt-4 md:mt-6 text-md sm:text-lg lg:text-xl max-w-md mx-auto sm:max-w-lg md:max-w-2xl drop-shadow-lg">{slide.subtitle}</p>
                        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to={slide.cta1_link} className="w-full sm:w-auto px-6 py-3 text-base sm:px-8 sm:text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
                                {slide.cta1_text}
                            </Link>
                            {slide.cta2_text && slide.cta2_link && (
                                <Link to={slide.cta2_link} onClick={(e) => handleCTA2Click(e, slide.cta2_link!)} className="w-full sm:w-auto px-6 py-3 text-base sm:px-8 sm:text-lg font-semibold text-gray-900 bg-white rounded-md hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg">
                                    {slide.cta2_text}
                                </Link>
                            )}
                        </div>
                    </>
                )}
            </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;