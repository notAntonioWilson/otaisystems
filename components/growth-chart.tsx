'use client';

import { motion } from 'framer-motion';

const dataPoints = [
  { x: 50, y: 200 },
  { x: 100, y: 180 },
  { x: 150, y: 150 },
  { x: 200, y: 120 },
  { x: 250, y: 80 },
  { x: 300, y: 50 },
];

export function GrowthChart() {
  const pathData = dataPoints
    .map((point, i) => (i === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`))
    .join(' ');

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <svg
        viewBox="0 0 350 250"
        className="w-full h-full"
        style={{ maxWidth: '350px' }}
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>

          <filter id="chartGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#333"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>

        <rect width="350" height="250" fill="url(#grid)" />

        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#chartGradient)"
          strokeWidth="3"
          filter="url(#chartGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1
          }}
        />

        {dataPoints.map((point, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#9B5CF6"
              filter="url(#chartGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: (i / dataPoints.length) * 3,
                repeat: Infinity,
                repeatDelay: 1 + (dataPoints.length - i) * 0.3
              }}
            />

            <motion.circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="none"
              stroke="#9B5CF6"
              strokeWidth="2"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{
                duration: 1,
                delay: (i / dataPoints.length) * 3,
                repeat: Infinity,
                repeatDelay: 1 + (dataPoints.length - i) * 0.3
              }}
            />

            {[0, 1, 2].map((particleIndex) => (
              <motion.circle
                key={particleIndex}
                r="1.5"
                fill="#9B5CF6"
                initial={{
                  cx: point.x,
                  cy: point.y,
                  opacity: 0
                }}
                animate={{
                  cx: point.x + (Math.random() - 0.5) * 30,
                  cy: point.y + (Math.random() - 0.5) * 30,
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: (i / dataPoints.length) * 3 + particleIndex * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1 + (dataPoints.length - i) * 0.3
                }}
              />
            ))}
          </motion.g>
        ))}

        <motion.text
          x="175"
          y="230"
          textAnchor="middle"
          fill="#999"
          fontSize="12"
          fontFamily="var(--font-satoshi), sans-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          Continuous Evolution
        </motion.text>
      </svg>
    </div>
  );
}
