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
              I’m a fresh graduate student with a deep passion for artificial intelligence. I’m fascinated by how AI is shaping the future and love exploring its potential to solve real-world problems. Whether it’s diving into the latest developments or experimenting with my own projects, I’m constantly seeking opportunities to learn and grow in this exciting field.
              As I work toward my dreams, I’m eager to connect with like-minded individuals and contribute to innovative AI solutions that make a difference. Let’s create the future together!
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
              title="Portfolio v0.0"
              description=" This portfolio is an evolving collection of my work, showcasing the initial steps in my professional and creative endeavors.
                          Though it’s a version 0.0, it’s a testament to my passion and growth, serving as a foundation for bigger and better things to come. Stay tuned for future updates as I refine my skills and add new projects!
."
              image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tech={['HTML', 'CSS', 'Javascript']}
              github="https://github.com/vinyrb/portfolio"
              demo="https://vinyrb.github.io/portfolio/"
              theme={theme}
            />
            <ProjectCard
              title="CV"
              description="This CV is a living reflection of my evolving journey, capturing the early moments of my professional and creative path while in senior high school.Stay tuned for upcoming updates as I hone my skills and introduce new projects along the way!"
              image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              tech={['HTML', 'CSS']}
              github="https://github.com/vinyrb/cv"
              demo="https://vinyrb.github.io/cv/"
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
              skills={['HTML','CSS' ,'Tailwind CSS']}
              theme={theme}
            />
            <SkillCard
              title="Backend"
              icon={Server}
              skills={['Java','PHP']}
              theme={theme}
            />
            <SkillCard
              title="Database"
              icon={Database}
              skills={['MySQL']}
              theme={theme}
            />
            <SkillCard
              title="Tools"
              icon={Laptop}
              skills={['Git']}
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
              2022 - 2025
            </p>
            <div className="mt-4">
              <h4 className={`font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>Relevant Coursework:</h4>
              <ul className={`list-disc list-inside space-y-1 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>Making Web Portfolio</li>
                <li>Learning Database with PHP</li>
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