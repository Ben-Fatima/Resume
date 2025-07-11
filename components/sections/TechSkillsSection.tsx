import SectionHeader from '@/components/ui/SectionHeader';
import Pill from '@/components/ui/Pill';
import { Resume } from '@/data/types';

export default function TechSkillsSection({
  skills,
  title
}: {
  skills: Resume['techSkills'];
  title: string;
}) {
  if (!skills.length) return null;

  return (
    <div className="col-span-full px-4" id="tech-skills">
      <SectionHeader title={title} icon="code" />

      {skills.map(({ title, description, tags }) => (
        <div
          key={title}
          className="mb-6 space-y-2 border-b border-zinc-300/60 pb-6 last:mb-0 last:border-none last:pb-0 dark:border-zinc-600/40"
        >
          <p className="font-medium" id="skill-title">
            {title}
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{description}</p>

          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
