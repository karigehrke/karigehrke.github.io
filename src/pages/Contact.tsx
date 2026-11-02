import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

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

            {/* Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-start py-16"
                >
                  <CheckCircle className="h-12 w-12 text-overlap mb-6" />
                  <h3 className="text-2xl font-bold text-fg mb-2">Message sent.</h3>
                  <p className="text-fg-soft">I'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="grid md:grid-cols-2 gap-0 border-t border-line">
                    <div className="border-b border-r border-line">
                      <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-muted px-4 pt-4 pb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-transparent px-4 pb-4 pt-1 text-fg placeholder-faint focus:bg-surface focus-visible:-outline-offset-2 transition-colors text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="border-b border-line">
                      <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-muted px-4 pt-4 pb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent px-4 pb-4 pt-1 text-fg placeholder-faint focus:bg-surface focus-visible:-outline-offset-2 transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="border-b border-line">
                    <label htmlFor="subject" className="block text-xs tracking-[0.15em] uppercase text-muted px-4 pt-4 pb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-transparent px-4 pb-4 pt-1 text-fg placeholder-faint focus:bg-surface focus-visible:-outline-offset-2 transition-colors text-sm"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div className="border-b border-line">
                    <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-muted px-4 pt-4 pb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent px-4 pb-4 pt-1 text-fg placeholder-faint focus:bg-surface focus-visible:-outline-offset-2 transition-colors resize-none text-sm"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-4 border border-edge hover:border-design px-6 py-4 transition-all duration-300 hover:bg-design/5 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border border-fg-soft border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                          <span className="text-xs tracking-[0.15em] uppercase font-semibold text-fg-soft">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-fg-soft group-hover:text-design transition-colors" />
                          <span className="text-xs tracking-[0.15em] uppercase font-semibold text-fg group-hover:text-design transition-colors">Send Message</span>
                          <ArrowRight className="h-4 w-4 text-muted group-hover:text-design group-hover:translate-x-1 transition-all" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
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
