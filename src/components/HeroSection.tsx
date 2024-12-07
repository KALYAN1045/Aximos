import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Brain, Code, Cpu, Wifi } from 'lucide-react';
import { gsap } from 'gsap';
import Scene from './3d/Scene';



const HeroSection = () => {
  useEffect(() => {
    gsap.from('.hero-content', {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <Scene />
     
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      
      <div className="container mx-auto px-4 z-10 hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                'Empowering Engineering Innovation',
                3000,
                'Building Tomorrow Today',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Transform your engineering concepts into reality with cutting-edge solutions
            and expert guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-white flex items-center gap-2 hover:from-purple-700 hover:to-purple-500 transition-all duration-300"
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
            >
              View Projects
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Brain, text: 'Machine Learning' },
              { icon: Code, text: 'Web Development' },
              { icon: Wifi, text: 'IoT Solutions' },
              { icon: Cpu, text: 'Embedded Systems' },
            ].map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-4 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 hover:bg-purple-900/30 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;