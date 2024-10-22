'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Keshari Enterprises' expert consultation saved us time and money by recommending the perfect bearings for our production line.",
    author: 'John Doe, Manufacturing Manager',
  },
  {
    quote:
      'The installation support we received was top-notch. It ensured our new bearings were set up correctly from day one.',
    author: 'Jane Smith, Plant Engineer',
  },
  {
    quote:
      "Their maintenance services have significantly reduced our downtime. We couldn't be happier with the results.",
    author: 'Mike Johnson, Operations Director',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServiceTestimonials() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto lg:px-8 px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold">- {testimonial.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
