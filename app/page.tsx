import MainColumn from '@/components/layout/MainColumn';
import Sidebar from '@/components/layout/Sidebar';
import { ThemeToggle } from '@/components/widgets/ThemeToggle';

export default function Page() {
  return (
    <div
      className="
        mx-auto w-[calc(100%-2rem)] max-w-[54rem]
        grid gap-y-8 auto-rows-max
        grid-cols-1 md:grid-cols-[18rem_1fr]
      "
    >
      <ThemeToggle />
      <Sidebar />
      <MainColumn />
    </div>
  );
}
