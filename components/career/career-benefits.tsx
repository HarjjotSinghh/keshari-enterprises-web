'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Professional Growth',
    description: 'Opportunities for continuous learning and career advancement.',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and generous time-off policies.',
  },
  {
    title: 'Competitive Compensation',
    description: 'Attractive salary packages and performance-based bonuses.',
  },
  {
    title: 'Health and Wellness',
    description: 'Comprehensive health insurance and wellness programs.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function CareerBenefits() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Why Work With Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: index * 0.2, // Staggered animation based on index
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
