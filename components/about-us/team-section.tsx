'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/placeholder.svg?height=150&width=250&text=John+Doe',
  },
  {
    name: 'Jane Smith',
    position: 'COO',
    image: '/placeholder.svg?height=150&width=250&text=Jane+Smith',
  },
  {
    name: 'Mike Johnson',
    position: 'Technical Director',
    image: '/placeholder.svg?height=150&width=250&text=Mike+Johnson',
  },
];

export function TeamSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Our Leadership Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: (teamMembers.length + index) * 0.2,
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
