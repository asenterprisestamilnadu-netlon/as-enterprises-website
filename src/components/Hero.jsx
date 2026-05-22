import { Calendar, Ruler, ShieldCheck, Star, MapPin, ShieldHalf } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import useScrollToSection from '../hooks/useScrollToSection';
import { buildWhatsAppLink } from '../utils/constants';
import { siteConfig } from '../data/siteConfig';
import heroImage from '../assets/hero-image.webp';

const features = [
  { Icon: Calendar, title: 'Same Day', subtitle: 'Installation' },
  { Icon: Ruler, title: 'Custom Fit for', subtitle: 'Every Home' },
  { Icon: ShieldCheck, title: '5 Year', subtitle: 'Warranty' },
];

export default function Hero() {
  const scrollTo = useScrollToSection();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-white">
      <div className="site-container grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[5fr_6fr] lg:gap-8 lg:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-3 py-1 text-xs font-semibold text-primary-700 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Same-day installation across Chennai
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            Mosquito-Free Living.
            <span className="block text-primary-700">Every Day.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Premium mosquito mesh installation for windows, doors &amp; balconies.
            Custom-fitted, durable, and clean — fitted by our in-house team across Chennai.
          </p>

          <ul className="mt-6 grid grid-cols-3 gap-3 sm:max-w-2xl">
            {features.map(({ Icon, title, subtitle }) => (
              <li
                key={title}
                className="flex flex-col items-center rounded-xl border border-slate-100 bg-white px-3 py-3 text-center shadow-soft sm:flex-row sm:items-center sm:gap-3 sm:text-left"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-1.5 text-[11px] font-semibold leading-tight text-slate-700 sm:mt-0 sm:text-xs">
                  {title}
                  <br />
                  <span className="text-slate-500">{subtitle}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollTo('booking')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-primary-800"
            >
              Get Free Inspection
            </button>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-700 px-6 py-3.5 text-sm font-semibold text-primary-800 transition hover:bg-primary-50"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Now
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span>
                <strong className="text-slate-900">{siteConfig.homesProtected}+</strong> Happy Homes
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-700" aria-hidden="true" />
              <span>Serving Chennai since {siteConfig.servingSince}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-primary-100/60 shadow-cardHover">
            <img
              src={heroImage}
              alt="Premium sliding mosquito mesh installed on a villa living-room window in Chennai"
              width="1200"
              height="900"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-4 right-4 flex max-w-[230px] items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-cardHover">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <ShieldHalf className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="text-xs leading-tight">
              <p className="text-sm font-bold text-slate-900">100% Protection</p>
              <p className="text-slate-500">Mosquitoes &amp; insects out</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
