import { CurrentOpenings } from '@/components/career/current-openings';
import { CareerBenefits } from '@/components/career/career-benefits';
import { ApplicationProcess } from '@/components/career/application-process';

export default function CareerPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-bold text-center pt-20 pb-0">
        Careers at Keshari Enterprises
      </h1>
      <CurrentOpenings />
      <CareerBenefits />
      <ApplicationProcess />
    </main>
  );
}
