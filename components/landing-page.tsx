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
    {
      name: 'Mechanical Bearings',
      image: 'https://www.premierbearing.com/img/dodge/product-img1.jpg',
    },
    { name: 'Lubrication', image: 'https://www.premierbearing.com/img/homepage/product-img2.jpg' },
    {
      name: 'Digital Services',
      image: 'https://www.premierbearing.com/img/homepage/product-img6.jpg',
    },
    {
      name: 'Linear Guides',
      image: 'https://www.premierbearing.com/img/homepage/product-img3.jpg',
    },
    {
      name: 'Condition Monitoring',
      image: 'https://www.premierbearing.com/img/homepage/product-img4.jpg',
    },
    {
      name: 'Maintenance Tools',
      image: 'https://www.premierbearing.com/img/homepage/product-img5.jpg',
    },
  ],
  bonfiglioli: [
    {
      name: 'Gear Units',
      image: 'https://www.premierbearing.com/img/bonfiglioil/product-img7.jpg',
    },
    {
      name: 'Gear Motors',
      image: 'https://www.premierbearing.com/img/bonfiglioil/product-img8.jpg',
    },
    {
      name: 'Electric Motors',
      image: 'https://www.premierbearing.com/img/bonfiglioil/product-img9.jpg',
    },
    {
      name: 'Inverters',
      image: 'https://www.premierbearing.com/img/bonfiglioil/product-img10.jpg',
    },
    {
      name: 'Servo Systems',
      image: 'https://www.premierbearing.com/img/bonfiglioil/product-img11.jpg',
    },
    {
      name: 'Planetary Gearboxes',
      image: 'https://www.premierbearing.com/img/bonfiglioil/product-img12.jpg',
    },
  ],
  dodge: [
    {
      name: 'Mounted Bearings',
      image: 'https://www.premierbearing.com/img/dodge/product-img1.jpg',
    },
    {
      name: 'Enclosed Gearing',
      image: 'https://www.premierbearing.com/img/dodge/product-img2.jpg',
    },
    {
      name: 'Mechanical Power Transmission',
      image: 'https://www.premierbearing.com/img/dodge/product-img3.jpg',
    },
    { name: 'Couplings', image: 'https://www.premierbearing.com/img/dodge/product-img1.jpg' },
    {
      name: 'Conveyor Components',
      image: 'https://www.premierbearing.com/img/dodge/product-img2.jpg',
    },
    {
      name: 'Overload Clutches',
      image: 'https://www.premierbearing.com/img/dodge/product-img3.jpg',
    },
  ],
};

const industrySolutions = {
  schaeffler: [
    {
      name: 'Mining and Processing',
      image: 'https://www.premierbearing.com/img/home/old/in-1.jpg',
    },
    { name: 'Wind Power', image: 'https://www.premierbearing.com/img/home/old/in-2.jpg' },
    { name: 'Railway', image: 'https://www.premierbearing.com/img/home/old/in-3.jpg' },
    { name: 'Automotive', image: 'https://www.premierbearing.com/img/home/old/in-4.jpg' },
    { name: 'Aerospace', image: 'https://www.premierbearing.com/img/home/old/in-5.jpg' },
    {
      name: 'Industrial Automation',
      image: 'https://www.premierbearing.com/img/home/old/in-6.jpg',
    },
  ],
  bonfiglioli: [
    { name: 'Food & Beverage', image: 'https://www.premierbearing.com/img/home/old/in-7.jpg' },
    { name: 'Intralogistics', image: 'https://www.premierbearing.com/img/home/old/in-8.jpg' },
    { name: 'Logistics', image: 'https://www.premierbearing.com/img/home/old/in-9.jpg' },
    { name: 'Renewable Energy', image: 'https://www.premierbearing.com/img/home/old/in-10.jpg' },
    { name: 'Construction', image: 'https://www.premierbearing.com/img/home/old/in-11.jpg' },
    { name: 'Agriculture', image: 'https://www.premierbearing.com/img/home/old/in-12.jpg' },
  ],
};

const clientLogos = [
  'https://img.logoipsum.com/332.svg',
  'https://img.logoipsum.com/330.svg',
  'https://img.logoipsum.com/329.svg',
  'https://img.logoipsum.com/317.svg',
  'https://img.logoipsum.com/297.svg',
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
                          className="w-full h-full  object-cover mb-6"
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
      image: 'https://www.premierbearing.com/img/slides/banner1.webp',
      title: 'Bringing World-Class Solutions',
    },
    {
      image: 'https://www.premierbearing.com/img/slides/banner2.webp',
      title: 'Sourced From Global Leaders',
    },
    {
      image: 'https://www.premierbearing.com/img/slides/banner3.webp',
      title: 'Innovative Industrial Solutions',
    },
    {
      image: 'https://www.premierbearing.com/img/slides/banner4.webp',
      title: 'Premium Bearing Solutions',
    },
    {
      image: 'https://www.premierbearing.com/img/slides/banner5.webp',
      title: 'Customized Industrial Solutions',
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
            <div className="relative">
              <img
                src={slide.image}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-50 lg:px-24 px-16 ">
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
              </div> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
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
                        className="h-16 w-auto mx-auto rounded-xl"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
              <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
            </Carousel>
          </div>
        </section>
      </main>
      <ContactForm />
    </div>
  );
}
