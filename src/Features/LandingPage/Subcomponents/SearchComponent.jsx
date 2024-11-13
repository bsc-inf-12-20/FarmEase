import { useState } from 'react';
import { ChevronDown, Search, MapPin, ShoppingCart } from 'lucide-react';

const SearchComponent = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');

  const categories = [
    "Fruits & Vegetables",
    "Legumes & Edible Seeds",
    "Grains",
    "Eggs & Milk",
    "Coffee & Tea",
    "Herbs & Spices",
    "Fibre"
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCategoryOpen(false);
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto font-medium shadow-sm">
      <div className="bg-white shadow-xl rounded-2xl p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row items-stretch space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center">
                <ShoppingCart className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">{selectedCategory}</span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  categoryOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            <div
              className={`
                absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg
                transition-all duration-300 origin-top
                ${categoryOpen
                  ? 'opacity-100 scale-y-100 translate-y-0'
                  : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}
              `}
              style={{
                width: '300px',
                maxHeight: '400px',
                overflowY: 'auto',
                left: 0,
              }}
            >
              <div className="p-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 rounded-lg"
                    onClick={() => handleCategorySelect(category)}
                  >
                    <span className="text-gray-700">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-300 transition-colors">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search Product"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-300 transition-colors">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search Location"
                className="focus:outline-none text-gray-700"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;