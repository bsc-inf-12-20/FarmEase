import React, { useState } from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavbarAndHead() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-white font-medium text-black px-6 py-4 hidden font-poppins lg:block"> 
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <Link to="/about" className="hover:text-gray-700">
                About us
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-gray-700">
                News
              </Link>
            </li>
            <li>
              <Link to="/plans" className="hover:text-gray-700">
                Plans
              </Link>
            </li>
            <li>
              <Link to="/industry" className="hover:text-gray-700">
                Industry
              </Link>
            </li>
            <li>
              <Link to="/how-to-post" className="hover:text-gray-700">
                How to post
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-gray-700">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-700">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-gray-700">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <hr className="my-4 border-gray-300 hidden lg:block" /> 
      <nav className="bg-white font-poppins">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-4xl font-extrabold text-green-500">
            Farmease
          </a>
          <div className="flex items-center space-x-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 sm:px-4 rounded text-sm sm:text-base">
              + Post a Product
            </button>
            <div className="hidden lg:flex items-center space-x-2">
              <FaUser className="w-6 h-6 text-gray-600" />
              <div className="flex flex-col text-gray-600">
                <span className="text-sm">Welcome User</span>
                <div className="flex space-x-2">
                  <a href="/login" className="text-sm font-bold underline-animation">
                    Login
                  </a>
                  <span>or</span>
                  <a href="/register" className="text-sm font-bold underline-animation">
                    Register
                  </a>
                </div>
              </div>
            </div>
            <FaBars
              className="text-gray-600 text-2xl lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="flex items-center space-x-2 px-4 pb-4 border-b">
            <FaUser className="w-6 h-6 text-gray-600" />
            <div className="text-gray-600">
              <span className="text-sm text-gray-700">Welcome User</span>
              <div className="flex space-x-2">
                <a href="/login" className="underline-animation text-sm font-bold">
                  Login
                </a>
                <span>or</span>
                <a href="/register" className="underline-animation text-sm font-bold">
                  Register
                </a>
              </div>
            </div>
          </div>
          <ul className="space-y-4 text-sm px-4 mt-4">
            <li>
              <Link to="/about" className="block hover:text-gray-700">
                About us
              </Link>
            </li>
            <li>
              <Link to="/news" className="block hover:text-gray-700">
                News
              </Link>
            </li>
            <li>
              <Link to="/plans" className="block hover:text-gray-700">
                Plans
              </Link>
            </li>
            <li>
              <Link to="/industry" className="block hover:text-gray-700">
                Industry
              </Link>
            </li>
            <li>
              <Link to="/how-to-post" className="block hover:text-gray-700">
                How to post
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="block hover:text-gray-700">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-gray-700">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="block hover:text-gray-700">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarAndHead;
