import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-800 text-center">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
          Thanushya<span className="text-accent-500">.</span>
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Designed and built with <FaHeart className="inline text-red-500" /> by Thanushya
        </p>
        <div className="flex justify-center space-x-8 mb-8 text-gray-400">
          <a href="#home" className="hover:text-primary-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-primary-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Thanushya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
