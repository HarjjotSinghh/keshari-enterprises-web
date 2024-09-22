import { CompanyHistory } from '@/components/about-us/company-history';
import { OurValues } from '@/components/about-us/our-values';
import { TeamSection } from '@/components/about-us/team-section';

export default function AboutUsPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-bold text-center pt-20 pb-16">
        About Keshari Enterprises
      </h1>
      <CompanyHistory />
      <OurValues />
      <TeamSection />
    </main>
  );
}
