'use client';

import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AboutUsPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <img
              src="/images/about-us.jpg"
              alt="Keshari Enterprises"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-extrabold mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
              viewport={{ once: true }}
            >
              Your Partner in Every Revolution – Since 1988
            </motion.h2>
            <motion.p
              className="mb-6"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
              viewport={{ once: true }}
            >
              Established in 1988, we have been at the forefront of industrial supply, consistently
              delivering high-quality bearings and components that empower industries to run better,
              faster, and smarter.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/about-us">
                <Button>Learn More About Us</Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
