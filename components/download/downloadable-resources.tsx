'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const resources = [
  {
    title: 'Bearing Selection Guide',
    category: 'Product Catalogs',
    fileSize: '5.2 MB',
    fileType: 'PDF',
  },
  {
    title: 'FAG Super Precision Bearings Datasheet',
    category: 'Technical Datasheets',
    fileSize: '2.8 MB',
    fileType: 'PDF',
  },
  {
    title: 'Bearing Installation Best Practices',
    category: 'Installation Guides',
    fileSize: '3.5 MB',
    fileType: 'PDF',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function DownloadableResources() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-extrabold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Available Resources
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Category: {resource.category}</p>
                  <p className="mb-4">
                    {resource.fileSize} | {resource.fileType}
                  </p>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
