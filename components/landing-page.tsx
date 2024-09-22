'use client';

import * as React from 'react';
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
import Image from 'next/image';
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
        <h2 className="text-5xl font-bold mb-8 text-center uppercase">{title}</h2>
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
                      <ChevronRightCircle className="size-5" />
                      {/* <a href="#" className="text-red-600 hover:underline">Learn More</a> */}
                    </CardContent>
                  </Card>
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
                <h1 className="text-4xl font-bold text-white text-left w-full mx-auto max-w-7xl">
                  {slide.title}
                </h1>
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
      text: 'Premier Bearings is a testament to an excellent partner in providing reliable supplies and service.',
      author: 'Happy Customer 1',
    },
    {
      text: 'Their expertise and product range have significantly improved our operations.',
      author: 'Satisfied Client 2',
    },
    {
      text: 'Exceptional service and top-quality products make Premier Bearings our go-to supplier.',
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
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <blockquote className="text-center">
                  <p className="text-lg mb-4 text-pretty">&quot;{testimonial.text}&quot;</p>
                  <cite className="">- {testimonial.author}</cite>
                </blockquote>
              </CardContent>
            </Card>
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
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img
            src="/placeholder.svg?height=50&width=150"
            alt="Premier Bearings Logo"
            className="h-12"
          />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className=" hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-red-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-red-600">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-red-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-red-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
            <h2 className="text-5xl font-bold mb-8 text-center">Corporate Video</h2>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/oGGHE6YXBlo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 text-center">Testimonials</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Clientele Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 text-center">Our Clientele</h2>
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
                    <div className="p-1">
                      <img
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        className="h-60 w-60 mx-auto rounded-xl"
                      />
                    </div>
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
      <footer className="bg-gray-800 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Left column */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <nav>
              <ul className="space-y-2 font-bold">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:underline">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="/news-events" className="hover:underline">
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:underline">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:underline">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry" className="hover:underline">
                    Enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/publications" className="hover:underline">
                    Schaeffler Publications
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex space-x-2 mt-4">
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Center columns */}
          <div className="w-full md:w-1/2 flex flex-wrap mb-6 md:mb-0">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="font-bold text-lg mb-2">ABOUT</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Premier Bearings
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/vision" className="hover:underline">
                    Vision, Mission & Values
                  </Link>
                </li>
                <li>
                  <Link href="/leadership" className="hover:underline">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/awards" className="hover:underline">
                    Awards
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-bold text-lg mb-2">PRODUCTS & SOLUTIONS</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/schaeffler" className="hover:underline">
                    Schaeffler
                  </Link>
                </li>
                <li>
                  <Link href="/bonfiglioli" className="hover:underline">
                    Bonfiglioli
                  </Link>
                </li>
                <li>
                  <Link href="/dodge" className="hover:underline">
                    Dodge Industrial
                  </Link>
                </li>
              </ul>
              <Link href={'#'} className="hover:underline">
                <h2 className="font-bold text-lg mt-4">Bearing Refurbishment</h2>
              </Link>
              <Link href={'#'} className="hover:underline">
                <h2 className="font-bold text-lg mt-2">Career</h2>
              </Link>
              <Link href={'#'} className="hover:underline">
                <h2 className="font-bold text-lg mt-2">Contact Us</h2>
              </Link>
              <Link href={'#'} className="hover:underline">
                <h2 className="font-bold text-lg mt-2">Clientele</h2>
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/4">
            <Image
              src="/placeholder.svg"
              alt="Certified by Schaeffler"
              width={240}
              height={80}
              className="bg-white p-2"
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="container mx-auto mt-8 pt-4 border-t border-gray-300 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link href="/disclaimer" className="hover:underline mr-4">
              Disclaimer
            </Link>
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
          </div>
          <div className="w-full md:w-auto text-sm">premierbearings 2019</div>
        </div>
      </footer>
    </div>
  );
}
