import Summary from '@/components/widgets/Summary';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import TechSkillsSection from '@/components/sections/TechSkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import { Resume } from '@/data/types';

export default function MainColumn({ resume }: { resume: Resume }) {
  return (
    <>
      <main className="space-y-6 px-4">
        <Summary summary={resume.basics.summary} name={resume.basics.name} />
        <ExperienceSection
          experience={resume.experience}
          title={resume.labels.experience}
        />
        <EducationSection education={resume.education} title={resume.labels.education} />
      </main>
      <TechSkillsSection skills={resume.techSkills} title={resume.labels.skills} />
      <ProjectsSection projects={resume.projects} title={resume.labels.projects} />
    </>
  );
}
