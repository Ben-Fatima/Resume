import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/widgets/ProjectCard';
import { Resume } from '@/data/types';

export default function ProjectsSection({
  projects,
  title
}: {
  projects: Resume['projects'];
  title: string;
}) {
  if (!projects.length) return null;

  return (
    <div className="col-span-full px-4" id="projects">
      <SectionHeader title={title} icon="folder-open" />

      {projects.map((project) => (
        <div
          key={project.name}
          className="mb-4 border-b border-zinc-300/60 
                     last:mb-0 last:border-none last:pb-0
                     dark:border-zinc-600/40"
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}
