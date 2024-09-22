'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Cost Savings',
    description: 'Refurbishment can be significantly cheaper than purchasing new bearings.',
  },
  {
    title: 'Extended Lifespan',
    description: 'Properly refurbished bearings can last as long as new ones.',
  },
  {
    title: 'Reduced Downtime',
    description: 'Quick turnaround times mean less disruption to your operations.',
  },
  {
    title: 'Environmentally Friendly',
    description: 'Refurbishment reduces waste and conserves resources.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function BenefitsOfRefurbishment() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Benefits of Bearing Refurbishment
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
                delay: (benefits.length - index - 1) * 0.2,
              }} // Staggered animation
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
