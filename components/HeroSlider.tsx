import React, { useState, useEffect, useCallback } from "react";

// The path is now relative to the public directory.
// Assuming images are named 1.jpg, 2.jpg, ... 13.jpg
const TOTAL_SLIDES = 13;
const PROMO_IMAGES = Array.from(
  { length: TOTAL_SLIDES },
  (_, i) => `/assets/${i + 1}.jpg`
);

// Simple Button component.
const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-500 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300">
      {children}
    </button>
  );
};

// Main HeroSlider component as provided by the user.
const HeroSlider = () => {
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section
      className="relative w-full h-screen sm:h-[60vh] md:h-[80vh] group"
      aria-live="polite"
    >
      {/* Slides */}
      <div className="relative w-full h-full overflow-hidden">
        {PROMO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Promotional banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Play Now Button */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
        <a
          href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Play Now</Button>
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {PROMO_IMAGES.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === slideIndex
                ? "bg-yellow-400"
                : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// Main App component to render the HeroSlider
const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col md:justify-center md:items-center">
      <HeroSlider />
    </div>
  );
};

export default App;
