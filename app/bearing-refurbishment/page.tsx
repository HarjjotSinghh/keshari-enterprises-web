import { RefurbishmentProcess } from '@/components/bearing-refurbishment/refurbishment-process';
import { BenefitsOfRefurbishment } from '@/components/bearing-refurbishment/benefits-of-refurbishment';
import { RefurbishmentCTA } from '@/components/bearing-refurbishment/refurbishment-cta';
import Image from 'next/image';

export default function BearingRefurbishmentPage() {
  return (
    <main className="pb-16 overflow-x-clip">
      <Image
        src="/bearing.png"
        alt="Keshari Enterprises Bearing Refurbishment"
        width={1920}
        height={475}
        className="w-full h-auto sm:mb-8 mb-16 select-none rounded-lg sm:scale-100 scale-[115%] overflow-x-clip"
        draggable={false}
      />

      <RefurbishmentProcess />
      <BenefitsOfRefurbishment />
      <RefurbishmentCTA />
    </main>
  );
}
