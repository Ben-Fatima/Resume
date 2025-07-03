import { resume } from '@/data/resume';
import Section from '@/components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompanyLogo from './CompanyLogo';

/* helper → “Sep 2022 – Present” */
function formatRange(start: string, end?: string) {
  const [sY, sM] = start.split('-');
  const startDate = new Date(Number(sY), Number(sM) - 1);
  const startTxt = startDate.toLocaleDateString('en', {
    month: 'short',
    year: 'numeric'
  });

  if (!end) return `${startTxt} – Present`;

  const [eY, eM] = end.split('-');
  const endDate = new Date(Number(eY), Number(eM) - 1);
  const endTxt = endDate.toLocaleDateString('en', { month: 'short', year: 'numeric' });

  return `${startTxt} – ${endTxt}`;
}

export default function WorkExperience() {
  return (
    <Section id="experience" title="Work Experience" icon="briefcase">
      {resume.experience.map(({ company, title, start, end, summary, tech, website }) => (
        <article
          key={`${company}-${start}`}
          className="pb-6 mb-6
      border-b border-zinc-300/60
      dark:border-zinc-600/40
      last:border-none last:mb-0"
        >
          {/* Row 1 ── date range (left) — company badge (right) */}
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold">{formatRange(start, end)}</span>

            <span className="ml-3 flex items-center gap-1 rounded-md bg-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
              <FontAwesomeIcon icon="briefcase" />
              {company}
            </span>
          </div>

          {/* Row 2 ── logo · title · summary */}
          <div className="mt-1 flex flex-col md:flex-row md:items-start md:gap-4">
            <CompanyLogo company={company} website={website} />

            <div className="flex-1">
              <p className="font-medium">{title}</p>
              <p>{summary}</p>

              {tech?.length && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-zinc-200 px-2 py-0.5 text-xs dark:bg-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </Section>
  );
}
