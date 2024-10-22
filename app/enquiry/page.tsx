import { EnquiryForm } from '@/components/enquiry/enquiry-form';
import { EnquiryFAQ } from '@/components/enquiry/enquiry-faq';
import { EnquiryContact } from '@/components/enquiry/enquiry-contact';
import Image from 'next/image';

export default function EnquiryPage() {
  return (
    <main className="pb-16 overflow-x-clip">
      <Image
        src="/enquiry.png"
        alt="Keshari Enterprises Enquiry"
        width={1920}
        height={475}
        className="w-full h-auto sm:mb-8 mb-16 select-none rounded-lg sm:scale-100 scale-[130%] overflow-x-clip"
        draggable={false}
      />
      <EnquiryForm />
      <EnquiryFAQ />
      <EnquiryContact />
    </main>
  );
}
