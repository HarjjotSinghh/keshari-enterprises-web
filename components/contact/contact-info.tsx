'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone',
    content: '+91 1234567890',
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    content: 'info@kesharienterprises.com',
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Address',
    content: '123 Industrial Area, Silvassa, Dadra and Nagar Haveli 396230, India',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ContactInfo() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto lg:px-8 px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center">
          <motion.span
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            Contact Information
          </motion.span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
              <p>{detail.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
