'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const statusItems = [
  'System Check',
  'Process Check',
  'Speed Check',
  'Manual Work',
  'Repetitive Tasks'
];

export function RadarSweep() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % statusItems.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-black/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl pointer-events-none" />

        <div className="grid grid-cols-2 gap-6 relative">
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <defs>
                  <filter id="dashGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1"
                />

                <circle
                  cx="60"
                  cy="60"
                  r="35"
                  fill="none"
                  stroke="#444"
                  strokeWidth="1"
                />

                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#9B5CF6"
                  strokeWidth="2"
                  strokeDasharray="4 8"
                  filter="url(#dashGlow)"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '60px 60px' }}
                />

                <motion.circle
                  cx="60"
                  cy="60"
                  r="10"
                  fill="#9B5CF6"
                  filter="url(#dashGlow)"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            {statusItems.map((item, index) => (
              <motion.div
                key={item}
                className="px-3 py-2 rounded-lg border text-xs font-medium transition-all"
                animate={{
                  borderColor: activeIndex === index ? '#9B5CF6' : '#333',
                  backgroundColor: activeIndex === index ? 'rgba(155, 92, 246, 0.1)' : 'rgba(0, 0, 0, 0.3)',
                  boxShadow: activeIndex === index ? '0 0 20px rgba(155, 92, 246, 0.3)' : '0 0 0 rgba(0, 0, 0, 0)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    animate={{
                      backgroundColor: activeIndex === index ? '#9B5CF6' : '#555',
                    }}
                  />
                  <span className={activeIndex === index ? 'text-white' : 'text-gray-400'}>
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-3 left-6 text-[10px] text-gray-600 font-mono">
          Analyzing workflow...
        </div>
      </div>
    </div>
  );
}
