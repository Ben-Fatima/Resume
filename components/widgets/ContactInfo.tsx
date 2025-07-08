import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Resume } from '@/data/types';

/* ------------------------------------------------------------------ */
/* 1 ▸ Derive the key type from the Resume interface                  */
type Contact = Resume['contact'];
type ContactKey = keyof Contact;

/* 2 ▸ Central icon map (string tuple accepted by FontAwesomeIcon)    */
const iconMap: Record<ContactKey, IconProp> = {
  location: 'location-dot',
  email: 'envelope',
  phone: 'phone',
  website: 'globe',
  github: ['fab', 'github'],
  linkedin: ['fab', 'linkedin']
};

/* 3 ▸ Render helper                                                  */
function RenderValue({ k, v }: { k: ContactKey; v: string }) {
  if (k === 'email')
    return (
      <a className="underline" href={`mailto:${v}`}>
        {v}
      </a>
    );

  if (k === 'phone')
    return (
      <a className="underline" href={`tel:${v.replace(/\s+/g, '')}`}>
        {v}
      </a>
    );

  if (k === 'website' || k === 'github' || k === 'linkedin')
    return (
      <a className="underline" target="_blank" rel="noopener noreferrer" href={v}>
        {v.replace(/^https?:\/\//, '')}
      </a>
    );

  return v;
}

/* 4 ▸ Component                                                      */
export default function ContactInfo({ contact }: { contact: Contact }) {
  return (
    <section id="contact" className="space-y-2">
      {(Object.keys(contact) as ContactKey[]).map((key) => (
        <p className="flex items-center gap-2" key={key}>
          <FontAwesomeIcon icon={iconMap[key]} className="shrink-0" />
          <RenderValue k={key} v={contact[key]} />
        </p>
      ))}
    </section>
  );
}
