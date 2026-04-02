import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary-500 font-bold tracking-widest uppercase mb-2">My History</h4>
          <h2 className="text-4xl md:text-5xl font-black">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">A bit about me...</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
              I am a driven Software Developer with a deep interest in building performant, 
              scalable, and user-centric web applications. My journey began with a simple 
              "Hello World" and has since evolved into building complex systems across various domains.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
              I believe in clean code, continuous learning, and sharing knowledge with the community. 
              When I'm not coding, you can find me exploring new technologies, contributing to open 
              source, or enjoying a good cup of coffee.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="text-3xl font-bold text-primary-500">2+</span>
                <p className="text-sm text-gray-500">Years Exp.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="text-3xl font-bold text-primary-500">20+</span>
                <p className="text-sm text-gray-500">Projects Done</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">Ed</span>
                Education
              </h4>
              <div className="border-l-2 border-primary-500/30 ml-4 pl-8 space-y-6">
                <div>
                  <h5 className="font-bold">B.Sc. in Computer Science</h5>
                  <p className="text-sm text-primary-500 mb-1">Univeristy of Technology | 2019 - 2023</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Specialized in Software Engineering and AI.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-accent-500 text-white rounded-lg flex items-center justify-center mr-3 text-sm">In</span>
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {['UI/UX Design', 'Cloud Computing', 'Open Source', 'Photography', 'Gaming', 'Coffee Brewing'].map((item) => (
                  <span key={item} className="px-4 py-2 bg-white dark:bg-gray-800 text-sm rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
