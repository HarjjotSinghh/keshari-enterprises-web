'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function EnquiryForm() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Submit Your Enquiry
        </motion.h2>
        <motion.form className="max-w-2xl mx-auto">
          {['name', 'email', 'phone', 'product', 'message'].map((field, index) => (
            <motion.div
              key={field}
              className="mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <label htmlFor={field} className="block mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  id={field}
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  required={field !== 'phone' && field !== 'message'}
                />
              ) : (
                <textarea
                  id={field}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  required
                ></textarea>
              )}
            </motion.div>
          ))}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
            viewport={{ once: true }}
          >
            <Button type="submit" className="w-full">
              Submit Enquiry
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
