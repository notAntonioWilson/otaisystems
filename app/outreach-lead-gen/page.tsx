'use client';

import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { AgentSidebarNav } from '@/components/agent-sidebar-nav';
import { AgentVideoPlaceholder } from '@/components/agent-video-placeholder';
import { motion } from 'framer-motion';
import Link from 'next/link';

const sections = [
  { id: 'email-outreach', label: 'Email Outreach' },
  { id: 'voice-outreach', label: 'Voice Outreach' },
  { id: 'social-outreach', label: 'Social Outreach' },
];

export default function OutreachLeadGenPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <AgentSidebarNav sections={sections} />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-32"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
              Your Next Client Is Out There Right Now. This System Finds Them, Reaches Out, and Books the Call Before You Even Wake Up.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 text-center leading-relaxed max-w-4xl mx-auto">
              We build fully automated outreach and lead generation systems that run 24 hours a day, target your exact ideal client, and fill your pipeline with high-intent prospects — without you sending a single message manually.
            </p>
          </motion.div>

          <div id="email-outreach" className="mb-32 scroll-mt-32">
            <div className="mb-6">
              <span className="text-purple-400 text-xl font-semibold">Email Outreach</span>
            </div>
            <p className="text-gray-300 text-lg mb-16 max-w-4xl">
              The most direct line to a decision maker is still their inbox. This system gets you there — at scale, with copy so personalized it doesn't read like automation.
            </p>

            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 mb-12 glow-accent-sm">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-purple-400 font-bold text-lg mb-6 leading-relaxed">
                    If you are a consultant, agency owner, B2B service provider, or coach and you are manually researching prospects and writing outreach emails one by one — this system was built to replace that entirely.
                  </p>
                  <AgentVideoPlaceholder label="[Video: AI Email Outreach System — live consultant campaign demo showing personalized AI copy generation and send sequence]" />
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    Mass Outreach That Reads Like It Was Written Personally. AI That Researches Every Prospect and Writes Copy Based on Their Real, Current Business Information.
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-2xl font-bold text-purple-400 mb-2">3-5x</p>
                      <p className="text-gray-300 leading-relaxed">
                        Consultants and agencies using AI-personalized email outreach see 3-5x higher reply rates than generic campaigns.
                      </p>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-gray-300 leading-relaxed">
                        This system researches each prospect automatically, pulls their real current business data, and generates unique personalized copy for every single email — then sends, tracks, follows up, and reports — all without you touching it.
                      </p>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-gray-300 leading-relaxed">
                        One system can execute what would take a full-time SDR team weeks — in hours.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Automatically researches each prospect and generates fully personalized email copy based on their actual business data
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Runs multi-step follow-up sequences with smart timing and behavior-based triggers
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Tracks opens, replies, and conversions in real time and routes interested prospects directly to your calendar
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Business Consultants & Advisors',
                        'Marketing & Growth Agencies',
                        'B2B SaaS & Tech Companies',
                        'Recruiting & Staffing Firms',
                        'Financial & Accounting Services'
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Stop writing cold emails manually. This system does it better and does it at scale.
                    </p>
                    <Link
                      href="/schedule/professional"
                      className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 glow-accent-sm"
                    >
                      Book a Strategy Call →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="voice-outreach" className="mb-32 scroll-mt-32">
            <div className="mb-6">
              <span className="text-purple-400 text-xl font-semibold">Voice Outreach</span>
            </div>
            <p className="text-gray-300 text-lg mb-16 max-w-4xl">
              Phone is still the fastest path to a booked appointment. This system dials, qualifies, and sets the meeting — without a single sales rep making a single call.
            </p>

            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 mb-12 glow-accent-sm">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    An AI That Calls Your Prospect List, Qualifies Every Lead in Real Time, and Books the Appointment Directly Into Your Calendar — At a Fraction of the Cost of a Human Caller.
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-2xl font-bold text-purple-400 mb-2">$45-$120</p>
                      <p className="text-gray-300 leading-relaxed">
                        Solar and insurance companies spend an average of $45-$120 per appointment set through human call centers.
                      </p>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-gray-300 leading-relaxed">
                        AI voice callers reduce that cost by up to 80% while maintaining appointment show rates because every call is consistent, professional, and perfectly scripted.
                      </p>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-gray-300 leading-relaxed">
                        This system can execute hundreds of outbound calls simultaneously — something no human team can match.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Calls your prospect list automatically, delivers a natural human-sounding conversation, and qualifies in real time
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Handles objections, answers common questions, and pushes toward a confirmed appointment
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Books directly into your calendar system and sends confirmation and reminder sequences to reduce no-shows
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Solar Installation Companies',
                        'Insurance Agencies & Brokers',
                        'Real Estate Teams & Brokerages',
                        'Home Services & Improvement Companies',
                        'Debt Settlement & Financial Services'
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Your appointment pipeline should run itself. Let's build the system that makes it happen.
                    </p>
                    <Link
                      href="/schedule/professional"
                      className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 glow-accent-sm"
                    >
                      Book a Strategy Call →
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-purple-400 font-bold text-lg mb-6 leading-relaxed">
                    If you operate in solar, insurance, real estate, or any high-volume appointment-driven industry and you are paying a call center or sales team just to set appointments — this system replaces that cost entirely.
                  </p>
                  <AgentVideoPlaceholder label="[Video: AI Voice Caller — live solar appointment setting call demo with real prospect interaction]" />
                </div>
              </div>
            </div>
          </div>

          <div id="social-outreach" className="mb-32 scroll-mt-32">
            <div className="mb-6">
              <span className="text-purple-400 text-xl font-semibold">Social Outreach</span>
            </div>
            <p className="text-gray-300 text-lg mb-16 max-w-4xl">
              Your ideal clients are active on social media right now. This system reaches them in the DMs — personally, intelligently, and at a scale no human could match.
            </p>

            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 mb-12 glow-accent-sm">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-purple-400 font-bold text-lg mb-6 leading-relaxed">
                    If you are in the online coaching industry, personal development space, or any business built around a personal brand and you are not systematically turning social media followers and engagers into booked calls — this system closes that gap permanently.
                  </p>
                  <AgentVideoPlaceholder label="[Video: AI Social DM Outreach System — live Instagram and LinkedIn outreach sequence demo for online coaching business]" />
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    An AI System That Reaches Out Across Every Platform, Holds Real Human-Like Conversations in the DMs, and Converts Cold Followers Into Booked Calls on Autopilot.
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-2xl font-bold text-purple-400 mb-2">40-60%</p>
                      <p className="text-gray-300 leading-relaxed">
                        Online coaches and personal brand businesses that run systematic DM outreach generate 40-60% more booked discovery calls than those relying on inbound alone.
                      </p>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-gray-300 leading-relaxed">
                        This system identifies your ideal prospects across Instagram, LinkedIn, Twitter, and Facebook, initiates personalized conversations based on their content and behavior, and guides them toward a booking — sounding completely human at every step.
                      </p>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                      <p className="text-gray-300 leading-relaxed">
                        It runs 24 hours a day across multiple platforms simultaneously while you focus on delivering results for your existing clients.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Identifies and reaches out to ideal prospects across multiple platforms based on your targeting criteria
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Holds fully personalized human-like conversations that build rapport before making any ask
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        Guides conversations toward a booking or sale and hands off to you only when the prospect is warm and ready
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Online Coaches & Course Creators',
                        'Personal Development & Mindset Brands',
                        'Health & Fitness Online Businesses',
                        'Business & Entrepreneurship Coaches',
                        'Spiritual & Life Transformation Coaches'
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Your next 10 clients are already following you. This system goes and gets them.
                    </p>
                    <Link
                      href="/schedule/professional"
                      className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 glow-accent-sm"
                    >
                      Book a Strategy Call →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 md:p-16 text-center glow-accent"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Pipeline Should Never Be Empty. Ever.
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              The businesses building automated outreach systems right now are removing the single biggest variable in their revenue — inconsistent lead flow. While everyone else is manually prospecting, your system is booking calls around the clock.
            </p>
            <Link
              href="/#qualify"
              className="inline-block px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg transition-all duration-300 glow-accent-sm"
            >
              See If You Qualify →
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
