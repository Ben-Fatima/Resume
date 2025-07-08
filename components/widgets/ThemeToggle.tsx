'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

export function ThemeToggle({ ...props }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  /* run once after hydration */
  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem('theme');
    const shouldUseDark = saved === 'dark';
    if (shouldUseDark) document.documentElement.classList.add('dark');
    setDark(shouldUseDark);
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setDark(isDark);
  };

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <button
      {...props}
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cn(
        'fixed right-4 top-2 z-50 w-11 rounded-full border p-2 shadow backdrop-blur',
        'bg-white/70 dark:bg-zinc-800/70'
      )}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
