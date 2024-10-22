'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Best Industrial Distributor 2022',
    organization: 'Indian Manufacturing Excellence Awards',
    year: 2022,
  },
  {
    title: 'Innovation in Supply Chain Management',
    organization: 'Supply Chain Leaders Summit',
    year: 2021,
  },
  {
    title: 'Customer Service Excellence',
    organization: 'Industrial Business Awards',
    year: 2020,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AwardsList() {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Our Awards
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: (awards.length - index - 1) * 0.2,
              }} // Staggered animation
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{award.organization}</p>
                  <p className="text-gray-600">Year: {award.year}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
