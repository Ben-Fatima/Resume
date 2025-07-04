import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/widgets/ProjectCard';
import { resume } from '@/data/resume';

export default function ProjectsSection() {
  if (!resume.projects.length) return null;

  return (
    <section className="col-span-full">
      <SectionHeader title="Projects" icon="folder-open" />

      {resume.projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </section>
  );
}
