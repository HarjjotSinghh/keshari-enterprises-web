'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProducts = [
  { name: 'Ball Bearings', image: '/images/ball-bearings.jpg' },
  { name: 'Spherical Roller Bearings', image: '/images/spherical-bearings.jpg' },
  { name: 'Angular Contact Bearings', image: '/images/angular-bearings.jpg' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturedProducts() {
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
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/products">
                <Card className=" transition-shadow">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
