import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Cpu, Wifi, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced AI solutions for complex engineering challenges, from predictive maintenance to optimization algorithms.',
      features: ['Neural Networks', 'Deep Learning', 'Computer Vision', 'Natural Language Processing'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications and platforms built with cutting-edge technologies for optimal performance.',
      features: ['Full-Stack Development', 'Cloud Solutions', 'API Integration', 'Real-time Systems'],
    },
    {
      icon: Wifi,
      title: 'IoT Solutions',
      description: 'Connected device ecosystems that enable smart monitoring, control, and automation.',
      features: ['Sensor Networks', 'Data Analytics', 'Remote Monitoring', 'Smart Automation'],
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Custom hardware solutions with integrated software for specialized applications.',
      features: ['Microcontroller Programming', 'RTOS', 'Hardware Design', 'System Integration'],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Our Engineering Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to meet the evolving demands of modern industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, features }, index) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-purple-950/20 border border-purple-500/20 backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-purple-900/40">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
                    <p className="text-gray-300 mb-6">{description}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-400">
                          <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;