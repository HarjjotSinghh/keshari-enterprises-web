'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function NewsletterSignup() {
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
          Stay Informed
        </motion.h2>
        <motion.p
          className="mb-8 text-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Subscribe to our newsletter to receive the latest news, product updates, and industry
          insights.
        </motion.p>
        <motion.form
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-full md:w-64 text-black"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
