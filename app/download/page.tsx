import { DownloadableResources } from '@/components/download/downloadable-resources';
import { ResourceCategories } from '@/components/download/resource-categories';
import { DownloadHelp } from '@/components/download/download-help';

export default function DownloadPage() {
  return (
    <main className="pb-16">
      <h1 className="md:text-5xl text-4xl font-extrabold text-center pt-20 pb-16">Downloads</h1>
      <ResourceCategories />
      <DownloadableResources />
      <DownloadHelp />
    </main>
  );
}
