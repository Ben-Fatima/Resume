import { resume } from '@/data/resume';

export default function Summary() {
  const { name, summary } = resume.basics;

  return (
    <header className="mb-8 text-center md:text-center">
      <h1 className="text-3xl font-bold p-4">{name}</h1>
      {summary && (
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 max-w-prose md:max-w-none">
          {summary}
        </p>
      )}
    </header>
  );
}
