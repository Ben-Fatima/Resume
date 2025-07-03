import { resume } from '@/data/resume';
import Section from './Section';

export default function TechSkills() {
  const groups = resume.techSkills;
  if (!groups?.length) return null;

  return (
    <Section
      id="tech-skills"
      className="col-span-full"
      title="Technical Skills"
      icon="code"
    >
      {groups.map(({ title, description, tags }) => (
        <div
          key={title}
          className="mb-6 space-y-2 border-b border-zinc-300/60 pb-6 last:border-none last:pb-0"
        >
          <p className="font-medium">{title}</p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{description}</p>

          {/* pill list */}
          <ul className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded bg-zinc-200 px-2 py-0.5 text-xs dark:bg-zinc-700"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
