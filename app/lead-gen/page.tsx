'use client';

import { motion } from 'framer-motion';
import { VideoCard } from '@/components/video-card';
import { Badge } from '@/components/ui/badge';
import { DripButton } from '@/components/drip-button';
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
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-[1.7] max-w-2xl mx-auto mb-8">
              We run 1,200+ emails per day across 6 niches. 65%+ open rates. AI-personalized copy that reads like it was written by hand. Cold outreach that actually works.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link href="/#book"><DripButton>Book a Strategy Call</DripButton></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE BUILD — 2 cards */}
      <section className="py-14 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Mail, title: 'Email Outreach', desc: '1,200+ sends per day. AI-written icebreakers personalized to each prospect. Validated lists, deliverability-optimized, reply-rate focused.' },
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
        </div>
      </section>

      {/* LIVE STATS */}
      <section className="py-12 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-card rounded-2xl p-8">
            <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-6">Live campaign stats</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '1,200+', label: 'Emails per day' },
                { value: '65%+', label: 'Open rate' },
                { value: '6', label: 'Active niches' },
                { value: '1-3%', label: 'Reply rate' },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO 1 — Email Outreach */}
      <section className="py-16 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Email</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Automated Email Outreach System</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">AI scrapes your target prospects, validates their emails, generates a personalized icebreaker for each one, and sends at scale — every single day without you touching it.</p>
              <ul className="space-y-3 mb-6">
                {['Lead scraping + email validation built in', 'AI-personalized icebreakers per prospect', '1,200+ sends per day across multiple domains', '65%+ open rates on live campaigns'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
              <Link href="/#book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Build this for your business <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <div className="glass-card rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">Demo Coming Soon</p>
                  <p className="text-xs text-muted-foreground">Video in production</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO 2 — Social Outreach */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="order-2 lg:order-1">
              <div className="glass-card rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">Demo Coming Soon</p>
                  <p className="text-xs text-muted-foreground">Video in production</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Social</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Social Media Outreach System</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">AI agents that reach out across Instagram, LinkedIn, and Facebook — holding real conversations in the DMs, qualifying prospects, and booking calls on autopilot.</p>
              <ul className="space-y-3 mb-6">
                {['Runs outreach across multiple platforms simultaneously', 'AI-driven conversations that feel human', 'Qualifies leads before routing to you', 'Books calls directly into your calendar'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
              <Link href="/#book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Build this for your brand <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO 3 — Placeholder */}
      <section className="py-16 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Full Stack</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Combined Outreach Infrastructure</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">Email + social running simultaneously. One unified system that hits prospects across every channel — multiplying touchpoints without multiplying your workload.</p>
              <ul className="space-y-3 mb-6">
                {['Email and social outreach in one connected system', 'Unified reply management across all channels', 'Prospect data synced across every touchpoint', 'Full visibility into pipeline and performance'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
              <Link href="/#book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Build the full stack <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <div className="glass-card rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">Demo Coming Soon</p>
                  <p className="text-xs text-muted-foreground">Video in production</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YT CTA */}
      <section className="py-14 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
              <Youtube className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">See the outreach systems in action.</h3>
            <p className="text-muted-foreground mb-6 leading-[1.7]">Full walkthroughs of the email system, the AI copy generation, and the full pipeline — all on the channel.</p>
            <a href="https://www.youtube.com/@antoniowilson_yt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/20 transition-colors text-sm">
              <Youtube className="w-4 h-4" /> Watch on YouTube <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 beam-bg opacity-50" />
        <div className="container mx-auto max-w-2xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to fill your pipeline?</h2>
            <p className="text-muted-foreground mb-8 leading-[1.7]">Book a call. We'll map out the outreach system that fits your offer and your market — and tell you exactly what results to expect.</p>
            <Link href="/#book"><DripButton>Book a Strategy Call</DripButton></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
