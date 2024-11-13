import React from 'react';
import siloImage from './silo.jpg';

const MarketplaceSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-6 lg:p-8  w-full mx-auto font-poppins">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
          Farmease
        </h2>
        <p className="text-gray-700 mb-3 text-sm md:text-base lg:text-lg text-center lg:text-left">
          Welcome to Farmease, a dedicated platform for sourcing primary products in the agricultural industry. We connect buyers with farmers, wholesalers, and agents, facilitating direct access to a wide range of farm-fresh products. Farmease is built on the principles of transparency, quality, and direct relationships.
        </p>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg text-center lg:text-left">
          Whether you're a grower looking to showcase your products or a buyer in search of reliable produce, our platform simplifies the process. Our user-friendly interface ensures a seamless experience, making it easy for all parties to find what they need. Join Farmease, where every connection supports a transparent and efficient agricultural community.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="mt-4 bg-green-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-green-700 transition flex items-center">
            Discover More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6-6 6M3 12h15" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 justify-items-end justify-center lg:justify-end px-4">
        <img
          src={siloImage}
          alt="Agricultural silos"
          className="h-64 md:h-72 lg:h-80 w-auto rounded-lg "
        />
      </div>
    </div>
  );
};

export default MarketplaceSection;
