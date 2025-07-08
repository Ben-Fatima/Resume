import Sidebar from '@/components/layout/Sidebar';
import MainColumn from '@/components/layout/MainColumn';
import { ThemeToggle } from '@/components/widgets/ThemeToggle';
import { resume } from '@/data/fr/resume';
import LanguageToggle from '@/components/widgets/LanguageToggle';

export default function FrPage() {
  return (
    <>
      <ThemeToggle data-hide-print="true" />

      <a
        href="/api/pdf?lang=fr"
        target="_blank"
        rel="noopener noreferrer"
        data-hide-print="true"
        className="
          fixed bottom-4 right-4 rounded
          bg-zinc-700 px-3 py-1.5 text-sm font-medium text-white shadow
          dark:bg-zinc-200 dark:text-zinc-800
        "
      >
        Download&nbsp;PDF
      </a>
      <LanguageToggle href="/en" label="EN" />
      <div
        className="
          resume-grid mx-auto max-w-[54rem] w-[calc(100%-2rem)]
          grid auto-rows-max gap-y-8
          md:grid-cols-[18rem_1fr]
        "
      >
        <Sidebar resume={resume} />
        <MainColumn resume={resume} />
      </div>
    </>
  );
}
