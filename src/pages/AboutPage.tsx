import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <AboutSection />
    </motion.div>
  );
};

export default AboutPage;