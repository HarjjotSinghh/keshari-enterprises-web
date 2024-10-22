'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const events = [
  {
    title: 'Bearing Technology Seminar',
    date: '2023-05-20',
    location: 'Mumbai, India',
  },
  {
    title: 'Industrial Automation Expo',
    date: '2023-06-15',
    location: 'Delhi, India',
  },
  {
    title: 'Keshari Enterprises Annual Customer Meet',
    date: '2023-07-10',
    location: 'Silvassa, India',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function EventCalendar() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto lg:px-8 px-6">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }} // Staggered animation
            >
              <Card>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
