'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { ChevronRightCircle } from 'lucide-react';
import { WelcomeSection } from './welcome-section';
import Link from 'next/link';
import ContactForm from './contact-form';
import Autoplay from 'embla-carousel-autoplay';

const products = {
  schaeffler: [
    { name: 'Mechanical Bearings', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Lubrication', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Digital Services', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Linear Guides', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Condition Monitoring', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Maintenance Tools', image: '/placeholder.svg?height=200&width=200' },
  ],
  bonfiglioli: [
    { name: 'Gear Units', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Gear Motors', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Electric Motors', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Inverters', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Servo Systems', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Planetary Gearboxes', image: '/placeholder.svg?height=200&width=200' },
  ],
  dodge: [
    { name: 'Mounted Bearings', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Enclosed Gearing', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Mechanical Power Transmission', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Couplings', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Conveyor Components', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Overload Clutches', image: '/placeholder.svg?height=200&width=200' },
  ],
};

const industrySolutions = {
  schaeffler: [
    { name: 'Mining and Processing', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Wind Power', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Railway', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Automotive', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Aerospace', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Industrial Automation', image: '/placeholder.svg?height=200&width=300' },
  ],
  bonfiglioli: [
    { name: 'Food & Beverage', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Intralogistics', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Logistics', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Renewable Energy', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Construction', image: '/placeholder.svg?height=200&width=300' },
    { name: 'Agriculture', image: '/placeholder.svg?height=200&width=300' },
  ],
};

const clientLogos = [
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProductCarousel({
  items,
  title,
}: {
  items: { name: string; image: string }[];
  title: string;
}) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-8 text-center uppercase"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {title}
        </motion.h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Link href={`#`} className="p-1">
                  <motion.div
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <Card>
                      <CardHeader className="p-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-40 object-cover mb-4"
                        />
                      </CardHeader>
                      <CardContent className="flex flex-row justify-between items-center p-6 pt-0">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <ChevronRightCircle className="size-6 text-primary" strokeWidth={2.5} />
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
          <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}

function HeroCarousel() {
  const heroSlides = [
    {
      image: '/placeholder.svg?height=500&width=1200&text=Hero 1',
      title: 'Bringing World-Class Solutions',
    },
    {
      image: '/placeholder.svg?height=500&width=1200&text=Hero 2',
      title: 'Sourced From Global Leaders',
    },
    {
      image: '/placeholder.svg?height=500&width=1200&text=Hero 3',
      title: 'Innovative Industrial Solutions',
    },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[500px]">
              <img
                src={slide.image}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-50 lg:px-24 px-16 ">
                <motion.h1
                  className="text-4xl font-bold text-white text-left w-full mx-auto max-w-7xl"
                  initial="hidden"
                  viewport={{ once: true }}
                  whileInView="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {slide.title}
                </motion.h1>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
    </Carousel>
  );
}

function TestimonialCarousel() {
  const testimonials = [
    {
      text: 'Keshari Enterprises is a testament to an excellent partner in providing reliable supplies and service.',
      author: 'Happy Customer 1',
    },
    {
      text: 'Their expertise and product range have significantly improved our operations.',
      author: 'Satisfied Client 2',
    },
    {
      text: 'Exceptional service and top-quality products make Keshari Enterprises our go-to supplier.',
      author: 'Loyal Customer 3',
    },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-3xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <motion.div
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <blockquote className="text-center">
                    <p className="text-lg mb-4 text-pretty">&quot;{testimonial.text}&quot;</p>
                    <cite className="">- {testimonial.author}</cite>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
    </Carousel>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative bg-gray-100">
          <HeroCarousel />
        </section>
        <section>
          <WelcomeSection />
        </section>

        {/* Products Sections */}
        <ProductCarousel items={products.schaeffler} title="SCHAEFFLER PRODUCTS" />
        <ProductCarousel items={products.bonfiglioli} title="BONFIGLIOLI PRODUCTS" />
        <ProductCarousel items={products.dodge} title="DODGE PRODUCTS" />

        {/* Industry Solutions Sections */}
        <ProductCarousel
          items={industrySolutions.schaeffler}
          title="SCHAEFFLER INDUSTRY SOLUTIONS"
        />
        <ProductCarousel
          items={industrySolutions.bonfiglioli}
          title="BONFIGLIOLI INDUSTRY SOLUTIONS"
        />

        {/* Corporate Video Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-5xl font-bold text-center mb-8"
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              Corporate Video
            </motion.h2>
            <motion.iframe
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              src="https://www.youtube.com/embed/oGGHE6YXBlo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full max-w-[800px] max-h-[450px] aspect-video mx-auto"
            ></motion.iframe>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-5xl font-bold mb-8 text-center"
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              Testimonials
            </motion.h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Clientele Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-5xl font-bold mb-8 text-center"
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              Our Clientele
            </motion.h2>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-3xl mx-auto"
            >
              <CarouselContent>
                {clientLogos.map((logo, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                    <motion.div
                      initial="hidden"
                      viewport={{ once: true }}
                      whileInView="visible"
                      variants={fadeInUp}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="p-1"
                    >
                      <img
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        className="h-60 w-60 mx-auto rounded-xl"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
              <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
            </Carousel>
          </div>
        </section>
      </main>
      <ContactForm />
    </div>
  );
}
