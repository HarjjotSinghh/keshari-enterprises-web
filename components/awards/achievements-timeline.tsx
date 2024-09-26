'use client';

import { motion } from 'framer-motion';

const achievements = [
  { year: 1988, description: 'Keshari Enterprises founded' },
  { year: 1995, description: 'Became authorized distributor for Schaeffler' },
  { year: 2005, description: 'Expanded operations to cover all of India' },
  { year: 2015, description: 'Launched innovative online ordering system' },
  { year: 2022, description: 'Reached milestone of serving 10,000+ customers' },
];

export function AchievementsTimeline() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Our Journey of Achievements</h2>
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="flex mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.5 }} // Staggered animation
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-24 text-right mr-4">
                <span className="font-extrabold">{achievement.year}</span>
              </div>
              <div className="flex-grow pl-4 border-l-2 border-primary">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.5 }} // Staggered animation
                  viewport={{ once: true }}
                >
                  {achievement.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
