import Image from 'next/image';
import { ContactInfo } from '@/components/ContactInfo';
import { Ranks } from '@/components/Ranks';
import { Languages } from '@/components/Languages';
import { ProgrammingTools } from '@/components/ProgrammingTools';

export default function Sidebar() {
  return (
    <aside className="space-y-8 p-6 text-sm top-12 bg-gray-100 dark:bg-gray-900">
      {/* photo */}
      <Image
        src="/file.svg"
        width={140}
        height={140}
        alt="#"
        className="mx-auto rounded-full ring-2 ring-zinc-300 dark:ring-zinc-600"
      />

      {/* contact */}
      <ContactInfo />

      {/* Ranks */}
      <Ranks />

      {/* Programming Tools */}
      <ProgrammingTools />

      {/* Languages */}
      <Languages />
    </aside>
  );
}
