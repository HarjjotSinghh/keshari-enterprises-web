import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactMap } from '@/components/contact/contact-map';

export default function ContactPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-extrabold text-center pt-20 pb-0">Contact Us</h1>
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </main>
  );
}
