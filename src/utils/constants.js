import { siteConfig } from '../data/siteConfig';

export const buildWhatsAppLink = (message = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

export const buildPhoneLink = () => `tel:${siteConfig.phone}`;

export const buildMailLink = () => `mailto:${siteConfig.email}`;

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Mesh Types', to: '/mesh-types' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

export const OPENING_TYPES = [
  { id: 'sliding-window', label: 'Sliding Window' },
  { id: 'casement-window', label: 'Casement Window' },
  { id: 'door', label: 'Door' },
  { id: 'balcony', label: 'Balcony' },
];

export const USAGE_TYPES = [
  { id: 'living', label: 'Living Room' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'kitchen', label: 'Kitchen' },
];
