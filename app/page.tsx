'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight, Clock, Zap, TrendingUp, Brain, Sparkles, Target, Rocket, Settings2, BarChart3 } from 'lucide-react';
import { VideoCard } from '@/components/video-card';
import { RadarSweep } from '@/components/radar-sweep';
import { CodeEditorAnimation } from '@/components/code-editor-animation';
import { EnergyTransfer } from '@/components/energy-transfer';
import { GrowthChart } from '@/components/growth-chart';
import Link from 'next/link';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  const processSteps = [
    {
      step: 'One',
      title: 'Workflow Analysis',
      description: 'We consult your systems, uncover inefficiencies, and pinpoint high-ROI opportunities for AI automation.',
      animationType: 'radar'
    },
    {
      step: 'Two',
      title: 'Create AI System',
      description: 'We architect and train your custom AI solutions to optimize your workflows and drive measurable growth.',
      animationType: 'code'
    },
    {
      step: 'Three',
      title: 'Deploy Power',
      description: 'We embed the automation into your company, integrate or fully replace your systems, forcing advancement within your organization.',
      animationType: 'energy'
    },
    {
      step: 'Four',
      title: 'Evolve Relentlessly',
      description: 'We monitor, refine, and evolve your automations, analyzing performance data to ensure long-term efficiency and compound growth.',
      animationType: 'growth'
    },
  ];

  const getAnimationComponent = (type: string) => {
    switch (type) {
      case 'radar':
        return <RadarSweep />;
      case 'code':
        return <CodeEditorAnimation />;
      case 'energy':
        return <EnergyTransfer />;
      case 'growth':
        return <GrowthChart />;
      default:
        return null;
    }
  };

  const whyAICards = [
    {
      icon: Clock,
      title: 'The Window Is Closing Fast',
      description: 'Within 1 to 3 years AI will run nearly all business functions entirely. The businesses that adapted early will be untouchable.'
    },
    {
      icon: Zap,
      title: 'Revenue That Never Sleeps',
      description: 'Your AI agents work every hour you don\'t. Selling, booking, following up, and closing while you\'re off the clock.'
    },
    {
      icon: TrendingUp,
      title: 'Scale Without the Overhead',
      description: 'Add capacity without adding salaries. AI absorbs the volume so you can focus on growth not management.'
    },
    {
      icon: Target,
      title: 'Built Specifically For You',
      description: 'No templates. No off-the-shelf tools. Every system is engineered around your exact business, your workflow, your goals.'
    },
    {
      icon: Brain,
      title: 'Compound Intelligence',
      description: 'Every system we build learns and improves over time. The longer it runs, the more powerful it becomes.'
    },
    {
      icon: Rocket,
      title: 'Deployed in Days',
      description: 'Most clients have a live AI system running inside 2 weeks. Fast implementation, immediate impact.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-14 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 particle-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-bold mb-6 leading-[1.1]">
                <div className="text-4xl md:text-5xl lg:text-6xl text-white">
                  The Businesses That Adapt to AI Now Will Own Their Industries. The Rest Will Watch.
                </div>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-[1.6]">
                We build custom AI agents, automations, and outreach systems using Claude 4.6 and GPT-4o Codex — the most powerful models ever built — to eliminate your manual work, capture more revenue, and scale your operations before your competitors do.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => scrollToSection('services')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all glow-accent-sm"
                >
                  See What We Build
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('qualify')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold text-base hover:bg-primary/10 transition-all"
                >
                  See If You Qualify
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="scale-90"
            >
              <VideoCard
                poster=""
                src="Dpk6LCOa24w"
                alt="OTAI Systems Introduction"
                videoId="hero-video"
                isYouTube={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Strip Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                You're Still Doing It Manually
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every task you touch by hand is a task your competitor has already automated.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                You're Losing Leads Right Now
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every minute you're not responding, someone else is. AI closes that gap permanently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Hiring More Won't Fix It
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                More headcount means more cost and more management. The businesses winning right now are running leaner with AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Three Weapons. One Objective: Dominate Your Market.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Link href="#" className="block h-full">
                <div className="glass-card rounded-xl p-8 h-full flex flex-col group cursor-pointer">
                  <div className="mb-4 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                    AI Agents
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Intelligent agents that sell, book, support, and operate inside your business 24 hours a day without you lifting a finger.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link href="#" className="block h-full">
                <div className="glass-card rounded-xl p-8 h-full flex flex-col group cursor-pointer">
                  <div className="mb-4 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <Settings2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                    Automations
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Kill the manual processes draining your time and margin. Build it once, run it forever, watch your business compound.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <Link href="#" className="block h-full">
                <div className="glass-card rounded-xl p-8 h-full flex flex-col group cursor-pointer">
                  <div className="mb-4 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                    Outreach & Lead Gen
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                    A fully automated system that finds your ideal client, reaches out, and books the call — while you focus on delivering.
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof Strip Section */}
      <section className="py-16 px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              The Results Don't Lie.
            </h2>
            <p className="text-lg text-muted-foreground">
              Real businesses. Real numbers. Real growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="aspect-video bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-primary/40" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Client Result #{item}
                </p>
                <p className="text-2xl font-bold text-primary">
                  +{item * 25}% Growth
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              See Every Result
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section - PRESERVED WITH ENHANCED STYLING */}
      <section id="process" className="py-14 px-3 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-white leading-[1.2]">Our Intelligent, Impact-Driven Process</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-[1.6] px-2">
              We consult, engineer, and optimize AI solutions that integrate seamlessly, built to perform, adapt, and scale without limits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto px-4 md:px-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 md:p-6"
              >
                <div className="mb-4 md:mb-5">
                  <div className="text-xs md:text-sm font-semibold text-primary mb-1.5 md:mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-foreground leading-[1.2]">{step.title}</h3>
                  <p className="text-sm md:text-sm text-muted-foreground leading-[1.5] md:leading-[1.6]">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-6 min-h-[200px] md:h-auto flex items-center justify-center">
                  <div className="w-full scale-90 md:scale-95">
                    {getAnimationComponent(step.animationType)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-16 px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Why AI Is No Longer Optional
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Claude 4.6. GPT-4o Codex. Near-AGI level intelligence. The gap between businesses using this and businesses that aren't is growing every single day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyAICards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card rounded-xl p-8 group"
                >
                  <div className="mb-5 p-4 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="qualify" className="relative py-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary/5 to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Most Business Owners Wait Until It's Too Late.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                The ones moving now are the ones who will dominate. Book a call and find out exactly how AI can change your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <div className="glass-card rounded-xl overflow-hidden">
                <iframe
                  src="https://cal.com/otai-systems/30min-professional"
                  style={{
                    width: '100%',
                    height: '700px',
                    border: 'none'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
