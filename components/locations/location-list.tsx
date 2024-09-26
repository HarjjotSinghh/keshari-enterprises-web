'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const locations = [
  {
    city: 'Silvassa',
    address: '123 Industrial Area, Silvassa, Dadra and Nagar Haveli 396230',
    phone: '+91 1234567890',
    email: 'silvassa@kesharienterprises.com',
  },
  {
    city: 'Vapi',
    address: '456 GIDC, Vapi, Gujarat 396195',
    phone: '+91 9876543210',
    email: 'vapi@kesharienterprises.com',
  },
  {
    city: 'Morbi',
    address: '789 Ceramic Zone, Morbi, Gujarat 363642',
    phone: '+91 8765432109',
    email: 'morbi@kesharienterprises.com',
  },
];

export function LocationList() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Our Branch Locations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{location.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{location.address}</p>
                  <p className="mb-2">Phone: {location.phone}</p>
                  <p>Email: {location.email}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
