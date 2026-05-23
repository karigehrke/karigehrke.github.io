import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  category: string;
  isWIP?: boolean;
  role: string;
  year: string;
  size: 'large' | 'medium' | 'small';
};

const projects: Project[] = [
  {
    title: 'TriEagle Energy Marketplace',
    description: 'Lead frontend developer for a comprehensive energy marketplace. Built scalable architecture with Next.js, TypeScript, and a full Cypress test suite for production confidence.',
    image: '/tee-image.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cypress'],
    liveUrl: 'https://shop.trieagleenergy.com/',
    category: 'Lead Frontend',
    role: 'Lead Frontend',
    year: '2021–Pres.',
    size: 'large',
  },
  {
    title: 'Energy Harbor Marketplace',
    description: 'Clean energy marketplace serving Midwest and Northeast states. Focused on carbon-free plan comparison and seamless UX for a complex regulatory environment.',
    image: '/eh-image.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cypress'],
    liveUrl: 'https://shop.energyharbor.com/',
    category: 'Lead Frontend',
    role: 'Lead Frontend',
    year: '2021–Pres.',
    size: 'medium',
  },
  {
    title: 'SaveOnEnergy.com',
    description: 'Partnered on a full site rebuild of a major energy marketplace serving millions of users. Contributed across the stack using React, Next.js, TypeScript, and Tailwind.',
    image: '/soe-image.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.saveonenergy.com/',
    category: 'Frontend',
    role: 'Frontend Engineer',
    year: '2022',
    size: 'small',
  },
  {
    title: 'Solar Lead Form Widget',
    description: 'Reusable solar estimator widget deployed across major energy platforms. Optimized for conversion with clean form UX and seamless host-page integration.',
    image: '/solar-lead-form.png',
    technologies: ['React', 'TypeScript', 'Nx', 'Easy-Peasy', 'GraphQL'],
    liveUrl: 'https://www.saveonenergy.com/solar-energy/solar-estimator/',
    category: 'Widget',
    role: 'Engineer',
    year: '2022',
    size: 'medium',
  },
  {
    title: 'UltraCrew',
    description: 'Ultramarathon crew logistics app. Intuitive interface for race details, runner coordination, and crew management with thorough form validation.',
    image: '/crew-app-image.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    category: 'Web App',
    role: 'Designer + Engineer',
    year: 'WIP',
    size: 'large',
    isWIP: true,
  },
  {
    title: 'PlantCare',
    description: 'Plant care management dashboard with watering schedules, health tracking, and personalized care reminders. PWA-ready for mobile use.',
    image: '/plant-care-image.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PWA'],
    liveUrl: '#',
    category: 'Web App',
    role: 'Designer + Engineer',
    year: 'WIP',
    size: 'small',
    isWIP: true,
  },
];

