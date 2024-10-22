'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ContactForm() {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.form
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {['name', 'email', 'subject', 'message'].map((field) => (
            <motion.div
              key={field}
              className="mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <label htmlFor={field} className="block mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  className="w-full lg:px-8 px-6 py-2 rounded-md border border-gray-300"
                  required
                />
              ) : (
                <textarea
                  id={field}
                  rows={4}
                  className="w-full lg:px-8 px-6 py-2 rounded-md border border-gray-300"
                  required
                ></textarea>
              )}
            </motion.div>
          ))}
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
