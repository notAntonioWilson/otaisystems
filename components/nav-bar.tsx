'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DripButton } from '@/components/drip-button';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/30">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold gradient-text">OTAI Systems</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
            >
              Process
            </button>
            <Link
              href="/proof"
              className="text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
            >
              Proof
            </Link>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
            >
              Pricing
            </button>
            <DripButton
              onClick={() => scrollToSection('book')}
              className="px-6 py-2 text-base"
            >
              Contact
            </DripButton>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
