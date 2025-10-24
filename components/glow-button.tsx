'use client';

import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends ButtonProps {
  glow?: boolean;
}

export function GlowButton({ className, glow = true, children, ...props }: GlowButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button
        className={cn(
          'relative font-semibold transition-all duration-300',
          glow && 'hover:glow-accent',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
