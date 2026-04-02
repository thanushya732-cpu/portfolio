import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-primary-500 font-bold tracking-widest uppercase mb-2">Abilities</h4>
          <h2 className="text-4xl md:text-5xl font-black">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center transition-all hover:shadow-xl hover:border-primary-500/20"
              >
                <div 
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  <skill.icon />
                </div>
                <h3 className="font-bold text-center text-sm sm:text-base mb-3">{skill.name}</h3>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary-500"
                  />
                </div>
                <span className="text-[10px] uppercase font-bold text-primary-500 mt-2">{skill.level}%</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
