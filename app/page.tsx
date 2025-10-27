'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, TrendingUp, CheckCircle2, Code, BarChart3, Settings } from 'lucide-react';
import { PricingCard } from '@/components/pricing-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ParticleBackground } from '@/components/particle-background';
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

  const processSteps = [
    {
      step: 'Step 1',
      title: 'Smart Analyzing',
      description: 'We audit your workflows, uncover inefficiencies, and pinpoint high-ROI opportunities for AI automation.',
      icon: BarChart3,
      checks: ['System check', 'Process check', 'Speed check', 'Manual work', 'Repetative task']
    },
    {
      step: 'Step 2',
      title: 'AI Development',
      description: 'Our engineers design and deploy tailored AI systems—agents, automations, and data pipelines—built around your needs.',
      icon: Code,
      checks: ['Custom AI architecture', 'Smart integrations', 'Scalable infrastructure', 'Security protocols']
    },
    {
      step: 'Step 3',
      title: 'Deploy Power',
      description: 'We embed the automation into your company, integrate or fully replace your systems, forcing advancement within your organization.',
      icon: Zap,
      checks: ['Seamless deployment', 'Team training', 'System integration', 'Performance monitoring']
    },
    {
      step: 'Step 4',
      title: 'Evolve Relentlessly',
      description: 'We monitor, refine, and evolve your automations, analyzing performance data to ensure long-term efficiency and compound growth.',
      icon: Settings,
      checks: ['Continuous optimization', 'Data analysis', 'Adaptive improvements', 'Growth tracking']
    },
  ];

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
      <section className="relative pt-40 pb-32 px-4 overflow-hidden min-h-screen flex items-center">
        <ParticleBackground />
        <div className="absolute inset-0 particle-bg opacity-40" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-block px-4 py-2 rounded-full glass-card neon-border mb-8">
                <span className="uppercase-wide text-xs gradient-text">Leverage the Power of AI</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            >
              <div className="text-white mb-4">Our Simple, Smart,</div>
              <div className="gradient-text text-glow">and Scalable Process</div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We design, develop, and implement automation tools that help you work smarter, not harder
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => scrollToSection('book')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold uppercase text-sm tracking-wider neon-glow transition-all duration-300 flex items-center gap-3 group"
              >
                Book a Consult
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <Link href="/coming-soon">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 glass-card neon-border text-white rounded-xl font-bold uppercase text-sm tracking-wider"
                >
                  In-Depth Data
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-transparent pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <div className="gradient-text mb-2">What we do:</div>
              <div className="text-white">Custom AI Solutions</div>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Unlike other AI agencies, consultants, or software companies, we understand one simple truth... no two businesses are the same.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Cpu,
                title: 'Automated Lead Generation',
                description: 'Turn every lead into a qualified prospect with AI-powered conversations that never sleep.'
              },
              {
                icon: Zap,
                title: 'Backend Optimization',
                description: 'Scale operations without scaling headcount through intelligent process automation.'
              },
              {
                icon: TrendingUp,
                title: 'AI Marketing',
                description: 'Amplify your reach and maximize ROI with data-driven marketing automation.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-2xl group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 justify-center items-center"
          >
            <Link href="/proof">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card neon-border text-white rounded-xl font-bold uppercase text-sm tracking-wider"
              >
                Testimonials & Proof
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="process" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6 text-glow">
              Our Simple, Smart, and Scalable Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We design, develop, and implement automation tools that help you work smarter, not harder
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-500"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm uppercase-wide text-purple-400 mb-2">{step.step}</div>
                    <h3 className="text-3xl font-black text-white mb-3">{step.title}</h3>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.checks.map((check, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                      <span className="text-gray-300">{check}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-transparent pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6 text-glow">Pricing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your business. Scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
            <PricingCard
              label="Starter"
              description="Perfect for small businesses starting with AI automation."
              features={[
                'Basic workflow automation',
                'AI-powered personal assistant',
                'Standard analytics & reporting',
                'Email & chat support',
                'Up to 3 AI integrations'
              ]}
              popular={false}
            />
            <PricingCard
              label="Professional"
              description="Perfect for small businesses starting with AI automation."
              features={[
                'Advanced workflow automation',
                'AI-driven sales & marketing tools',
                'Enhanced data analytics & insights',
                'Priority customer support',
                'Up to 10 AI integrations'
              ]}
              popular={true}
            />
            <PricingCard
              label="Enterprise"
              description="Perfect for small businesses starting with AI automation."
              features={[
                'Fully customizable AI automation',
                'Dedicated AI business consultant',
                'Enterprise-grade compliance',
                '24/7 VIP support',
                'Unlimited AI integrations'
              ]}
              popular={false}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-black mb-10 text-center uppercase-wide text-white">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-8 py-2 neon-border"
                >
                  <AccordionTrigger className="text-left hover:text-purple-400 text-white font-bold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section id="book" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              Ready to <span className="gradient-text">transcend</span> your business?
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Book a free consult with OTAI's CEO. You'll analyze your workflow, identify opportunities, and show you exactly how AI can scale your operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-8 neon-glow-sm">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://cal.com/otai-systems/30min-professional"
                  style={{
                    width: '100%',
                    height: '700px',
                    border: 'none'
                  }}
                  title="Schedule a consultation"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
