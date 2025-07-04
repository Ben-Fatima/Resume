import Summary from '@/components/widgets/Summary';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import TechSkillsSection from '@/components/sections/TechSkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function MainColumn() {
  return (
    <>
      <main className="space-y-6 px-4">
        <Summary />
        <ExperienceSection />
        <EducationSection />
      </main>
      <TechSkillsSection />
      <ProjectsSection />
    </>
  );
}
