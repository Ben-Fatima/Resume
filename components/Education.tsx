import { resume } from '@/data/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from './Section';

export default function Education() {
  const list = resume.education;
  if (!list?.length) return null;

  return (
    <Section id="education" title="Education" icon="graduation-cap">
      {list.map(({ start, end, school, degree, location }) => (
        <article
          key={`${school}-${start}`}
          className="pb-6 mb-6
      border-b border-zinc-300/60
      dark:border-zinc-600/40
      last:border-none last:mb-0"
        >
          {/* date range + location badge */}
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold">
              {start} – {end}
            </span>

            <span className="flex items-center gap-1 rounded-md bg-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
              <FontAwesomeIcon icon="location-dot" />
              {location}
            </span>
          </div>

          {/* school + degree */}
          <p className="mt-1 flex items-center gap-2 font-medium">
            <FontAwesomeIcon icon="graduation-cap" className="shrink-0" />
            {school}
          </p>
          <p className="ml-6 text-sm text-zinc-700 dark:text-zinc-300">{degree}</p>
        </article>
      ))}
    </Section>
  );
}
