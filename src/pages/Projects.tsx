import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Art = 'overprint' | 'diff' | 'stack';

type WorkItem = {
  title: string;
  role: string;
  note: string;
  year: string;
  image?: string;
  art?: Art;
  liveUrl?: string;
};

const featured = {
  title: 'TXU Energy',
  role: 'Lead Engineer',
  year: 'Current',
  liveUrl: 'https://shop.txu.com/?monarchPreview=exp:24',
  image: '/txu-monarch.jpg',
  technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  sections: [
    {
      label: 'The work',
      body: 'Led the build of the homepage-to-offers experience: a ZIP-first hero, popular plans for that area, and plan types matched to how a home actually uses energy.',
    },
    {
      label: 'How I built it',
      body: 'Made the categories repeated across its pages global and dynamic, so they can be updated without engineering help. Maintain the Tailwind design tokens that map Figma to production.',
    },
    {
      label: 'Where it stands',
      body: 'Now the lead experience, with its wins rolling into other tests.',
    },
  ],
};

const clientWork: WorkItem[] = [
  {
    title: 'Energy Harbor',
    role: 'Lead Frontend',
    note: 'Carbon-free plan comparison across two regions',
    year: '2021–Pres.',
    image: '/eh-image.png',
    liveUrl: 'https://shop.energyharbor.com/',
  },
  {
    title: 'TriEagle Energy',
    role: 'Lead Frontend',
    note: 'Scalable architecture backed by a full Cypress suite',
    year: '2021–Pres.',
    image: '/tee-image.png',
    liveUrl: 'https://shop.trieagleenergy.com/',
  },
  {
    title: 'SaveOnEnergy.com',
    role: 'Frontend Engineer',
    note: 'Full site rebuild serving millions of users',
    year: '2022',
    image: '/soe-image.png',
    liveUrl: 'https://www.saveonenergy.com/',
  },
  {
    title: 'Solar Estimator Widget',
    role: 'Engineer',
    note: 'One themeable widget shipped across Bankrate, CNET, and SaveOnEnergy',
    year: '2022',
    image: '/solar-lead-form.png',
    liveUrl: 'https://www.saveonenergy.com/solar-energy/solar-estimator/',
  },
  {
    title: 'AI Visual QA Tool',
    role: 'Architect + Engineer',
    note: 'Automated design-to-code checks against Figma',
    year: '2021–Pres.',
    art: 'diff',
  },
];

const personalWork: WorkItem[] = [
  {
    title: 'UltraCrew',
    role: 'Designer + Engineer',
    note: 'Ultramarathon crew logistics',
    year: 'WIP',
    image: '/crew-app-image.png',
  },
  {
    title: 'PlantCare',
    role: 'Designer + Engineer',
    note: 'Watering schedules and care reminders',
    year: 'WIP',
    image: '/plant-care-image.png',
  },
  {
    title: 'Blueprint',
    role: 'Designer + Engineer',
    note: 'My own design system',
    year: 'Soon',
    art: 'overprint',
  },
];

const blueprintGrid = {
  backgroundImage:
    'linear-gradient(rgb(var(--line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line)) 1px, transparent 1px)',
  backgroundSize: '24px 24px',
};

const ProjectArt = ({ art }: { art?: Art }) => (
  <div className="w-full h-full flex items-center justify-center isolate bg-surface" style={blueprintGrid} aria-hidden="true">
    {art === 'overprint' && (
      <>
        <span className="h-20 w-20 rounded-full bg-design transition-transform duration-500 group-hover:translate-x-3" />
        <span className="-ml-8 h-20 w-20 rounded-full bg-code mix-blend-screen transition-transform duration-500 group-hover:-translate-x-3" />
      </>
    )}
    {art === 'diff' && (
      <>
        <span className="h-16 w-24 rounded-md bg-design" />
        <span className="-ml-16 mt-6 h-16 w-24 rounded-md bg-code mix-blend-screen" />
      </>
    )}
    {art === 'stack' && (
      <>
        <span className="h-12 w-12 bg-design" />
        <span className="-ml-4 h-12 w-12 rounded-xl bg-code mix-blend-screen" />
        <span className="-ml-4 h-12 w-12 rounded-full bg-overlap mix-blend-screen" />
      </>
    )}
  </div>
);

const Thumb = ({ item, className = '' }: { item: WorkItem; className?: string }) => (
  <div className={`overflow-hidden bg-surface ${className}`}>
    {item.image ? (
      <img src={item.image} alt="" className="w-full h-full object-cover object-top" />
    ) : (
      <ProjectArt art={item.art} />
    )}
  </div>
);

const SectionLabel = ({ index, children }: { index: string; children: ReactNode }) => (
  <p className="flex items-baseline gap-4 text-xs tracking-[0.3em] uppercase text-muted mb-8">
    <span className="font-mono text-design tracking-normal">{index}</span>
    {children}
  </p>
);

