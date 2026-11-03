import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
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
                Contact
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-7xl font-black tracking-tighter text-fg leading-none"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Let's<br />Connect
              </motion.h1>
            </div>
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-fg-soft leading-relaxed">
                Open to new opportunities, collaborations, and interesting conversations. I typically respond within 24 hours.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-overlap rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-xs text-overlap tracking-[0.1em] uppercase font-medium">Available for work</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 lg:px-12" aria-hidden="true">
        <div className="max-w-7xl mx-auto h-px bg-line" />
      </div>

      {/* Main content */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Email */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6">Say hello</p>
              <a
                href="mailto:kari.gehrke23@gmail.com"
                className="group block border-t border-b border-line py-10"
              >
                <span className="block text-3xl sm:text-4xl xl:text-5xl font-black tracking-tighter text-fg group-hover:text-design transition-colors">
                  kari.gehrke23<wbr />@gmail.com
                </span>
                <span className="mt-6 inline-flex items-center gap-4 border border-edge group-hover:border-design px-6 py-4 transition-all duration-300 group-hover:bg-design/5">
                  <Mail className="h-4 w-4 text-fg-soft group-hover:text-design transition-colors" aria-hidden="true" />
                  <span className="text-xs tracking-[0.15em] uppercase font-semibold text-fg group-hover:text-design transition-colors">Email me</span>
                  <ArrowRight className="h-4 w-4 text-muted group-hover:text-design group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </span>
              </a>
              <p className="mt-6 text-sm text-fg-soft leading-relaxed max-w-md">
                Tell me a little about the project or role, and I'll get back to you.
              </p>
            </motion.div>

            {/* Right sidebar */}
            <motion.div
              className="lg:col-span-4 lg:col-start-9 space-y-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Direct contact */}
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6">Direct</p>
                <div className="space-y-4">
                  <a
                    href="mailto:kari.gehrke23@gmail.com"
                    className="group flex items-center gap-3 text-fg-soft hover:text-fg transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0 group-hover:text-design transition-colors" />
                    <span className="text-sm">kari.gehrke23@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="text-sm">Charlotte, NC</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6">Online</p>
                <div className="space-y-4">
                  {[
                    { icon: Github, href: 'https://github.com/karigehrke', label: 'GitHub', handle: 'karigehrke' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/kari-gehrke/', label: 'LinkedIn', handle: 'kari-gehrke' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 transition-colors"
                    >
                      <s.icon className="h-4 w-4 shrink-0 text-muted group-hover:text-design transition-colors" />
                      <div>
                        <p className="text-xs tracking-[0.1em] uppercase text-muted group-hover:text-fg-soft transition-colors">{s.label}</p>
                        <p className="text-sm text-fg group-hover:text-fg transition-colors">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response note */}
              <div className="border-t border-line pt-8">
                <p className="text-xs text-muted leading-relaxed">
                  I respond to all serious inquiries within 24 hours and am open to both freelance work and full-time opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
