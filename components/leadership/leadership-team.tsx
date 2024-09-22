'use client';

import { motion } from 'framer-motion';

const leaders = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/placeholder.svg?height=150&width=150',
    bio: 'John has over 25 years of experience in the industrial parts industry and has been leading Keshari Enterprises since 2005.',
  },
  {
    name: 'Jane Smith',
    position: 'COO',
    image: '/placeholder.svg?height=150&width=150',
    bio: 'Jane brings 20 years of operational expertise to Keshari Enterprises, ensuring smooth and efficient business processes.',
  },
  {
    name: 'Mike Johnson',
    position: 'Technical Director',
    image: '/placeholder.svg?height=150&width=150',
    bio: 'With a Ph.D. in Mechanical Engineering, Mike leads our technical team in providing cutting-edge solutions to our clients.',
  },
];

export function LeadershipTeam() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Leadership Team
          </motion.span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover aspect-square"
              />
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-gray-600 mb-2">{leader.position}</p>
              <p className="text-sm">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
