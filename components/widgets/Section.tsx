import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@/lib/cn';

type Props = {
  id?: string;
  title: string;
  icon: IconProp;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, icon, className, children }: Props) {
  return (
    <section id={id} className={cn('', className)}>
      {/* Header row */}
      <div className="flex items-center gap-2">
        {/* icon circle */}
        <span
          className="
    inline-flex h-9 w-9 items-center justify-center mt-4
    rounded-full bg-zinc-700 text-white
  "
        >
          <FontAwesomeIcon icon={icon} />
        </span>

        {/* title */}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* accent line */}
      <hr className=" h-1 w-full border-0 bg-zinc-700" />

      {/* section content */}
      <div className="mt-6">{children}</div>
    </section>
  );
}
