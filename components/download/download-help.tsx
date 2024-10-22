'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function DownloadHelp() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto lg:px-8 px-6 text-center">
        <motion.h2
          className="text-3xl font-extrabold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Need Help Finding a Resource?
        </motion.h2>
        <motion.p
          className="mb-8 text-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our team is here to assist you in finding the right documentation for your needs.
        </motion.p>
        <Link href="/contact">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button variant="secondary" size="lg">
              Contact Support
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
