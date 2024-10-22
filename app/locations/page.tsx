import { LocationMap } from '@/components/locations/location-map';
import { LocationList } from '@/components/locations/location-list';
import { ContactInfo } from '@/components/locations/contact-info';
import Image from 'next/image';

export default function LocationsPage() {
  return (
    <main className="pb-16 overflow-x-clip">
      <Image
        src="/location.png"
        alt="Keshari Enterprises Locations"
        width={1920}
        height={475}
        className="w-full h-auto sm:mb-8 mb-16 select-none rounded-lg sm:scale-100 scale-[140%] overflow-x-clip"
        draggable={false}
      />
      <LocationMap />
      <LocationList />
      <ContactInfo />
    </main>
  );
}
