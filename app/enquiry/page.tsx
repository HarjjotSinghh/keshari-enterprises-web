import { EnquiryForm } from '@/components/enquiry/enquiry-form';
import { EnquiryFAQ } from '@/components/enquiry/enquiry-faq';
import { EnquiryContact } from '@/components/enquiry/enquiry-contact';

export default function EnquiryPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-bold text-center pt-20 pb-0">Product Enquiry</h1>
      <EnquiryForm />
      <EnquiryFAQ />
      <EnquiryContact />
    </main>
  );
}
