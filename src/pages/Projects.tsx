import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Palette, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TriEagle Energy Marketplace',
      description: 'Lead frontend developer for shop.trieagleenergy.com, a comprehensive energy marketplace platform. Built scalable web application with modern React architecture and responsive design.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Cypress'],
      liveUrl: 'https://shop.trieagleenergy.com/',
      githubUrl: '#',
      category: 'Lead Frontend'
    },
    {
      title: 'Energy Harbor Marketplace',
      description: 'Lead frontend developer for shop.energyharbor.com, serving customers across Midwest and Northeast states. Developed a comprehensive clean energy marketplace focused on carbon-free energy plans with intuitive user experience and seamless plan comparison features.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Cypress'],
      liveUrl: 'https://shop.energyharbor.com/',
      githubUrl: '#',
      category: 'Lead Frontend'
    },
    {
      title: 'Solar Lead Form Widget',
      description: 'Reusable solar lead generation widget deployed across major energy platforms including SaveOnEnergy.com. Built with React and TypeScript for seamless integration and optimal user experience.',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Nx', 'Easy-Peasy', 'GraphQL'],
      liveUrl: 'https://www.saveonenergy.com/solar-energy/solar-estimator/',
      githubUrl: '#',
      category: 'Widget'
    },
    {
      title: 'UltraCrew',
      description: 'Ultramarathon crew logistics management application. Clean, intuitive interface for managing race details, runner information, and crew coordination with comprehensive form validation and user-friendly design.',
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Form Validation'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web App',
      isWIP: true
    },
    {
      title: 'PlantCare',
      description: 'Plant care management application with intuitive dashboard, watering schedules, and plant health tracking. Features clean UI design with status indicators and personalized care reminders.',
      image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'PWA'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web App',
      isWIP: true
    },
    {
      title: 'SaveOnEnergy.com',
      description: 'Partnered on full site rebuild of major energy marketplace platform. Built with modern React architecture, Next.js, TypeScript, and Tailwind CSS to serve millions of users searching for energy plans.',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://www.saveonenergy.com/',
      githubUrl: '#',
      category: 'Frontend'
    }
  ];

  const categories = ['All', 'Lead Frontend', 'Frontend', 'Widget', 'Web App'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Lead Frontend': return Code;
      case 'Design System': return Palette;
      case 'Mobile': return Smartphone;
      default: return Globe;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my journey from design concepts to fully functional applications, 
            demonstrating both creative vision and technical expertise.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => {
              const IconComponent = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={project.title}
                  className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  layout
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.isWIP && (
                        <div className="bg-amber-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-white">WIP</span>
                        </div>
                      )}
                      <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                        <IconComponent className="h-4 w-4 text-blue-400" />
                        <span className="text-xs font-semibold text-white">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium text-sm"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Like what you see?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm always excited to work on new projects and collaborate with amazing teams.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-block"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;