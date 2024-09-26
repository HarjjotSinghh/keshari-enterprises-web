'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'Schaeffler (FAG & INA)', logo: '/images/schaeffler-logo.png' },
  { name: 'NBC', logo: '/images/nbc-logo.png' },
  { name: 'RMP', logo: '/images/rmp-logo.png' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturedBrands() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Our Featured Brands
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }} // Staggered animation
              viewport={{ once: true }}
            >
              <img src={brand.logo} alt={brand.name} className="h-24 mx-auto mb-4" />
              <p className="font-semibold">{brand.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
