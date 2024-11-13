import React from 'react';
import { User, Scale, Package, Sprout, CheckCircle, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';  
import Img1 from './tomato.jpg';
import Img4 from './corn.jpg';
import Img3 from './beans.jpg';
import Img2 from './Potato.jpg';

const ProductCard = ({ 
  productName, 
  description, 
  farmerName, 
  location,
  price, 
  minOrder, 
  maxOrder, 
  image,
  inStock = true
}) => {
  return (
    <Link to={`/products/${productName.replace(/\s+/g, '-').toLowerCase()}`} className="block">
      <div className="relative bg-white rounded-xl overflow-hidden font-poppins shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="absolute top-4 right-4 z-10">
          <div className={`flex items-center gap-1 ${inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} px-2 py-1 rounded-full text-xs font-medium`}>
            <CheckCircle className="w-3 h-3" />
            {inStock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>

        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={productName} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{productName}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-800">{farmerName}</span>
            </div>
            <div className="text-xs text-gray-600 ml-6">{location}</div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-gray-500" />
              <div className="text-sm">
                <div className="text-gray-800 font-semibold">{price}/kg</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-gray-500" />
              <div className="text-sm">
                <div className="text-gray-800">Min: {minOrder}kg</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-gray-500" />
              <div className="text-sm">
                <div className="text-gray-800">Max: {maxOrder}kg</div>
              </div>
            </div>
          </div>

          <button 
            className={`w-full ${inStock ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'} text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2`}
            disabled={!inStock}
          >
            <Sprout className="w-4 h-4" />
            {inStock ? 'Buy Now' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </Link>
  );
};

const ProductGrid = () => {
  const navigate = useNavigate();  

  const products = [
    {
      productName: "Premium Red Tomatoes",
      description: "Fresh, organically grown tomatoes perfect for salads and cooking. Harvested at peak ripeness for maximum flavor and nutrition.",
      farmerName: "John Smith",
      location: "Blantyre, Namiyango",
      price: "K5000",
      minOrder: "10",
      maxOrder: "100",
      image: Img1,
      inStock: true
    },
    {
      productName: "Organic Potatoes",
      description: "Locally grown organic potatoes, perfect for roasting, mashing, or frying. Rich in nutrients and great taste.",
      farmerName: "Mary Johnson",
      location: "Lilongwe, Area 25",
      price: "K3500",
      minOrder: "20",
      maxOrder: "150",
      image: Img2,
      inStock: true
    },
    {
      productName: "Fresh Green Beans",
      description: "Crisp and tender green beans, hand-picked daily. Perfect for stir-fries and side dishes.",
      farmerName: "David Williams",
      location: "Zomba, Matawale",
      price: "K4200",
      minOrder: "5",
      maxOrder: "50",
      image: Img3,
      inStock: false
    },
    {
      productName: "Sweet Corn",
      description: "Golden sweet corn, naturally grown without pesticides. Perfect for grilling or boiling.",
      farmerName: "Sarah Brown",
      location: "Mzuzu, Luwinga",
      price: "K2800",
      minOrder: "15",
      maxOrder: "120",
      image: Img4,
      inStock: true
    }
  ];

  const handleViewAll = () => {
    navigate('/products');  
  };

  return (
    <div className="max-w-[1440px] font-poppins mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl text-center mt-2 font-bold text-gray-800">Top Products</h2>
        </div>
        <button 
          onClick={handleViewAll}
          className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
        >
          View All
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 font-poppins sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
