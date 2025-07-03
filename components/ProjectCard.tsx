import type { ProjectItem } from '@/data/resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faFlask } from '@fortawesome/free-solid-svg-icons';
import type { Stage } from '@/data/resume';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

const stageIcons: Record<Stage, IconProp> = {
  WIP: faHammer,
  α: faFlask
};

export default function ProjectCard({
  name,
  description,
  tech,
  repo,
  demo,
  stage
}: ProjectItem) {
  return (
    <article className="mb-8">
      <h3 className="flex items-center gap-2 font-semibold">
        {name}
        {stage && (
          <span
            className="
              flex items-center gap-1
              rounded bg-zinc-300 px-1.5 py-0.5 text-[10px] uppercase tracking-wide
              dark:bg-zinc-700
            "
          >
            <FontAwesomeIcon icon={stageIcons[stage] || 'star'} className="text-[11px]" />
            {stage}
          </span>
        )}
      </h3>

      <p className="mt-1 text-sm">{description}</p>

      {/* tech tags */}
      <ul className="mt-2 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded bg-zinc-200 px-2 py-0.5 text-xs dark:bg-zinc-700"
          >
            {t}
          </li>
        ))}
      </ul>

      {/* links */}
      {(repo || demo) && (
        <div className="mt-2 space-x-4 text-sm underline decoration-dotted">
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
