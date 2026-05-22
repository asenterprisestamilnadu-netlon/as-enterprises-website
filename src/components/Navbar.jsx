import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './icons/WhatsAppIcon';
import useScrollPosition from '../hooks/useScrollPosition';
import { NAV_LINKS, buildPhoneLink, buildWhatsAppLink } from '../utils/constants';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const scrolled = useScrollPosition(20);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${scrolled
        ? 'bg-white/95 shadow-soft backdrop-blur'
        : 'bg-white/90 backdrop-blur'
        }`}
    >
      <div className="site-container flex items-center justify-between gap-6 py-2.5 lg:gap-10">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-primary-700' : 'text-slate-700 hover:text-primary-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={buildPhoneLink()}
            className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-primary-700"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-700">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            {siteConfig.phoneDisplay}
          </a>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-800"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-card">
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-medium ${isActive
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={buildPhoneLink()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-3 py-2.5 text-sm font-semibold text-primary-800"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-3 py-2.5 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

