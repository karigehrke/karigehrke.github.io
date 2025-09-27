import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent"
            {...fadeInUp}
          >
            Kari Gehrke
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-6 text-slate-200"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Frontend Engineer
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Bridging the gap between beautiful design and powerful functionality
          </motion.p>
          
          <motion.p 
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            Former graphic designer turned frontend engineer, bringing a unique perspective to web development 
            with an eye for detail and user experience.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            {...fadeInUp}
            transition={{ delay: 0.7 }}
          >
            <Link 
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border-2 border-blue-600 hover:border-blue-700 w-full sm:min-w-[160px] sm:w-auto h-[50px] flex items-center justify-center"
            >
              View My Work
            </Link>
            
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-slate-500 hover:border-white text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 w-full sm:min-w-[160px] sm:w-auto h-[50px] flex items-center justify-center"
            >
              Get In Touch
            </Link>

            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 border-2 border-amber-600 hover:border-amber-700 w-full sm:min-w-[160px] sm:w-auto h-[50px] flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Resume
            </button>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6"
            {...fadeInUp}
            transition={{ delay: 0.9 }}
          >
            <a href="https://github.com/karigehrke" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-white transition-colors p-2 hover:scale-110 transform">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/kari-gehrke/" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-white transition-colors p-2 hover:scale-110 transform">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:kari.gehrke@example.com" 
               className="text-slate-400 hover:text-white transition-colors p-2 hover:scale-110 transform">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', level: 90 },
              { name: 'TypeScript', level: 85 },
              { name: 'Tailwind CSS', level: 95 },
              { name: 'Node.js', level: 80 },
              { name: 'Figma', level: 95 },
              { name: 'Adobe Creative Suite', level: 90 },
              { name: 'UI/UX Design', level: 95 },
              { name: 'Responsive Design', level: 95 }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;