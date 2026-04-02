import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary-500 font-bold tracking-widest uppercase mb-2">Portfolio</h4>
          <h2 className="text-4xl md:text-5xl font-black">Recent Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700"
              >
                {/* Project Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors">
                        <FaGithub size={24} />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors">
                        <FaExternalLinkAlt size={22} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
