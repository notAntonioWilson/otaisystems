'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { VideoCard } from '@/components/video-card';
import { GlowButton } from '@/components/glow-button';
import { DripButton } from '@/components/drip-button';
import { PricingCard } from '@/components/pricing-card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RadarSweep } from '@/components/radar-sweep';
import { CodeEditorAnimation } from '@/components/code-editor-animation';
import { EnergyTransfer } from '@/components/energy-transfer';
import { GrowthChart } from '@/components/growth-chart';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) setTimeout(() => scrollToSection(hash), 100);
  }, []);

  const processSteps = [
    { title: 'Workflow Analysis', description: 'We consult your systems, uncover inefficiencies, and pinpoint high-ROI opportunities for AI automation.', animationType: 'radar' },
    { title: 'Create AI System', description: 'We architect and train your custom AI solutions to optimize your workflows and drive measurable growth.', animationType: 'code' },
    { title: 'Deploy Power', description: 'We embed the automation into your company, integrate or fully replace your systems, forcing advancement within your organization.', animationType: 'energy' },
    { title: 'Evolve Relentlessly', description: 'We monitor, refine, and evolve your automations, analyzing performance data to ensure long-term efficiency and compound growth.', animationType: 'growth' },
  ];

  const getAnim = (type: string) => {
    switch (type) {
      case 'radar': return <RadarSweep />;
      case 'code': return <CodeEditorAnimation />;
      case 'energy': return <EnergyTransfer />;
      case 'growth': return <GrowthChart />;
      default: return null;
    }
  };

  const clients = [
    { name: 'Coldwell Banker', label: 'Real Estate' },
    { name: 'The Agency RE', label: 'Luxury Real Estate' },
    { name: 'Next Level Carpentry', img: '/images/nextlevel-logo.png', label: 'Contractors' },
    { name: 'Macro Mate', img: '/images/macromate-logo.jpg', label: 'App Company' },
    { name: 'AI Startups', label: 'Artificial Intelligence' },
  ];

  const demoAgents = [
    { title: 'Dental Office AI Phone Agent', id: 'Nbmwqsaa6RU', niche: 'Healthcare' },
    { title: 'Law Firm AI Phone Agent', id: '6uJpYj0B2SE', niche: 'Legal' },
  ];

  const demoAutomations = [
    { title: 'Builders & Contractors Doc Storage', id: 'xbJbe_r4G-Y', niche: 'Construction' },
    { title: 'Realtor Lead Reactivation', id: 'Hi_90-Qh6Yo', niche: 'Real Estate' },
    { title: 'Staffing & Recruiting Reactivation', id: 'Hi_90-Qh6Yob', niche: 'Staffing' },
    { title: 'Mortgage Broker Reactivation', id: 'qzKZKjkCv-A', niche: 'Finance' },
  ];

  const results = [
    { client: 'Jennifer Zardus', role: 'Licensed Realtor', result: 'Full website, SEO infrastructure, and organic social system built and running. Lead reactivation automation in progress.', tag: 'Real Estate' },
    { client: 'Tony Berdych', role: 'Licensed Realtor', result: 'Website, SEO, and organic social system live. Lead reactivation campaign being deployed.', tag: 'Real Estate' },
    { client: 'Joshua Fairchild', role: 'Service Business', result: 'Custom website, SEO, AI chatbot, organic social, and full documentation automation system — all live.', tag: 'Automation' },
    { client: 'Darrick Gibson', role: 'AI Startup Founder', result: 'Meta ad system with AI-generated creative and a full website + landing page built for conversion.', tag: 'AI Startup' },
    { client: 'Mohammad Khan', role: 'AI Startup Founder', result: 'Automated email outreach system generating 1,200+ sends per day across targeted lead lists.', tag: 'Lead Gen' },
    { client: 'Macro Mate', role: 'App Company', result: 'Full organic social system and newsletter automation live. Consistent weekly content with zero manual effort.', tag: 'Marketing' },
  ];

  const faqs = [
    { question: 'Can you help my specific company?', answer: 'Absolutely. We help companies of all sizes integrate AI and automation across every channel, from phone and chat to social media and internal systems. Our team specializes in building intelligent workflows that save time, boost efficiency, and elevate your customer experience.' },
    { question: 'What industries can benefit the most from AI automation?', answer: "AI and automation can transform any industry, but the right approach depends on your business model. For B2B companies, AI works best on the front end by handling leads, outreach, and communication. For B2C businesses, automation shines on the back end by streamlining support, order management, and marketing." },
    { question: 'Is the system difficult to integrate?', answer: "Not at all. We handle the entire integration process, whether you're implementing a completely new AI system or connecting automation to your existing tools. Everything follows a transparent, step-by-step flow to ensure a smooth and stress-free setup." },
    { question: 'Do I need any technical experience to use your AI solutions?', answer: 'No technical experience required. We take care of all the heavy lifting including setup, connections, and configurations. If your input is ever needed, our team walks you through it step-by-step.' },
    { question: 'Do you provide ongoing support and maintenance after setup?', answer: "Yes, absolutely. We provide full ongoing support and continuous improvements. As AI evolves, your system evolves with it. We also enhance your automations over time to keep your business aligned with growth and new technology." },
    { question: 'Can I cancel or change my subscription at any time?', answer: "Yes. You're free to cancel at any time, and you'll still keep ownership of the system we've built for you. Our goal is to build lasting partnerships, not lock-in contracts." },
  ];

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative pt-28 pb-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 beam-bg" />
        <div className="absolute inset-0 particle-bg opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} custom={0}>
                <Badge className="mb-5 bg-primary/10 text-primary border-primary/30 text-xs tracking-widest uppercase">
                  AI Automation · AI Agents · Growth Systems
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="font-bold mb-5 leading-[1.1] text-3xl md:text-4xl lg:text-5xl">
                <span className="text-white">The Infrastructure</span><br />
                <span className="gradient-text">Behind Business Growth.</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-8 leading-[1.7] max-w-xl">
                We cut costs, make money, and provide speed to success. Custom AI systems — agents, automations, and growth infrastructure — built to perform from day one.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
                <DripButton onClick={() => scrollToSection('demos')}>See It Working</DripButton>
                <button onClick={() => scrollToSection('book')} className="px-6 py-3 rounded-lg border border-primary/30 text-sm font-semibold text-white hover:border-primary/60 hover:bg-primary/5 transition-all duration-300">
                  Book a Strategy Call →
                </button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="scale-95">
              <VideoCard poster="" src="Dpk6LCOa24w" alt="OTAI Systems Introduction" videoId="hero-video" isYouTube={true} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 px-6 border-y border-primary/10 bg-card/20 overflow-hidden">
        <div className="container mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-8">
            Trusted by businesses across industries
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {clients.map((client, i) => (
              <motion.div key={client.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex flex-col items-center gap-2">
                {client.img ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20 bg-white/5">
                    <Image src={client.img} alt={client.name} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">{client.name[0]}</span>
                  </div>
                )}
                <span className="text-sm font-semibold text-white/80">{client.name}</span>
                <span className="text-xs text-muted-foreground">{client.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">What We Build</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Every system. Custom built.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-[1.7]">No templates. No copy-paste. Every build is engineered for your specific operation.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI Agents', tagline: 'Voice. Chat. Social.', description: 'Intelligent agents that handle inbound calls, qualify leads, answer questions, and book appointments — 24/7, without human intervention.', link: '/ai-agents', items: ['Voice Phone Agents', 'Chat Assistants', 'Social AI Agents', 'Lead Qualification'] },
              { icon: '⚡', title: 'Automations', tagline: 'Workflow. Reactivation. Outreach.', description: 'End-to-end systems that eliminate manual work — from lead reactivation to document automation to 1,200+ daily email campaigns.', link: '/automations', items: ['Lead Reactivation', 'Email Outreach (1,200+/day)', 'Doc Automation', 'Workflow Systems'] },
              { icon: '📈', title: 'Growth Systems', tagline: 'Organic. Paid. Consulting.', description: 'We grow your brand alongside the AI. Organic content, Meta ads, newsletters, and strategic AI consulting embedded in your organization.', link: '/lead-gen', items: ['Organic Social', 'Meta Ad Systems', 'Newsletter Automation', 'AI Strategy Consulting'] },
            ].map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="glass-card rounded-2xl p-7 flex flex-col group hover:border-primary/40 transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="text-xs text-primary tracking-widest uppercase mb-2">{s.tagline}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.7] mb-5 flex-grow">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Link href={s.link} className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors group-hover:gap-2">
                  See more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="py-20 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                <Image src="/images/antonio-standing.jpg" alt="Antonio Wilson — Founder, OTAI Systems" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-lg">Antonio Wilson</p>
                  <p className="text-primary text-sm">Founder & CEO, OTAI Systems</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Who Builds This</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-[1.15]">Built by someone who works like it matters.</h2>
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
                <p>I work 16-hour days. Every day. Not because I have to — because this is what I chose and I'm not stopping until OTAI is the biggest AI company in the world.</p>
                <p>3 years in marketing. Over a year building AI systems professionally. I understand both sides — how to grow a business and how to automate it. That combination is rare and it's exactly why my clients get results.</p>
                <p>My philosophy is simple: <span className="text-white font-semibold">the easiest way to make money is to make the other person money first.</span> I'm ruthless about that. Your growth is the only metric I care about.</p>
                <p>Honest when it's uncomfortable. Loyal once we're working together. Direct about what will and won't work. I don't build systems to impress — I build them to perform.</p>
              </div>
              <div className="mt-8 flex gap-6">
                <div><p className="text-2xl font-bold text-white">3+</p><p className="text-xs text-muted-foreground">Years in Marketing</p></div>
                <div className="w-px bg-border" />
                <div><p className="text-2xl font-bold text-white">1yr+</p><p className="text-xs text-muted-foreground">Building AI Systems</p></div>
                <div className="w-px bg-border" />
                <div><p className="text-2xl font-bold text-white">6</p><p className="text-xs text-muted-foreground">Active Clients</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Live Demos</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Watch it work.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-[1.7]">Real systems, built for real niches. Every demo below is deployable.</p>
          </motion.div>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-primary tracking-widest uppercase font-semibold">AI Phone Agents</span>
              <div className="flex-1 h-px bg-primary/15" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {demoAgents.map((v, i) => (
                <motion.div key={v.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">{v.niche}</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-3">{v.title}</p>
                  <VideoCard poster="" src={v.id} alt={v.title} videoId={`agent-${i}`} isYouTube={true} />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-primary tracking-widest uppercase font-semibold">Automation Systems</span>
              <div className="flex-1 h-px bg-primary/15" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {demoAutomations.map((v, i) => (
                <motion.div key={v.id + i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">{v.niche}</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-3">{v.title}</p>
                  <VideoCard poster="" src={v.id} alt={v.title} videoId={`auto-${i}`} isYouTube={true} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="py-20 px-3 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">The Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">How we build.</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-[1.7]">Four steps. No fluff. We analyze, build, deploy, and evolve your system with full accountability at every phase.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="glass-card rounded-xl p-6">
                <div className="mb-4">
                  <div className="text-xs font-semibold text-primary mb-1.5 tracking-widest uppercase">Step {index + 1}</div>
                  <h3 className="text-xl font-bold mb-2 text-white leading-[1.2]">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.6]">{step.description}</p>
                </div>
                <div className="mt-5 min-h-[200px] flex items-center justify-center">
                  <div className="w-full scale-90">{getAnim(step.animationType)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Strategic AI Consulting</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-[1.15]">We also work inside your organization.</h2>
              <p className="text-muted-foreground leading-[1.8] mb-6 text-base">Beyond building systems, we embed directly into consulting firms, real estate organizations, AI startups, and service businesses to architect their AI strategy from the inside.</p>
              <p className="text-muted-foreground leading-[1.8] mb-8 text-base">If your team needs someone who understands both the technology and the business outcome — and can wire the two together — that's exactly what we do.</p>
              <div className="grid grid-cols-2 gap-4">
                {['Real Estate Firms', 'AI Startups', 'Service Businesses', 'App Companies'].map((type, i) => (
                  <motion.div key={type} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-lg px-4 py-3 text-sm font-medium text-white/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{type}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
              <div className="glass-card rounded-2xl p-8">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-3">What Consulting Looks Like</h3>
                <ul className="space-y-4">
                  {['Audit your current operations for AI leverage points', 'Design a custom AI roadmap for your organization', 'Build and deploy the systems within your existing stack', 'Train your team on the new infrastructure', 'Monitor, optimize, and evolve as your business grows'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-[1.6]">
                      <span className="text-primary font-bold text-base leading-none mt-0.5">{i + 1}.</span>{item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollToSection('book')} className="mt-7 w-full py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors">
                  Talk to Antonio Directly →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-20 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Results</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Proof in motion.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-[1.7]">Real clients. Real systems. Real outcomes.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item, i) => (
              <motion.div key={item.client} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{item.client[0]}</span>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">{item.tag}</span>
                </div>
                <p className="font-bold text-white mb-1">{item.client}</p>
                <p className="text-xs text-muted-foreground mb-4">{item.role}</p>
                <p className="text-sm text-muted-foreground leading-[1.7] flex-grow">{item.result}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
            <Link href="/results" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              View full client portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Investment</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-[1.2]">Scoped to your business.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-[1.7]">Every engagement is custom. These tiers reflect the scope of work — not a price list.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <PricingCard label="Starter" description="One focused system. One problem solved. Ideal for businesses that know exactly what they need automated." features={['Single AI agent or automation', 'Full custom build — no templates', 'Integration with your existing tools', 'Direct access to founder', 'Post-launch support included']} popular={false} />
            <PricingCard label="Professional" description="Multi-layer infrastructure for businesses ready to automate across multiple touchpoints." features={['Multiple connected AI systems', 'Custom analytics dashboard', 'Up to 15 integrations', '24/7 CEO & team access', 'Ongoing optimization retainer']} popular={true} />
            <PricingCard label="Enterprise" description="Full-scale AI ecosystem. For organizations serious about becoming the most efficient in their industry." features={['Complete automation infrastructure', 'Enterprise-grade compliance & security', 'Custom client dashboard', 'Unlimited integrations', 'Priority VIP support & SLA']} popular={false} />
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center text-white">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-[1.6]">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="book" className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 beam-bg opacity-60" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1]">Ready to pull ahead?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.7]">Book a free strategy call with Antonio. We'll analyze your operation, identify the highest-impact AI opportunities, and tell you exactly what we'd build.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="max-w-5xl mx-auto">
            <div className="bg-card border border-primary/30 rounded-2xl p-6 glow-accent-sm">
              <div className="rounded-lg overflow-hidden">
                <iframe src="https://cal.com/otai-systems/30min-professional" style={{ width: '100%', height: '650px', border: 'none' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
