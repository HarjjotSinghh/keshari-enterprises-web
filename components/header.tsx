'use client';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Products And Solutions',
    subItems: [
      {
        name: 'Schaeffler',
        href: 'https://medias.schaeffler.co.in/',
      },
      {
        name: 'NBC',
        href: 'https://www.nbcbearings.com/',
      },
      {
        name: 'RMP',
        href: 'https://rmpbearings.com/',
      },
    ],
  },
  {
    name: 'About Us',
    subItems: [
      {
        name: 'About Keshari Enterprises',
        href: '/about-us',
      },
      {
        name: 'Services',
        href: '/services',
      },
      { name: 'Vision, Mission & Core Values', href: '/vision-mission-core-values' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Awards', href: '/awards' },
    ],
  },
  {
    name: 'Bearing Refurbishment',
    href: '/bearing-refurbishment',
  },
  {
    name: 'Locations',
    href: '/locations',
  },
  {
    name: 'News & Events',
    href: '/news-events',
  },
  {
    name: 'Download',
    href: '/download',
  },
  {
    name: 'Enquiry',
    href: '/enquiry',
  },
  {
    name: 'Career',
    href: '/career',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-background/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <motion.div
        className="container mx-auto px-4 py-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/" className="flex flex-row items-center justify-center gap-2">
          <img src="/logo.png" alt="Keshari Enterprises Logo" className="h-16" />
          <h2 className="md:text-xl font-semibold text-xl ">Keshari Enterprises</h2>
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle asChild>
                <motion.div
                  className="flex flex-row items-center justify-start gap-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/logo.png"
                    alt="Keshari Enterprises Logo"
                    width={64}
                    height={64}
                    className="h-16 w-auto"
                  />
                  <h2 className="md:text-xl font-semibold text-base">Keshari Enterprises</h2>
                </motion.div>
              </SheetTitle>
              <SheetDescription>
                <Accordion type="single" collapsible className="w-full text-foreground">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <AccordionItem value={`item-${index}`}>
                        {item.subItems ? (
                          <>
                            <AccordionTrigger>{item.name}</AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col space-y-2 pl-4">
                                {item.subItems.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index + subIndex) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-left"
                                  >
                                    <Link
                                      href={subItem.href}
                                      className="text-sm hover:underline text-left"
                                      onClick={handleLinkClick}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </AccordionContent>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="py-4 block hover:underline text-left"
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                        )}
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </motion.div>
    </header>
  );
}
