import Sidebar from '@/components/layout/Sidebar';
import MainColumn from '@/components/layout/MainColumn';
import { ThemeToggle } from '@/components/widgets/ThemeToggle';

export default function Page() {
  return (
    <>
      {/* screen-only buttons */}
      <ThemeToggle data-hide-print="true" />
      <a
        href="/api/pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-hide-print="true"
        className="fixed bottom-4 right-4  px-3 py-1.5 text-sm font-medium text-white shadow dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-700"
      >
        Download PDF
      </a>

      {/* two-column grid */}
      <div
        className="
          resume-grid
          mx-auto w-[calc(100%-2rem)] max-w-[54rem]
          grid md:grid-cols-[18rem_1fr] auto-rows-max gap-y-8
        "
      >
        <Sidebar />
        <MainColumn />
      </div>
    </>
  );
}
