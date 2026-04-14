'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.04, ease: "easeOut" },
  }),
};

/* All proof images flattened for lightbox navigation */
const proofImages = [
  '/images/proof/IMAGE_2026-04-14_18_42_46.jpg','/images/proof/IMAGE_2026-04-14_18_46_18.jpg','/images/proof/Screenshot_2026-04-14_at_6_55_18_PM.png','/images/proof/Screenshot_2026-04-14_at_6_55_50_PM.png','/images/proof/Screenshot_2026-04-14_at_6_55_39_PM.png','/images/proof/IMAGE_2026-04-14_18_44_10.jpg','/images/proof/IMAGE_2026-04-14_18_43_56.jpg','/images/proof/Screenshot_2026-02-12_at_1_19_03_PM.png','/images/proof/IMAGE_2026-04-14_18_44_08.jpg','/images/proof/Screenshot_2025-10-14_at_11_00_21_AM.png','/images/proof/Screenshot_2026-01-04_at_1_25_31_PM.png','/images/proof/Screenshot_2026-02-02_at_5_27_50_PM.png','/images/proof/Screenshot_2026-01-04_at_1_25_14_PM.png','/images/proof/IMAGE_2026-04-14_18_43_45.jpg','/images/proof/IMG_2416.PNG','/images/proof/IMG_0695.PNG','/images/proof/IMG_0689.PNG','/images/proof/IMG_0442.PNG','/images/proof/IMG_0690.PNG','/images/proof/Screenshot_2026-02-14_at_2_40_50_PM.png','/images/proof/Screenshot_2026-02-14_at_2_40_39_PM.png','/images/proof/IMAGE_2026-04-14_18_47_08.jpg','/images/proof/proof.webp','/images/proof/proof3.webp',
  '/images/proof/testimonail_joshFairchild.png','/images/proof/IMAGE_2026-04-14_18_45_54.jpg','/images/proof/Screenshot_2026-02-03_at_11_38_38_PM.png','/images/proof/Screenshot_2026-04-14_at_6_54_27_PM.png','/images/proof/Screenshot_2026-04-14_at_6_56_02_PM.png','/images/proof/IMAGE_2026-04-14_18_43_42.jpg','/images/proof/IMAGE_2026-04-14_18_44_18.jpg','/images/proof/Screenshot_2026-02-02_at_5_27_44_PM.png','/images/proof/IMAGE_2026-04-14_18_43_51.jpg','/images/proof/IMAGE_2026-04-14_18_44_16.jpg','/images/proof/Screenshot_2026-01-05_at_1_22_42_PM.png','/images/proof/IMAGE_2026-04-14_18_43_58.jpg','/images/proof/IMAGE_2026-04-14_18_43_49.jpg','/images/proof/IMAGE_2026-04-14_18_43_54.jpg','/images/proof/IMG_1664.PNG','/images/proof/IMG_0693.PNG','/images/proof/IMG_0691.PNG','/images/proof/IMG_0687.PNG','/images/proof/IMG_0688.PNG','/images/proof/Screenshot_2026-02-14_at_2_40_10_PM.png','/images/proof/Screenshot_2026-02-14_at_2_41_20_PM.png','/images/proof/Screenshot_2026-02-14_at_2_41_04_PM.png','/images/proof/IMAGE_2026-04-14_18_47_12.jpg','/images/proof/proof2.webp','/images/proof/proof4.webp',
  '/images/proof/IMAGE_2026-04-14_18_42_49.jpg','/images/proof/Screenshot_2026-04-14_at_6_53_05_PM.png','/images/proof/Screenshot_2026-04-14_at_6_53_54_PM.png','/images/proof/Screenshot_2026-04-14_at_6_53_38_PM.png','/images/proof/Screenshot_2026-04-14_at_6_58_41_PM.png','/images/proof/Screenshot_2026-04-14_at_6_55_03_PM.png','/images/proof/Screenshot_2026-04-14_at_6_54_38_PM.png','/images/proof/Screenshot_2026-02-03_at_11_39_37_PM.png','/images/proof/Screenshot_2026-04-14_at_6_56_12_PM.png','/images/proof/IMAGE_2026-04-14_18_44_14.jpg','/images/proof/Screenshot_2026-02-12_at_1_19_12_PM.png','/images/proof/IMAGE_2026-04-14_18_43_46.jpg','/images/proof/IMAGE_2026-04-14_18_44_12.jpg','/images/proof/Screenshot_2025-10-14_at_11_00_45_AM.png','/images/proof/Screenshot_2026-02-05_at_12_42_04_PM.png','/images/proof/IMAGE_2026-04-14_18_43_59.jpg','/images/proof/Screenshot_2026-01-05_at_1_22_30_PM.png','/images/proof/IMAGE_2026-04-14_18_44_01.jpg','/images/proof/IMG_2047.PNG','/images/proof/IMG_0694.PNG','/images/proof/IMG_0696.PNG','/images/proof/IMG_0685.PNG','/images/proof/IMG_0692.PNG','/images/proof/IMG_0686.PNG','/images/proof/IMAGE_2026-04-14_18_47_32.jpg',
];

