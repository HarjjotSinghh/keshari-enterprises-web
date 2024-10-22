'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    title: 'Quality',
    description:
      'We are committed to offering only the highest quality products from leading global brands.',
  },
  {
    title: 'Reliability',
    description: 'We build trust with our clients through consistent service and support.',
  },
  {
    title: 'Expertise',
    description:
      'We leverage decades of industry experience to provide informed guidance and solutions.',
  },
  {
    title: 'Innovation',
    description:
      'We continuously update our offerings to include the latest technologies and products.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function OurValues() {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: (values.length + index) * 0.2,
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
