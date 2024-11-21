import React from 'react';
import { Code, Database, Layout, Server, Laptop } from 'lucide-react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import AnimatedSection from './components/AnimatedSection';
import { useTheme } from './context/ThemeContext';
import { motion } from 'framer-motion';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <Header />
      
      {/* Hero Section */}
      <AnimatedSection id="about" className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.h1 
              className={`text-4xl sm:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm Vincent Tan<span className="text-indigo-500">👋</span>
            </motion.h1>
            <motion.p 
              className={`text-xl mb-8 max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I'm 18 years old. I live in Indonesia, a beautiful country with diverse cultures and landscapes. One of my hobbies is playing mobile games, especially strategy and adventure games. I enjoy the challenge and the fun of exploring different worlds and scenarios. I also like to chat with my online friends and share tips and tricks for the games we play. Playing mobile games helps me relax and have fun in my spare time
            </motion.p>
            <motion.a
              href="#projects"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-500 transition-all hover:scale-105 duration-300 glow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Smart Task Manager"
              description="A full-stack task management application with AI-powered task prioritization and real-time collaboration features."
              image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800"
              tech={['React', 'Node.js', 'MongoDB', 'Socket.io']}
              github="https://github.com"
              demo="https://demo.com"
              theme={theme}
            />
            <ProjectCard
              title="EcoTrack"
              description="An IoT-based environmental monitoring system that tracks and visualizes air quality metrics in real-time."
              image="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800"
              tech={['Python', 'React', 'AWS', 'Arduino']}
              github="https://github.com"
              demo="https://demo.com"
              theme={theme}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className={`py-16 px-4 sm:px-6 ${
        theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              title="Frontend"
              icon={Layout}
              skills={['React', 'TypeScript', 'Tailwind CSS', 'Next.js']}
              theme={theme}
            />
            <SkillCard
              title="Backend"
              icon={Server}
              skills={['Node.js', 'Express', 'Python', 'Java']}
              theme={theme}
            />
            <SkillCard
              title="Database"
              icon={Database}
              skills={['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']}
              theme={theme}
            />
            <SkillCard
              title="Tools"
              icon={Laptop}
              skills={['Git', 'Docker', 'AWS', 'Linux']}
              theme={theme}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Education</h2>
          <motion.div 
            className={`p-6 rounded-xl shadow-md backdrop-blur-sm glow ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-indigo-400 mr-2" />
              <h3 className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>SMK Real Informatika Batam</h3>
            </div>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              Rekayasa Perangkat Lunak
            </p>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
              2023 - 2025
            </p>
            <div className="mt-4">
              <h4 className={`font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>Relevant Coursework:</h4>
              <ul className={`list-disc list-inside space-y-1 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>Make Web Portfolio</li>
                <li>Database with PHP</li>
                <li>Mobile App Development</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className={`border-t py-8 px-4 sm:px-6 ${
        theme === 'dark' 
          ? 'border-gray-800 text-gray-400' 
          : 'border-gray-200 text-gray-500'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Vincent Tan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;