import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { resume } from '@/data/resume';

type ContactKey = keyof typeof resume.contact;

const iconMap: Record<ContactKey, IconProp> = {
  location: 'location-dot',
  email: 'envelope',
  phone: 'phone',
  website: 'globe',
  github: ['fab', 'github'],
  linkedin: ['fab', 'linkedin']
};

function renderValue(key: ContactKey, value: string) {
  switch (key) {
    case 'email':
      return (
        <a href={`mailto:${value}`} className="underline">
          {value}
        </a>
      );
    case 'phone':
      return (
        <a href={`tel:${value.replace(/\s+/g, '')}`} className="underline">
          {value}
        </a>
      );
    case 'website':
    case 'github':
    case 'linkedin':
      return (
        <a href={value} target="_blank" rel="noopener noreferrer" className="underline">
          {value.replace(/^https?:\/\//, '')}
        </a>
      );
    default:
      return value;
  }
}

export function ContactInfo() {
  const contact = resume.contact;

  return (
    <section className="space-y-2" id="contact">
      {(Object.keys(contact) as ContactKey[]).map((key) => (
        <p key={key} className="flex items-center gap-2">
          <FontAwesomeIcon icon={iconMap[key]} className="shrink-0" />
          {renderValue(key, contact[key])}
        </p>
      ))}
    </section>
  );
}
