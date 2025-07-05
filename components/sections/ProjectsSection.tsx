import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/widgets/ProjectCard';
import { resume } from '@/data/resume';

export default function ProjectsSection() {
  if (!resume.projects.length) return null;

  return (
    <section className="col-span-full" id="projects">
      <SectionHeader title="Projects" icon="folder-open" />

      {resume.projects.map((project) => (
        <div
          key={project.name}
          className="mb-4 border-b border-zinc-300/60 
                     last:mb-0 last:border-none last:pb-0
                     dark:border-zinc-600/40"
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </section>
  );
}
