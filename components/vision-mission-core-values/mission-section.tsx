'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function MissionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-xl text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          To provide reliable, innovative, and efficient solutions that cater to the specific needs
          of our clients, supported by a broad range of products and professional services,
          including diagnostics and maintenance.
        </motion.p>
      </div>
    </section>
  );
}
