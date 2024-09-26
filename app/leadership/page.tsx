import { LeadershipTeam } from '@/components/leadership/leadership-team';
import { LeadershipPhilosophy } from '@/components/leadership/leadership-philosophy';
import { JoinOurTeam } from '@/components/leadership/join-our-team';

export default function LeadershipPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-extrabold text-center pt-20 pb-0">Our Leadership</h1>
      <LeadershipTeam />
      <LeadershipPhilosophy />
      <JoinOurTeam />
    </main>
  );
}
