import { EnquiryForm } from '@/components/enquiry/enquiry-form';
import { EnquiryFAQ } from '@/components/enquiry/enquiry-faq';
import { EnquiryContact } from '@/components/enquiry/enquiry-contact';

export default function EnquiryPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-4xl text-4xl font-extrabold text-center pt-20 pb-0">
        Product Enquiry
      </h1>
      <EnquiryForm />
      <EnquiryFAQ />
      <EnquiryContact />
    </main>
  );
}
