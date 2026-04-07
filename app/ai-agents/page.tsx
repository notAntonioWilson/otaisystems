'use client';

import { motion } from 'framer-motion';
import { VideoCard } from '@/components/video-card';
import { Badge } from '@/components/ui/badge';
import { DripButton } from '@/components/drip-button';
import { Phone, MessageSquare, Share2, ArrowRight, Youtube } from 'lucide-react';
import Link from 'next/link';

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
};

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="relative py-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 beam-bg" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/30 text-xs tracking-widest uppercase">AI Agents</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1]">
              AI Agents That Work Your Business 24/7.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-[1.7] max-w-2xl mx-auto mb-8">
              Voice agents that answer every call. Chat agents that convert visitors. Social agents that work your DMs. All custom built — no templates, no shortcuts.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link href="/#book"><DripButton>Book a Strategy Call</DripButton></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE BUILD — 3 cards */}
      <section className="py-14 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: 'Voice Agents', desc: 'Answers calls, qualifies leads, books appointments, and handles inbound 24/7. Transfers to a human the moment it matters.' },
              { icon: MessageSquare, title: 'Chat Agents', desc: 'Converts website visitors into booked calls. Handles support. Knows your business inside out and responds in under 3 seconds.' },
              { icon: Share2, title: 'Social Agents', desc: 'Works your DMs like a trained rep. Responds, qualifies, and books calls from Instagram, Facebook, and beyond — automatically.' },
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

      {/* VIDEO 1 — Dental */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Healthcare</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Dental Office AI Phone Agent</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">Every missed call is a missed booking. This agent answers every inbound call, handles scheduling, answers FAQs, and books appointments directly — without a receptionist.</p>
              <ul className="space-y-3 mb-6">
                {['Answers 100% of inbound calls instantly', 'Books appointments directly into your calendar', 'Handles FAQs, insurance questions, and reminders', 'Transfers to a human when escalation is needed'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
              <Link href="/#book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Get this built for your practice <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <VideoCard poster="" src="Nbmwqsaa6RU" alt="Dental Office AI Phone Agent" videoId="dental-agent" isYouTube={true} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO 2 — Law Firm */}
      <section className="py-16 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="order-2 lg:order-1">
              <VideoCard poster="" src="6uJpYj0B2SE" alt="Law Firm AI Phone Agent" videoId="lawfirm-agent" isYouTube={true} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Legal</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Law Firm AI Phone Agent</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">68% of potential clients choose the first firm that responds. This agent handles intake, qualifies cases, and books consultations — while staying within your compliance requirements.</p>
              <ul className="space-y-3 mb-6">
                {['Handles inbound intake 24/7', 'Qualifies cases before routing to attorneys', 'Books consultations into your calendar automatically', 'Compliant handoff to human when required'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
              <Link href="/#book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Get this built for your firm <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO 3 — Human Handoff (placeholder) */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Live Handoff</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">AI to Human Handoff — Live Demo</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">The moment a conversation needs a human, the agent transfers seamlessly — no drop, no confusion. The human picks up exactly where the AI left off with full context.</p>
              <ul className="space-y-3 mb-6">
                {['Detects escalation triggers in real time', 'Transfers call with full conversation context', 'Zero dead air — seamless for the caller', 'Works across voice, chat, and social channels'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
              <Link href="/#book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Build this into your system <ArrowRight className="w-4 h-4" />
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
      <section className="py-14 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
              <Youtube className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">More demos on YouTube.</h3>
            <p className="text-muted-foreground mb-6 leading-[1.7]">I drop new AI agent demos, builds, and breakdowns regularly. If you want to see more of what's possible before booking a call, the channel has everything.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to stop missing calls?</h2>
            <p className="text-muted-foreground mb-8 leading-[1.7]">Book a call. We'll map out exactly which agent fits your operation and what it would take to build it.</p>
            <Link href="/#book"><DripButton>Book a Strategy Call</DripButton></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
