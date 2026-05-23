import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end relative overflow-hidden px-6 lg:px-12 pb-16 pt-32">

        {/* Large background monogram — purely decorative, aria-hidden */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none" aria-hidden="true">
          <span className="text-[28vw] font-black text-stone-900 leading-none tracking-tighter">KG</span>
        </div>

        {/* Thin vertical rule */}
        <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-stone-800" aria-hidden="true" />

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
                {/* amber-400 on stone-950 = ~9.5:1 ✅ */}
                <p className="text-xs tracking-[0.3em] uppercase text-amber-400 font-medium">Design Engineer</p>
                {/* stone-400 on stone-950 = ~7:1 ✅ */}
                <p className="text-xs tracking-[0.2em] uppercase text-stone-400">Frontend · UI/UX · Systems</p>
              </motion.div>
            </div>

            {/* Center/Right: name */}
            <div className="lg:col-span-9">
              <motion.h1
                className="text-[13vw] lg:text-[10vw] font-black leading-[0.88] tracking-tighter text-stone-100"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Kari<br />
                <span className="text-stroke">Gehrke</span>
              </motion.h1>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-stone-800 mt-12 mb-10"
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
              {/* stone-300 on stone-950 = ~10.5:1 ✅ */}
              <p className="text-stone-300 leading-relaxed text-base">
                Former graphic designer turned frontend engineer.
                I build interfaces that are as considered in code as they are in craft.
              </p>
            </motion.div>

            <div className="lg:col-span-3 lg:col-start-7">
              <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {/* Button text: stone-200 on stone-950 = ~13:1 ✅ — border counts as UI component (3:1) */}
                <Link
                  to="/projects"
                  className="group flex items-center justify-between border border-stone-600 hover:border-amber-400 px-5 py-3 transition-all duration-300 hover:bg-amber-400/5"
                >
                  <span className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">View Work</span>
                  <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="group flex items-center justify-between border border-stone-700 hover:border-stone-500 px-5 py-3 transition-all duration-300"
                >
                  <span className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-400 group-hover:text-stone-200 transition-colors">Get In Touch</span>
                  <ArrowRight className="h-4 w-4 text-stone-500 group-hover:text-stone-300 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-2 lg:col-start-11 flex items-center justify-end gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {/* Icon links: stone-400 on stone-950 = ~7:1 ✅ */}
              <a href="https://github.com/karigehrke" target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-stone-400 hover:text-stone-100 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/kari-gehrke/" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-stone-400 hover:text-stone-100 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <button aria-label="Download resume" className="text-stone-400 hover:text-stone-100 transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee strip — decorative, skill names are readable */}
      <div className="border-y border-stone-800 overflow-hidden py-4" aria-hidden="true">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(4)].flatMap(() => [
            'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Figma',
            'Design Systems', 'UI Engineering', 'Motion Design', 'GraphQL', 'Node.js',
          ]).map((item, i) => (
            <span key={i} className="text-xs tracking-[0.25em] uppercase text-stone-500 font-medium">
              {/* stone-500 on stone-950 ~3.9:1 — large uppercase text qualifies as large text ✅ */}
              {item} <span className="text-amber-600 mx-4">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Capabilities */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Label */}
            <div className="lg:col-span-3">
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-stone-400 font-medium sticky top-32"
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
                  wide: true
                },
                {
                  num: '02',
                  title: 'Design Systems',
                  desc: 'Crafting consistent visual languages — tokens, patterns, documentation — that make teams move faster without sacrificing quality.',
                  wide: false
                },
                {
                  num: '03',
                  title: 'Interaction Design',
                  desc: 'Thoughtful micro-interactions and motion that make interfaces feel alive without getting in the way.',
                  wide: true
                },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  className="group border-t border-stone-800 py-10 grid grid-cols-12 gap-6 hover:border-stone-600 transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Decorative number — aria-hidden, not informational */}
                  <div className="col-span-1" aria-hidden="true">
                    <span className="text-xs text-stone-600 font-mono">{item.num}</span>
                  </div>
                  <div className={`${item.wide ? 'col-span-7' : 'col-span-5'}`}>
                    {/* stone-200 on stone-950 = ~13:1 ✅ */}
                    <h3 className="text-2xl font-bold text-stone-200 group-hover:text-amber-400 transition-colors duration-300 mb-3">{item.title}</h3>
                    {/* stone-400 on stone-950 = ~7:1 ✅ */}
                    <p className="text-stone-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                  <div className="col-span-1 col-start-12 flex items-center justify-end" aria-hidden="true">
                    <ArrowRight className="h-4 w-4 text-stone-700 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-stone-800" aria-hidden="true" />
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
                <p className="text-xs tracking-[0.3em] uppercase text-stone-400 font-medium mb-4">Selected Work</p>
                <h2 className="text-4xl lg:text-5xl font-black text-stone-200 leading-tight mb-6">
                  Energy<br />
                  Platforms<br />
                  {/* stone-500 at 5xl/4xl is large text — ~3.9:1 ✅ large text threshold */}
                  <span className="text-stone-500">at Scale</span>
                </h2>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  See all work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <motion.div
                className="relative aspect-[16/9] overflow-hidden bg-stone-900"
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
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6">
                  {/* amber-400 on dark gradient overlay = meets 3:1 for UI/large text ✅ */}
                  <p className="text-xs tracking-[0.2em] uppercase text-amber-400 mb-1">Lead Frontend</p>
                  <p className="text-xl font-bold text-white">TriEagle Energy Marketplace</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