/* Balanced columns: texts > n8n > make > instantly > social > other */
const columns: string[][] = [
  ['/images/proof/IMAGE_2026-04-14_18_42_46.jpg','/images/proof/IMAGE_2026-04-14_18_46_18.jpg','/images/proof/Screenshot_2026-04-14_at_6_55_18_PM.png','/images/proof/Screenshot_2026-04-14_at_6_55_50_PM.png','/images/proof/Screenshot_2026-04-14_at_6_55_39_PM.png','/images/proof/IMAGE_2026-04-14_18_44_10.jpg','/images/proof/IMAGE_2026-04-14_18_43_56.jpg','/images/proof/Screenshot_2026-02-12_at_1_19_03_PM.png','/images/proof/IMAGE_2026-04-14_18_44_08.jpg','/images/proof/Screenshot_2025-10-14_at_11_00_21_AM.png','/images/proof/Screenshot_2026-01-04_at_1_25_31_PM.png','/images/proof/Screenshot_2026-02-02_at_5_27_50_PM.png','/images/proof/Screenshot_2026-01-04_at_1_25_14_PM.png','/images/proof/IMAGE_2026-04-14_18_43_45.jpg','/images/proof/IMG_2416.PNG','/images/proof/IMG_0695.PNG','/images/proof/IMG_0689.PNG','/images/proof/IMG_0442.PNG','/images/proof/IMG_0690.PNG','/images/proof/Screenshot_2026-02-14_at_2_40_50_PM.png','/images/proof/Screenshot_2026-02-14_at_2_40_39_PM.png','/images/proof/IMAGE_2026-04-14_18_47_08.jpg','/images/proof/proof.webp','/images/proof/proof3.webp'],
  ['/images/proof/testimonail_joshFairchild.png','/images/proof/IMAGE_2026-04-14_18_45_54.jpg','/images/proof/Screenshot_2026-02-03_at_11_38_38_PM.png','/images/proof/Screenshot_2026-04-14_at_6_54_27_PM.png','/images/proof/Screenshot_2026-04-14_at_6_56_02_PM.png','/images/proof/IMAGE_2026-04-14_18_43_42.jpg','/images/proof/IMAGE_2026-04-14_18_44_18.jpg','/images/proof/Screenshot_2026-02-02_at_5_27_44_PM.png','/images/proof/IMAGE_2026-04-14_18_43_51.jpg','/images/proof/IMAGE_2026-04-14_18_44_16.jpg','/images/proof/Screenshot_2026-01-05_at_1_22_42_PM.png','/images/proof/IMAGE_2026-04-14_18_43_58.jpg','/images/proof/IMAGE_2026-04-14_18_43_49.jpg','/images/proof/IMAGE_2026-04-14_18_43_54.jpg','/images/proof/IMG_1664.PNG','/images/proof/IMG_0693.PNG','/images/proof/IMG_0691.PNG','/images/proof/IMG_0687.PNG','/images/proof/IMG_0688.PNG','/images/proof/Screenshot_2026-02-14_at_2_40_10_PM.png','/images/proof/Screenshot_2026-02-14_at_2_41_20_PM.png','/images/proof/Screenshot_2026-02-14_at_2_41_04_PM.png','/images/proof/IMAGE_2026-04-14_18_47_12.jpg','/images/proof/proof2.webp','/images/proof/proof4.webp'],
  ['/images/proof/IMAGE_2026-04-14_18_42_49.jpg','/images/proof/Screenshot_2026-04-14_at_6_53_05_PM.png','/images/proof/Screenshot_2026-04-14_at_6_53_54_PM.png','/images/proof/Screenshot_2026-04-14_at_6_53_38_PM.png','/images/proof/Screenshot_2026-04-14_at_6_58_41_PM.png','/images/proof/Screenshot_2026-04-14_at_6_55_03_PM.png','/images/proof/Screenshot_2026-04-14_at_6_54_38_PM.png','/images/proof/Screenshot_2026-02-03_at_11_39_37_PM.png','/images/proof/Screenshot_2026-04-14_at_6_56_12_PM.png','/images/proof/IMAGE_2026-04-14_18_44_14.jpg','/images/proof/Screenshot_2026-02-12_at_1_19_12_PM.png','/images/proof/IMAGE_2026-04-14_18_43_46.jpg','/images/proof/IMAGE_2026-04-14_18_44_12.jpg','/images/proof/Screenshot_2025-10-14_at_11_00_45_AM.png','/images/proof/Screenshot_2026-02-05_at_12_42_04_PM.png','/images/proof/IMAGE_2026-04-14_18_43_59.jpg','/images/proof/Screenshot_2026-01-05_at_1_22_30_PM.png','/images/proof/IMAGE_2026-04-14_18_44_01.jpg','/images/proof/IMG_2047.PNG','/images/proof/IMG_0694.PNG','/images/proof/IMG_0696.PNG','/images/proof/IMG_0685.PNG','/images/proof/IMG_0692.PNG','/images/proof/IMG_0686.PNG','/images/proof/IMAGE_2026-04-14_18_47_32.jpg'],
];

