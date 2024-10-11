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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WelcomeSection() {
  const reasons = [
    {
      title: 'Decades of Expertise',
      description: 'Over 35 years of experience in the industry.',
    },
    {
      title: 'Wide Product Range',
      description: 'Extensive inventory from top global brands.',
    },
    {
      title: 'Unmatched Service',
      description: 'From diagnostics to maintenance, we are with you at every step.',
    },
    {
      title: 'Customer-Centric Approach',
      description: 'Your success is our mission.',
    },
  ];

  return (
    <section className="">
      <div className="bg-gradient-to-b from-primary to-100% from-50% to-primary/80 text-white py-16">
        <div className="mx-auto px-4 max-w-7xl">
          <motion.h2
            className="text-4xl font-bold mb-4 text-pretty"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            Welcome to Keshari Enterprises
            <br /> <span className="text-xl">Precision in Every Spin!</span>
          </motion.h2>
          <motion.p
            className="mb-4 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
                  <h3 className="lg:text-xl text-lg font-semibold">Bearing Selection Wizard</h3>
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
          <Dialog>
            <DialogTrigger asChild>
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
                      <h3 className="lg:text-xl text-lg font-semibold">Locations</h3>
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
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Keshari Enterprises Locations</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold">Silvassa</h4>
                  <p>
                    Gokul Darshan, B Wing, Shop No. 2,
                    <br />
                    Near Canara Bank, Tokarkhada,
                    <br />
                    Silvassa, Dadra Nagar & Haveli & Daman & Diu
                    <br />
                    Pin: 396230
                    <br />
                    Tel: 2632995; Mob: 93 286 20 115
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Morbi</h4>
                  <p>
                    Plot No .15,16, Axar Business Centre,
                    <br />
                    Ratareshwar, Morbi,
                    <br />
                    Pin-363642
                    <br />
                    Mob: +91 81 282 84 788
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Vapi</h4>
                  <p>
                    Office No. 140 ,<br />
                    1st Floor, Heena Arcade,
                    <br />
                    Char Rasta, GIDC, Vapi
                    <br />
                    Gujarat, Vapi
                    <br />
                    Pin-396195
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Mumbai</h4>
                  <p>
                    Room No. 18C, Luxmi Building,
                    <br />
                    3rd Floor , 126/128, Nagdevi Street,
                    <br />
                    Masjid Bundar (E), Mumbai
                    <br />
                    Pin-400003
                    <br />
                    Tel: 022-40059230
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
                  <h3 className="lg:text-xl text-lg font-semibold">News & Events</h3>
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
      <motion.div
        className="bg-gray-100 py-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8 text-center">Why Choose Keshari Enterprises?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.7 * index }}
              >
                <h4 className="text-xl font-bold mb-1">{reason.title}</h4>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg">
            Join us in our journey to redefine reliability and performance in every industry we
            serve.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="mt-8 text-center mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.6 }}
      >
        <p className="text-3xl font-bold mb-8 max-w-2xl mx-auto">
          Explore our range, discover our services, and see how we can help your business achieve
          excellence with every turn.
        </p>
        <Link href="/products">
          <Button variant="default" className="text-xl px-10 py-4 h-14">
            Explore Our Products
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
