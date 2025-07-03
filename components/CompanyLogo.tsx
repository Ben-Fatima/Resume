'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/lib/slug';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

type Props = { company: string; website?: string; size?: number };

export default function CompanyLogo({ company, website, size = 48 }: Props) {
  const [broken, setBroken] = useState(false);
  const slug = slugify(company.replace(/·.*/, '').trim());
  const logoSrc = `/logos/${slug}.png`;

  const content = broken ? (
    <FontAwesomeIcon icon={faBuilding} className="text-2xl text-zinc-400" />
  ) : (
    <Image
      src={logoSrc}
      alt={`${company} logo`}
      width={size}
      height={size}
      onError={() => setBroken(true)}
    />
  );

  return website ? (
    <Link href={website} target="_blank" rel="noopener noreferrer" className="shrink-0">
      {content}
    </Link>
  ) : (
    <span className="shrink-0">{content}</span>
  );
}
