'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" } }),
};

const fadeLeft: any = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight: any = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* HERO — standing photo */}
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 beam-bg" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} custom={0}>
                <Badge className="mb-5 bg-primary/10 text-primary border-primary/30 text-xs tracking-widest uppercase">
                  About
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.05]">
                Antonio Wilson.
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-xl text-primary font-semibold mb-6">
                Founder & CEO, OTAI Systems
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-[1.8] text-base max-w-lg">
                Building the biggest AI company in the world. 16 hours a day. Every day. Not a goal — a direction I don't deviate from.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:ml-auto">
                <Image
                  src="/images/antonio-standing.jpg"
                  alt="Antonio Wilson"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 px-6 border-y border-primary/10 bg-card/20">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { value: '3+', label: 'Years in Marketing' },
              { value: '1yr+', label: 'Building AI Systems' },
              { value: '6', label: 'Active Clients' },
              { value: '16hr', label: 'Days, Every Day' },
              { value: '270k+', label: 'Emails Sent' },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE WORK ETHIC */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">The Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-[1.15]">This isn't a side project.</h2>
            <div className="space-y-6 text-muted-foreground leading-[1.9] text-base">
              <p>
                I work 16-hour days. Not as a badge — as a standard. Gym in the morning, then I'm building until midnight. That's the schedule, that's the pace, that's the expectation I hold myself to.
              </p>
              <p>
                I started in marketing three years ago. I learned how businesses grow, what makes people buy, and what makes campaigns fail. Then AI showed up and changed everything — not just what's possible, but how fast you can get there. I went all in.
              </p>
              <p>
                Over the last year I've built AI systems professionally — voice agents, automation pipelines, outreach systems, client dashboards. I've worked with realtors, AI startups, contractors, and app companies. Every build is different. Every build is custom. I don't copy-paste and call it done.
              </p>
              <p className="text-white font-semibold text-lg">
                The philosophy that runs everything I do: the easiest way to make money is to make the other person money first.
              </p>
              <p>
                That's not a tagline. That's how I operate. I don't take on a client unless I believe I can move the needle for them. If I can't see a clear path to ROI for you, I'll tell you. If I can, I'll build it and make sure it works.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORKING PHOTO + VALUES */}
      <section className="py-20 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="relative order-2 lg:order-1">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-2">What you can expect.</h3>
                {[
                  { label: 'Ruthless', desc: 'I push until it works. Iterations, fixes, rebuilds — whatever it takes to get the outcome right.' },
                  { label: 'Honest', desc: "If something isn't going to work, I'll say it before we waste time on it. I'd rather lose a deal than deliver something mediocre." },
                  { label: 'Loyal', desc: "Once we're working together, you have my full attention. I protect my clients' interests like they're my own." },
                  { label: 'Direct', desc: "No fluff, no long emails to nowhere. Here's what we're building, here's why, here's when it ships." },
                ].map((v, i) => (
                  <motion.div key={v.label} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{v.label}</p>
                      <p className="text-sm text-muted-foreground leading-[1.7]">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto lg:ml-auto">
                <Image
                  src="/images/antonio-working.jpg"
                  alt="Antonio Wilson working"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 beam-bg opacity-50" />
        <div className="container mx-auto relative z-10 text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">If you want results, let's talk.</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8">No pitch deck. No pressure. A direct conversation about what you need and whether I can build it.</p>
            <Link href="/#book" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">
              Book a Strategy Call →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
