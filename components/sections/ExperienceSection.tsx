import SectionHeader from '@/components/ui/SectionHeader';
import { resume } from '@/data/resume';
import CompanyLogo from '@/components/widgets/CompanyLogo';
import Pill from '@/components/ui/Pill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function formatRange(start: string, end?: string) {
  const s = new Date(start);
  const startTxt = s.toLocaleDateString('en', { month: 'short', year: 'numeric' });
  if (!end) return `${startTxt} – Present`;
  const e = new Date(end);
  const endTxt = e.toLocaleDateString('en', { month: 'short', year: 'numeric' });
  return `${startTxt} – ${endTxt}`;
}

export default function ExperienceSection() {
  return (
    <section id="experiences">
      <SectionHeader title="Work Experience" icon="briefcase" />

      {resume.experience.map((exp) => (
        <article
          id="experience"
          key={exp.company + exp.start}
          className="mb-6 border-b border-zinc-300/60 pb-6 last:border-none dark:border-zinc-600/40"
        >
          {/* date + company badge */}
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">{formatRange(exp.start, exp.end)}</span>

            <span className="flex items-center gap-1 rounded-md bg-zinc-200 px-2 py-0.5 text-xs dark:bg-zinc-700">
              <FontAwesomeIcon icon="building" /> {exp.company}
            </span>
          </div>

          {/* logo + body */}
          <div className="mt-1 flex flex-col gap-4 md:flex-row">
            <CompanyLogo company={exp.company} website={exp.website} />

            <div className="flex-1">
              <p className="font-medium" id="experience-title">
                {exp.title}
              </p>
              <p id="experience-summary">{exp.summary}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
