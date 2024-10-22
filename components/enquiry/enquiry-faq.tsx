'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What information should I include in my enquiry?',
    answer:
      "Please include details about the specific product you're interested in, your application requirements, and any technical specifications that might be relevant.",
  },
  {
    question: 'How long does it typically take to receive a response?',
    answer: 'We aim to respond to all enquiries within 24-48 hours during business days.',
  },
  {
    question: 'Can I request a product sample?',
    answer:
      'Yes, you can request product samples in your enquiry. Our team will review your request and get back to you with further details.',
  },
  {
    question: 'What if I need technical support after purchasing a product?',
    answer:
      'Our customer service team is available to assist with technical support. Please contact us at support@example.com for further assistance.',
  },
];

export function EnquiryFAQ() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
