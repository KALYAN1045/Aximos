import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent text-center">
            Contact Us
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto text-center mb-12">
            Get in touch with our team of experts
          </p>
          {/* Add contact form here */}
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;