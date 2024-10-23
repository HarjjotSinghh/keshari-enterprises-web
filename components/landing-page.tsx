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
import { ChevronRightCircle, MapPin, Newspaper } from 'lucide-react';
import { WelcomeSection } from './welcome-section';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

// const industrySolutions = {
//   schaeffler: [
//     {
//       name: 'Mining and Processing',
//       image: 'https://www.premierbearing.com/img/home/old/in-1.jpg',
//     },
//     { name: 'Wind Power', image: 'https://www.premierbearing.com/img/home/old/in-2.jpg' },
//     { name: 'Railway', image: 'https://www.premierbearing.com/img/home/old/in-3.jpg' },
//     { name: 'Automotive', image: 'https://www.premierbearing.com/img/home/old/in-4.jpg' },
//     { name: 'Aerospace', image: 'https://www.premierbearing.com/img/home/old/in-5.jpg' },
//     {
//       name: 'Industrial Automation',
//       image: 'https://www.premierbearing.com/img/home/old/in-6.jpg',
//     },
//   ],
//   bonfiglioli: [
//     { name: 'Food & Beverage', image: 'https://www.premierbearing.com/img/home/old/in-7.jpg' },
//     { name: 'Intralogistics', image: 'https://www.premierbearing.com/img/home/old/in-8.jpg' },
//     { name: 'Logistics', image: 'https://www.premierbearing.com/img/home/old/in-9.jpg' },
//     { name: 'Renewable Energy', image: 'https://www.premierbearing.com/img/home/old/in-10.jpg' },
//     { name: 'Construction', image: 'https://www.premierbearing.com/img/home/old/in-11.jpg' },
//     { name: 'Agriculture', image: 'https://www.premierbearing.com/img/home/old/in-12.jpg' },
//   ],
// };

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
  imageSrc,
}: {
  items: { name: string; image: string }[];
  title: string;
  className?: string;
  imageSrc: string;
}) {
  return (
    <section className={cn('py-16 bg-foreground/[0.02]', className)}>
      <div className="overflow-x-clip">
        <Image
          src={imageSrc}
          alt={title}
          width={1920}
          height={475}
          className="w-full h-auto sm:mb-8 mb-24 select-none rounded-lg sm:scale-100 scale-[175%] overflow-x-clip"
          draggable={false}
        />
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
          className="w-full max-w-7xl mx-auto lg:px-8 px-6"
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
      image: '/image1.jpg',
      title: 'Bringing World-Class Solutions',
    },
    {
      image: '/image2.jpg',
      title: 'Sourced From Global Leaders',
    },
    {
      image: '/image3.jpg',
      title: 'Innovative Industrial Solutions',
    },
    {
      image: '/image4.jpg',
      title: 'Keshari Enterprises',
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
      <CarouselContent className="-ml-0">
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index} className="-pl-0.5">
            <div className="relative">
              <img
                src={slide.image}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover aspect-[16/7] object-top"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-b from-transparent to-primary to-90% lg:px-24 px-16 ">
                <motion.h1
                  className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-white text-left w-full mr-auto sm:mb-16 mb-4 max-w-7xl"
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
          imageSrc="/schaeffler.png"
        />
        <ProductCarousel
          className="bg-primary/[0.03]"
          items={products.bonfiglioli}
          title="NBC Products"
          imageSrc="/nbc.png"
        />
        <ProductCarousel
          className="bg-primary/[0.03]"
          items={products.dodge}
          title="RMP Products"
          imageSrc="/rmp.png"
        />
        <div className="max-w-7xl mx-auto lg:px-8 px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* <motion.div
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
                  src="https://bearingwizard.com/wp-content/uploads/sites/2/gestaltung-lagerung.jpg"
                  alt="Bearing Selection Wizard"
                  className="w-full h-52 select-none object-cover mb-4 rounded"
                />
                <p className="text-sm text-gray-600">Find the perfect bearing for your needs</p>
              </CardContent>
            </Card>
          </motion.div> */}
            <Link href="/locations">
              <motion.div
                className="cursor-pointer transition-shadow"
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
                      src="https://www.infront.com/wp-content/uploads/2019/10/ranking-for-multiple-locations-1.jpg"
                      alt="Locations Map"
                      className="w-full h-52 select-none object-cover mb-4 rounded"
                    />
                    <p className="text-sm text-foreground/[0.7]">
                      Find Keshari Enterprises near you
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>

            <motion.div
              className="cursor-pointer transition-shadow"
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
                      {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <img
                            draggable={false}
                            src={
                              index % 2 === 0
                                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG33xrttLSjtADIUZOsavhbTS8170G5T3dVA&s'
                                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZBgQRasUMTYTeVcvVWVVeNm-vFxSBddaQg&s'
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
                  <p className="text-sm text-foreground/[0.7]">
                    Stay updated with our latest news and events
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Industry Solutions Sections */}
        {/* <ProductCarousel
          items={industrySolutions.schaeffler}
          title="Schaeffler Industry Solutions"
        />
        <ProductCarousel
          items={industrySolutions.bonfiglioli}
          className="bg-primary/[0.03]"
          title="Bonfiglioli Industry Solutions"
        /> */}

        {/* Corporate Video Section */}
        <section className="pt-20 bg-foreground/[0.02]">
          <div className="overflow-x-clip">
            {/* <Image
              src="/corporate video.png"
              alt="Corporate Video"
              width={1920}
              height={475}
              className="w-full h-auto sm:mb-8 mb-24 select-none rounded-lg sm:scale-100 scale-[200%] overflow-x-clip"
              draggable={false}
            /> */}
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
        <section className="py-20 bg-primary/[0.03]">
          <div className="overflow-x-clip">
            <Image
              src="/testimonials.png"
              alt="Testimonials"
              width={1920}
              height={475}
              className="w-full h-auto sm:mb-8 mb-24 select-none rounded-lg sm:scale-100 scale-[200%] overflow-x-clip"
              draggable={false}
            />
            <TestimonialCarousel />
          </div>
        </section>
      </main>
      {/* <ContactForm /> */}
    </div>
  );
}
