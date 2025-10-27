'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const codeLines = [
  { text: 'class AIWorkflow:', indent: 0, color: '#60a5fa' },
  { text: '  def analyze(self, data):', indent: 1, color: '#9B5CF6' },
  { text: '    if data.threshold > max:', indent: 2, color: '#9B5CF6' },
  { text: '      self.trigger_automation()', indent: 3, color: '#ddd' },
  { text: '      return status.active', indent: 3, color: '#ddd' },
  { text: '  def optimize(self):', indent: 1, color: '#9B5CF6' },
  { text: '    return self.performance * 2', indent: 2, color: '#ddd' },
];

export function CodeEditorAnimation() {
  const [visibleLines, setVisibleLines] = useState<number[]>([0, 1, 2, 3]);
  const [cursorLine, setCursorLine] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        const startIndex = (prev[0] + 1) % codeLines.length;
        return [
          startIndex,
          (startIndex + 1) % codeLines.length,
          (startIndex + 2) % codeLines.length,
          (startIndex + 3) % codeLines.length,
        ];
      });
      setCursorLine((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-black/95 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

        <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-900/80 to-black/80 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
          </div>
          <div className="text-[10px] text-gray-500 ml-3 font-mono">ai_system.py</div>
          <div className="ml-auto text-[9px] text-gray-600 font-mono">Building AI...</div>
        </div>

        <div className="p-4 font-mono text-xs space-y-1.5 h-44 relative bg-black/50">
          <AnimatePresence mode="wait">
            {visibleLines.map((lineIndex, displayIndex) => (
              <motion.div
                key={`${lineIndex}-${displayIndex}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <span className="text-gray-700 mr-3 select-none w-4 text-right text-[10px]">
                  {displayIndex + 1}
                </span>
                <span
                  style={{
                    color: codeLines[lineIndex].color,
                    paddingLeft: `${codeLines[lineIndex].indent * 12}px`
                  }}
                >
                  {codeLines[lineIndex].text}
                </span>
                {displayIndex === cursorLine && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1 inline-block w-1.5 h-3.5 bg-purple-400"
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
