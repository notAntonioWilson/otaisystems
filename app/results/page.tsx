'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

type TabType = 'all' | 'testimonials' | 'statistics' | 'builds';

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const allItems = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    type: i % 3 === 0 ? 'stat' : i % 3 === 1 ? 'testimonial' : 'result',
    size: i % 4 === 0 ? 'large' : i % 4 === 1 ? 'tall' : 'square',
  }));

  const testimonials = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    ratio: i % 2 === 0 ? '16:9' : '9:16',
  }));

  const statistics = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    size: i % 4 === 0 ? 'large' : i % 4 === 1 ? 'tall' : 'square',
  }));

  const builds = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `AI System ${i + 1}`,
    description: 'This intelligent automation system handles complex workflows, integrates seamlessly with existing tools, and delivers measurable results around the clock.',
    roi: `${Math.floor(Math.random() * 300 + 100)}%`,
    timeSaved: `${Math.floor(Math.random() * 30 + 10)}hrs/week`,
    tasksAutomated: Math.floor(Math.random() * 15 + 5),
  }));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-24 pb-14 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#32005C]/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white relative leading-[1.2]">
              Results & Systems from OTAI
              <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10" />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-[1.6]">
              Our results show what happens when you stop talking about AI automation and start using it. Save time, grow revenue, and dominate your market with intelligent systems that work for you 24/7.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12 px-2"
          >
            <div className="inline-flex bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-1 sm:p-1.5 gap-0.5 sm:gap-1 w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`flex-1 sm:flex-none px-2 sm:px-7 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setActiveTab('testimonials')}
                className={`flex-1 sm:flex-none px-2 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'testimonials'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => setActiveTab('statistics')}
                className={`flex-1 sm:flex-none px-2 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'statistics'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Statistic Proof
              </button>
              <button
                onClick={() => setActiveTab('builds')}
                className={`flex-1 sm:flex-none px-2 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'builds'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                AI Builds
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === 'all' && (
              <motion.div
                key="all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    className="flex gap-4"
                    animate={{
                      x: [0, -2000],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 60,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...allItems, ...allItems].map((item, index) => (
                      <motion.div
                        key={`all-${index}`}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
                        className={`flex-shrink-0 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden group cursor-pointer ${
                          item.size === 'large'
                            ? 'w-96 h-64'
                            : item.size === 'tall'
                            ? 'w-64 h-80'
                            : 'w-64 h-64'
                        }`}
                      >
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="text-center p-6 relative z-10">
                            <div className="text-4xl mb-2">
                              {item.type === 'stat' ? '📊' : item.type === 'testimonial' ? '💬' : '✨'}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Placeholder {item.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.type === 'stat' && 'Statistical Snapshot'}
                              {item.type === 'testimonial' && 'Client Testimonial'}
                              {item.type === 'result' && 'Client Result'}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'testimonials' && (
              <motion.div
                key="testimonials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0,100 Q250,50 500,100 T1000,100"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <motion.div
                    className="flex gap-4"
                    animate={{
                      x: [0, -2000],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 60,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...testimonials, ...testimonials].map((item, index) => (
                      <motion.div
                        key={`testimonial-${index}`}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
                        className={`flex-shrink-0 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden group cursor-pointer ${
                          item.ratio === '16:9' ? 'w-96 h-56' : 'w-64 h-96'
                        }`}
                      >
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent relative">
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                          <Play className="w-16 h-16 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                          <div className="absolute bottom-4 left-4 right-4 z-10">
                            <p className="text-white font-semibold">Video Testimonial {item.id}</p>
                            <p className="text-sm text-muted-foreground">{item.ratio} Format</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'statistics' && (
              <motion.div
                key="statistics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    className="flex gap-4"
                    animate={{
                      x: [0, -2000],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 60,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...statistics, ...statistics].map((item, index) => (
                      <motion.div
                        key={`stat-${index}`}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
                        className={`flex-shrink-0 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden group cursor-pointer ${
                          item.size === 'large'
                            ? 'w-96 h-64'
                            : item.size === 'tall'
                            ? 'w-64 h-80'
                            : 'w-64 h-64'
                        }`}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-transparent relative p-6">
                          <TrendingUp className="w-12 h-12 text-primary mb-4" />
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {Math.floor(Math.random() * 300 + 50)}%
                          </h3>
                          <p className="text-sm text-muted-foreground text-center">
                            Statistical Proof {item.id}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2 text-center">
                            Revenue Growth / Time Saved / Efficiency Increase
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'builds' && (
              <motion.div
                key="builds"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12 sm:space-y-20"
              >
                {builds.map((build, index) => (
                  <div key={build.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`grid md:grid-cols-2 gap-6 sm:gap-8 items-center ${
                        index % 2 === 1 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="relative aspect-video bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden group cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-12 sm:w-20 h-12 sm:h-20 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white font-semibold text-sm sm:text-base">AI Build Demo Video</p>
                          </div>
                        </div>
                      </div>

                      <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                          {build.name}
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground mb-5 sm:mb-6 leading-[1.6]">
                          {build.description}
                        </p>
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
                          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                              <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                              <p className="text-xs sm:text-sm text-muted-foreground">ROI</p>
                            </div>
                            <p className="text-lg sm:text-2xl font-bold text-white">{build.roi}</p>
                          </div>
                          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                              <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                              <p className="text-xs sm:text-sm text-muted-foreground">Time Saved</p>
                            </div>
                            <p className="text-lg sm:text-2xl font-bold text-white">{build.timeSaved}</p>
                          </div>
                          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                              <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                              <p className="text-xs sm:text-sm text-muted-foreground">Tasks</p>
                            </div>
                            <p className="text-lg sm:text-2xl font-bold text-white">{build.tasksAutomated}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground italic">
                          Inside the video will give you everything you need to know.
                        </p>
                      </div>
                    </motion.div>

                    {(index + 1) % 10 === 0 && index < builds.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-10 sm:mt-16"
                      >
                        <a href="/schedule/professional">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 sm:px-12 py-4 sm:py-5 bg-primary text-primary-foreground rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all"
                          >
                            Upgrade My Company With AI
                          </motion.button>
                        </a>
                      </motion.div>
                    )}
                  </div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-16"
                >
                  <a href="/schedule/professional">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-12 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all"
                    >
                      Upgrade My Company With AI
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
