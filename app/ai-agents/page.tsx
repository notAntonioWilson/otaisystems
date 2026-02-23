'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { VideoCard } from '@/components/video-card';
import { Badge } from '@/components/ui/badge';
import { DripButton } from '@/components/drip-button';
import { Phone, Brain, MessageSquare, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function AIAgentsPage() {
  const [activeSection, setActiveSection] = useState('voice');

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
    { id: 'voice', label: 'Voice Agents', icon: Phone },
    { id: 'ceo', label: 'CEO Agents', icon: Brain },
    { id: 'website', label: 'Website Agents', icon: MessageSquare },
    { id: 'social', label: 'Social Media Agents', icon: Share2 },
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
              If you are looking for an AI agent that answers every call, books appointments, and provides custom support, hit the{' '}
              <span style={{ color: '#a855f7' }}>Voice Agents</span> button. If you are looking for a strategic AI partner that thinks at the level of a world-class operator and helps you make your next business move, hit{' '}
              <span style={{ color: '#a855f7' }}>CEO Agents</span>. If you are looking for an AI Chatbot that turns your website visitors into booked calls and handles your customer support without you, hit{' '}
              <span style={{ color: '#a855f7' }}>Website Agents</span>. If you are looking for an AI Agent that works your Social Media DMs and runs your content strategy so you can focus on what you do best, hit{' '}
              <span style={{ color: '#a855f7' }}>Social Media Agents</span>.
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

      {/* Voice Agents Section */}
      <section id="voice" className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            The Agent That Answers EVERY Call and Fills Your Calendar While You Provide For Your Client
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
                alt="Voice Agent Demo"
                videoId="voice-agent-video"
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
                  <span>82% of callers who reach voicemail never call back</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses using AI booking agents report up to 3x more appointments booked in the first 30 days</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>The average service business loses thousands monthly in missed calls alone</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>AI booking agents reduce no-shows by up to 40%</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['Gyms & Fitness Studios', 'Med Spas & Wellness Centers', 'Dental & Orthodontic Offices', 'Chiropractic Clinics', 'IV Therapy & Alt Med Locations'].map((industry) => (
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
              If you are a business owner looking to increase your bookings through the phone with a hyper realistic AI Phone Agent book a meeting with our CEO:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Voice Agents Section 2 - Compliance */}
      <section className="py-14 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            An AI Agent That Operates Within Your Compliance Requirements and Transfers to a Human the Moment It Matters
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
                  <span>Businesses in regulated industries lose significant revenue annually from missed initial consultations</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>68% of potential clients choose the first business that responds to their inquiry</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>AI intake reduces cost per acquisition by up to 55%</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Live handoff capability reduces dropped high-value leads by up to 80%</span>
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
                alt="Compliance Agent Demo"
                videoId="compliance-agent-video"
                isYouTube={false}
              />
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['Law Firms', 'Financial Advisory Firms', 'Insurance Agencies', 'Real Estate Brokerages', 'Medical & Mental Health Practices'].map((industry) => (
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
              If you are a business owner who needs time back with clients and is compliant book a call with our CEO:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CEO Agents Section */}
      <section id="ceo" className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            A Billionaire-Level Business Mind Inside Your Operations. Available 24/7. Knows Your Business Better Every Day.
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
                alt="CEO Agent Demo"
                videoId="ceo-agent-video"
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
                  <span>Founders with access to strategic advisory grow 2.3x faster than those operating without it</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>High-level business advisory and coaching costs $500-$3,500 per hour</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses that make data-driven strategic decisions outperform competitors by 23%</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Most founders make critical decisions without access to the insight level this agent provides at all times</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['Startups & Early-Stage Founders', 'E-Commerce Business Owners', 'Agency Owners & Consultants', 'Real Estate Investors & Developers', 'Service Businesses Scaling Past $1M'].map((industry) => (
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
              If your company is stuck and you are ready to advance to the next level, or a startup looking to get their company going this AI Agent is for you:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Website Agents Section - Conversion */}
      <section id="website" className="py-14 px-6 lg:px-8 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            The Agent That Increases Your Website Conversion
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
                  <span>96% of website visitors leave without taking action</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses using conversational booking agents report 40-70% more qualified calls booked</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>The average business takes 47 hours to respond to a website inquiry</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>AI responds in under 3 seconds every single time regardless of volume</span>
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
                alt="Website Conversion Agent Demo"
                videoId="website-conversion-video"
                isYouTube={false}
              />
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['Marketing & Growth Agencies', 'Branding & Creative Studios', 'PR & Communications Firms', 'Business Consulting Practices', 'Web Design & Development Agencies'].map((industry) => (
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
              If you have heavy traffic on your website but a low conversion rate then this agent will increase it:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Website Agents Section - Support */}
      <section className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            An AI Support Agent That Knows Your Product Inside Out and Escalates to a Human the Second It's Requested
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
                alt="Support Agent Demo"
                videoId="support-agent-video"
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
                  <span>Businesses using AI support agents resolve up to 70% of tickets without any human involvement</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Average customer response time drops from hours to under 3 seconds</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Support operational costs reduced by up to 60% after AI implementation</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Customer satisfaction scores consistently increase when response time drops</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['SaaS & Software Platforms', 'Tech Products & Apps', 'Online Course & Membership Platforms', 'E-Commerce Brands with Complex Products', 'Managed Service Providers'].map((industry) => (
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
              If you have a complex support system and need an advanced AI Agent to support your customer this agent is for you:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Media Agents Section - DMs */}
      <section id="social" className="py-14 px-6 lg:px-8 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            The Agent That Lives in Your DMs, Responds Like You, and Converts Followers Into Paying Clients
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
                  <span>Business owners spend 4+ hours per week manually managing DMs that could be automated</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses using AI DM agents report 2-4x increases in consultation bookings from existing traffic</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>78% of buyers purchase from the first business that responds to their message</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Response speed is the single biggest conversion variable in social media sales</span>
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
                alt="Social DM Agent Demo"
                videoId="social-dm-video"
                isYouTube={false}
              />
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['Health & Fitness Coaches', 'Life & Mindset Coaches', 'Nutrition & Wellness Coaches', 'Online Course Creators', 'Personal Brand Businesses'].map((industry) => (
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
              If you have a high level of DMs flowing to you this is the best agent for you:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Media Agents Section - Content Strategy */}
      <section className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            A Master Marketing Strategist in Your Pocket That Knows Your Industry and Tells You Exactly What to Create
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
                alt="Content Strategy Agent Demo"
                videoId="content-strategy-video"
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
                  <span>Businesses posting consistent social content generate up to 3x more inbound leads than those that don't</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>The majority of business owners report not knowing what to post or how to stay consistent</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses with a defined content strategy see 6x more engagement than those without one</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>AI-assisted content planning reduces time spent on marketing by up to 70%</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['Roofing & Exterior Contractors', 'Landscaping & Hardscape Companies', 'General Contractors & Builders', 'HVAC, Plumbing & Electrical', 'Interior Design & Renovation Firms'].map((industry) => (
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
              If you are looking to start building a powerful social media presence this is the agent for you:
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
