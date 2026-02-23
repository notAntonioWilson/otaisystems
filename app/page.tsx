'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight, Clock, Target, Zap, TrendingUp, CheckCircle2, Moon, Activity, AlertCircle, BarChart3, DollarSign, Brain, Users, Layers, Eye, Rocket, Settings, Link2 } from 'lucide-react';
import { VideoCard } from '@/components/video-card';
import { GlowButton } from '@/components/glow-button';
import { DripButton } from '@/components/drip-button';
import { TestimonialCard } from '@/components/testimonial-card';
import { PricingCard } from '@/components/pricing-card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RadarSweep } from '@/components/radar-sweep';
import { CodeEditorAnimation } from '@/components/code-editor-animation';
import { EnergyTransfer } from '@/components/energy-transfer';
import { GrowthChart } from '@/components/growth-chart';
import { services } from '@/content/services';
import { proofs } from '@/content/proof';
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

  const heroMetrics: any[] = [];

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

  const aiFoundationCards = [
    {
      icon: Moon,
      title: '24/7 Performance',
      description: 'AI never sleeps. It operates continuously, delivering consistent output and monitoring systems around the clock.'
    },
    {
      icon: Activity,
      title: 'Zero Complaints, Zero Fatigue',
      description: 'AI doesn\'t get tired, emotional, or distracted. It executes tasks reliably every single time.'
    },
    {
      icon: AlertCircle,
      title: 'Error-Free Execution',
      description: 'AI systems don\'t make careless mistakes. They work with precision and consistency.'
    },
    {
      icon: BarChart3,
      title: 'Proven Results Across Every Industry',
      description: 'Companies using AI see measurable increases in productivity, revenue, and accuracy.'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction and Efficiency',
      description: 'AI eliminates redundant labor, reduces human overhead, and optimizes workflows for maximum ROI.'
    },
    {
      icon: Brain,
      title: 'Data-Driven Decision Making',
      description: 'AI analyzes data instantly and objectively to help leaders make smarter, faster, evidence-based decisions.'
    },
    {
      icon: Clock,
      title: 'Time Back for Business Owners',
      description: 'Automating repetitive workflows gives founders and teams more time to focus on growth, not busywork.'
    },
    {
      icon: Layers,
      title: 'Instant Scalability',
      description: 'AI adapts to your company\'s workload automatically, scaling up or down without additional overhead.'
    },
    {
      icon: Eye,
      title: 'Predictive Intelligence',
      description: 'AI anticipates problems and opportunities before they happen.'
    },
    {
      icon: Rocket,
      title: 'Competitive Edge',
      description: 'Businesses that adopt AI today are the ones dominating tomorrow. It is the new infrastructure of business.'
    },
    {
      icon: Settings,
      title: 'Fully Customizable Intelligence',
      description: 'AI can match your exact workflow and style, from hyper-personalized automations to precise robotic execution.'
    },
    {
      icon: Link2,
      title: 'Instant Integration',
      description: 'AI connects seamlessly with your existing systems to start improving operations immediately.'
    }
  ];

  const mobileVisibleCards = [0, 1, 3, 4, 6]; // Indices for cards to show on mobile

  const faqs = [
    {
      question: 'Can you help my specific company?',
      answer:
        'Absolutely. We help companies of all sizes integrate AI and automation across every channel, from phone and chat to social media and internal systems. Our team specializes in building intelligent workflows that save time, boost efficiency, and elevate your customer experience.',
    },
    {
      question: 'What industries can benefit the most from AI automation?',
      answer:
        'AI and automation can transform any industry, but the right approach depends on your business model. For B2B companies, AI works best on the front end by handling leads, outreach, and communication. For B2C businesses, automation shines on the back end by streamlining support, order management, and marketing. In short, the best solution depends on your company\'s structure and goals.',
    },
    {
      question: 'Is the system difficult to integrate?',
      answer:
        'Not at all. We handle the entire integration process, whether you\'re implementing a completely new AI system or connecting automation to your existing tools. Everything follows a transparent, step-by-step flow to ensure a smooth and stress-free setup.',
    },
    {
      question: 'Do I need any technical experience to use your AI solutions?',
      answer:
        'No technical experience required. We take care of all the heavy lifting including setup, connections, and configurations. If your input is ever needed, our team walks you through it step-by-step, ensuring the process is simple and straightforward.',
    },
    {
      question: 'Do you provide ongoing support and maintenance after setup?',
      answer:
        'Yes, absolutely. We provide full ongoing support and continuous improvements. As AI evolves, your system evolves with it, and if issues ever arise, we fix them quickly. We also enhance your automations over time to keep your business aligned with growth and new technology.',
    },
    {
      question: 'Can I cancel or change my subscription at any time?',
      answer:
        'Yes, you can. You\'re free to cancel at any time, and you\'ll still keep ownership of the system we\'ve built for you. Our goal is to build lasting partnerships, not lock-in contracts, and your AI stays yours.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-24 pb-14 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 particle-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Leverage the Power of AI
              </Badge>
              <h1 className="font-bold mb-5 leading-[1.15]">
                <div className="text-3xl md:text-4xl lg:text-5xl mb-2 text-white">This Website Is ONLY Ment For Ambitious Business Owners <span style={{ color: '#a855f7' }}>Desiring To Advance With AI Automations</span></div>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-[1.6]">
                If you are looking to stay ahead of your competition we are perfect for you, we are constantly up to date with the latest and truly greatest things in the space like GPT-5.3 Codex, Claude 4.6 and OpenClaw. Not only that we always build custom solutions. But if you want someone whose going to leave you with a system that is going to be out of date in a month we are not for you.
              </p>

              <DripButton onClick={() => scrollToSection('book')}>
                Book a Consult
              </DripButton>
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


      <section id="process" className="py-14 px-3 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
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

      {/* AI Foundation Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Why AI Is the New Foundation of Business
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              When intelligence runs your operations, you scale faster, work smarter, and eliminate limits. This is what modern infrastructure looks like.
            </p>
          </motion.div>

          {/* Desktop: 3x2 grid (6 cards per row, 2 rows = 12 cards) */}
          <div className="hidden md:grid md:grid-cols-6 gap-4 mb-10">
            {aiFoundationCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-xl p-5 flex flex-col items-center text-center group hover:shadow-[0_0_30px_rgba(155,92,246,0.4)] transition-all duration-300"
                >
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-foreground leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: Single column, filtered cards */}
          <div className="md:hidden flex flex-col gap-4 mb-10">
            {aiFoundationCards.filter((_, index) => mobileVisibleCards.includes(index)).map((card, displayIndex) => {
              const Icon = card.icon;
              const originalIndex = mobileVisibleCards[displayIndex];
              return (
                <motion.div
                  key={originalIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: displayIndex * 0.1 }}
                  className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-3 rounded-lg bg-primary/10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-foreground leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlowButton onClick={() => scrollToSection('book')}>
              Implement AI
            </GlowButton>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-14 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-[1.2]">Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
              Choose the plan that fits your business. Scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <PricingCard
              label="Starter"
              description="Perfect for any business size wanting a single AI automation."
              features={[
                'Basic AI agent or automation',
                'Standard analytics & reporting',
                'Up to 3 AI integrations',
                '12hr customer support with COO',
                '1 Developer'
              ]}
              popular={false}
            />
            <PricingCard
              label="Professional"
              description="Perfect for any business size wanting a multi-layer or complex AI system."
              features={[
                'Advance AI / automation',
                'Personalized dashboard with analytics',
                'Up to 15 integrations',
                '24/7 customer support with CEO & COO',
                '2 Developers'
              ]}
              popular={true}
            />
            <PricingCard
              label="Enterprise"
              description="Perfect for enterprise organizations seeking AI ecosystems."
              features={[
                'Fully suite automation',
                'Enterprise-grade compliance',
                'Corprate level dashboard',
                'Unlimited Integrations',
                '24/7 VIP Support'
              ]}
              popular={false}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-5 text-center text-white leading-[1.2]">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-[1.6]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section id="book" className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-[1.2]">
              Ready to transcend your business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-[1.6]">
              Book a free consult with OTAI's CEO. You'll analyze your workflow, identify opportunities, and show you exactly how AI can scale your operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-card border border-primary/30 rounded-lg p-6 glow-accent-sm">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://cal.com/otai-systems/30min-professional"
                  style={{
                    width: '100%',
                    height: '650px',
                    border: 'none'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
