'use client';

import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ContactCTA() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-extrabold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="mb-8 text-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact us today to discuss how we can help your business achieve excellence with every
          turn.
        </motion.p>
        <Link href="/contact">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
