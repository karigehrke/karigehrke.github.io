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
                  I began my career as a graphic designer, spending years crafting visual identities, 
                  layouts, and user experiences. This foundation gave me a deep appreciation for 
                  typography, color theory, and the psychology of design.
                </p>
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  The transition to frontend development felt natural – I was already thinking about 
                  user experience, just now I could bring those designs to life with code. This unique 
                  background allows me to bridge the gap between design and development teams.
                </p>

                <p className="text-slate-300 leading-relaxed">
                  Today, I combine my design expertise with modern web technologies to create 
                  interfaces that are not only functional but also delightful to use.
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
                    <p className="text-slate-400 text-sm">5+ years in graphic design</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <Code className="h-8 w-8 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">Development Skills</h3>
                    <p className="text-slate-400 text-sm">3+ years in frontend development</p>
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
                title: 'Senior Frontend Engineer',
                company: 'Tech Company',
                period: '2023 - Present',
                description: 'Leading frontend development for complex web applications, mentoring junior developers, and establishing design systems.',
                icon: Code,
                color: 'blue'
              },
              {
                title: 'Frontend Developer',
                company: 'Digital Agency',
                period: '2022 - 2023',
                description: 'Developed responsive websites and web applications using React, TypeScript, and modern CSS frameworks.',
                icon: Users,
                color: 'purple'
              },
              {
                title: 'Junior Frontend Developer',
                company: 'Startup',
                period: '2021 - 2022',
                description: 'Transitioned from design to development, building UI components and implementing designs with pixel-perfect precision.',
                icon: Lightbulb,
                color: 'amber'
              },
              {
                title: 'Graphic Designer',
                company: 'Design Studio',
                period: '2018 - 2021',
                description: 'Created visual identities, marketing materials, and UI designs for various clients across different industries.',
                icon: Palette,
                color: 'pink'
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