/* Featured case study — the full page lives in a browser frame and scrolls through on hover/focus */
const Featured = () => (
  <section className="px-6 lg:px-12 pb-28">
    <div className="max-w-7xl mx-auto">
      <SectionLabel index="01">Featured</SectionLabel>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={featured.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-edge bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-design"
            aria-label={`Visit ${featured.title} live site`}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-edge" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-design" />
              <span className="-ml-1.5 h-2.5 w-2.5 rounded-full bg-code mix-blend-screen" />
              <span className="ml-3 text-xs font-mono text-muted truncate">shop.txu.com</span>
            </div>
            <div
              role="img"
              aria-label="Full-page screenshot of the TXU Energy shop homepage"
              className="aspect-[16/11] bg-no-repeat bg-[length:100%_auto] bg-top transition-[background-position] duration-[9000ms] ease-linear motion-reduce:transition-none group-hover:bg-bottom group-focus-visible:bg-bottom"
              style={{ backgroundImage: `url(${featured.image})` }}
            />
          </a>
          <p className="mt-3 text-xs text-muted">
            Hover to scroll the page ·{' '}
            <a href={featured.image} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-fg">
              View full capture
            </a>
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs tracking-[0.15em] uppercase text-code font-semibold mb-3">
            {featured.role} · {featured.year}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-fg leading-none mb-8">{featured.title}</h2>
          <dl>
            {featured.sections.map((s) => (
              <div key={s.label} className="border-t border-line py-5">
                <dt className="text-xs tracking-[0.15em] uppercase text-muted mb-2">{s.label}</dt>
                <dd className="text-fg-soft leading-relaxed">{s.body}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-line pt-5 flex flex-wrap items-center justify-between gap-4">
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {featured.technologies.map((tech) => (
                <li key={tech} className="text-xs text-muted border border-edge px-2 py-1 font-mono">
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={featured.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-semibold text-design hover:text-fg transition-colors"
            >
              View live
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* Client work as an index — rows on the left, one fixed preview on the right that swaps to the row in focus */
const ClientIndex = () => {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const current = clientWork[active];

  return (
    <section className="px-6 lg:px-12 pb-28">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="02">Client work</SectionLabel>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <ol
            className="lg:col-span-8 border-b border-line"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {clientWork.map((item, i) => {
              const Row = item.liveUrl ? 'a' : 'div';
              const dimmed = hovering && active !== i;
              return (
                <li key={item.title} className="border-t border-line">
                  <Row
                    {...(item.liveUrl ? { href: item.liveUrl, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={`group grid grid-cols-[2rem_minmax(0,1fr)_auto] sm:grid-cols-[3rem_minmax(0,1fr)_auto] lg:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.1fr)_6.5rem_1.5rem] items-center gap-x-4 gap-y-1 py-5 transition-opacity duration-300 ${
                      dimmed ? 'lg:opacity-40' : ''
                    }`}
                  >
                    <span className={`font-mono text-xs transition-colors ${active === i ? 'lg:text-design' : ''} text-muted`}>
                      {String(i + 2).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-fg">{item.title}</span>
                      <span className="hidden lg:block mt-1 text-xs tracking-[0.1em] uppercase text-code font-semibold">{item.role}</span>
                    </span>
                    <Thumb item={item} className="lg:hidden row-span-2 w-20 aspect-[4/3]" />
                    <span className="col-start-2 lg:col-start-auto text-sm text-fg-soft">{item.note}</span>
                    <span className="hidden lg:block whitespace-nowrap text-xs font-mono text-muted text-right">{item.year}</span>
                    <span className="hidden lg:flex justify-end">
                      {item.liveUrl && (
                        <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-design transition-colors" aria-label="Opens live site" />
                      )}
                    </span>
                  </Row>
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:block lg:col-span-4 sticky top-28" aria-hidden="true">
            <div className="relative aspect-[4/3] border border-edge">
              {clientWork.map((item, i) => (
                <Thumb
                  key={item.title}
                  item={item}
                  className={`absolute inset-0 transition-opacity duration-500 ${active === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <p className="font-bold text-fg">{current.title}</p>
              <p className="font-mono text-xs text-muted">{String(active + 2).padStart(2, '0')} / {String(clientWork.length + 1).padStart(2, '0')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Personal = () => (
  <section className="px-6 lg:px-12 pb-32">
    <div className="max-w-7xl mx-auto">
      <SectionLabel index="03">Personal</SectionLabel>
      <div className="grid sm:grid-cols-3 gap-6">
        {personalWork.map((item, i) => (
          <motion.article
            key={item.title}
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="relative">
              <Thumb item={item} className="aspect-[4/3] [&_img]:opacity-75 [&_img]:transition-opacity [&_img]:duration-500 group-hover:[&_img]:opacity-100" />
              <span className="absolute top-3 left-3 px-2 py-1 bg-design text-ink text-xs font-bold tracking-[0.1em] uppercase">
                {item.year}
              </span>
            </div>
            <h3 className="mt-4 font-bold text-fg">{item.title}</h3>
            <p className="text-sm text-muted">{item.note}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <div className="min-h-screen bg-ink text-fg pt-16">
    {/* Header */}
    <section className="px-6 lg:px-12 pt-20 pb-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-end">
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
        <motion.p
          className="lg:col-span-5 text-fg-soft leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Energy storefronts, shared systems, and a few things I built for myself, each with an equal eye on design and engineering.
        </motion.p>
      </div>
    </section>

    <Featured />
    <ClientIndex />
    <Personal />

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

export default Projects;