const categories = ['All', 'Lead Frontend', 'Frontend', 'Widget', 'Web App'];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isLarge = project.size === 'large';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex flex-col ${isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}`}
    >
      <div className={`relative overflow-hidden bg-stone-900 ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" aria-hidden="true" />

        {project.isWIP && (
          <div className="absolute top-4 left-4 px-2 py-1 bg-amber-400 text-stone-950 text-xs font-bold tracking-[0.1em] uppercase">
            WIP
          </div>
        )}

        {project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} live site`}
            className="absolute top-4 right-4 p-2 bg-stone-950/90 text-stone-300 hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-stone-900"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-amber-400 mb-1">{project.role}</p>
              <h3 className={`font-black text-white leading-tight ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>{project.title}</h3>
            </div>
            <span className="text-xs text-stone-300 font-mono shrink-0 ml-4">{project.year}</span>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-6 border-b border-stone-800">
        <p className="text-stone-300 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs text-stone-400 border border-stone-700 px-2 py-1 font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 pt-16">

      {/* Header */}
      <section className="px-6 lg:px-12 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Selected Work
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-7xl font-black tracking-tighter text-stone-100 leading-none"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Projects
              </motion.h1>
            </div>
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-stone-300 leading-relaxed">
                A range of work spanning energy platforms, personal tools, and widgets — each built with an equal eye on design and engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overlapping hero pair — two images that crowd each other */}
      <section className="px-6 lg:px-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative grid lg:grid-cols-12 items-start gap-0">

            {/* Primary image — cols 1–8 */}
            <motion.div
              className="lg:col-span-8 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[16/9] overflow-hidden bg-stone-900">
                <img
                  src="/tee-image.png"
                  alt="TriEagle Energy Marketplace"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-xs tracking-[0.15em] uppercase text-amber-400 mb-0.5">Lead Frontend</p>
                <p className="text-lg font-bold text-white">TriEagle</p>
              </div>
            </motion.div>

            {/* Secondary image — cols 7–12, pushed down, overlaps left image */}
            <motion.div
              className="lg:col-span-5 lg:col-start-8 relative z-20 lg:-ml-8 lg:mt-16 mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Decorative border offset */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-amber-400/20 z-0" aria-hidden="true" />
              <div className="aspect-[4/3] overflow-hidden bg-stone-900 relative z-10 shadow-2xl shadow-stone-950">
                <img
                  src="/eh-image.png"
                  alt="Energy Harbor Marketplace"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute bottom-4 right-4 z-20">
                <p className="text-xs tracking-[0.15em] uppercase text-amber-400 mb-0.5 text-right">Lead Frontend</p>
                <p className="text-lg font-bold text-white text-right">Energy Harbor</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto border-t border-stone-800 pt-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`text-xs tracking-[0.15em] uppercase font-semibold px-4 py-2 border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'border-amber-400 text-amber-400 bg-amber-400/5'
                    : 'border-stone-700 text-stone-300 hover:border-stone-500 hover:text-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid lg:grid-cols-3 gap-10">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Offset showcase — personal projects stacked with diagonal offset */}
      <section className="px-6 lg:px-12 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-0 items-start">

            {/* Stacked label */}
            <motion.div
              className="lg:col-span-3 pt-8 pr-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">Personal Work</p>
              <h2 className="text-2xl font-black text-stone-200 leading-tight mb-4">
                Designing for<br />myself.
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed">
                Side projects where I'm both client and engineer — the closest thing to total creative control.
              </p>
            </motion.div>

            {/* First personal project — wider, sits higher */}
            <motion.div
              className="lg:col-span-5 lg:col-start-4 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-900">
                <img
                  src="/crew-app-image.png"
                  alt="UltraCrew app screenshot"
                  className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="pt-4">
                <p className="text-xs tracking-[0.15em] uppercase text-amber-400 mb-1">WIP · Designer + Engineer</p>
                <p className="font-bold text-stone-200">UltraCrew</p>
              </div>
            </motion.div>

            {/* Second personal project — narrower, drops lower to overlap */}
            <motion.div
              className="lg:col-span-4 lg:col-start-9 relative z-20 lg:mt-24 mt-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -top-2 -left-2 w-full h-full border border-stone-700 z-0" aria-hidden="true" />
              <div className="aspect-[4/3] overflow-hidden bg-stone-900 relative z-10">
                <img
                  src="/plant-care-image.png"
                  alt="PlantCare app screenshot"
                  className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="pt-4">
                <p className="text-xs tracking-[0.15em] uppercase text-amber-400 mb-1">WIP · Designer + Engineer</p>
                <p className="font-bold text-stone-200">PlantCare</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto border-t border-stone-800 pt-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl lg:text-5xl font-black text-stone-200 leading-tight">
                Want to build<br />
                something together?
              </h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <a
                href="/contact"
                className="group flex items-center justify-between border border-stone-600 hover:border-amber-400 px-6 py-4 transition-all duration-300 hover:bg-amber-400/5"
              >
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">Get in touch</span>
                <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
