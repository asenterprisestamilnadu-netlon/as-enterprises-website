import WhatsAppIcon from './icons/WhatsAppIcon';
import { buildWhatsAppLink } from '../utils/constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-4 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 p-3.5 text-white shadow-card transition hover:scale-105 hover:bg-emerald-600 sm:bottom-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
      </span>
    </a>
  );
}
