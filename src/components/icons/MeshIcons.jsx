const base =
  'h-12 w-12 stroke-primary-700';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function VelcroIcon({ className = base }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <rect x="8" y="8" width="32" height="32" rx="2" />
      <path d="M14 14h20v20H14z" />
      <path d="M14 18h20M14 22h20M14 26h20M14 30h20M18 14v20M22 14v20M26 14v20M30 14v20" />
    </svg>
  );
}

export function SlidingIcon({ className = base }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <rect x="6" y="8" width="36" height="32" rx="2" />
      <path d="M24 8v32M10 12h12M10 16h12M10 20h12M10 24h12M10 28h12M10 32h12M10 36h12" />
      <path d="M26 12h12M26 16h12M26 20h12M26 24h12M26 28h12M26 32h12M26 36h12" />
    </svg>
  );
}

export function DoorIcon({ className = base }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <rect x="12" y="6" width="24" height="38" rx="1.5" />
      <path d="M16 12h16M16 18h16M16 24h16M16 30h16M16 36h16M20 6v38M28 6v38" />
      <circle cx="32" cy="26" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function BalconyIcon({ className = base }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <path d="M6 10h36" />
      <path d="M8 10v30M40 10v30M6 40h36" />
      <path d="M14 10v30M20 10v30M28 10v30M34 10v30" />
      <path d="M6 22h36" />
    </svg>
  );
}

export function PleatedIcon({ className = base }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="2" />
      <path d="M10 10v28M14 10v28M18 10v28M22 10v28M26 10v28M30 10v28M34 10v28M38 10v28" />
    </svg>
  );
}

export function PetIcon({ className = base }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <rect x="8" y="8" width="32" height="32" rx="2" />
      <circle cx="20" cy="20" r="2" />
      <circle cx="28" cy="20" r="2" />
      <circle cx="16" cy="26" r="2" />
      <circle cx="32" cy="26" r="2" />
      <path d="M18 32c1.5 2 4 2 6 2s4.5 0 6-2" />
    </svg>
  );
}

export function meshIconFor(key) {
  switch (key) {
    case 'velcro':
      return VelcroIcon;
    case 'sliding':
      return SlidingIcon;
    case 'door':
      return DoorIcon;
    case 'balcony':
      return BalconyIcon;
    case 'pleated':
      return PleatedIcon;
    case 'pet':
      return PetIcon;
    default:
      return SlidingIcon;
  }
}
