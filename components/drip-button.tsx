'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface DripButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  children: React.ReactNode;
}

export const DripButton = forwardRef<HTMLButtonElement, DripButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          'group relative px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg overflow-hidden transition-all duration-300',
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>

        {/* Drip effect container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Multiple drips with staggered animations */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 bg-primary/60 blur-sm"
              style={{
                left: `${12.5 * i + 10}%`,
                top: '-20px',
                height: '0px',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
              }}
              initial={{ height: '0px', top: '-20px' }}
              whileHover={{
                height: ['0px', '150%'],
                top: ['-20px', '100%'],
                transition: {
                  duration: 1.2,
                  delay: i * 0.1,
                  ease: [0.4, 0, 0.6, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5,
                },
              }}
            />
          ))}

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40 opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 1, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
        </div>

        {/* Pulsating purple and white aura glow waves */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Purple aura wave 1 */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              boxShadow: '0 0 40px 10px rgba(139, 92, 246, 0.6)',
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0],
              scale: [1, 1, 1],
            }}
            whileHover={{
              opacity: [0, 0.8, 0],
              scale: [1, 1.3, 1.6],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              },
            }}
          />

          {/* Purple aura wave 2 */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              boxShadow: '0 0 40px 10px rgba(139, 92, 246, 0.5)',
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0],
              scale: [1, 1, 1],
            }}
            whileHover={{
              opacity: [0, 0.6, 0],
              scale: [1, 1.3, 1.6],
              transition: {
                duration: 2,
                delay: 0.4,
                repeat: Infinity,
                ease: 'easeOut',
              },
            }}
          />

          {/* White aura wave 1 */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              boxShadow: '0 0 30px 8px rgba(255, 255, 255, 0.7)',
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0],
              scale: [1, 1, 1],
            }}
            whileHover={{
              opacity: [0, 0.9, 0],
              scale: [1, 1.2, 1.5],
              transition: {
                duration: 2,
                delay: 0.2,
                repeat: Infinity,
                ease: 'easeOut',
              },
            }}
          />

          {/* White aura wave 2 */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              boxShadow: '0 0 30px 8px rgba(255, 255, 255, 0.5)',
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0],
              scale: [1, 1, 1],
            }}
            whileHover={{
              opacity: [0, 0.7, 0],
              scale: [1, 1.2, 1.5],
              transition: {
                duration: 2,
                delay: 0.6,
                repeat: Infinity,
                ease: 'easeOut',
              },
            }}
          />

          {/* Purple outer glow */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              boxShadow: '0 0 60px 20px rgba(139, 92, 246, 0.4)',
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0, 0],
              scale: [1, 1, 1],
            }}
            whileHover={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.4, 1.8],
              transition: {
                duration: 2,
                delay: 0.8,
                repeat: Infinity,
                ease: 'easeOut',
              },
            }}
          />
        </div>
      </motion.button>
    );
  }
);

DripButton.displayName = 'DripButton';
