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
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

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

// const clientLogos = [
//   'https://img.logoipsum.com/332.svg',
//   'https://img.logoipsum.com/330.svg',
//   'https://img.logoipsum.com/329.svg',
//   'https://img.logoipsum.com/317.svg',
//   'https://img.logoipsum.com/297.svg',
// ];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProductCarousel({
  items,
  title,
  className,
}: {
  items: { name: string; image: string }[];
  title: string;
  className?: string;
}) {
  return (
    <section className={cn('py-16 bg-gray-50', className)}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="md:text-4xl text-3xl font-extrabold mb-4 text-center"
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
                  className="text-xl font-extrabold text-white text-left w-full mx-auto max-w-7xl"
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
      text: 'Keshari Enterprises has been our go-to supplier for bearings for over a decade. Their quality products and exceptional service have significantly improved our operations.',
      author: 'John Doe, Manufacturing Manager at XYZ Industries',
    },
    {
      text: "The expertise of Keshari Enterprises in providing custom solutions for our specialized machinery has been invaluable. Their team's knowledge and support are unmatched.",
      author: 'Jane Smith, Chief Engineer at ABC Textiles',
    },
    {
      text: "We've seen a notable reduction in downtime since switching to Keshari Enterprises for our bearing needs. Their products are reliable, and their maintenance services are top-notch.",
      author: 'Mike Johnson, Operations Director at DEF Steel',
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
                    <p className="text-base mb-4 text-pretty">&quot;{testimonial.text}&quot;</p>
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
      <main className="">
        {/* Hero Section */}
        <section className="relative bg-primary/[0.03]">
          <HeroCarousel />
        </section>
        <section>
          <WelcomeSection />
        </section>

        {/* Products Sections */}
        <ProductCarousel
          className="bg-primary/[0.03]"
          items={products.schaeffler}
          title="Schaeffler Products"
        />
        <ProductCarousel items={products.bonfiglioli} title="Bonfiglioli Products" />
        <ProductCarousel
          className="bg-primary/[0.03]"
          items={products.dodge}
          title="Dodge Products"
        />

        {/* Industry Solutions Sections */}
        <ProductCarousel
          items={industrySolutions.schaeffler}
          title="Schaeffler Industry Solutions"
        />
        <ProductCarousel
          items={industrySolutions.bonfiglioli}
          className="bg-primary/[0.03]"
          title="Bonfiglioli Industry Solutions"
        />

        {/* Corporate Video Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              className="md:text-4xl text-3xl font-extrabold text-center mb-8"
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
        <section className="py-16 bg-primary/[0.03]">
          <div className="container mx-auto px-4">
            <motion.h2
              className="md:text-4xl text-3xl font-extrabold mb-8 text-center"
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
      </main>
      {/* <ContactForm /> */}
    </div>
  );
}
