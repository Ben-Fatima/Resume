import Sidebar from '@/components/Sidebar';

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
      </div>
    </>
  );
}
