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
          'relative px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg transition-all duration-300',
          className
        )}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 30px 5px rgba(255, 255, 255, 0.5)'
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

DripButton.displayName = 'DripButton';
