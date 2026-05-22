import { useState } from 'react';
import { Phone, User, MapPin, CheckCircle2, ChevronDown, Layers } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { buildBookingWhatsAppLink } from '../utils/whatsapp';
import { meshTypes } from '../data/meshTypes';
import { siteConfig } from '../data/siteConfig';
import { buildPhoneLink, buildWhatsAppLink } from '../utils/constants';

const initialState = {
  name: '',
  phone: '',
  meshType: '',
  area: '',
};

export default function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^\+?\d{10,13}$/.test(form.phone.replace(/\s/g, '')))
      next.phone = 'Enter a valid phone number';
    if (!form.meshType) next.meshType = 'Select a mesh type';
    if (!form.area.trim()) next.area = 'Enter your area / locality';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const url = buildBookingWhatsAppLink(form);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="bg-primary-50/40 py-12 sm:py-16">
      <div className="site-container">
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            <div className="bg-primary-700 p-8 text-white sm:p-10 lg:p-12">
              <h2 className="text-3xl font-bold sm:text-4xl">Book a Free Inspection</h2>
              <p className="mt-3 text-base text-primary-100">
                Tell us a few details. We will WhatsApp/call you back within 30 minutes during working hours.
              </p>

              <ul className="mt-7 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-200" />
                  No obligation — free home visit and quote
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-200" />
                  Same-day or next-day installation available
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-200" />
                  5-year warranty on every installation
                </li>
              </ul>

              <div className="mt-8 rounded-xl bg-primary-800/40 p-4 text-sm">
                <p className="font-semibold">Prefer to talk directly?</p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={buildPhoneLink()}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-primary-800"
                  >
                    <Phone className="h-3.5 w-3.5" /> {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="p-6 sm:p-10 lg:p-12" noValidate>
              <div className="space-y-4">
                <Field
                  label="Your Name"
                  icon={<User className="h-[18px] w-[18px]" />}
                  error={errors.name}
                >
                  <input
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </Field>

                <Field
                  label="Phone Number"
                  icon={<Phone className="h-[18px] w-[18px]" />}
                  error={errors.phone}
                >
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="98xxx xxxxx"
                    className="w-full bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </Field>

                <Field
                  label="Mesh Type"
                  icon={<Layers className="h-[18px] w-[18px]" />}
                  error={errors.meshType}
                >
                  <select
                    value={form.meshType}
                    onChange={update('meshType')}
                    className={`w-full cursor-pointer bg-transparent pr-7 text-[15px] ${
                      form.meshType ? 'text-slate-900' : 'text-slate-400'
                    }`}
                    required
                  >
                    <option value="">Select mesh type</option>
                    {meshTypes.map((m) => (
                      <option key={m.id} value={m.title}>
                        {m.title}
                      </option>
                    ))}
                    <option value="Not sure">Not sure — please advise</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 h-4 w-4 text-slate-400"
                    aria-hidden="true"
                  />
                </Field>

                <Field
                  label="Area / Locality"
                  icon={<MapPin className="h-[18px] w-[18px]" />}
                  error={errors.area}
                >
                  <input
                    type="text"
                    value={form.area}
                    onChange={update('area')}
                    placeholder="e.g. Anna Nagar, Velachery"
                    className="w-full bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-600"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Send via WhatsApp
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-500">
                Submitting opens WhatsApp with your details prefilled — just hit send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </span>
      <span
        className={`relative flex h-[56px] items-center gap-3 rounded-[14px] border bg-slate-50/70 px-4 transition-all duration-200 focus-within:bg-white focus-within:ring-4 ${
          error
            ? 'border-red-300 focus-within:border-red-400 focus-within:ring-red-100'
            : 'border-slate-200 focus-within:border-primary-500 focus-within:ring-primary-100'
        }`}
      >
        {icon && (
          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-slate-400">
            {icon}
          </span>
        )}
        {children}
      </span>
      {error && (
        <span className="mt-1.5 block text-xs font-medium text-red-600">{error}</span>
      )}
    </label>
  );
}
