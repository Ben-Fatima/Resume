import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = { title: string; icon: IconProp };

export default function SectionHeader({ title, icon }: Props) {
  return (
    <div data-section="header" className="mb-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white mt-3 bg-zinc-700 dark:bg-gray-600">
          <FontAwesomeIcon icon={icon} className="text-sm" />
        </span>
        <h2 className="text-xl font-semibold" id="header-title">
          {title}
        </h2>
      </div>

      <hr className="mt-1 h-0.5 w-full border-0 bg-zinc-700" />
    </div>
  );
}
