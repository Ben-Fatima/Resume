import { memo } from 'react';

export default memo(function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-zinc-200 px-2 py-0.5 text-xs dark:bg-zinc-700">
      {children}
    </span>
  );
});
