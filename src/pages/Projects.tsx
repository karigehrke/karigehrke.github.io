import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Project = {
  title: string;
  description: string;
  highlight: string;
  image?: string;
  art?: 'overprint' | 'diff' | 'stack';
  technologies: string[];
  liveUrl: string;
  category: string;
  badge?: string;
  role: string;
  year: string;
  size: 'large' | 'medium' | 'small';
};

const projects: Project[] = [
  {
    title: 'TXU Energy Shop',
    description: 'Led the build of the homepage-to-offers experience. Made the categories repeated across its pages global and dynamic, so they can be updated without engineering help. Maintain the Tailwind design tokens that map Figma to production.',
    highlight: 'Now the lead experience, with its wins rolling into other tests',
    image: '/txu-image.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://shop.txu.com/',
    category: 'Lead Frontend',
    role: 'Lead Engineer',
    year: 'Current',
    size: 'large',
  },
  {
    title: 'Energy Harbor Marketplace',
    description: 'Clean energy marketplace serving Midwest and Northeast states. Focused on carbon-free plan comparison and seamless UX for a complex regulatory environment.',
    highlight: 'Carbon-free plan comparison across two regions',
    image: '/eh-image.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cypress'],
    liveUrl: 'https://shop.energyharbor.com/',
    category: 'Lead Frontend',
    role: 'Lead Frontend',
    year: '2021–Pres.',
    size: 'medium',
  },
  {
    title: 'AI Visual QA Tool',
    description: 'Architected an internal AI tool that compares live frontend output against Figma source files, automating visual QA and preventing implementation drift as teams scale.',
    highlight: 'Automated design-to-code checks against Figma',
    art: 'diff',
    technologies: ['AI Tooling', 'Figma'],
    liveUrl: '#',
    category: 'AI Tooling',
    role: 'Architect + Engineer',
    year: '2021–Pres.',
    size: 'large',
  },
  {
    title: 'Themeable UI Components',
    description: 'Modular, reusable, themeable components deployed across major enterprise brands, built for strict reliability and multi-platform configuration.',
    highlight: 'Shipped across Bankrate, CNET, and SaveOnEnergy',
    art: 'stack',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    category: 'Frontend',
    role: 'Frontend Engineer',
    year: '2021–Pres.',
    size: 'small',
  },
  {
    title: 'TriEagle Energy Marketplace',
    description: 'Lead frontend developer for a comprehensive energy marketplace. Built scalable architecture with Next.js, TypeScript, and a full Cypress test suite for production confidence.',
    highlight: 'Scalable architecture backed by a full Cypress suite',
    image: '/tee-image.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cypress'],
    liveUrl: 'https://shop.trieagleenergy.com/',
    category: 'Lead Frontend',
    role: 'Lead Frontend',
    year: '2021–Pres.',
    size: 'large',
  },
  {
    title: 'SaveOnEnergy.com',
    description: 'Partnered on a full site rebuild of a major energy marketplace serving millions of users. Contributed across the stack using React, Next.js, TypeScript, and Tailwind.',
    highlight: 'Full site rebuild serving millions of users',
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
    highlight: 'One widget deployed across major energy platforms',
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
    highlight: 'Race and crew logistics with thorough form validation',
    image: '/crew-app-image.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    category: 'Web App',
    role: 'Designer + Engineer',
    year: 'WIP',
    size: 'large',
    badge: 'WIP',
  },
  {
    title: 'PlantCare',
    description: 'Plant care management dashboard with watering schedules, health tracking, and personalized care reminders. PWA-ready for mobile use.',
    highlight: 'PWA-ready schedules, health tracking, and reminders',
    image: '/plant-care-image.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PWA'],
    liveUrl: '#',
    category: 'Web App',
    role: 'Designer + Engineer',
    year: 'WIP',
    size: 'small',
    badge: 'WIP',
  },
  {
    title: 'Blueprint',
    description: 'A design system of my own, drawing on my background in both graphic design and frontend engineering. It is not public yet, so more to come here soon.',
    highlight: 'My own design system, coming soon',
    art: 'overprint',
    technologies: [],
    liveUrl: '#',
    category: 'Design System',
    role: 'Designer + Engineer',
    year: 'Soon',
    size: 'large',
    badge: 'Coming soon',
  },
];

const categories = ['All', 'Lead Frontend', 'Frontend', 'Widget', 'Web App', 'AI Tooling', 'Design System'];

const blueprintGrid = {
  backgroundImage:
    'linear-gradient(rgb(var(--line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line)) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
};

