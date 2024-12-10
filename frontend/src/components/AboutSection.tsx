import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Pioneering Engineering Excellence
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              At Aximos, we blend cutting-edge technology with innovative engineering solutions to shape the future of industry and education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering outstanding engineering solutions",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together to achieve groundbreaking results",
              },
              {
                icon: Target,
                title: "Precision",
                description: "Meticulous attention to detail in every project",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Pushing boundaries with creative solutions",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20 backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-700/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <Icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="inline-flex gap-8 p-8 rounded-2xl bg-purple-950/20 border border-purple-500/20">
              <div>
                <h4 className="text-4xl font-bold text-purple-400 mb-2">500+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="w-px bg-purple-500/20" />
              <div>
                <h4 className="text-4xl font-bold text-purple-400 mb-2">98%</h4>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
              <div className="w-px bg-purple-500/20" />
              <div>
                <h4 className="text-4xl font-bold text-purple-400 mb-2">50+</h4>
                <p className="text-gray-300">Expert Engineers</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;