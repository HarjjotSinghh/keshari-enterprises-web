'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WelcomeSection() {
  const reasons = [
    {
      icon: <Icon className="size-icon" icon="carbon:business-processes" />,
      title: 'Decades of Expertise',
      description: 'Over 35 years of experience in the industry.',
    },
    {
      icon: <Icon className="size-icon" icon="ant-design:product-outlined" />,
      title: 'Wide Product Range',
      description: 'Extensive inventory from top global brands.',
    },
    {
      icon: <Icon className="size-icon" icon="ri:service-line" />,
      title: 'Unmatched Service',
      description: 'From diagnostics to maintenance, we are with you at every step.',
    },
    {
      icon: <Icon className="size-icon" icon="lineicons:customer" />,
      title: 'Customer-Centric Approach',
      description: 'Your success is our mission.',
    },
  ];

  return (
    <section className="">
      <div className="bg-gradient-to-b from-primary to-100% from-50% to-primary/80 text-white pt-0 pb-16">
        <div className="overflow-x-clip">
          <Image
            src="/welcome.png"
            alt="Welcome to Keshari Enterprises"
            width={1920}
            height={475}
            className="w-full h-auto mb-4 select-none rounded-lg sm:scale-100 scale-[115%] overflow-x-clip"
            draggable={false}
          />
          <div className="mx-auto lg:px-8 px-6 max-w-7xl">
            <motion.p
              className="mb-4 max-w-3xl mx-auto text-center lg:text-lg text-base"
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
              className="max-w-3xl mx-auto text-center lg:text-lg text-base"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
            >
              For over three decades, we have been the trusted partner for industries across India,
              offering world-class bearings and industrial solutions. As authorized distributors of
              leading brands like Schaeffler (FAG & INA), NBC, and RMP, we bring to you the best of
              quality, performance, and innovation. Our mission is simple: To keep your world
              moving.
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        className="bg-foreground/[0.02] pb-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2 }}
      >
        <div className="overflow-x-clip">
          <Image
            src="/why choose.png"
            alt="Why Choose Us"
            width={1920}
            height={475}
            className="w-full h-auto sm:mb-8 mb-24 select-none rounded-lg sm:scale-100 scale-[170%] overflow-x-clip"
            draggable={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto lg:px-8 px-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.7 * index }}
              >
                <h4 className="text-xl font-bold mb-1 inline-flex items-center gap-2">
                  {reason.icon}
                  {reason.title}
                </h4>
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
        className=" text-center overflow-x-clip"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.6 }}
      >
        <Image
          src="/explore our range.png"
          alt="Explore Our Range"
          width={1920}
          height={475}
          className="w-full h-auto mb-8 select-none rounded-lg sm:scale-100 scale-[120%] overflow-x-clip"
          draggable={false}
        />
        <Link href="/products">
          <Button variant="default" className="text-xl px-10 py-4 h-14">
            Explore Our Products
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
