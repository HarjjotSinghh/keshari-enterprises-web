'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const categories = [
  {
    name: 'Bearings',
    items: [
      'Ball Bearings',
      'Spherical Roller Bearings',
      'Angular Contact Bearings',
      'Slewing Ring Bearings',
      'FAG Super Precision Bearings',
      'INA Bearings',
    ],
  },
  {
    name: 'Associated Products',
    items: [
      'Oil Seals',
      'O-Rings & Gaskets',
      'Linear Products',
      'Special Bearings',
      'EVO QUICK Gaskets',
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProductCategories() {
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
          Our Product Categories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="mb-2"
                        initial="hidden"
                        viewport={{ once: true }}
                        whileInView="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: itemIndex * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
