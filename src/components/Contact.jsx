import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary-500 font-bold tracking-widest uppercase mb-2 text-left">Get In Touch</h4>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-left">Let's Talk About Your Project</h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 text-primary-500 rounded-2xl flex items-center justify-center shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Email Me</h5>
                  <p className="text-gray-500">thanushya@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent-50 dark:bg-accent-900/30 text-accent-500 rounded-2xl flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Location</h5>
                  <p className="text-gray-500">Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="pt-8 flex space-x-6 text-2xl text-gray-400">
                <a href="#" className="hover:text-primary-500 transition-colors"><FaLinkedin /></a>
                <a href="#" className="hover:text-primary-500 transition-colors"><FaGithub /></a>
                <a href="#" className="hover:text-primary-500 transition-colors"><FaTwitter /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Thanushya"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-primary-500 rounded-2xl outline-none transition-all dark:text-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-primary-500 rounded-2xl outline-none transition-all dark:text-gray-100"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Hey, let's build something amazing together!"
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-primary-500 rounded-2xl outline-none transition-all resize-none dark:text-gray-100"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center space-x-3"
              >
                <span>Send Message</span>
                <FaPaperPlane size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
