'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Thorough Inspections',
    description: 'Identifying wear and tear, corrosion, or damage.',
  },
  {
    title: 'Precision Repairs',
    description: 'Restoring bearings to their optimal condition.',
  },
  {
    title: 'Advanced Diagnostics',
    description: 'Ensuring long-term reliability and performance.',
  },
  {
    title: 'Complete Overhauls',
    description: 'Rejuvenating bearings to meet or exceed original specifications.',
  },
];

export function RefurbishmentProcess() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Our Refurbishment Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: index * 0.5,
              }}
            >
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="mt-1.5">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
