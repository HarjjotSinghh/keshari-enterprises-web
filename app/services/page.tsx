import { ServiceOverview } from '@/components/services/service-overview';
import { ServiceList } from '@/components/services/service-list';
import { ServiceTestimonials } from '@/components/services/service-testimonials';

export default function ServicesPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-extrabold text-center pt-20 pb-16">Our Services</h1>
      <ServiceOverview />
      <ServiceList />
      <ServiceTestimonials />
    </main>
  );
}
