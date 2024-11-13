import React from 'react';
import Farmer from './FarmerCarry.jpg';
import { FaArrowRight } from 'react-icons/fa'; 

const RegisterSection = () => {
  return (
    <div className="flex justify-center font-poppins items-center bg-gray-100 p-6 rounded-lg ">
      <div className="flex flex-col lg:flex-row h-80 gap-4 items-center max-w-6xl">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-3">Looking for where to sell?</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Every new member strengthens our marketplace, broadening our community of buyers and expanding opportunities for everyone involved. Registering with us means more than just signing up, it marks the beginning of a journey toward shared success. By joining, you enable us to better support you. Your partnership today is our collective strength tomorrow.
          </p>
          <button className="bg-green-600 text-white px-3 py-2 rounded-md flex items-center justify-center hover:bg-green-700 transition lg:w-32">
            Register <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <img 
            src={Farmer}
            alt="Farmer carrying tomatoes" 
            className="rounded-lg shadow-md border-2 border-white w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
