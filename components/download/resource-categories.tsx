'use client';

import { motion } from 'framer-motion';

const categories = [
  'Product Catalogs',
  'Technical Datasheets',
  'Installation Guides',
  'Maintenance Manuals',
  'Case Studies',
];

export function ResourceCategories() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Resource Categories
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className="bg-white px-4 py-2 rounded-md shadow hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
