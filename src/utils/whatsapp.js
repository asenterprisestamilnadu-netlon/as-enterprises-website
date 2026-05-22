import { siteConfig } from '../data/siteConfig';

export const buildBookingWhatsAppLink = ({ name, phone, meshType, area, message }) => {
  const lines = [
    'Hello AS Enterprises,',
    '',
    `Name: ${name || ''}`,
    `Phone: ${phone || ''}`,
    `Mesh Type: ${meshType || ''}`,
    `Area: ${area || ''}`,
  ];

  if (message && message.trim()) {
    lines.push('', `Notes: ${message.trim()}`);
  }

  lines.push('', 'I need a free inspection.');

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
};
