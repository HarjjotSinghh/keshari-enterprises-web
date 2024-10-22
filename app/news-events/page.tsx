import { NewsList } from '@/components/news-events/news-list';
import { EventCalendar } from '@/components/news-events/event-calendar';
import { NewsletterSignup } from '@/components/news-events/newsletter-signup';
import Image from 'next/image';

export default function NewsEventsPage() {
  return (
    <main className="pb-16 overflow-x-clip">
      <Image
        src="/news.png"
        alt="Keshari Enterprises News & Events"
        width={1920}
        height={475}
        className="w-full h-auto sm:mb-8 mb-16 select-none rounded-lg sm:scale-100 scale-[105%] overflow-x-clip"
        draggable={false}
      />
      <NewsList />
      <EventCalendar />
      <NewsletterSignup />
    </main>
  );
}
