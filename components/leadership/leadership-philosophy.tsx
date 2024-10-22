'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function LeadershipPhilosophy() {
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
          Our Leadership Philosophy
        </motion.h2>
        <motion.p
          className="text-lg text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Keshari Enterprises, our leadership is guided by a commitment to innovation, integrity,
          and customer-centricity. We believe in fostering a culture of continuous improvement and
          empowering our team to deliver exceptional value to our clients. Our leaders are dedicated
          to driving sustainable growth while maintaining the highest standards of quality and
          service in the industry.
        </motion.p>
      </div>
    </section>
  );
}
