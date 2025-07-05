import { resume } from '@/data/resume';

function barColour(level: number) {
  if (level <= 30) return 'bg-red-500';
  if (level <= 70) return 'bg-amber-500';
  return 'bg-indigo-600';
}

export function ProgrammingTools() {
  const categories = resume.tools;
  if (!categories?.length) return null;

  return (
    <section className="space-y-6" id="tools">
      <h3 className="border-b pb-1 text-sm font-semibold">Programming&nbsp;Tools</h3>

      {categories.map((cat) => (
        <div key={cat.label}>
          <p className="mb-2 text-xs font-medium uppercase text-zinc-600 dark:text-zinc-400">
            {cat.label}
          </p>

          {cat.items.map(({ name, level }) => (
            <div key={name} className="mb-2 flex items-center gap-2">
              {/* label */}
              <span className="w-32 truncate">{name}</span>

              {/* bar wrapper */}
              <div className="h-2 w-full rounded bg-zinc-200 dark:bg-zinc-700">
                <div
                  className={`h-full rounded ${barColour(level)}`}
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
