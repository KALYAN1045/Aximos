import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Campus System',
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800',
    description: 'Automated campus management using IoT sensors',
  },
  {
    title: 'AI Traffic Analysis',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800',
    description: 'Real-time traffic pattern analysis using AI',
  },
  {
    title: 'Robotics Control System',
    category: 'Embedded Systems',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    description: 'Advanced robotics control interface',
  },
  {
    title: 'Energy Management',
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800',
    description: 'Smart energy monitoring and optimization',
  },
];

const ProjectGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-xl transform 
                           group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-purple-400 text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;