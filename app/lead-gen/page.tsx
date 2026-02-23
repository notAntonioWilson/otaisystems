'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { VideoCard } from '@/components/video-card';
import { Badge } from '@/components/ui/badge';
import { DripButton } from '@/components/drip-button';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function LeadGenPage() {
  const [activeSection, setActiveSection] = useState('email');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: 'email', label: 'Email Outreach', icon: Mail },
    { id: 'voice', label: 'Voice Outreach', icon: Phone },
    { id: 'social', label: 'Social Outreach', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              If you are looking for an AI system that researches your ideal prospects and sends fully personalized outreach at scale without you writing a single email, hit{' '}
              <button onClick={() => scrollToSection('email')} className="font-semibold hover:underline cursor-pointer transition-all" style={{ color: '#a855f7' }}>Email Outreach</button>. If you are looking for an AI that calls your prospect list, qualifies leads in real time, and books appointments directly into your calendar, hit{' '}
              <button onClick={() => scrollToSection('voice')} className="font-semibold hover:underline cursor-pointer transition-all" style={{ color: '#a855f7' }}>Voice Outreach</button>. If you are looking for an AI that slides into DMs across every social platform and converts cold followers into booked calls on autopilot, hit{' '}
              <button onClick={() => scrollToSection('social')} className="font-semibold hover:underline cursor-pointer transition-all" style={{ color: '#a855f7' }}>Social Outreach</button>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sidebar Navigation */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-primary'
                }`}
                title={section.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Email Outreach Section */}
      <section id="email" className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            Mass Outreach That Reads Like It Was Written Personally. AI That Researches Every Prospect and Writes Copy Based on Their Real Current Business Information.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoCard
                poster=""
                src="placeholder"
                alt="Email Outreach Demo"
                videoId="email-outreach-video"
                isYouTube={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Stats That Matter</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses using AI-personalized email outreach see 3-5x higher reply rates than generic campaigns</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>The average sales rep spends 40% of their time on prospecting and outreach that can be fully automated</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Personalized outreach sequences generate 6x more responses than one-size-fits-all messaging</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses running automated outreach systems book 3x more meetings with the same size prospect list</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8 text-center">
            <h4 className="text-base font-semibold mb-4 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {['Business Consultants & Advisors', 'Marketing & Growth Agencies', 'B2B SaaS & Tech Companies', 'Recruiting & Staffing Firms', 'Financial & Accounting Services'].map((industry) => (
                <Badge key={industry} className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-400 mb-6">
              If you are a business confident in your offer looking to get high-intent leads then book a meeting and start scaling:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Voice Outreach Section */}
      <section id="voice" className="py-14 px-6 lg:px-8 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            An AI That Calls Your Prospect List, Qualifies Every Lead in Real Time, and Books the Appointment Directly Into Your Calendar at a Fraction of the Cost of a Human Caller.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Industry Stats That Matter</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses using human call centers for appointment setting spend $45-$120 per appointment booked</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>AI voice callers reduce cost per appointment set by up to 80% while maintaining show rates</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>The average human caller makes 40-60 calls per day — this system runs hundreds simultaneously</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Consistent scripting and tone from AI callers produces more predictable conversion rates than human teams</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoCard
                poster=""
                src="placeholder"
                alt="Voice Outreach Demo"
                videoId="voice-outreach-video"
                isYouTube={false}
              />
            </motion.div>
          </div>

          <div className="mb-8 text-center">
            <h4 className="text-base font-semibold mb-4 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {['Solar Installation Companies', 'Insurance Agencies & Brokers', 'Real Estate Teams & Brokerages', 'Home Services & Improvement Companies', 'Debt Settlement & Financial Services'].map((industry) => (
                <Badge key={industry} className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-400 mb-6">
              If you have a big list of leads ready to be called but don't have the time set a meeting with the CEO and get this running:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Media Outreach Section */}
      <section id="social" className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            An AI System That Reaches Out Across Every Platform, Holds Real Human-Like Conversations in the DMs, and Converts Cold Followers Into Booked Calls on Autopilot.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoCard
                poster=""
                src="placeholder"
                alt="Social Outreach Demo"
                videoId="social-outreach-video"
                isYouTube={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Industry Stats That Matter</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses that run systematic DM outreach generate 40-60% more booked calls than those relying on inbound alone</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>The average business owner spends 5+ hours per week on manual social media outreach that could be automated</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Response rate on personalized DM outreach is 8x higher than cold email for personal brand businesses</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses running AI DM outreach operate across multiple platforms simultaneously with zero additional effort</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8 text-center">
            <h4 className="text-base font-semibold mb-4 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {['Online Coaches & Course Creators', 'Personal Development & Mindset Brands', 'Health & Fitness Online Businesses', 'Business & Entrepreneurship Coaches', 'Spiritual & Life Transformation Coaches'].map((industry) => (
                <Badge key={industry} className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-400 mb-6">
              If you have a professional brand on social media with a powerful following and are looking to turn that into real money this is the outreach system for you, book a meeting with our CEO and get this rolling:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
