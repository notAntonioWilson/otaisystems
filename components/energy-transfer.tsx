'use client';

import { motion } from 'framer-motion';

export function EnergyTransfer() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl h-full flex items-center justify-between">
        <motion.div
          className="relative z-10 px-6 py-8 rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 30px rgba(155, 92, 246, 0.2)',
          }}
        >
          <div className="text-white font-semibold text-lg tracking-wide whitespace-nowrap">
            OTAI System
          </div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 400 100"
            className="w-full h-full"
            style={{ maxHeight: '100px' }}
          >
            <defs>
              <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B5CF6" stopOpacity="0" />
                <stop offset="50%" stopColor="#9B5CF6" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
              </linearGradient>

              <filter id="energyGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="#9B5CF6"
              filter="url(#energyGlow)"
              initial={{ cx: 50 }}
              animate={{ cx: [50, 350] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5
              }}
            />

            <motion.line
              x1="80"
              y1="50"
              x2="320"
              y2="50"
              stroke="url(#energyGradient)"
              strokeWidth="3"
              filter="url(#energyGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5
              }}
            />

            {[0, 1, 2, 3, 4].map((i) => (
              <motion.circle
                key={i}
                r="2"
                fill="#9B5CF6"
                initial={{ cx: 50, cy: 50, opacity: 0 }}
                animate={{
                  cx: [50, 350],
                  cy: [50, 50 + (Math.random() - 0.5) * 20],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                  repeatDelay: 0.5
                }}
              />
            ))}
          </svg>
        </div>

        <motion.div
          className="relative z-10 px-6 py-8 rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm"
          animate={{
            boxShadow: [
              '0 0 30px rgba(155, 92, 246, 0.2)',
              '0 0 50px rgba(155, 92, 246, 0.6)',
              '0 0 30px rgba(155, 92, 246, 0.2)',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5
          }}
        >
          <div className="text-white font-semibold text-lg tracking-wide whitespace-nowrap">
            Your Company
          </div>
        </motion.div>
      </div>
    </div>
  );
}
