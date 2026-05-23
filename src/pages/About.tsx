import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 pt-16">

      {/* Header */}
      <section className="px-6 lg:px-12 pt-20 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-8">
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                About
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-8xl font-black tracking-tighter text-stone-100 leading-[0.9] mb-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Design<br />
                <span className="text-stone-500">&</span><br />
                Code
              </motion.h1>
            </div>
            <motion.div
              className="lg:col-span-4 flex items-end pb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-stone-300 leading-relaxed">
                I came up through design. I crossed over into code. Now I work in the space between them — which is exactly where I want to be.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 lg:px-12 mt-16" aria-hidden="true">
        <div className="max-w-7xl mx-auto h-px bg-stone-800" />
      </div>

      {/* Overlapping image + stat block */}
      <section className="px-6 lg:px-12 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative grid lg:grid-cols-12 items-start gap-0">

            {/* Prose — left, sits at normal z */}
            <motion.div
              className="lg:col-span-5 relative z-10 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-stone-200 leading-relaxed mb-6">
                I'm a frontend developer with 6+ years of experience building scalable, user-friendly
                applications, following a prior career as a graphic designer.
              </p>
              <p className="text-stone-300 leading-relaxed mb-6">
                My journey began in graphic design at N2 Publishing, where I spent 6 years crafting
                layouts and advertisements for regional and national publications.
              </p>
              <p className="text-stone-300 leading-relaxed">
                Today I lead frontend development at Red Ventures for major energy marketplace platforms
                serving millions of users — and I'm focused on closing the gap between design and engineering entirely.
              </p>
            </motion.div>

            {/* Large image — cols 6–11, overlaps slightly left */}
            <motion.div
              className="lg:col-span-6 lg:col-start-7 relative z-20 lg:-ml-6 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-900">
                <img
                  src="/soe-image.png"
                  alt="SaveOnEnergy.com screenshot"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>
              {/* Stat block overlapping bottom-left of image */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-stone-950 border border-stone-700 p-6 z-30 w-40"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-4xl font-black text-stone-200 leading-none">12+</p>
                <p className="text-xs tracking-[0.15em] uppercase text-stone-400 mt-1">years of craft</p>
              </motion.div>
              {/* Thin accent line extending up from image */}
              <div className="absolute -top-8 right-8 h-8 w-px bg-amber-400/50" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main story — detailed prose + toolkit */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Decorative years — aria-hidden */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-8 sticky top-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                aria-hidden="true"
              >
                <div>
                  <p className="text-3xl font-black text-stone-700 leading-none">6+</p>
                  <p className="text-xs text-stone-600 tracking-[0.15em] uppercase mt-1">yrs design</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-stone-700 leading-none">6+</p>
                  <p className="text-xs text-stone-600 tracking-[0.15em] uppercase mt-1">yrs eng</p>
                </div>
              </motion.div>
            </div>

            {/* Filler bio column */}
            <div className="lg:col-span-4">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-stone-300 leading-relaxed">
                  I transitioned into engineering, working full-stack at HealthSpace Data Systems before moving
                  to Red Ventures.
                </p>
                <p className="text-stone-300 leading-relaxed">
                  Now I'm focused on becoming a design engineer — someone who can take a product from concept
                  to production, fluent in both the visual and the technical.
                </p>
              </motion.div>
            </div>

            {/* Toolkit list */}
            <div className="lg:col-span-4 lg:col-start-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Toolkit</p>
                <div className="space-y-0">
                  {[
                    ['React / Next.js', 'Engineering'],
                    ['TypeScript', 'Engineering'],
                    ['Tailwind CSS', 'Engineering'],
                    ['Figma', 'Design'],
                    ['Adobe Creative Suite', 'Design'],
                    ['Design Systems', 'Both'],
                    ['Motion / Framer', 'Both'],
                    ['GraphQL / Node.js', 'Engineering'],
                    ['Cypress / Testing', 'Engineering'],
                  ].map(([name, type]) => (
                    <div key={name} className="flex items-center justify-between border-b border-stone-800 py-3">
                      <span className="text-sm text-stone-200">{name}</span>
                      <span className={`text-xs font-mono tracking-wider ${
                        type === 'Design' ? 'text-amber-400' :
                        type === 'Both' ? 'text-stone-400' :
                        'text-blue-400'
                      }`}>{type}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 lg:px-12 py-24 border-t border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-3">
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-stone-400 sticky top-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Experience
              </motion.p>
            </div>

            <div className="lg:col-span-9 space-y-0">
              {[
                {
                  title: 'Frontend Developer',
                  company: 'Red Ventures',
                  period: '2021 — Present',
                  description: 'Lead frontend developer for shop.energyharbor.com and shop.trieagleenergy.com. Built a reusable Solar Lead widget deployed across major platforms. Partnered on the full rebuild of saveonenergy.com.',
                  tags: ['Next.js', 'TypeScript', 'React', 'Cypress'],
                  accent: 'text-blue-400',
                },
                {
                  title: 'Full-Stack Software Engineer',
                  company: 'HealthSpace Data Systems',
                  period: '2019 — 2021',
                  description: 'Built and maintained scalable code for health department web applications. Designed wireframes and mockups with a focus on modern UI/UX best practices.',
                  tags: ['Vue.js', 'JavaScript', 'CSS', 'SQL'],
                  accent: 'text-stone-300',
                },
                {
                  title: 'Graphic Designer',
                  company: 'N2 Publishing',
                  period: '2013 — 2019',
                  description: 'Designed layouts and advertisements for regional and national publications. Mentored designers, reviewed team output for quality and brand standards.',
                  tags: ['InDesign', 'Photoshop', 'Illustrator', 'Print'],
                  accent: 'text-amber-400',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="grid lg:grid-cols-12 gap-6 border-t border-stone-800 py-12 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="lg:col-span-2">
                    <p className="text-xs font-mono text-stone-400">{item.period}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="text-xl font-bold text-stone-200 mb-1">{item.title}</h3>
                    <p className={`text-sm font-medium mb-4 ${item.accent}`}>{item.company}</p>
                    <p className="text-stone-300 leading-relaxed text-sm">{item.description}</p>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs text-stone-400 border border-stone-700 px-2 py-1 font-mono w-fit">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-stone-800" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping two-col image split — personal work peek */}
      <section className="px-6 lg:px-12 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative grid lg:grid-cols-12 items-end gap-0">

            {/* Text sits in a narrow column, vertically centered */}
            <motion.div
              className="lg:col-span-3 relative z-30 pb-8 lg:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">Side Projects</p>
              <h2 className="text-2xl font-black text-stone-200 leading-tight mb-4">
                Building on<br />my own time.
              </h2>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                See all work
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Large image behind — cols 4–10 */}
            <motion.div
              className="lg:col-span-6 lg:col-start-4 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-900">
                <img
                  src="/crew-app-image.png"
                  alt="UltraCrew app screenshot"
                  className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>

            {/* Smaller image — cols 9–13, sits higher, overlaps big image */}
            <motion.div
              className="lg:col-span-4 lg:col-start-10 relative z-20 lg:-ml-10 lg:-mb-10 mt-4 lg:mt-0"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              {/* Shadow to lift it off the background image */}
              <div className="shadow-2xl shadow-stone-950">
                <div className="aspect-[4/3] overflow-hidden bg-stone-900 border border-stone-800">
                  <img
                    src="/plant-care-image.png"
                    alt="PlantCare app screenshot"
                    className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
              {/* Small label pinned bottom right */}
              <div className="absolute -bottom-5 right-0 bg-stone-950 border border-stone-800 px-3 py-1.5">
                <p className="text-xs tracking-[0.1em] uppercase text-amber-400 font-medium">PlantCare</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 lg:px-12 py-24 border-t border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-4xl lg:text-6xl font-black text-stone-200 leading-tight tracking-tighter">
                Let's build<br />
                <span className="text-stone-500">something</span><br />
                great.
              </h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <Link
                to="/contact"
                className="group flex items-center justify-between border border-stone-600 hover:border-amber-400 px-6 py-4 transition-all duration-300 hover:bg-amber-400/5"
              >
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">Get in touch</span>
                <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
