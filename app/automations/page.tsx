'use client';

import { motion } from 'framer-motion';
import { VideoCard } from '@/components/video-card';
import { Badge } from '@/components/ui/badge';
import { DripButton } from '@/components/drip-button';
import { FileText, RefreshCw, Users, ArrowRight, Youtube } from 'lucide-react';
import Link from 'next/link';

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
};

export default function AutomationsPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="relative py-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 beam-bg" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/30 text-xs tracking-widest uppercase">Automations</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1]">
              Automation Systems That Remove You From the Equation.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-[1.7] max-w-2xl mx-auto mb-8">
              Document storage, lead reactivation, outreach pipelines. We build the systems that run while you sleep — fully custom, no plug-and-play shortcuts.
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
              { icon: FileText, title: 'Document Automation', desc: 'Every document processed, filed, and stored automatically. Zero manual handling, zero compliance errors.' },
              { icon: RefreshCw, title: 'Lead Reactivation', desc: 'Dormant leads in your CRM are money sitting on the table. We build systems that re-engage them at scale, automatically.' },
              { icon: Users, title: 'Workflow Systems', desc: 'End-to-end operational pipelines that eliminate repetitive manual tasks across your entire business.' },
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

      {/* VIDEO 1 — Document Storage */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Construction</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Builders & Contractors Document Storage</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">Contractors and builders drown in paperwork — permits, contracts, invoices, vendor docs. This automation handles intake, filing, and retrieval without a single human touch.</p>
              <ul className="space-y-3 mb-6">
                {['Auto-processes incoming documents from any source', 'Files and tags everything into organized storage', 'Retrieves any document on demand in seconds', 'Reduces admin overhead by up to 80%'].map(p => (
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
              <VideoCard poster="" src="xbJbe_r4G-Y" alt="Builders Document Storage Automation" videoId="doc-storage" isYouTube={true} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO 2 — Realtor Reactivation */}
      <section className="py-16 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="order-2 lg:order-1">
              <VideoCard poster="" src="Hi_90-Qh6Yo" alt="Realtor Lead Reactivation" videoId="realtor-reactivation" isYouTube={true} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }} className="order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Real Estate</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Realtor Lead Reactivation</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">Most realtors have hundreds of cold leads sitting in their CRM doing nothing. This system re-engages them automatically — personalized outreach at scale that feels human.</p>
              <ul className="space-y-3 mb-6">
                {['Pulls dormant leads from your CRM automatically', 'Sends personalized reactivation sequences', 'Qualifies responses and flags hot leads', 'Books calls directly into your calendar'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
              <Link href="/#book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Get this running on your leads <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO 3 — Staffing Reactivation */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Staffing & Recruiting</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-[1.2]">Staffing & Recruiting Reactivation</h2>
              <p className="text-muted-foreground leading-[1.8] mb-5">Staffing firms have massive candidate and client databases that go cold. This automation re-engages both sides — candidates who went dark and clients who haven't placed in months.</p>
              <ul className="space-y-3 mb-6">
                {['Reactivates cold candidates and inactive clients', 'Sends sequenced, personalized outreach automatically', 'Tracks replies and surfaces ready-to-place candidates', 'Runs 24/7 without a recruiter touching it'].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 font-bold">→</span>{p}
                  </li>
                ))}
              </ul>
              <Link href="/#book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Build this for your firm <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <VideoCard poster="" src="Hi_90-Qh6Yo" alt="Staffing Recruiting Reactivation" videoId="staffing-reactivation" isYouTube={true} />
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
            <h3 className="text-2xl font-bold text-white mb-3">More automation demos on YouTube.</h3>
            <p className="text-muted-foreground mb-6 leading-[1.7]">New builds, breakdowns, and walkthroughs posted regularly. See exactly how these systems work before we build yours.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to stop doing it manually?</h2>
            <p className="text-muted-foreground mb-8 leading-[1.7]">Book a call. We'll identify which automations would hit hardest for your business and map out what the build looks like.</p>
            <Link href="/#book"><DripButton>Book a Strategy Call</DripButton></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
