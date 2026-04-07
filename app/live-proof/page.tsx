'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CalWidget } from '@/components/cal-widget';
import { ArrowRight, Zap, Eye, Play } from 'lucide-react';
import Link from 'next/link';

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
};

export default function LiveProofPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="relative py-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 beam-bg" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/30 text-xs tracking-widest uppercase">Live Proof</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1]">
              Don't take our word for it.<br />
              <span className="gradient-text">See it live.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-[1.7] max-w-2xl mx-auto">
              Book a call. Tell us exactly what you're looking for. We'll show you a working system — and if the fit is right, we'll build a v1 version so you can see the actual power before committing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3 CARDS */}
      <section className="py-10 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: 'See a Live Demo', desc: 'We pull up a working system built for your industry. You watch it operate in real time — not a mockup, not a screenshot.' },
              { icon: Play, title: 'We Build a V1 for You', desc: "Tell us specifically what you need. If the scope makes sense, we build a first version so you can feel the actual output before any commitment." },
              { icon: Zap, title: 'Move Fast', desc: "No long sales processes. Book the call, show us the problem, and we'll tell you exactly what we'd build and how fast we can deploy it." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="glass-card rounded-xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-[1.2]">
                Book the call. Fill in the form. Walk away knowing exactly what's possible.
              </h2>
              <p className="text-muted-foreground leading-[1.8] mb-6">
                When you book, fill in the details of what you're looking for — the industry, the problem, the system you want. The more specific you are, the more targeted the demo and the faster we can build your v1.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'What industry are you in?',
                  'What specific problem do you need solved?',
                  'Have you tried any AI solutions before?',
                  'What does success look like for you?',
                ].map((q, i) => (
                  <div key={q} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-sm text-muted-foreground">{q}</p>
                  </div>
                ))}
              </div>

              {/* Stats box */}
              <div className="rounded-xl border border-primary/40 bg-primary/5 p-6 mb-6" style={{ boxShadow: '0 0 24px rgba(139,92,246,0.12)' }}>
                <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-5">What we've built</p>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { value: '100+', label: 'Automations created' },
                    { value: '50+', label: 'AI agents created' },
                    { value: '20+', label: 'Businesses worked with' },
                    { value: '270k+', label: 'Emails sent' },
                    { value: '3yr+', label: 'Years in marketing' },
                    { value: '1yr+', label: 'Years building AI' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-white/60 leading-[1.7]">
                We review every booking before the call. If what you describe is something we can build a v1 for, we'll come prepared with something live to show you.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <div className="bg-card border border-primary/30 rounded-2xl p-5 glow-accent-sm">
                <p className="text-sm font-semibold text-white mb-1">Book Your Live Demo</p>
                <p className="text-xs text-muted-foreground mb-4">Free. Tell us what you need and we'll show you exactly what we'd build.</p>
                <CalWidget height="580px" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOTTOM STRIP */}
      <section className="py-12 px-6 lg:px-8 bg-card/20 border-t border-primary/10">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-4">
              Want to see the demos before booking? Every system we've built has a walkthrough video on the site.
            </p>
            <Link href="/#demos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Watch the demos <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
