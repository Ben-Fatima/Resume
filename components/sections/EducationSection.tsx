import SectionHeader from '@/components/ui/SectionHeader';
import { resume } from '@/data/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function EducationSection() {
  if (!resume.education.length) return null;

  return (
    <section id="educations">
      <SectionHeader title="Education" icon="graduation-cap" />

      {resume.education.map(({ start, end, school, degree, location }) => (
        <article
          id="education"
          key={`${school}-${start}`}
          className="
            mb-4 pb-4 border-b border-zinc-300/60 dark:border-zinc-600/40
            last:mb-0 last:border-none last:pb-0
          "
        >
          {/* dates + location badge */}
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">
              {start} – {end}
            </span>

            <span className="flex items-center gap-1 rounded-md bg-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
              <FontAwesomeIcon icon="location-dot" className="text-[10px]" />
              {location}
            </span>
          </div>

          {/* school + degree */}
          <p className="mt-1 flex items-center gap-2 font-medium">
            <FontAwesomeIcon icon="graduation-cap" className="shrink-0 text-sm" />
            {school}
          </p>
          <p className="ml-6 text-sm text-zinc-700 dark:text-zinc-300">{degree}</p>
        </article>
      ))}
    </section>
  );
}
