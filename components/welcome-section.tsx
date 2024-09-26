'use client';

import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Newspaper, Wand2 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WelcomeSection() {
  return (
    <section className="">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            Welcome to Keshari Enterprises – Precision in Every Spin!
          </motion.h2>
          <motion.p
            className="mb-4 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          >
            Ever pondered the sheer importance of rotation in our daily lives? From the clock
            ticking on your wall to the powerful machinery in factories, our world thrives on
            seamless, reliable motion. At Keshari Enterprises, we are the silent force behind this
            movement, ensuring that every component turns with precision and reliability.
          </motion.p>
          <motion.p
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
          >
            For over three decades, we have been the trusted partner for industries across India,
            offering world-class bearings and industrial solutions. As authorized distributors of
            leading brands like Schaeffler (FAG & INA), NBC, and RMP, we bring to you the best of
            quality, performance, and innovation. Our mission is simple: To keep your world moving.
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="cursor-pointer hover:shadow-lg transition-shadow"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Wand2 className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="lg:text-2xl text-xl mt-2 font-semibold">
                    Bearing Selection Wizard
                  </h3>
                </div>
                <img
                  draggable={false}
                  src="https://www.premierbearing.com/img/box1.jpg"
                  alt="Bearing Selection Wizard"
                  className="w-full h-52 select-none object-cover mb-4 rounded"
                />
                <p className="text-sm text-gray-600">Find the perfect bearing for your needs</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="cursor-pointer hover:shadow-lg transition-shadow"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="lg:text-2xl text-xl mt-2 font-semibold">Locations</h3>
                </div>
                <img
                  draggable={false}
                  src="https://www.premierbearing.com/img/box2.jpg"
                  alt="Locations Map"
                  className="w-full h-52 select-none object-cover mb-4 rounded"
                />
                <p className="text-sm text-gray-600">Find Keshari Enterprises near you</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="cursor-pointer hover:shadow-lg transition-shadow"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Newspaper className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="lg:text-2xl text-xl mt-2 font-semibold">News & Events</h3>
                </div>
                <Carousel
                  opts={{
                    align: 'center',
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <img
                          draggable={false}
                          src={
                            index % 2 === 0
                              ? 'https://www.premierbearing.com/img/box2.jpg'
                              : 'https://www.premierbearing.com/img/box1.jpg'
                          }
                          alt="News 1"
                          className="w-full h-52 select-none object-cover mb-4 rounded"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
                  <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
                </Carousel>
                <p className="text-sm text-gray-600">
                  Stay updated with our latest news and events
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
