import MainSheet from '@/components/MainSheet';
import Projects from '@/components/Projects';
import Sidebar from '@/components/Sidebar';
import TechSkills from '@/components/TechSkills';

export default function Page() {
  return (
    <>
      <div
        className="
        mx-auto w-[calc(100%-2rem)] max-w-[54rem] 
        grid 
        grid-cols-1
        md:grid-cols-[18rem_1fr] 
      "
      >
        <Sidebar />
        <MainSheet />
        <TechSkills />
        <Projects />
      </div>
    </>
  );
}
