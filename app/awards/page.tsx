import { AwardsList } from '@/components/awards/awards-list';
import { AchievementsTimeline } from '@/components/awards/achievements-timeline';
import { IndustryRecognition } from '@/components/awards/industry-recognition';

export default function AwardsPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-bold text-center pt-20 pb-0">
        Awards & Recognition
      </h1>
      <AwardsList />
      <AchievementsTimeline />
      <IndustryRecognition />
    </main>
  );
}
