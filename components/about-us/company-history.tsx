'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function CompanyHistory() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Your Partner in Every Revolution – Since 1988
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            className="mb-8 md:mb-0"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          >
            <img
              src="/logo.png"
              alt="Keshari Enterprises History"
              className="rounded-lg aspect-square object-contain max-w-sm"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          >
            <p className="mb-4">
              Established in 1988, Keshari Enterprises has been at the forefront of industrial
              supply for over three decades. We have consistently delivered high-quality bearings
              and components that empower industries to run better, faster, and smarter.
            </p>
            <p>
              With a robust presence in Silvassa, Vapi, and Morbi, we are strategically positioned
              to serve the needs of diverse sectors across India. Our partnership with global giants
              like Schaeffler (FAG & INA), NBC, and RMP means that we offer only the best to our
              clients, backed by unparalleled support and service.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
