
import React, { useState, useEffect, useCallback } from 'react';
import { PROMO_IMAGES } from '../constants';
import Button from './Button';

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? PROMO_IMAGES.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === PROMO_IMAGES.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    useEffect(() => {
        const sliderInterval = setInterval(goToNext, 5000);
        return () => clearInterval(sliderInterval);
    }, [goToNext]);

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <section className="relative w-full h-[50vh] md:h-[80vh] -mt-20 group">
            <div className="w-full h-full overflow-hidden">
                {PROMO_IMAGES.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image} alt={`Promotional banner ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Right Arrow */}
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next slide"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Play Now Button */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <a href="https://www.funxxyfe51.com/#/pages/login/register?invitationCode=5097269017" target="_blank" rel="noopener noreferrer">
                    <Button>Play Now</Button>
                </a>
            </div>
            
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {PROMO_IMAGES.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-yellow-400' : 'bg-white/70 hover:bg-white'}`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
