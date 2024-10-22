'use client';

import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProductSupport() {
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
          Need Help Choosing the Right Product?
        </motion.h2>
        <motion.p
          className="mb-8 text-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our team of experts is here to assist you in finding the perfect solution for your needs.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/enquiry">
            <Button size="lg" variant="secondary">
              Get Expert Advice
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
