import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-primary-500 font-semibold mb-4 text-lg">Hello, I'm</h5>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Thanushya <br />
            <span className="text-gradient">Developer.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-lg">
            A passionate Software/Web Developer dedicated to building beautiful, 
            high-performance digital experiences that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#contact" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-primary-500/30">
              Hire Me
            </a>
            <a href="#" className="px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500 hover:text-white rounded-full font-bold transition-all">
              Download CV
            </a>
          </div>

          <div className="flex space-x-6 text-2xl text-gray-600 dark:text-gray-400">
            <a href="https://github.com/thanushya" target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative circles */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-4 border-dashed border-primary-500/30 rounded-full"
            />
            <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20" />
            
            <img 
              src={profileImg} 
              alt="Thanushya" 
              className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white dark:border-gray-800 animate-float"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-500 hidden md:block"
      >
        <a href="#about"><FaArrowDown size={24} /></a>
      </motion.div>
    </section>
  );
};

export default Hero;
