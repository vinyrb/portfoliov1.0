import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

export default function Header() {
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-black/50 border-white/10'
          : 'bg-white/50 border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className={`h-6 w-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} />
            <span className={`font-bold text-xl ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Portfolio v1.0</span>
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Skills', 'Education'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {[
              { icon: Github, href: 'https://github.com/vinyrb' },
              { icon: Linkedin, href: 'https://id.linkedin.com/in/relvin-vincent-i-t-b7ba97293' },
              { icon: Mail, href: 'mailto:vinyrbe@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}