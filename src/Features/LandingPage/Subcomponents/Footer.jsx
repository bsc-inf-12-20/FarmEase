import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, ariaLabel, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-green-600 hover:text-orange-500 transition-colors duration-300">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-green-600 rounded-xl text-white py-8 md:py-16 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-3xl font-bold text-black mb-2">Farmease.</h4>
            <p className="text-sm md:text-base">Allowing farmers and buyers to get their needs at pocket-friendly fees.</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <SocialIcon href="https://www.instagram.com/farmease" ariaLabel="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7zm8 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/farmease" ariaLabel="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M13 2h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-2v3h2c.5 0 .9.4.9.9v4.1c0 .5-.4.9-.9.9h-2v7c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-7H8c-.6 0-1-.4-1-.9V12c0-.5.4-.9.9-.9h2V8c0-2.8 2.2-5 5-5z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com/farmease" ariaLabel="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M20 4.3c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0 1.6-2.1 7.4 7.4 0 0 1-2.4.9A3.7 3.7 0 0 0 12 7.8a10.5 10.5 0 0 1-7.6-3.8 3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5v.1c0 1.7 1.2 3.2 2.9 3.5a3.8 3.8 0 0 1-1.7.1c.5 1.5 1.9 2.6 3.6 2.6A7.4 7.4 0 0 1 3.5 18c-.2 0-.5 0-.7-.1A10.4 10.4 0 0 0 8 19.9c6.6 0 10.2-5.4 10.2-10.2 0-.2 0-.4 0-.6a7.4 7.4 0 0 0 1.8-1.8z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:info@farmease.com" ariaLabel="Email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 2H4v.5l8 5 8-5V6zm0 3l-8 5-8-5v9h16V9z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl text-black mb-2">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-black text-sm md:text-base">About Us</Link></li>
              <li><Link to="/events" className="hover:text-black text-sm md:text-base">How to post</Link></li>
              <li><Link to="/news" className="hover:text-black text-sm md:text-base">How it works</Link></li>
              <li><Link to="/news" className="hover:text-black text-sm md:text-base">Contact Us</Link></li>
              <li><Link to="/news" className="hover:text-black text-sm md:text-base">Faqs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl text-black mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-black text-sm md:text-base">Home</Link></li>
              <li><Link to="/solutions" className="hover:text-black text-sm md:text-base">Categories</Link></li>
              <li><Link to="/login" className="hover:text-black text-sm md:text-base">Login</Link></li>
              <li><Link to="/signup" className="hover:text-black text-sm md:text-base">Create Account</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl text-black mb-2">Contact Info</h4>
            <p className="text-sm md:text-base">Zomba, UNIMA - Malawi</p>
            <p className="text-sm md:text-base">Contacts: +265 (0) 990 155 300</p>
            <p className="text-sm md:text-base">+265 (0) 888 777 332</p>
            <p className="text-sm md:text-base">Email: info@farmease.com</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2">
          <input type="text" placeholder="Send us your views" className="flex-grow p-2 rounded-md sm:rounded-r-none text-black w-full sm:w-auto" />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md sm:rounded-l-none hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto">Submit</button>
        </div>
        <div className="mt-4 text-center text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Farmease. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
