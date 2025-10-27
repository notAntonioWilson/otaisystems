'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
          ? 'glass-card border-b border-purple-500/20'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/logo.png"
                alt="OTAI Systems Logo"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>
            <span className="text-2xl font-black gradient-text">OTAI SYSTEMS</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              Process
            </button>
            <Link
              href="/proof"
              className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              Proof
            </Link>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <motion.button
              onClick={() => scrollToSection('book')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold uppercase text-sm tracking-wider neon-glow-sm"
            >
              Book a call
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
