import { resume } from '@/data/resume';
import ProjectCard from '@/components/ProjectCard';
import Section from './Section';

export default function Projects() {
  const projects = resume.projects;
  if (!projects?.length) return null;

  return (
    <Section id="projects" title="Projects" icon="folder-open" className="col-span-full">
      {projects.map((p) => (
        <ProjectCard key={p.name} {...p} />
      ))}
    </Section>
  );
}
