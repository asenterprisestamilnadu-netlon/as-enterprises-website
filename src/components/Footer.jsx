import { Link } from 'react-router-dom';
import { Instagram, Youtube, MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { siteConfig } from '../data/siteConfig';
import { meshTypes } from '../data/meshTypes';
import { buildPhoneLink, buildWhatsAppLink, buildMailLink } from '../utils/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-12">
      <div className="site-container">
        <div className="grid gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Premium quality mosquito mesh installation for homes and businesses in Chennai. Same-day fitting, 5-year warranty.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.whatsapp} label="WhatsApp">
                <WhatsAppIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {meshTypes.slice(0, 6).map((m) => (
                <li key={m.id}>
                  <Link to="/mesh-types" className="hover:text-primary-700">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Visit Us
            </h3>
            <address className="mt-4 not-italic text-sm leading-6 text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-700" />
                <span>
                  {siteConfig.address.line1},<br />
                  {siteConfig.address.line2},<br />
                  {siteConfig.address.city} - {siteConfig.address.pincode}
                </span>
              </p>
              <p className="mt-3 flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-700" />
                <a href={buildPhoneLink()} className="hover:text-primary-700">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="mt-2 flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-700" />
                <a
                  href={buildMailLink()}
                  className="min-w-0 break-words hover:text-primary-700"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-2 flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 text-primary-700" />
                {siteConfig.hours}
              </p>
            </address>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" /> Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Find Us
            </h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <iframe
                title="AS Enterprises location on Google Maps"
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: 'block' }}
              />
            </div>
            <a
              href={siteConfig.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-primary-700 hover:text-primary-800"
            >
              <Navigation className="h-3.5 w-3.5" /> Get Directions
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {year} AS Enterprises. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>Quick Response</span>
            <span>•</span>
            <span>No Obligation</span>
            <span>•</span>
            <span>100% Free Inspection</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} – AS Enterprises`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-primary-700 transition hover:bg-primary-50"
    >
      {children}
    </a>
  );
}
