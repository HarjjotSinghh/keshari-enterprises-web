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
          className="text-3xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Ready to Breathe New Life into Your Bearings?
        </motion.h2>
        <motion.p
          className="mb-8 text-xl max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Contact us today to learn more about our bearing refurbishment services and how we can
          help you reduce costs and improve efficiency.
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
