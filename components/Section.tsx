import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = { id?: string; className?: string; children: ReactNode };

export function Section({ id, className, children }: Props) {
  return (
    <section
      id={id}
      className={cn(
        'w-full max-w-4xl mx-auto px-6 md:px-0',
        'space-y-2 md:space-y-3',
        className
      )}
    >
      {children}
    </section>
  );
}
