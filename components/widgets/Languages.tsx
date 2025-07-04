import { resume } from '@/data/resume';

export function Languages() {
  const langs = resume.languages;
  if (!langs?.length) return null;

  return (
    <section className="space-y-2">
      <h3 className="border-b pb-1 text-sm font-semibold">Languages</h3>

      {langs.map(({ label, level }) => (
        <p key={label} className="flex justify-between">
          <span>{label}</span>
          <span className="font-medium text-zinc-600 dark:text-zinc-400">{level}</span>
        </p>
      ))}
    </section>
  );
}
