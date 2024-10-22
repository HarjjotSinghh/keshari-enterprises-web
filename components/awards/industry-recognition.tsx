'use client';

// Start of Selection
import { motion } from 'framer-motion';

export function IndustryRecognition() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Industry Recognition
        </motion.h2>
        <motion.p
          className="text-lg text-center max-w-3xl mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Keshari Enterprises has been recognized by various industry bodies for our commitment to
          quality, innovation, and customer service. Our achievements reflect our dedication to
          excellence in the industrial parts distribution sector.
        </motion.p>
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <img
            src="https://static6.depositphotos.com/1000975/601/i/450/depositphotos_6017768-stock-photo-star-award-against-gradient-background.jpg"
            alt="Industry Recognition"
            className="mx-auto rounded-lg shadow-lg aspect-video md:max-w-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
