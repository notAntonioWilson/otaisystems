'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface DripButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  children: React.ReactNode;
}

export const DripButton = forwardRef<HTMLButtonElement, DripButtonProps>(
  ({ children, className, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pulsating purple and white aura glow waves - OUTSIDE button */}
        {isHovered && (
          <>
            {/* Purple aura wave 1 */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                boxShadow: '0 0 60px 20px rgba(139, 92, 246, 0.8)',
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [1, 1.4, 1.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* Purple aura wave 2 */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                boxShadow: '0 0 50px 15px rgba(139, 92, 246, 0.6)',
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [1, 1.4, 1.8],
              }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* White aura wave 1 */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                boxShadow: '0 0 40px 15px rgba(255, 255, 255, 0.9)',
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.3, 1.6],
              }}
              transition={{
                duration: 1.5,
                delay: 0.15,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* White aura wave 2 */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                boxShadow: '0 0 35px 12px rgba(255, 255, 255, 0.7)',
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [1, 1.3, 1.6],
              }}
              transition={{
                duration: 1.5,
                delay: 0.45,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* Purple outer glow */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                boxShadow: '0 0 80px 30px rgba(139, 92, 246, 0.5)',
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [1, 1.5, 2],
              }}
              transition={{
                duration: 1.5,
                delay: 0.6,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          </>
        )}

        <motion.button
          ref={ref}
          className={cn(
            'relative px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 z-10',
            className
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          <span className="relative z-10">{children}</span>

          {/* Drip effect container - INSIDE button */}
          {isHovered && (
            <div className="absolute inset-0 overflow-hidden">
              {/* Multiple drips with staggered animations */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 rounded-full"
                  style={{
                    left: `${16 * i + 8}%`,
                    background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0) 100%)',
                    filter: 'blur(2px)',
                  }}
                  initial={{ height: '0px', top: '0%' }}
                  animate={{
                    height: ['0px', '120%'],
                    top: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.15,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: [0.4, 0, 0.6, 1],
                  }}
                />
              ))}

              {/* Inner glow pulse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          )}
        </motion.button>
      </div>
    );
  }
);

DripButton.displayName = 'DripButton';
