import Summary from '@/components/Summary';
import WorkExperience from './WorkExperience';
import Education from './Education';

export default function MainSheet() {
  return (
    <article className="prose dark:prose-invert max-w-none p-6 py-10 mx-auto">
      <Summary />

      {/* work experience*/}
      <WorkExperience />

      {/* education */}
      <Education />
    </article>
  );
}
