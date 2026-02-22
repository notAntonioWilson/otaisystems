'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Zap, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

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
    { icon: Linkedin, href: 'https://www.linkedin.com/company/otaisystems/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/otai.systems?igsh=bDRiaDQxdzdtcDR0&utm_source=qr', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1Bi6GWYdqe/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/antoniowilsonx?s=21', label: 'Twitter' },
  ];

  return (
    <footer className="relative border-t border-primary/10 bg-card/30 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#32005C]/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="space-y-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-5 group">
                <div className="w-7 h-7 relative">
                  <Image
                    src="/images/logo.png"
                    alt="OTAI Systems Logo"
                    width={28}
                    height={28}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-xl font-bold gradient-text">OTAI Systems</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-5 leading-[1.6] max-w-md">
                Building the AI infrastructure of tomorrow's most dominant businesses.
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

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-semibold mb-3 text-white">Navigation</h3>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                  >
                    AI Agents
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                  >
                    Automations
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                  >
                    Outreach & Lead Gen
                  </Link>
                  <Link
                    href="/coming-soon"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                  >
                    Proof
                  </Link>
                  <button
                    onClick={() => scrollToSection('qualify')}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
                  >
                    Work With Us
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-3 text-white">Legal</h3>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-base font-semibold mb-4 text-white">Book a Call</h3>
            <div className="glass-card rounded-xl overflow-hidden">
              <iframe
                src="https://cal.com/otai-systems/30min-professional"
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none'
                }}
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © OTAI Systems 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
