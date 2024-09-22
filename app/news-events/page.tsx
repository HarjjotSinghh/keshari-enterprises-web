import { NewsList } from '@/components/news-events/news-list';
import { EventCalendar } from '@/components/news-events/event-calendar';
import { NewsletterSignup } from '@/components/news-events/newsletter-signup';

export default function NewsEventsPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-bold text-center pt-20 pb-0">News & Events</h1>
      <NewsList />
      <EventCalendar />
      <NewsletterSignup />
    </main>
  );
}