const ProjectArt = ({ art }: { art: Project['art'] }) => (
  <div className="w-full h-full flex items-center justify-center isolate" style={blueprintGrid} aria-hidden="true">
    {art === 'overprint' && (
      <>
        <span className="h-24 w-24 lg:h-36 lg:w-36 rounded-full bg-design transition-transform duration-500 group-hover:translate-x-4" />
        <span className="-ml-10 lg:-ml-14 h-24 w-24 lg:h-36 lg:w-36 rounded-full bg-code mix-blend-screen transition-transform duration-500 group-hover:-translate-x-4" />
      </>
    )}
    {art === 'diff' && (
      <>
        <span className="h-24 w-36 lg:h-36 lg:w-56 rounded-md bg-design transition-transform duration-500 group-hover:translate-x-3" />
        <span className="-ml-28 lg:-ml-44 mt-8 lg:mt-12 h-24 w-36 lg:h-36 lg:w-56 rounded-md bg-code mix-blend-screen transition-transform duration-500 group-hover:-translate-x-3 group-hover:-translate-y-4" />
      </>
    )}
    {art === 'stack' && (
      <>
        <span className="h-16 w-16 lg:h-20 lg:w-20 rounded-none bg-design" />
        <span className="-ml-6 lg:-ml-8 h-16 w-16 lg:h-20 lg:w-20 rounded-xl bg-code mix-blend-screen" />
        <span className="-ml-6 lg:-ml-8 h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-overlap mix-blend-screen" />
      </>
    )}
  </div>
);

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
      <div className={`relative overflow-hidden bg-surface ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-95"
          />
        ) : (
          <ProjectArt art={project.art} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden="true" />

        {project.badge && (
          <div className="absolute top-4 left-4 px-2 py-1 bg-design text-ink text-xs font-bold tracking-[0.1em] uppercase">
            {project.badge}
          </div>
        )}

        {project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} live site`}
            className="absolute top-4 right-4 p-2 bg-ink/90 text-fg-soft hover:text-design lg:opacity-0 lg:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-300 hover:bg-surface"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-end justify-between">
            <div>
              <h3 className={`font-black text-fg leading-tight ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>{project.title}</h3>
            </div>
            <span className="text-xs text-fg-soft font-mono shrink-0 ml-4">{project.year}</span>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-6 border-b border-line">
        <dl className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <dt className="text-xs tracking-[0.15em] uppercase text-muted mb-1">Role</dt>
            <dd className="text-sm font-semibold text-code">{project.role}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs tracking-[0.15em] uppercase text-muted mb-1">Highlight</dt>
            <dd className="text-sm font-semibold text-fg">{project.highlight}</dd>
          </div>
        </dl>
        <p className="text-fg-soft text-sm leading-relaxed mb-4">{project.description}</p>
        {project.technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
            {project.technologies.map((tech) => (
              <li key={tech} className="text-xs text-muted border border-edge px-2 py-1 font-mono">
                {tech}
              </li>
            ))}
          </ul>
        )}
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
    <div className="min-h-screen bg-ink text-fg pt-16">

      {/* Header */}
      <section className="px-6 lg:px-12 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Selected Work
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-7xl font-black tracking-tighter text-fg leading-none"
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
              <p className="text-fg-soft leading-relaxed">
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
              <div className="aspect-[16/9] overflow-hidden bg-surface">
                <img
                  src="/tee-image.png"
                  alt="TriEagle Energy Marketplace"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute bottom-4 left-4 z-20 bg-ink/90 px-3 py-2">
                <p className="text-xs tracking-[0.15em] uppercase text-design mb-0.5">Lead Frontend</p>
                <p className="text-lg font-bold text-fg">TriEagle</p>
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
              <div className="absolute -top-3 -right-3 w-full h-full border border-design/20 z-0" aria-hidden="true" />
              <div className="aspect-[4/3] overflow-hidden bg-surface relative z-10 shadow-2xl shadow-ink">
                <img
                  src="/eh-image.png"
                  alt="Energy Harbor Marketplace"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute bottom-4 right-4 z-20 bg-ink/90 px-3 py-2">
                <p className="text-xs tracking-[0.15em] uppercase text-design mb-0.5 text-right">Lead Frontend</p>
                <p className="text-lg font-bold text-fg text-right">Energy Harbor</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto border-t border-line pt-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`text-xs tracking-[0.15em] uppercase font-semibold px-4 py-2 border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'border-design text-design bg-design/5'
                    : 'border-edge text-fg-soft hover:border-fg-soft hover:text-fg'
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
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">Personal Work</p>
              <h2 className="text-2xl font-black text-fg leading-tight mb-4">
                Designing for<br />myself.
              </h2>
              <p className="text-muted text-sm leading-relaxed">
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
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src="/crew-app-image.png"
                  alt="UltraCrew app screenshot"
                  className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="pt-4">
                <p className="text-xs tracking-[0.15em] uppercase text-design mb-1">WIP · Designer + Engineer</p>
                <p className="font-bold text-fg">UltraCrew</p>
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
              <div className="absolute -top-2 -left-2 w-full h-full border border-edge z-0" aria-hidden="true" />
              <div className="aspect-[4/3] overflow-hidden bg-surface relative z-10">
                <img
                  src="/plant-care-image.png"
                  alt="PlantCare app screenshot"
                  className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="pt-4">
                <p className="text-xs tracking-[0.15em] uppercase text-design mb-1">WIP · Designer + Engineer</p>
                <p className="font-bold text-fg">PlantCare</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto border-t border-line pt-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl lg:text-5xl font-black text-fg leading-tight">
                Want to build<br />
                something together?
              </h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <Link
                to="/contact"
                className="group flex items-center justify-between border border-edge hover:border-design px-6 py-4 transition-all duration-300 hover:bg-design/5"
              >
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-fg group-hover:text-design transition-colors">Get in touch</span>
                <ArrowRight className="h-4 w-4 text-muted group-hover:text-design group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
