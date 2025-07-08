import Image from 'next/image';
import ContactInfo from '@/components/widgets/ContactInfo';
import { Ranks } from '@/components/widgets/Ranks';
import { Languages } from '@/components/widgets/Languages';
import { ProgrammingTools } from '@/components/widgets/ProgrammingTools';
import { Resume } from '@/data/types';

export default function Sidebar({ resume }: { resume: Resume }) {
  return (
    <aside className="space-y-8 p-6 text-sm top-12 bg-zinc-100 dark:bg-gray-900">
      {/* photo */}
      <Image
        src="/file.svg"
        width={140}
        height={140}
        alt="#"
        className="mx-auto rounded-full ring-2 ring-zinc-300 dark:ring-zinc-600"
      />

      {/* contact */}
      <ContactInfo contact={resume.contact} />

      {/* ranks */}
      <Ranks ranks={resume.ranks} />

      {/* dev tools */}
      <ProgrammingTools tools={resume.tools} />

      {/* languages */}
      <Languages langs={resume.languages} />
    </aside>
  );
}
