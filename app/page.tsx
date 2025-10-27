'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Target, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 particle-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
                Leverage the Power of AI
              </Badge>
              <h1 className="font-bold mb-6 leading-tight">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-2 text-white">Custom AI Solutions</div>
                <div className="text-3xl md:text-4xl lg:text-5xl" style={{ color: '#a855f7' }}>For Ambitious Businesses</div>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Reality check: AI is no longer the future of business it's a necessity now! If you don't adapt you will fall behind.
              </p>

              <DripButton onClick={() => scrollToSection('book')}>
                Book a Consult
              </DripButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VideoCard
                poster="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                src="/videos/hero-vsl.mp4"
                alt="OTAI Systems Introduction"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bold mb-6 leading-tight">
                  <div className="text-4xl md:text-5xl lg:text-6xl mb-2 text-primary">What we do:</div>
                  <div className="text-3xl md:text-4xl lg:text-5xl text-foreground">Custom AI Solutions</div>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Unlike other AI agencies, consultants, or software companies, we understand one simple truth... no two businesses are the same.
                  </p>
                  <p>
                    Commonly, you're given a tool or a template that helps for a month, then needs an upgrade.
                  </p>
                  <p>
                    At OTAI, we analyze your business, identify your goals, then build custom AI automations that not only drive growth and efficiency but continue to evolve as your company grows.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <VideoCard
                  poster={services[0].vsl.poster}
                  src={services[0].vsl.src}
                  alt={services[0].name}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          >
            <Link href="/coming-soon">
              <button className="sleek-button px-8 py-4 rounded-xl font-medium text-sm whitespace-nowrap min-w-[200px]">
                In-Depth Data
              </button>
            </Link>
            <button
              onClick={() => scrollToSection('book')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-sm whitespace-nowrap min-w-[200px] hover:bg-primary/90 transition-all glow-accent-sm"
            >
              Book a Consult
            </button>
            <Link href="/proof">
              <button className="sleek-button px-8 py-4 rounded-xl font-medium text-sm whitespace-nowrap min-w-[200px]">
                Testimonials & Proof
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Intelligent, Impact-Driven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We consult, engineer, and optimize AI solutions that integrate seamlessly, built to perform, adapt, and scale without limits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-8"
              >
                <div className="mb-6">
                  <div className="text-sm font-semibold text-primary mb-3">
                    Step {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-8">
                  {getAnimationComponent(step.animationType)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business. Scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section id="book" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to transcend your business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Book a free consult with OTAI's CEO. You'll analyze your workflow, identify opportunities, and show you exactly how AI can scale your operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-card border border-primary/30 rounded-lg p-8 glow-accent-sm">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://cal.com/otai-systems/30min-professional"
                  style={{
                    width: '100%',
                    height: '700px',
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
