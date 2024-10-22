'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const coreValues = [
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

export function CoreValuesSection() {
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
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }} // Staggered animation
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
