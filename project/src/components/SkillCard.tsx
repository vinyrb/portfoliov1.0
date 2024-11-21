import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  theme: 'dark' | 'light';
}

export default function SkillCard({ title, skills, icon: Icon, theme }: SkillCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 hover-glow ${
        theme === 'dark'
          ? 'bg-gray-800/50 border-gray-700'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-indigo-400 mr-2" />
        <h3 className={`text-lg font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={skill} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1 rounded-full text-sm border ${
              theme === 'dark'
                ? 'bg-gray-900/50 text-gray-300 border-gray-700'
                : 'bg-gray-50 text-gray-700 border-gray-200'
            }`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}