const websites = [
  { name: 'Next Level Carpentry', url: 'https://www.nextlvlcarpentry.com/', tag: 'Contractor' },
  { name: 'Tony Berdych Realty', url: 'https://www.tonyberdych.com/', tag: 'Real Estate' },
  { name: 'Jennifer Zardus Realty', url: 'https://www.jenniferzardusrealtor.com/', tag: 'Real Estate' },
  { name: 'Client Website', url: 'https://websitedisplaydomain.com/', tag: 'Business' },
  { name: 'Nexa Lines', url: 'https://www.nexalines.com/', tag: 'AI Startup' },
  { name: 'OTAI Marketing', url: 'https://otaimarketing.com', tag: 'Marketing' },
  { name: 'OTAI Agents', url: 'https://otaiagents.com', tag: 'AI Agents' },
  { name: 'OTAI Outreach', url: 'https://otaioutreach.com', tag: 'Outreach' },
  { name: 'OTAI Reactivates', url: 'https://otaireactivates.com', tag: 'Reactivation' },
  { name: 'OTAI Automates', url: 'https://otaiautomates.com', tag: 'Automation' },
];

export default function ProofPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative pt-28 pb-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 beam-bg" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/30 text-xs tracking-widest uppercase">
                Proof
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-bold mb-5 leading-[1.1] text-3xl md:text-4xl lg:text-5xl text-white">
              This is some of our proof.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-8 leading-[1.7] max-w-2xl mx-auto">
              Real dashboards. Real client conversations. Real automation workflows. Real results — nothing fabricated, nothing staged.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('wall')} className="px-6 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
                See the Proof Wall
              </button>
              <button onClick={() => scrollToSection('websites')} className="px-6 py-3 rounded-lg border border-primary/30 text-sm font-semibold text-white hover:border-primary/60 hover:bg-primary/5 transition-all duration-300">
                Websites We Built
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* N8N NOTE */}
      <section className="px-6 lg:px-8 pb-10">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-5 text-center max-w-3xl mx-auto border border-primary/20">
            <p className="text-sm text-muted-foreground leading-[1.7]">
              <span className="text-primary font-semibold">Full n8n automations and live workflow demos</span> are shown in our YouTube demo videos on the{' '}
              <Link href="/#demos" className="text-primary hover:text-primary/80 underline underline-offset-4">homepage</Link>
              {' '}and{' '}
              <Link href="/automations" className="text-primary hover:text-primary/80 underline underline-offset-4">automations page</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MASONRY PROOF WALL */}
      <section id="wall" className="px-6 lg:px-8 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {col.map((src, imgIndex) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: (imgIndex % 4) * 0.05, duration: 0.4 }}
                    className="relative rounded-xl overflow-hidden cursor-pointer group"
                    style={{ boxShadow: '0 0 20px 2px rgba(139, 92, 246, 0.15), 0 0 6px 1px rgba(139, 92, 246, 0.1)' }}
                    onClick={() => setLightboxIndex(proofImages.indexOf(src))}
                  >
                    <div className="absolute inset-0 rounded-xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300 z-10 pointer-events-none" />
                    <div className="bg-card/60 p-1.5 rounded-xl">
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={src}
                          alt="Client proof"
                          className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITES WE BUILT */}
      <section id="websites" className="py-20 px-6 lg:px-8 bg-card/20 border-y border-primary/10">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs tracking-widest uppercase">Live Websites</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Websites we built.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-[1.7]">Every site below was designed, built, and deployed by OTAI Systems.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {websites.map((site, i) => (
              <motion.a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="glass-card rounded-xl p-5 flex flex-col group hover:border-primary/40 transition-all duration-300"
              >
                <span className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 self-start mb-3">{site.tag}</span>
                <p className="text-sm font-semibold text-white mb-2 group-hover:text-primary transition-colors">{site.name}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary/70 transition-colors mt-auto">
                  <ExternalLink className="w-3 h-3" />
                  <span className="truncate">{site.url.replace('https://', '').replace('http://', '').replace(/\/$/, '')}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 beam-bg opacity-40" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-[1.1]">Ready to be next?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-[1.7]">Book a strategy call with Antonio. We&apos;ll show you exactly what we&apos;d build for your business.</p>
            <Link href="/#book" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-[110]"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-[110] text-white text-2xl"
              >
                ‹
              </button>
            )}
            {lightboxIndex < proofImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-[110] text-white text-2xl"
              >
                ›
              </button>
            )}
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={proofImages[lightboxIndex]}
              alt="Proof detail"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
