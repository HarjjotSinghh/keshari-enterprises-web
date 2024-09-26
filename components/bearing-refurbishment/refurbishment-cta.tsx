'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function RefurbishmentCTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-extrabold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Renew, Reuse, Revive – Expert Bearing Refurbishment Services
        </motion.h2>
        <motion.p
          className="mb-8 text-xl max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Why discard when you can refurbish? Our expert technicians use state-of-the-art techniques
          to restore your bearings to their original glory, saving you both time and money.
        </motion.p>
        <Link href="/enquiry">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="secondary">
              Request a Refurbishment Quote
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
