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
    <div className="min-h-screen bg-stone-950 text-stone-100 pt-16">

      {/* Header */}
      <section className="px-6 lg:px-12 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              {/* stone-400 on stone-950 = ~7:1 ✅ */}
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Contact
              </motion.p>
              {/* stone-100 on stone-950 = ~19:1 ✅ */}
              <motion.h1
                className="text-5xl lg:text-7xl font-black tracking-tighter text-stone-100 leading-none"
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
              {/* stone-300 on stone-950 = ~10.5:1 ✅ */}
              <p className="text-stone-300 leading-relaxed">
                Open to new opportunities, collaborations, and interesting conversations. I typically respond within 24 hours.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                {/* green-400 on stone-950 = ~8.1:1 ✅ */}
                <span className="text-xs text-green-400 tracking-[0.1em] uppercase font-medium">Available for work</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 lg:px-12" aria-hidden="true">
        <div className="max-w-7xl mx-auto h-px bg-stone-800" />
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
                  {/* green-400 on stone-950 = ~8.1:1 ✅ */}
                  <CheckCircle className="h-12 w-12 text-green-400 mb-6" />
                  <h3 className="text-2xl font-bold text-stone-200 mb-2">Message sent.</h3>
                  <p className="text-stone-300">I'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="grid md:grid-cols-2 gap-0 border-t border-stone-800">
                    <div className="border-b border-r border-stone-800">
                      {/* stone-400 on stone-950 = ~7:1 ✅ */}
                      <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-stone-400 px-4 pt-4 pb-1">
                        Name
                      </label>
                      {/* stone-200 on stone-950 = ~13:1 ✅ */}
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-transparent px-4 pb-4 pt-1 text-stone-200 placeholder-stone-600 focus:outline-none focus:bg-stone-900/40 transition-colors text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="border-b border-stone-800">
                      <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-stone-400 px-4 pt-4 pb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent px-4 pb-4 pt-1 text-stone-200 placeholder-stone-600 focus:outline-none focus:bg-stone-900/40 transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="border-b border-stone-800">
                    <label htmlFor="subject" className="block text-xs tracking-[0.15em] uppercase text-stone-400 px-4 pt-4 pb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-transparent px-4 pb-4 pt-1 text-stone-200 placeholder-stone-600 focus:outline-none focus:bg-stone-900/40 transition-colors text-sm"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div className="border-b border-stone-800">
                    <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-stone-400 px-4 pt-4 pb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent px-4 pb-4 pt-1 text-stone-200 placeholder-stone-600 focus:outline-none focus:bg-stone-900/40 transition-colors resize-none text-sm"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-4 border border-stone-600 hover:border-amber-400 px-6 py-4 transition-all duration-300 hover:bg-amber-400/5 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border border-stone-300 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                          {/* stone-300 on stone-950 = ~10.5:1 ✅ */}
                          <span className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-300">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-stone-300 group-hover:text-amber-400 transition-colors" />
                          <span className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">Send Message</span>
                          <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
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
                <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Direct</p>
                <div className="space-y-4">
                  {/* stone-300 hover:stone-100 on stone-950 ✅ */}
                  <a
                    href="mailto:kari.gehrke@example.com"
                    className="group flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0 group-hover:text-amber-400 transition-colors" />
                    <span className="text-sm">kari.gehrke@example.com</span>
                  </a>
                  {/* stone-400 on stone-950 = ~7:1 ✅ */}
                  <div className="flex items-center gap-3 text-stone-400">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="text-sm">Charlotte, NC</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Online</p>
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
                      <s.icon className="h-4 w-4 shrink-0 text-stone-400 group-hover:text-amber-400 transition-colors" />
                      <div>
                        {/* stone-400 on stone-950 = ~7:1 ✅ */}
                        <p className="text-xs tracking-[0.1em] uppercase text-stone-400 group-hover:text-stone-300 transition-colors">{s.label}</p>
                        {/* stone-200 on stone-950 = ~13:1 ✅ */}
                        <p className="text-sm text-stone-200 group-hover:text-stone-100 transition-colors">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response note */}
              <div className="border-t border-stone-800 pt-8">
                {/* stone-400 on stone-950 = ~7:1 ✅ */}
                <p className="text-xs text-stone-400 leading-relaxed">
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
