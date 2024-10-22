import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactMap } from '@/components/contact/contact-map';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="pb-16 overflow-x-clip">
      <Image
        src="/contact.png"
        alt="Keshari Enterprises Contact"
        width={1920}
        height={475}
        className="w-full h-auto sm:mb-8 mb-16 select-none rounded-lg sm:scale-100 scale-[150%] overflow-x-clip"
        draggable={false}
      />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </main>
  );
}
