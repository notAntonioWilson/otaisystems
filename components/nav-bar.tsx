'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, Home, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const serviceLinks = [
    { label: 'All Services', href: '/services' },
    { label: 'Backend Systems', href: '/services/backend-systems' },
    { label: 'AI Agents', href: '/services/ai-agents' },
    { label: 'Automated Outreach', href: '/services/automated-outreach' },
    { label: 'AI Built Applications', href: '/services/ai-built-applications' },
    { label: 'Multi-Service', href: '/services/multi-service' },
  ];

  const navLinks = [
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'About', href: '/about' },
  ];

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 relative">
                <Image src="/images/logo.png" alt="OTAI Systems Logo" width={28} height={28} sizes="28px" className="object-contain brightness-0 invert" />
              </div>
              <span className="text-xl font-bold text-primary">OTAI Systems</span>
            </Link>

            <div className="hidden md:flex items-center gap-7">
              {!isHome && (
                <Link href="/" className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  <Home className="w-3.5 h-3.5" />
                  Home
                </Link>
              )}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                  Services <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', servicesOpen && 'rotate-180')} />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="w-60 rounded-xl bg-card border border-primary/20 shadow-xl glow-accent-sm p-2">
                        {serviceLinks.map((item, i) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
                            className={cn(
                              'block px-3 py-2 rounded-lg text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-colors',
                              i === 0 && 'font-semibold text-primary border-b border-primary/10 mb-1 rounded-b-none'
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
              <motion.button
                onClick={() => scrollToSection('book')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Book a Call
              </motion.button>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden" onClick={closeMobile} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed top-20 right-0 bottom-0 w-72 bg-card border-l border-border z-40 md:hidden overflow-y-auto">
              <div className="flex flex-col p-6 space-y-3">
                {!isHome && (
                  <Link href="/" onClick={closeMobile} className="flex items-center gap-1.5 text-base font-medium text-foreground hover:text-primary transition-colors py-2">
                    <Home className="w-4 h-4" /> Home
                  </Link>
                )}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Services <ChevronDown className={cn('w-4 h-4 transition-transform', mobileServicesOpen && 'rotate-180')} />
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col pl-4 border-l border-primary/20 space-y-1">
                    {serviceLinks.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeMobile} className="text-sm text-muted-foreground hover:text-primary transition-colors py-1.5">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} onClick={closeMobile} className="text-base font-medium text-foreground hover:text-primary transition-colors py-2">
                    {link.label}
                  </Link>
                ))}
                <button onClick={() => { closeMobile(); scrollToSection('book'); }} className="mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-base text-center">Book a Call</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
