'use client';

import { motion } from 'framer-motion';
import { VideoCard } from '@/components/video-card';
import { Badge } from '@/components/ui/badge';
import { Mail, Share2, ArrowRight, Youtube } from 'lucide-react';
import Link from 'next/link';

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
};

export default function LeadGenPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="relative py-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 beam-bg" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/30 text-xs tracking-widest uppercase">Outreach</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1]">
              Outreach Systems That Fill Your Pipeline While You Sleep.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-[1.7] max-w-2xl mx-auto">
              270,000+ emails sent. 75%+ open rates. 3-5% positive reply rate. AI-personalized copy that reads like it was written by hand. Cold outreach that actually works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CARDS + LIVE STATS */}
      <section className="py-10 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { icon: Mail, title: 'Email Outreach', desc: '270k+ emails sent. AI-written icebreakers personalized to each prospect. Validated lists, deliverability-optimized, reply-rate focused.' },
              { icon: Share2, title: 'Social Media Outreach', desc: 'DM outreach across Instagram, LinkedIn, and Facebook. AI agents that hold real conversations and book calls from cold social traffic.' },
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
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-card rounded-xl p-6">
            <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-6 text-center">Live campaign stats</p>
            <div className="flex flex-wrap justify-center gap-10">
              {[{ value: '270k+', label: 'Emails sent' }, { value: '75%+', label: 'Open rate' }, { value: '3-5%', label: 'Positive reply rate' }].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-white mb-0.5">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO 1 — Email Outreach */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="lg:col-span-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Email</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Automated Email Outreach System</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">AI scrapes your target prospects, validates their emails, generates a personalized icebreaker for each one, and sends at scale — every single day without you touching it.</p>
              <ul className="space-y-2.5">
                {['Lead scraping + email validation built in', 'AI-personalized icebreakers per prospect', '270k+ emails sent to date', '75%+ open rates, 3-5% positive reply rate'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="lg:col-span-3">
              <div className="glass-card rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"><span className="text-2xl">🎬</span></div>
                  <p className="text-sm font-semibold text-white mb-1">Demo Coming Soon</p>
                  <p className="text-xs text-muted-foreground">Video in production</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO 2 — Social Outreach */}
      <section className="py-16 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="lg:col-span-3 order-2 lg:order-1">
              <div className="glass-card rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"><span className="text-2xl">🎬</span></div>
                  <p className="text-sm font-semibold text-white mb-1">Demo Coming Soon</p>
                  <p className="text-xs text-muted-foreground">Video in production</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="lg:col-span-2 order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Social</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Social Media Outreach System</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">AI agents reach out across Instagram, LinkedIn, and Facebook — holding real conversations in the DMs, qualifying prospects, and booking calls on autopilot.</p>
              <ul className="space-y-2.5">
                {['Runs outreach across multiple platforms simultaneously', 'AI-driven conversations that feel human', 'Qualifies leads before routing to you', 'Books calls directly into your calendar'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YT + BOOKING SIDE BY SIDE */}
      <section className="py-16 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[340px]">
              <div className="flex flex-col items-center text-center flex-grow justify-center">
              <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <Youtube className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">See the outreach systems in action.</h3>
              <p className="text-muted-foreground leading-[1.7] mb-6 text-sm">Full walkthroughs of the email system, AI copy generation, and the full pipeline on the channel.</p>
              <a href="https://www.youtube.com/@antoniowilson_yt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/20 transition-colors text-sm">
                <Youtube className="w-4 h-4" /> Watch on YouTube <ArrowRight className="w-4 h-4" />
              </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-1">Book a Strategy Call</h3>
              <p className="text-xs text-muted-foreground mb-4">Free. 30 minutes. We'll map out the outreach system that fits your offer and your market.</p>
              <div className="rounded-lg overflow-hidden">
                <iframe src="https://cal.com/otai-systems/30min-professional" style={{ width: '100%', height: '420px', border: 'none' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
