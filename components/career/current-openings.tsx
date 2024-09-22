'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const openings = [
  {
    title: 'Sales Engineer',
    department: 'Sales',
    location: 'Mumbai, India',
    type: 'Full-time',
  },
  {
    title: 'Technical Support Specialist',
    department: 'Customer Service',
    location: 'Silvassa, India',
    type: 'Full-time',
  },
  {
    title: 'Marketing Coordinator',
    department: 'Marketing',
    location: 'Delhi, India',
    type: 'Full-time',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function CurrentOpenings() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Current Job Openings
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: index * 0.2, // Staggered animation based on index
              }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Department: {job.department}</p>
                  <p className="mb-2">Location: {job.location}</p>
                  <p className="mb-4">Type: {job.type}</p>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
