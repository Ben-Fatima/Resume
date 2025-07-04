'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved ? saved === 'dark' : prefersDark; // fallback to OS

    if (shouldUseDark) document.documentElement.classList.add('dark');
    setDark(shouldUseDark);
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    const isDarkNow = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    setDark(isDarkNow);
  };

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={cn(
        'fixed right-4 top-2 z-50 rounded-full border p-2 shadow backdrop-blur w-11',
        'bg-white/70 dark:bg-zinc-800/70'
      )}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
