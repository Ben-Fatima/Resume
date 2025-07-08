'use client';

export default function LanguageToggle({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      data-hide-print="true"
      className="language-toggle rounded bg-zinc-800 px-2 py-1 m-4 text-xs font-semibold text-white shadow"
      aria-label={`Switch to ${label}`}
    >
      {label}
    </a>
  );
}
