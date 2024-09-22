import { VisionSection } from '@/components/vision-mission-core-values/vision-section';
import { MissionSection } from '@/components/vision-mission-core-values/mission-section';
import { CoreValuesSection } from '@/components/vision-mission-core-values/core-values-section';

export default function VisionMissionCorePage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-bold text-center pt-20 pb-16">
        Vision, Mission & Core Values
      </h1>
      <VisionSection />
      <MissionSection />
      <CoreValuesSection />
    </main>
  );
}
