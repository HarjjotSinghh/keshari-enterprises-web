'use client';

import { motion } from 'framer-motion';

const steps = [
  'Submit your application',
  'Initial screening',
  'Technical assessment',
  'Interview process',
  'Final decision',
];

export function ApplicationProcess() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Application Process
        </motion.h2>
        <ol className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              className="flex items-center mb-4"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: index * 0.5, // Staggered animation based on index
              }}
              viewport={{ once: true }}
            >
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                <span className="mt-1.5">{index + 1}</span>
              </div>
              <span>{step}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
