import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  theme: 'dark' | 'light';
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tech, 
  github, 
  demo, 
  theme 
}: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-sm border hover-glow ${
        theme === 'dark'
          ? 'bg-white/5 border-white/10'
          : 'bg-white border-gray-200'
      }`}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        <p className={`mb-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <motion.span 
              key={t} 
              whileHover={{ scale: 1.1 }}
              className={`px-3 py-1 rounded-full text-sm border ${
                theme === 'dark'
                  ? 'bg-white/5 text-gray-200 border-white/10'
                  : 'bg-gray-100 text-gray-700 border-gray-200'
              }`}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-4">
          {github && (
            <motion.a 
              href={github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Github className="h-5 w-5 mr-2" />
              <span>Code</span>
            </motion.a>
          )}
          {demo && (
            <motion.a 
              href={demo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}