import { Phone, CalendarCheck } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import useScrollToSection from '../hooks/useScrollToSection';
import { buildPhoneLink, buildWhatsAppLink } from '../utils/constants';

export default function MobileBottomBar() {
  const scrollTo = useScrollToSection();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={buildPhoneLink()}
          className="flex flex-col items-center justify-center rounded-xl bg-primary-50 px-2 py-2 text-[11px] font-semibold text-primary-800"
          aria-label="Call AS Enterprises"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <button
          type="button"
          onClick={() => scrollTo('booking')}
          className="flex flex-col items-center justify-center rounded-xl bg-primary-700 px-2 py-2 text-[11px] font-semibold text-white"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Book Inspection
        </button>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-xl bg-emerald-500 px-2 py-2 text-[11px] font-semibold text-white"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
