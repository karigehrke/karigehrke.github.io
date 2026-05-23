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
              {/* stone-400 on stone-950 = ~7:1 ✅ */}
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
                {/* stone-500 at 8xl is very large text (>18pt bold) — meets large text threshold ~3.9:1 ✅ */}
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
              {/* stone-300 on stone-950 = ~10.5:1 ✅ */}
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

      {/* Main story */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Narrow left col — decorative years */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-8 sticky top-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                aria-hidden="true"
              >
                {/* Decorative only — aria-hidden so screen readers skip these */}
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

            {/* Wide center col — prose */}
            <div className="lg:col-span-6">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* stone-200 on stone-950 = ~13:1 ✅ */}
                <p className="text-xl text-stone-200 leading-relaxed">
                  I'm a frontend developer with 6+ years of experience building scalable, user-friendly
                  applications, following a prior career as a graphic designer.
                </p>
                {/* stone-300 on stone-950 = ~10.5:1 ✅ */}
                <p className="text-stone-300 leading-relaxed">
                  My journey began in graphic design at N2 Publishing, where I spent 6 years crafting
                  layouts and advertisements for regional and national publications. That foundation gave me a
                  deep appreciation for visual hierarchy, brand consistency, and the patience to get details right.
                </p>
                <p className="text-stone-300 leading-relaxed">
                  I transitioned into engineering, working full-stack at HealthSpace Data Systems before moving
                  to Red Ventures, where I lead frontend development for major energy marketplace platforms
                  that serve millions of users.
                </p>
                <p className="text-stone-300 leading-relaxed">
                  Now I'm focused on becoming a design engineer — someone who can take a product from concept
                  to production, fluent in both the visual and the technical.
                </p>
              </motion.div>
            </div>

            {/* Right col — skills list */}
            <div className="lg:col-span-4">
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
                    <div key={name} className="flex items-center justify-between border-b border-stone-800 py-3 group">
                      {/* stone-200 on stone-950 = ~13:1 ✅ */}
                      <span className="text-sm text-stone-200">{name}</span>
                      {/* amber-400 / stone-400 on stone-950 — all ≥7:1 ✅ */}
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
                  {/* Period — stone-400 on stone-950 = ~7:1 ✅ */}
                  <div className="lg:col-span-2">
                    <p className="text-xs font-mono text-stone-400">{item.period}</p>
                  </div>

                  <div className="lg:col-span-7">
                    {/* stone-200 on stone-950 = ~13:1 ✅ */}
                    <h3 className="text-xl font-bold text-stone-200 mb-1">{item.title}</h3>
                    {/* blue-400/stone-300/amber-400 all ≥7:1 ✅ */}
                    <p className={`text-sm font-medium mb-4 ${item.accent}`}>{item.company}</p>
                    {/* stone-300 on stone-950 = ~10.5:1 ✅ */}
                    <p className="text-stone-300 leading-relaxed text-sm">{item.description}</p>
                  </div>

                  {/* Tags — stone-400 on stone-950 with stone-800 border ✅ */}
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

      {/* Bottom CTA */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-4xl lg:text-6xl font-black text-stone-200 leading-tight tracking-tighter">
                Let's build<br />
                {/* stone-500 at 6xl/4xl is very large — meets large text threshold ✅ */}
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
