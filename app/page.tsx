'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Zap, TrendingUp, Brain, Sparkles, Target, Rocket, Settings2, BarChart3, CheckCircle2, Shield, Users, Gauge, Database, LineChart, Timer, Maximize2, Lightbulb, Award, Wrench, Plug, ChevronDown } from 'lucide-react';
import { VideoCard } from '@/components/video-card';
import { RadarSweep } from '@/components/radar-sweep';
import { CodeEditorAnimation } from '@/components/code-editor-animation';
import { EnergyTransfer } from '@/components/energy-transfer';
import { GrowthChart } from '@/components/growth-chart';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
      title: '24/7 Performance',
      description: 'AI doesn\'t sleep, take breaks, or call in sick. Your operations run continuously without human limitations.'
    },
    {
      icon: Shield,
      title: 'Zero Complaints Zero Fatigue',
      description: 'No burnout, no turnover, no drama. AI delivers consistent performance without the human resource challenges.'
    },
    {
      icon: CheckCircle2,
      title: 'Error-Free Execution',
      description: 'Eliminate costly mistakes. AI systems execute with precision, reducing errors by up to 95%.'
    },
    {
      icon: Users,
      title: 'Proven Results Across Every Industry',
      description: 'From healthcare to finance to manufacturing, businesses are seeing measurable ROI within weeks.'
    },
    {
      icon: TrendingUp,
      title: 'Cost Reduction and Efficiency',
      description: 'Reduce operational costs by 60% on average while increasing output and maintaining quality.'
    },
    {
      icon: Database,
      title: 'Data-Driven Decision Making',
      description: 'AI analyzes patterns, predicts outcomes, and provides insights humans would take months to uncover.'
    },
    {
      icon: Timer,
      title: 'Time Back for Business Owners',
      description: 'Reclaim 20+ hours per week. Focus on strategy and growth instead of repetitive operational tasks.'
    },
    {
      icon: Maximize2,
      title: 'Instant Scalability',
      description: 'Scale operations without proportional cost increases. Handle 10x volume with the same infrastructure.'
    },
    {
      icon: Lightbulb,
      title: 'Predictive Intelligence',
      description: 'Anticipate problems before they happen. AI identifies trends and opportunities in real-time.'
    },
    {
      icon: Award,
      title: 'Competitive Edge',
      description: 'Early adopters dominate their markets. The gap between AI-powered businesses and traditional ones grows daily.'
    },
    {
      icon: Wrench,
      title: 'Fully Customizable Intelligence',
      description: 'No two businesses are the same. Every system is built specifically for your workflows and goals.'
    },
    {
      icon: Plug,
      title: 'Instant Integration',
      description: 'Seamlessly connects with your existing tools, systems, and processes without disruption.'
    }
  ];

  const faqItems = [
    {
      question: 'Can you help my specific company?',
      answer: 'Yes. We work with businesses across all industries. During our consultation, we analyze your specific workflows, identify automation opportunities, and design custom solutions that fit your exact needs. Whether you\'re in healthcare, finance, manufacturing, or any other sector, if you have repetitive processes, we can automate them.'
    },
    {
      question: 'What industries can benefit the most from AI automation?',
      answer: 'Every industry benefits, but we see the fastest ROI in: Healthcare (patient scheduling, records management), Professional Services (document processing, client communication), E-commerce (customer support, inventory management), Real Estate (lead qualification, document processing), Manufacturing (quality control, supply chain), and Financial Services (compliance, data analysis). If your business has repetitive tasks, you\'ll benefit.'
    },
    {
      question: 'Is the system difficult to integrate?',
      answer: 'No. We handle the entire integration process. Most clients have a working system within 2 weeks. We connect with your existing tools (CRM, email, calendar, databases) and train your team on how to use and monitor the system. You don\'t need technical expertise — we build it, deploy it, and maintain it.'
    },
    {
      question: 'Do I need any technical experience to use your AI solutions?',
      answer: 'Absolutely not. Our systems are designed to work in the background automatically. You\'ll have access to dashboards that show performance metrics in plain English. If you can check email, you can monitor your AI systems. We also provide ongoing support if you ever have questions.'
    },
    {
      question: 'Do you provide ongoing support and maintenance after setup?',
      answer: 'Yes. All plans include monitoring, optimization, and support. We continuously analyze performance data and make adjustments to improve results. As your business evolves, we adapt the systems accordingly. You\'re never left to figure things out alone.'
    },
    {
      question: 'Can I cancel or change my subscription at any time?',
      answer: 'Yes. We offer flexible terms. You can upgrade, downgrade, or cancel with 30 days notice. That said, most clients see ROI within the first month and choose to expand their automation instead of reducing it. We\'re confident in the value we deliver.'
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
              <div className="inline-flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                  <div className="relative px-6 py-2 bg-gradient-to-r from-primary/80 to-primary rounded-full border border-primary/50">
                    <span className="text-sm font-semibold text-white">Leverage the power of AI</span>
                  </div>
                </div>
              </div>
              <h1 className="font-bold mb-6 leading-[1.1]">
                <div className="text-4xl md:text-5xl lg:text-6xl text-white">
                  Ambitious Business Owners ONLY Continue Reading
                </div>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-[1.6]">
                If you are looking to stay ahead of your competition we are perfect for you, we are constantly up to date with the latest and truly greatest things in the space like GPT-5.3 Codex, Claude 4.6 and OpenClaw. Not only that we always build custom solutions. But if you want someone whose going to leave you with a system that is going to be out of date in a month we are not for you.
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

      {/* What We Do Section */}
      <section id="services" className="py-16 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              What We Do: Custom AI Solutions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Unlike other AI agencies, consultants, or software companies, we understand one simple truth... no two businesses are the same. Commonly, you're given a tool or a template that helps for a month, then needs an upgrade. At OTAI, we analyze your business, identify your goals, then build custom AI automations that not only drive growth and efficiency but continue to evolve as your company grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/results"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all"
              >
                In-Depth Data
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => scrollToSection('qualify')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold text-base hover:bg-primary/10 transition-all"
              >
                Book a Consult
              </button>
            </div>
            <div className="mt-6">
              <Link
                href="/results#testimonials"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Testimonials & Proof
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
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
              Why AI Is the New Foundation of Business
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              When intelligence runs your operations, you scale faster, work smarter, and eliminate limits. This is what modern infrastructure looks like.
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

      {/* Pricing Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Pricing: Choose the plan that fits your business. Scale as you grow.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
              <p className="text-3xl font-bold text-primary mb-6">$2,997<span className="text-lg text-muted-foreground">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Basic AI agent or automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Standard analytics & reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 3 AI integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">12hr customer support with COO</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">1 Developer</span>
                </li>
              </ul>
              <Link
                href="/schedule/starter"
                className="block w-full text-center px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all"
              >
                Schedule a call
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-8 border-2 border-primary relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Professional</h3>
              <p className="text-3xl font-bold text-primary mb-6">$5,997<span className="text-lg text-muted-foreground">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Advance AI / automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Personalized dashboard with analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 15 integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">24/7 customer support with CEO & COO</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">2 Developers</span>
                </li>
              </ul>
              <Link
                href="/schedule/professional"
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all"
              >
                Schedule a call
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
              <p className="text-3xl font-bold text-primary mb-6">Custom</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fully suite automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Enterprise-grade compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Corporate level dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Unlimited Integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">24/7 VIP Support</span>
                </li>
              </ul>
              <Link
                href="/schedule/enterprise"
                className="block w-full text-center px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all"
              >
                Schedule a call
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
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
                Ready to transcend your business?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                Book a free consult with OTAI's CEO. You'll analyze your workflow, identify opportunities, and show you exactly how AI can scale your operations.
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
