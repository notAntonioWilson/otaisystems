'use client';

import Link from 'next/link';
import { Zap, Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
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

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-primary/10 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/30">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold">OTAI Systems</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering businesses with AI automation solutions. Stay connected and see what's
              next — follow us on Social Media.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:glow-accent-sm transition-all duration-300 border border-primary/20"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  Process
                </button>
              </li>
              <li>
                <Link
                  href="/proof"
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  Testimonial & Proof
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('book')}
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services & Legal</h3>
            <ul className="space-y-4 mb-6">
              <li>
                <Link
                  href="/services/ai-sales-automation/data"
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  AI Sales Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-customer-support/data"
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  AI Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/workflow-automation/data"
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  Workflow Automation
                </Link>
              </li>
            </ul>
            <ul className="space-y-4 pt-4 border-t border-border/50">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © OTAI Systems 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
