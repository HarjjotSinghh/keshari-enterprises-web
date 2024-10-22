'use client';

// Start of Selection
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServiceOverview() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Our Service Commitment
        </motion.h2>
        <motion.p
          className="text-lg text-center max-w-3xl mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Keshari Enterprises, we are dedicated to providing comprehensive solutions for all your
          industrial bearing needs. Our services go beyond just product supply, encompassing expert
          consultation, installation support, and ongoing maintenance to ensure optimal performance
          of your machinery.
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-lg max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <li>Support for rolling bearings and systems</li>
          <li>Diagnostics and troubleshooting</li>
          <li>Maintenance services</li>
          <li>Custom solutions for specialized applications</li>
        </motion.ul>
      </div>
    </section>
  );
}
