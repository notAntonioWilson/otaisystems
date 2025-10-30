'use client';

import { motion } from 'framer-motion';

export function EnergyTransfer() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-black/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl pointer-events-none" />

        <div className="relative flex items-center justify-center md:justify-between gap-4 md:gap-8">
          <div className="relative z-10 flex-1">
            <div className="px-3 md:px-4 py-2 md:py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 backdrop-blur-sm">
              <div className="text-white font-semibold text-xs md:text-sm tracking-wide text-center">
                OTAI System
              </div>
              <div className="text-purple-400 text-[9px] md:text-[10px] text-center mt-1 font-mono">
                Active
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 md:px-8">
            <svg
              viewBox="0 0 200 60"
              className="w-full h-full"
              style={{ maxHeight: '60px' }}
            >
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9B5CF6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#9B5CF6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                </linearGradient>

                <filter id="flowGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <motion.line
                x1="20"
                y1="30"
                x2="180"
                y2="30"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                filter="url(#flowGlow)"
                strokeDasharray="100 100"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={i}
                  r="3"
                  fill="#9B5CF6"
                  filter="url(#flowGlow)"
                  initial={{ cx: 20, cy: 30, opacity: 0 }}
                  animate={{
                    cx: [20, 180],
                    opacity: [0, 1, 0.8, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}

              <motion.polygon
                points="175,30 165,25 165,35"
                fill="#9B5CF6"
                filter="url(#flowGlow)"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>
          </div>

          <motion.div
            className="relative z-10 flex-1"
            animate={{
              filter: [
                'drop-shadow(0 0 10px rgba(155, 92, 246, 0.3))',
                'drop-shadow(0 0 25px rgba(155, 92, 246, 0.6))',
                'drop-shadow(0 0 10px rgba(155, 92, 246, 0.3))',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="px-3 md:px-4 py-2 md:py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/30 backdrop-blur-sm">
              <div className="text-white font-semibold text-xs md:text-sm tracking-wide text-center">
                Your Company
              </div>
              <motion.div
                className="text-purple-400 text-[9px] md:text-[10px] text-center mt-1 font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Deploying...
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-2 md:bottom-3 left-4 md:left-6 text-[9px] md:text-[10px] text-gray-600 font-mono">
          System integration in progress
        </div>
      </div>
    </div>
  );
}
