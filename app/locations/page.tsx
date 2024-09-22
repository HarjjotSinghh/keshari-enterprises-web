import { LocationMap } from '@/components/locations/location-map';
import { LocationList } from '@/components/locations/location-list';
import { ContactInfo } from '@/components/locations/contact-info';

export default function LocationsPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-bold text-center pt-20 pb-0">Our Locations</h1>
      <LocationMap />
      <LocationList />
      <ContactInfo />
    </main>
  );
}
