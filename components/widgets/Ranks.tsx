import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Resume } from '@/data/types';

const rankIcons: Record<string, React.ComponentProps<typeof FontAwesomeIcon>['icon']> = {
  chess: ['fas', 'chess-knight'],
  codeforces: 'ranking-star'
};

export function Ranks({ ranks }: { ranks: Resume['ranks'] }) {
  if (!ranks?.length) return null;

  return (
    <section className="space-y-2" id="ranks">
      <h3 className="border-b pb-1 text-sm font-semibold">Reputation / Ranks</h3>

      {ranks.map(({ label, value, url }) => {
        const key = label.toLowerCase().split('.')[0];
        const icon = rankIcons[key] ?? 'star';

        const line = (
          <>
            <FontAwesomeIcon icon={icon} className="shrink-0" />
            <span className="flex-1 underline-offset-2">{label}</span>
            <span className="font-semibold">{value}</span>
          </>
        );

        return url ? (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline"
          >
            {line}
          </a>
        ) : (
          <p key={label} className="flex items-center gap-2">
            {line}
          </p>
        );
      })}
    </section>
  );
}
