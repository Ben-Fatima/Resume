// lib/slug.ts
export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // spaces & punctuation → dash
    .replace(/(^-|-$)/g, ''); // trim leading/trailing dash
}
