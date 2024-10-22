'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const newsItems = [
  {
    title: 'Keshari Enterprises Expands Product Line',
    date: '2023-04-15',
    summary:
      "We're excited to announce the addition of new high-performance bearings to our product catalog.",
  },
  {
    title: 'Industry Insights: The Future of Bearings',
    date: '2023-03-22',
    summary:
      'Our experts discuss emerging trends and technologies shaping the future of bearings in various industries.',
  },
  {
    title: 'Keshari Enterprises Achieves ISO 9001:2015 Certification',
    date: '2023-02-10',
    summary:
      "We're proud to announce our recent ISO 9001:2015 certification, reinforcing our commitment to quality.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function NewsList() {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-8 px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p>{item.summary}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
