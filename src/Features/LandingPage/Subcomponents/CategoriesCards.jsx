import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Egg, Apple, Tractor, Carrot, Wheat, Milk, Leaf, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategorySlider = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: 'Livestock', Icon: Egg, path: '/categories/livestock' },
    { id: 2, name: 'Fruits', Icon: Apple, path: '/categories/fruits' },
    { id: 3, name: 'Machinery', Icon: Tractor, path: '/categories/machinery' },
    { id: 4, name: 'Vegetables', Icon: Carrot, path: '/categories/vegetables' },
    { id: 5, name: 'Grains', Icon: Wheat, path: '/categories/grains' },
    { id: 6, name: 'Dairy', Icon: Milk, path: '/categories/dairy' },
    { id: 7, name: 'Seeds', Icon: Leaf, path: '/categories/seeds' },
    { id: 8, name: 'Tools', Icon: Wrench, path: '/categories/tools' }
  ];

  const checkScrollPosition = () => {
    const slider = sliderRef.current;
    if (slider) {
      setShowLeftArrow(slider.scrollLeft > 0);
      setShowRightArrow(
        slider.scrollLeft < slider.scrollWidth - slider.clientWidth
      );
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      window.addEventListener('load', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);

      return () => {
        slider.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('load', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = 200;
      slider.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full max-w-6xl font-poppins mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-16 text-center">Categories</h2>
      
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}
        
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 py-4 px-2 scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.path)}
              className="flex flex-col items-center h-32 justify-center min-w-[140px] bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <category.Icon className="w-10 h-10 text-gray-700 mb-3" />
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        )}
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CategorySlider;