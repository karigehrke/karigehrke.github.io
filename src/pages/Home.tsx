import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Overprint from '../components/Overprint';

const Home = () => {
  return (
    <div className="min-h-screen bg-ink text-fg">

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end relative overflow-hidden px-6 lg:px-12 pb-16 pt-32">

        {/* Large background monogram — purely decorative, aria-hidden */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none" aria-hidden="true">
          <span className="text-[28vw] font-black text-surface leading-none tracking-tighter">KG</span>
        </div>

        {/* Thin vertical rule */}
        <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-line" aria-hidden="true" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-0 items-end">

            {/* Left: role label */}
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-2"
              >
                <div className="flex isolate mb-4" aria-hidden="true">
                  <span className="h-6 w-6 rounded-full bg-design" />
                  <span className="-ml-2.5 h-6 w-6 rounded-full bg-code mix-blend-screen" />
                </div>
                <p className="text-xs tracking-[0.3em] uppercase text-design font-medium">Design Engineer</p>
                <p className="text-xs tracking-[0.2em] uppercase text-muted">Frontend · Design Systems · AI Workflows</p>
              </motion.div>
            </div>

            {/* Center/Right: name */}
            <div className="lg:col-span-9">
              <motion.h1
                className="text-[13vw] lg:text-[10vw] font-black leading-[0.88] tracking-tighter text-fg"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Kari<br />
                <Overprint>Gehrke</Overprint>
              </motion.h1>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-line mt-12 mb-10"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          {/* Bottom row */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-fg-soft leading-relaxed text-base">
                Former graphic designer turned frontend engineer.
                I build interfaces that are as considered in code as they are in craft, and the AI workflows that keep design and code in sync.
              </p>
            </motion.div>

            <div className="lg:col-span-3 lg:col-start-7">
              <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Link
                  to="/projects"
                  className="group flex items-center justify-between border border-edge hover:border-design px-5 py-3 transition-all duration-300 hover:bg-design/5"
                >
                  <span className="text-xs tracking-[0.15em] uppercase font-semibold text-fg group-hover:text-design transition-colors">View Work</span>
                  <ArrowRight className="h-4 w-4 text-muted group-hover:text-design group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="group flex items-center justify-between border border-edge hover:border-fg-soft px-5 py-3 transition-all duration-300"
                >
                  <span className="text-xs tracking-[0.15em] uppercase font-semibold text-muted group-hover:text-fg transition-colors">Get In Touch</span>
                  <ArrowRight className="h-4 w-4 text-muted group-hover:text-fg-soft group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-2 lg:col-start-11 flex items-center justify-end gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a href="https://github.com/karigehrke" target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-fg transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/kari-gehrke/" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-fg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <button aria-label="Download resume" className="text-muted hover:text-fg transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-line overflow-hidden py-4" aria-hidden="true">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(4)].flatMap(() => [
            'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Figma',
            'Design Systems', 'Design Tokens', 'UI Engineering', 'Motion Design', 'Claude Code', 'Figma MCP', 'GraphQL', 'Node.js',
          ]).map((item, i) => (
            <span key={i} className="text-xs tracking-[0.25em] uppercase text-muted font-medium">
              {item} <span className={`${['text-design', 'text-code', 'text-overlap'][i % 3]} mx-4`}>·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Overlapping collage — two screenshots that bleed across columns */}
      <section className="py-32 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-0 items-start">

            {/* Left label block */}
            <motion.div
              className="lg:col-span-3 pt-16 pr-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">Dual Discipline</p>
              <h2 className="text-3xl font-black text-fg leading-tight mb-6">
                Half <span className="text-design">designer.</span><br />
                Half <span className="text-code">engineer.</span><br />
                <span className="text-overlap">Fully both.</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Most designers can't read the code. Most engineers can't read the room. I do both — and that changes what's possible.
              </p>
            </motion.div>

            {/* Large image — spans cols 4–9, sits at top */}
            <motion.div
              className="lg:col-span-5 lg:col-start-4 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src="/eh-image.png"
                  alt="Energy Harbor Marketplace screenshot"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              {/* Floating label pinned to bottom-left of this image */}
              <div className="absolute -bottom-4 left-4 bg-ink border border-line px-4 py-2 z-20">
                <p className="text-xs tracking-[0.15em] uppercase text-design font-medium">Energy Harbor</p>
              </div>
            </motion.div>

            {/* Small image — cols 9–13, pushed down to create overlap */}
            <motion.div
              className="lg:col-span-4 lg:col-start-9 relative mt-0 lg:mt-24 z-20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {/* Offset border accent — purely decorative */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-edge z-0" aria-hidden="true" />
              <div className="aspect-[4/3] overflow-hidden bg-surface relative z-10">
                <img
                  src="/crew-app-image.png"
                  alt="UltraCrew app screenshot"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute -bottom-4 right-4 bg-ink border border-line px-4 py-2 z-20">
                <p className="text-xs tracking-[0.15em] uppercase text-design font-medium">UltraCrew</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Label */}
            <div className="lg:col-span-3">
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-muted font-medium sticky top-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                What I do
              </motion.p>
            </div>

            {/* Items */}
            <div className="lg:col-span-9 space-y-0">
              {[
                {
                  num: '01',
                  title: 'UI Engineering',
                  desc: 'Building robust, performant component systems and interfaces that hold up at scale. Design-aware code that bridges the gap between Figma and production.',
                  wide: true,
                  titleHover: 'group-hover:text-code',
                  arrowHover: 'group-hover:text-code',
                },
                {
                  num: '02',
                  title: 'Design Systems',
                  desc: 'Crafting consistent visual languages — tokens, patterns, documentation — that make teams move faster without sacrificing quality.',
                  wide: false,
                  titleHover: 'group-hover:text-overlap',
                  arrowHover: 'group-hover:text-overlap',
                },
                {
                  num: '03',
                  title: 'Interaction Design',
                  desc: 'Thoughtful micro-interactions and motion that make interfaces feel alive without getting in the way.',
                  wide: true,
                  titleHover: 'group-hover:text-design',
                  arrowHover: 'group-hover:text-design',
                },
                {
                  num: '04',
                  title: 'AI Workflows',
                  desc: 'Internal tools and team workflows built with Claude Code, Cursor, Copilot, and Codex, including automated visual QA that compares live code against Figma.',
                  wide: true,
                  titleHover: 'group-hover:text-code',
                  arrowHover: 'group-hover:text-code',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  className="group border-t border-line py-10 grid grid-cols-12 gap-6 hover:border-edge transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="col-span-1" aria-hidden="true">
                    <span className="text-xs text-faint font-mono">{item.num}</span>
                  </div>
                  <div className={`${item.wide ? 'col-span-7' : 'col-span-5'}`}>
                    <h3 className={`text-2xl font-bold text-fg ${item.titleHover} transition-colors duration-300 mb-3`}>{item.title}</h3>
                    <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
                  </div>
                  <div className="col-span-1 col-start-12 flex items-center justify-end" aria-hidden="true">
                    <ArrowRight className={`h-4 w-4 text-faint ${item.arrowHover} group-hover:translate-x-1 transition-all duration-300`} />
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-line" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured project teaser */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-muted font-medium mb-4">Selected Work</p>
                <h2 className="text-4xl lg:text-5xl font-black text-fg leading-tight mb-6">
                  Energy<br />
                  Platforms<br />
                  <span className="text-muted">at Scale</span>
                </h2>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase font-semibold text-design hover:text-fg transition-colors"
                >
                  See all work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <motion.div
                className="relative aspect-[16/9] overflow-hidden bg-surface"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/tee-image.png"
                  alt="Screenshot of TriEagle Energy Marketplace"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-design mb-1">Lead Frontend</p>
                  <p className="text-xl font-bold text-fg">TriEagle Energy Marketplace</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab teaser */}
      <section className="pb-32 px-6 lg:px-12">
        <motion.div
          className="max-w-7xl mx-auto bg-surface border border-line p-8 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">The Lab</p>
              <h2 className="text-3xl lg:text-5xl font-black text-fg leading-tight">
                Don't take my word for it. <span className="text-overlap">Play with the tokens.</span>
              </h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <Link
                to="/lab"
                className="group flex items-center justify-between border border-edge hover:border-overlap px-5 py-3 transition-all duration-300 hover:bg-overlap/5"
              >
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-fg group-hover:text-overlap transition-colors">Open the Lab</span>
                <ArrowRight className="h-4 w-4 text-muted group-hover:text-overlap group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Offset split — full-bleed left image, text bleeds right */}
      <section className="pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 items-stretch gap-0">

            {/* Image bleeds to left edge, taller than the text block */}
            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[3/2] lg:aspect-auto lg:h-full min-h-[320px] overflow-hidden bg-surface">
                <img
                  src="/soe-image.png"
                  alt="SaveOnEnergy.com screenshot"
                  className="w-full h-full object-cover opacity-75 hover:opacity-95 transition-opacity duration-500"
                />
              </div>
              {/* Overlap accent line */}
              <div className="absolute top-6 -right-4 h-16 w-px bg-design/40" aria-hidden="true" />
            </motion.div>

            {/* Text block — pushed right, with top offset to break alignment */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-center pl-0 lg:pl-12 pt-8 lg:pt-0 lg:mt-16"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">Scale</p>
              <h2 className="text-3xl lg:text-4xl font-black text-fg leading-tight mb-6">
                Millions of users.<br />
                <span className="text-muted">Built to last.</span>
              </h2>
              <p className="text-fg-soft text-sm leading-relaxed mb-8">
                At Red Ventures I shipped features across platforms that serve millions of energy shoppers — balancing design quality with production reliability at scale.
              </p>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase font-semibold text-fg hover:text-design transition-colors"
              >
                View projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
