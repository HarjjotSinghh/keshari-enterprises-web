'use client';

import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  { icon: <Phone className="mr-2 h-6 w-6" />, text: '+91 1234567890' },
  { icon: <Mail className="mr-2 h-6 w-6" />, text: 'enquiry@kesharienterprises.com' },
];

export function EnquiryContact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-extrabold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Need Immediate Assistance?
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
