'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Icon } from '@iconify/react';
import { MapPin } from 'lucide-react';
const locations = [
  {
    city: 'Silvassa',
    address: '123 Industrial Area, Silvassa, Dadra and Nagar Haveli 396230',
    phone: '+91 1234567890',
    email: 'silvassa@kesharienterprises.com',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1812836849363!2d73.0076!3d20.2756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce5cf5f5e4a1%3A0x7c3aa6d94f2f96ae!2sKeshari%20Enterprises!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin',
  },
  {
    city: 'Vapi',
    address: '456 GIDC, Vapi, Gujarat 396195',
    phone: '+91 9876543210',
    email: 'vapi@kesharienterprises.com',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1812836849363!2d72.9076!3d20.3756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce5cf5f5e4a1%3A0x7c3aa6d94f2f96ae!2sKeshari%20Enterprises!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin',
  },
  {
    city: 'Morbi',
    address: '789 Ceramic Zone, Morbi, Gujarat 363642',
    phone: '+91 8765432109',
    email: 'morbi@kesharienterprises.com',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.1812836849363!2d71.0076!3d22.2756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce5cf5f5e4a1%3A0x7c3aa6d94f2f96ae!2sKeshari%20Enterprises!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin',
  },
  {
    city: 'Mumbai',
    address:
      'Room No. 18C, Luxmi Building, 3rd Floor, 126/128, Nagdcvi Street, Masjid Bundar (E), Mumbai, Pin-400003',
    phone: '022-40030230',
    email: 'mumbai@kesharienterprises.com',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.1812836849363!2d71.0076!3d22.2756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce5cf5f5e4a1%3A0x7c3aa6d94f2f96ae!2sKeshari%20Enterprises!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin',
  },
];

export function LocationList() {
  return (
    <section className="py-16 bg-primary/[0.03]">
      <div className="container mx-auto lg:px-8 px-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
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
                  <CardTitle className="text-xl font-bold inline-flex items-center gap-2">
                    <MapPin className="size-icon" />
                    {location.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-0">
                  <p className="mb-2">{location.address}</p>
                  <a href={`tel:${location.phone}`} className="mb-2">
                    Phone: {location.phone}
                  </a>
                  {location.email && (
                    <a href={`mailto:${location.email}`}>Email: {location.email}</a>
                  )}
                  {location.mapEmbedUrl && (
                    <div className="aspect-w-16 aspect-h-9 mt-4">
                      <iframe
                        src={location.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
