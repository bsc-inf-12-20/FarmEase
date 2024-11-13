import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img01 from './Farmer.jpg';
import Image002 from './famMale.jpg';
import Image003 from './Image003.jpg'

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "Our customers were satisfied with the way they purchased our tomatoes.",
      image: img01,
      name: "Hassan Makono",
      company: "Fresh Farms Co."
    },
    {
      id: 2,
      text: "The quality of produce has exceeded our expectations.",
      image: Image002,
      name: "Jane Smith",
      company: "Green Acres cooperative"
    },
    {
      id: 3,
      text: "We've seen significant improvements in our supply chain.",
      image: Image003,
      name: "Carlos Rodriguez",
      company: "Farm Direct Inc."
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="font-poppins bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative max-w-md mx-auto">
                    <img
                      src={testimonial.image}
                      alt="Testimonial"
                      className="w-full h-auto max-h-96 object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm rounded-xl p-6">
                      <p className="text-lg md:text-xl font-medium text-gray-900">
                        "{testimonial.text}"
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-green-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
