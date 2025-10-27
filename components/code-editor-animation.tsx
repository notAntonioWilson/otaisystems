'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const codeLines = [
  { text: 'import tensorflow as tf', indent: 0, color: '#9B5CF6', type: 'keyword' },
  { text: 'from automation import WorkflowEngine', indent: 0, color: '#9B5CF6', type: 'keyword' },
  { text: '', indent: 0, color: '#666', type: 'empty' },
  { text: '# Initialize AI automation engine', indent: 0, color: '#666', type: 'comment' },
  { text: 'class AIWorkflow:', indent: 0, color: '#9B5CF6', type: 'keyword' },
  { text: '  def __init__(self, config):', indent: 1, color: '#60a5fa', type: 'function' },
  { text: '    self.model = tf.keras.Model()', indent: 2, color: '#ddd', type: 'code' },
  { text: '    self.threshold = config.max_threshold', indent: 2, color: '#ddd', type: 'code' },
  { text: '', indent: 0, color: '#666', type: 'empty' },
  { text: '  def analyze_workflow(self, data):', indent: 1, color: '#60a5fa', type: 'function' },
  { text: '    if data.efficiency < self.threshold:', indent: 2, color: '#9B5CF6', type: 'keyword' },
  { text: '      self.trigger_automation(data)', indent: 3, color: '#ddd', type: 'code' },
  { text: '      return {"status": "active"}', indent: 3, color: '#ddd', type: 'code' },
  { text: '', indent: 0, color: '#666', type: 'empty' },
  { text: '  def optimize_performance(self):', indent: 1, color: '#60a5fa', type: 'function' },
  { text: '    return self.model.predict() * 2.5', indent: 2, color: '#ddd', type: 'code' },
];

export function CodeEditorAnimation() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [cursorPos, setCursorPos] = useState({ line: 6, visible: true });

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollOffset((prev) => {
        if (prev >= codeLines.length - 10) return 0;
        return prev + 1;
      });
    }, 3000);

    const cursorInterval = setInterval(() => {
      setCursorPos(prev => ({
        line: (prev.line + 1) % 10,
        visible: true
      }));
    }, 1500);

    return () => {
      clearInterval(scrollInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const visibleLines = codeLines.slice(scrollOffset, scrollOffset + 10);

  return (
    <div className="relative w-full h-64 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-black/95 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

        <motion.div
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-900/80 to-black/80 border-b border-white/5"
          animate={{
            boxShadow: [
              '0 0 10px rgba(155, 92, 246, 0.1)',
              '0 0 20px rgba(155, 92, 246, 0.2)',
              '0 0 10px rgba(155, 92, 246, 0.1)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
          </div>
          <div className="text-[10px] text-gray-500 ml-3 font-mono">ai_system.py</div>
          <div className="ml-auto text-[9px] text-purple-400 font-mono">Building automation engine...</div>
        </motion.div>

        <div className="p-4 font-mono text-[11px] h-44 relative bg-black/50 overflow-hidden">
          {visibleLines.map((line, index) => (
            <motion.div
              key={`${scrollOffset}-${index}`}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center leading-5"
            >
              <span className="text-gray-700 mr-3 select-none w-5 text-right text-[10px]">
                {scrollOffset + index + 1}
              </span>
              <span
                style={{
                  color: line.color,
                  paddingLeft: `${line.indent * 16}px`
                }}
              >
                {line.text || '\u00A0'}
              </span>
              {index === cursorPos.line && line.type !== 'empty' && (
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-0.5 inline-block w-1.5 h-4 bg-purple-400"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
