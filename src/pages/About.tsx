import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Lightbulb, Users, Award, Calendar } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            {...fadeInUp}
          >
            About Me
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            A unique journey from pixels to code, bringing design thinking to development
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">My Journey</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  I'm a frontend developer with 6+ years of experience building scalable, user-friendly 
                  applications, following a prior career as a graphic designer. I bring a unique blend 
                  of design expertise and technical skill to create intuitive, reliable, and visually 
                  cohesive interfaces.
                </p>
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  My journey began in graphic design at N2 Publishing, where I spent 6 years crafting 
                  layouts and advertisements for regional and national publications. This foundation 
                  gave me a deep appreciation for visual hierarchy, brand consistency, and user experience.
                </p>

                <p className="text-slate-300 leading-relaxed">
                  Today, I'm passionate about solving complex problems with clean code and delivering 
                  digital experiences that inspire trust and empower users. At Red Ventures, I lead 
                  frontend development for major energy marketplace platforms, building scalable 
                  applications that serve millions of users.
                </p>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <Palette className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3 className="font-semibold text-white">Design Background</h3>
                    <p className="text-slate-400 text-sm">6+ years in graphic design</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <Code className="h-8 w-8 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">Development Skills</h3>
                    <p className="text-slate-400 text-sm">6+ years in frontend development</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <Lightbulb className="h-8 w-8 text-amber-400" />
                  <div>
                    <h3 className="font-semibold text-white">Problem Solving</h3>
                    <p className="text-slate-400 text-sm">Creative + analytical thinking</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          <div className="space-y-12">
            {[
              {
                title: 'Frontend Developer',
                company: 'Red Ventures',
                period: 'August 2021 - Present',
                description: 'Lead frontend developer for shop.energyharbor.com and shop.trieagleenergy.com, delivering scalable web applications. Built reusable Solar Lead form widget used across major platforms. Partnered on full site rebuild of saveonenergy.com using React, Next.js, TypeScript, and Tailwind.',
                icon: Code,
                color: 'blue'
              },
              {
                title: 'Full-Stack Software Engineer',
                company: 'HealthSpace Data Systems Ltd',
                period: 'June 2019 - August 2021',
                description: 'Built and maintained scalable code using HTML, CSS, JavaScript, and Vue.js. Collaborated with teams to develop web applications for health departments. Designed mockups and wireframes with focus on modern UI/UX best practices.',
                icon: Users,
                color: 'purple'
              },
              {
                title: 'Graphic Designer',
                company: 'N2 Publishing',
                period: 'July 2013 - June 2019',
                description: 'Designed and delivered layouts and advertisements for multiple regional and national publications. Reviewed and refined team members\' work to ensure quality and brand standards. Mentored designers and maintained workflow efficiency.',
                icon: Palette,
                color: 'amber'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`flex-shrink-0 w-12 h-12 bg-${item.color}-500/20 rounded-full flex items-center justify-center`}>
                  <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-blue-400 mb-2">{item.company} • {item.period}</p>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What I Believe In
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'User-Centered Design',
                description: 'Every line of code should serve the user. I prioritize accessibility, usability, and delightful experiences.',
                icon: Users,
              },
              {
                title: 'Continuous Learning',
                description: 'The web evolves rapidly. I stay current with new technologies and best practices to deliver modern solutions.',
                icon: Lightbulb,
              },
              {
                title: 'Quality Craftsmanship',
                description: 'Clean, maintainable code and pixel-perfect implementations. Details matter in creating professional products.',
                icon: Award,
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-slate-700 p-8 rounded-lg text-center hover:bg-slate-600 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;