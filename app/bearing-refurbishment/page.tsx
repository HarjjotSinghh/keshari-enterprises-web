import { RefurbishmentProcess } from '@/components/bearing-refurbishment/refurbishment-process';
import { BenefitsOfRefurbishment } from '@/components/bearing-refurbishment/benefits-of-refurbishment';
import { RefurbishmentCTA } from '@/components/bearing-refurbishment/refurbishment-cta';

export default function BearingRefurbishmentPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-extrabold text-center pt-20 pb-16">
        Bearing Refurbishment Services
      </h1>
      <RefurbishmentProcess />
      <BenefitsOfRefurbishment />
      <RefurbishmentCTA />
    </main>
  );
}
